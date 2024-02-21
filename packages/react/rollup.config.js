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
    "eslint-plugin-react",
    "eslint-plugin-react/configs/recommended.js",
    "eslint-plugin-react/configs/jsx-runtime.js",
    "eslint-plugin-react-hooks",
    "@joshuaavalon/eslint-config-javascript",
    "@joshuaavalon/eslint-config-javascript/stylistic",
    "@joshuaavalon/eslint-config-typescript"
  ]
};
