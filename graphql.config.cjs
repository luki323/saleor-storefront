const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

dotenvExpand.expand(dotenv.config({path: './.env.local'}));

/** @type {import('graphql-config').IGraphQLConfig} */
const config = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: 'src/**/*.{ts,tsx}',
};

module.exports = config;
