import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
     unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pos-nest-backend.onrender.com', 
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ]
  }
};

export default nextConfig;
