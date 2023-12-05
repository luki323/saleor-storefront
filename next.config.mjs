const graphQLEndpoint = new URL(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT);

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
        hostname: graphQLEndpoint.hostname,
        protocol: graphQLEndpoint.protocol.slice(0, -1), // Remove trailing colon
      },
    ],
  },
  // Temporary change
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;
