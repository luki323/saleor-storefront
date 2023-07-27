import type {CodegenConfig} from '@graphql-codegen/cli';

const codegenConfig: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  documents: 'src/**/*.graphql',
  config: {
    useTypeImports: true,
  },
  generates: {
    'src/graphql/generated/types.ts': {
      plugins: ['typescript'],
      config: {
        enumsAsTypes: true,
        defaultScalarType: 'unknown',
      },
    },
    'src/graphql/generated/documents.ts': {
      preset: 'import-types',
      presetConfig: {typesPath: './types'},
      plugins: [
        'typescript-operations',
        'typed-document-node',
        {add: {content: '// @ts-nocheck'}},
      ],
      config: {
        omitOperationSuffix: true,
        documentMode: 'string',
      },
    },
  },
};

export default codegenConfig;
