import stylisticPlugin from "@stylistic/eslint-plugin";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import { eslintRules } from "./eslint.js";
import { perfectionistRules } from "./perfectionist.js";
import { stylisticRules } from "./stylistic.js";

import type { ESLint, Linter } from "eslint";

const config: Linter.Config = {
  plugins: {
    "@perfectionist": perfectionistPlugin as unknown as ESLint.Plugin,
    "@stylistic": stylisticPlugin as ESLint.Plugin
  },
  rules: {
    ...eslintRules,
    ...stylisticRules,
    ...perfectionistRules
  }
};

export default config;
