/** @type {import('next').NextConfig} */
const config = {
  distDir: 'dist',
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  webpack(config) {
    config.resolve.alias['@formatjs/icu-messageformat-parser'] =
      '@formatjs/icu-messageformat-parser/no-parser';

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asdfasdf.eu.saleor.cloud',
      },
    ],
  },
};

export default config;
