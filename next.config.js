/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  staticPageGenerationTimeout: 1000,
  swcMinify: true,
  reactStrictMode: false,
};

module.exports = nextConfig;
