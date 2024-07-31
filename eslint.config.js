import jsConfig from "./packages/javascript/src/index.js";

export default [
  {
    ...jsConfig,
    ignores: [
      "node_modules",
      "packages/**/dist/**/*.js",
      "packages/**/dist/**/*.mjs",
      "packages/**/dist/**/*.cjs"
    ],
    files: [
      "eslint.config.js",
      "packages/**/*.js",
      "packages/**/*.mjs",
      "packages/**/*.cjs"
    ]
  }
];
