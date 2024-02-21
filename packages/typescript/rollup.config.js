export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/cjs/index.js",
      format: "cjs"
    },
    {
      file: "dist/esm/index.js",
      format: "esm"
    }
  ],
  external: [
    "typescript-eslint",
    "@joshuaavalon/eslint-config-javascript",
    "@joshuaavalon/eslint-config-javascript/stylistic"
  ]
};
