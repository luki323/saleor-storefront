// import type {CodegenConfig} from '@graphql-codegen/cli';
// const codegenConfig: CodegenConfig = {
//   schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
//   documents: 'src/**/*.graphql',
//   config: {
//     skipTypename: true,
//     immutableTypes: true,
//     useTypeImports: true,
//   },
//   generates: {
//     'src/graphql/generated/types.ts': {
//       plugins: ['typescript'],
//       config: {
//         defaultScalarType: 'unknown',
//         scalars: {
//           JSONString: 'string',
//         },
//       },
//     },
//     'src/graphql/generated/documents.ts': {
//       preset: 'import-types',
//       presetConfig: {typesPath: './types'},
//       plugins: [
//         'typescript-operations',
//         'typed-document-node',
//         {add: {content: '// @ts-nocheck'}},
//       ],
//       config: {
//         omitOperationSuffix: true,
//         documentMode: 'string',
//       },
//     },
//   },
// };

// export default codegenConfig;

import type {CodegenConfig} from '@graphql-codegen/cli';

const codegenConfig: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: 'src/**/*.{ts,tsx}',
  config: {
    immutableTypes: true,
  },
  generates: {
    'src/graphql/generated/': {
      preset: 'client-preset',
      presetConfig: {
        fragmentMasking: {unmaskFunctionName: 'getFragment'},
      },
      config: {
        useTypeImports: true,
        skipTypename: true,
        defaultScalarType: 'unknown',
        scalars: {
          JSONString: 'string',
        },
      },
    },
  },
  hooks: {
    afterOneFileWrite: ['prettier --w'],
  },
};

export default codegenConfig;
