const graphqlEndpoint = new URL(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

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
        protocol: graphqlEndpoint.protocol.slice(0, -1), // Remove trailing ':'
        hostname: graphqlEndpoint.hostname,
      },
    ],
  },
};

export default config;
