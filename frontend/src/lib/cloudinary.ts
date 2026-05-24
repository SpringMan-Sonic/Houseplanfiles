/**
 * Transforms a Cloudinary URL to serve optimized smaller images
 * Adds auto format, quality and width transformations
 */
export function optimizeCloudinaryUrl(url: string, width = 400): string {
  if (!url) return url;
  if (!url.includes("res.cloudinary.com")) return url;
  
  // Insert transformation parameters after /upload/
  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,w_${width},c_limit/`
  );
}
