import tsRules from "@joshuaavalon/eslint-config-typescript";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactJsxRules from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommendedRules from "eslint-plugin-react/configs/recommended.js";
import eslintRules from "./eslint.js";
import stylisticRules from "./stylistic.js";

/** @type {import("eslint").Linter.Config} */
const config = {
  ignores: ["node_modules"],
  files: ["**/*.jsx", "**/*.tsx"],
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
