const multer = require("multer");
const sharp = require("sharp");
const s3Storage = require("../config/s3Config");
const { Upload } = require("@aws-sdk/lib-storage");
const { S3Client } = require("@aws-sdk/client-s3");
const path = require("path");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Memory storage — we process the image before sending to S3
const memoryStorage = multer.memoryStorage();

const uploadToMemory = multer({
  storage: memoryStorage,
  limits: { fileSize: 1024 * 1024 * 20 }, // 20MB limit for raw uploads
});

/**
 * Compresses and converts image to WebP, then uploads to S3.
 * Falls back to direct S3 upload for non-image files.
 */
const processAndUpload = async (file) => {
  const isImage = file.mimetype.startsWith("image/");
  const ext = isImage ? ".webp" : path.extname(file.originalname);
  const key = Date.now() + "_" + file.fieldname + ext;

  let buffer = file.buffer;
  let contentType = file.mimetype;

  if (isImage) {
    // Compress + convert to WebP + resize if too large
    buffer = await sharp(file.buffer)
      .resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();
    contentType = "image/webp";
  }

  const upload = new Upload({
    client: s3,
    params: {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      CacheControl: "max-age=31536000, public",
    },
  });

  const result = await upload.done();
  return {
    location: result.Location || `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    key,
    mimetype: contentType,
    size: buffer.length,
  };
};

/**
 * Middleware that processes all uploaded files through sharp before S3.
 * Drop-in replacement for the old multer-s3 upload middleware.
 */
const upload = {
  single: (fieldName) => async (req, res, next) => {
    uploadToMemory.single(fieldName)(req, res, async (err) => {
      if (err) return next(err);
      if (!req.file) return next();
      try {
        const result = await processAndUpload(req.file);
        req.file.location = result.location;
        req.file.key = result.key;
        req.file.mimetype = result.mimetype;
        req.file.size = result.size;
        next();
      } catch (e) {
        next(e);
      }
    });
  },

  array: (fieldName, maxCount) => async (req, res, next) => {
    uploadToMemory.array(fieldName, maxCount)(req, res, async (err) => {
      if (err) return next(err);
      if (!req.files || req.files.length === 0) return next();
      try {
        const results = await Promise.all(req.files.map(processAndUpload));
        req.files = req.files.map((f, i) => ({
          ...f,
          location: results[i].location,
          key: results[i].key,
          mimetype: results[i].mimetype,
          size: results[i].size,
        }));
        next();
      } catch (e) {
        next(e);
      }
    });
  },

  fields: (fields) => async (req, res, next) => {
    uploadToMemory.fields(fields)(req, res, async (err) => {
      if (err) return next(err);
      if (!req.files) return next();
      try {
        for (const fieldName of Object.keys(req.files)) {
          const results = await Promise.all(req.files[fieldName].map(processAndUpload));
          req.files[fieldName] = req.files[fieldName].map((f, i) => ({
            ...f,
            location: results[i].location,
            key: results[i].key,
            mimetype: results[i].mimetype,
            size: results[i].size,
          }));
        }
        next();
      } catch (e) {
        next(e);
      }
    });
  },
};

module.exports = upload;
