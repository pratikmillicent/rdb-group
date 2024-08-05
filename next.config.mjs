/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        port: "**",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
