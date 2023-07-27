/** @type {import('lint-staged').Config} */
const config = {
  '*.{cjs,mjs,ts,tsx}': nextLint,
  '*': 'pnpm run prettier',
};

export default config;

/** @type {import('lint-staged').ConfigFn} */
function nextLint(filenames) {
  return `next lint --fix ${filenames
    .map((filename) => `--file ${filename}`)
    .join(' ')}`;
}
