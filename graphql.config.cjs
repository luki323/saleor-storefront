require('dotenv').config({path: './.env.local'});

/** @type {import('graphql-config').IGraphQLConfig} */
const config = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: 'src/**/*.graphql',
};

module.exports = config;
