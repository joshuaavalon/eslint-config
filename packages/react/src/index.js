import reactPlugin from "eslint-plugin-react";
import reactRecommendedRules from "eslint-plugin-react/configs/recommended.js";
import reactJsxRules from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import tsRules from "@joshuaavalon/eslint-config-typescript";
import eslintRules from "./eslint.js";
import stylisticRules from "./stylistic.js";

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  plugins: {
    ...tsRules.plugins,
    react: reactPlugin,
    "react-hooks": reactHooksPlugin
  },
  settings: { react: { version: "detect" } },
  rules: {
    ...tsRules.rules,
    ...reactRecommendedRules.rules,
    ...reactJsxRules.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    ...eslintRules,
    ...stylisticRules
  }
};

export default config;
