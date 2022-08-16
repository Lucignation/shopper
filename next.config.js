/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'api.lorem.space',
      'img.freepik.com',
      'placeimg.com',
      'images.pexels.com',
    ],
  },
};

module.exports = nextConfig;
