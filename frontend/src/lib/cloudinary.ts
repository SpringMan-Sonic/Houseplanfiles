/**
 * Transforms a Cloudinary URL to serve optimized smaller images.
 * Adds auto format, quality and width transformations.
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

/**
 * FIX: Returns a Next.js /_next/image optimized URL for any image source.
 *
 * This routes both S3 and Cloudinary images through Next.js image optimization,
 * which handles WebP/AVIF conversion, resizing, and caching automatically.
 *
 * Requirements: the image hostname must be in next.config.js remotePatterns.
 *
 * Usage:
 *   <img src={getOptimizedImageUrl(product.mainImage, 400)} ... />
 *
 * Or better yet, use Next.js <Image> component which calls this automatically:
 *   <Image src={product.mainImage} width={400} height={300} alt="..." />
 */
export function getOptimizedImageUrl(url: string, width = 400): string {
  if (!url) return url;

  // Already a Cloudinary URL — use Cloudinary's own transforms (free tier friendly)
  if (url.includes("res.cloudinary.com")) {
    return optimizeCloudinaryUrl(url, width);
  }

  // For S3 URLs and other remote images, route through Next.js image optimizer
  // This converts to WebP/AVIF and resizes server-side
  if (url.startsWith("http")) {
    return `/_next/image?url=${encodeURIComponent(url)}&w=${width}&q=75`;
  }

  return url;
}
