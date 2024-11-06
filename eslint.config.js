import jsConfig from "@joshuaavalon/eslint-config-javascript";
import tsConfig from "@joshuaavalon/eslint-config-typescript";
import typescript from "typescript-eslint";

export default [
  {
    ...jsConfig,
    files: [
      "eslint.config.js",
      "packages/**/*.js",
      "packages/**/*.mjs",
      "packages/**/*.cjs"
    ],
    ignores: [
      "node_modules",
      "packages/**/dist/**/*.js",
      "packages/**/dist/**/*.mjs",
      "packages/**/dist/**/*.cjs"
    ]
  },
  {
    ...tsConfig,
    files: [
      "packages/**/*.ts",
      "packages/**/*.mts",
      "packages/**/*.cts"
    ],
    ignores: [
      "node_modules",
      "packages/**/dist/**/*.ts",
      "packages/**/dist/**/*.mts",
      "packages/**/dist/**/*.cts"
    ],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        projectService: true,
        tsconfigDirName: import.meta.dirname
      }
    }
  }
];
