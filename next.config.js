/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mik-development.s3.eu-central-1.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
