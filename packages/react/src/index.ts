import jsConfig from "@joshuaavalon/eslint-config-javascript";
import tsConfig from "@joshuaavalon/eslint-config-typescript";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import { perfectionistRules } from "./perfectionist.js";
import { stylisticRules } from "./stylistic.js";

import type { ESLint, Linter } from "eslint";

const config: Linter.Config = {
  plugins: {
    ...jsConfig.plugins,
    ...tsConfig.plugins,
    react: reactPlugin as ESLint.Plugin,
    "react-hooks": reactHooksPlugin as ESLint.Plugin
  },
  rules: {
    ...jsConfig.rules,
    ...tsConfig.rules,
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactPlugin.configs.flat["jsx-runtime"].rules,
    ...reactHooksPlugin.configs.recommended.rules,
    ...stylisticRules,
    ...perfectionistRules
  }
};

export default config;
