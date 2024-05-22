/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "arweave.net",
      "raw.githubusercontent.com",
      "mentorland-s3.s3.amazonaws.com",
      "images.unsplash.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;
