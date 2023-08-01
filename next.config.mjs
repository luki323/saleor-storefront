/** @type {import('next').NextConfig} */
const config = {
  distDir: 'dist',
  reactStrictMode: true,
  webpack(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@formatjs/icu-messageformat-parser':
            '@formatjs/icu-messageformat-parser/no-parser',
        },
      },
    };
  },
};

export default config;
