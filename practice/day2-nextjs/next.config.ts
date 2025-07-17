/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com'],
  },
  experimental: {
    typedRoutes: false, // tạm tắt để tránh lỗi checkFields
  },
};

module.exports = nextConfig;
