/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
