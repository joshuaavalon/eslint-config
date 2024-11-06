import jsConfig from "@joshuaavalon/eslint-config-javascript";
import typescriptEslint from "typescript-eslint";
import { typescriptEslintRules } from "./eslint.js";
import { perfectionistRules } from "./perfectionist.js";
import { stylisticRules } from "./stylistic.js";

import type { ESLint, Linter } from "eslint";

const config: Linter.Config = {
  plugins: {
    ...jsConfig.plugins,
    "@typescript-eslint": typescriptEslint.plugin as ESLint.Plugin
  },
  rules: {
    ...jsConfig.rules,
    ...typescriptEslintRules,
    ...stylisticRules,
    ...perfectionistRules
  }
};

export default config;
