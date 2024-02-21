import typescript from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactRecommendedRules from "eslint-plugin-react/configs/recommended.js";
import reactJsxRules from "eslint-plugin-react/configs/jsx-runtime.js";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsRules from "@joshuaavalon/eslint-config-javascript";
import formatRules from "@joshuaavalon/eslint-config-javascript/stylistic";
import tsRules from "@joshuaavalon/eslint-config-typescript";
import eslintRules from "./eslint.js";
import stylisticRules from "./stylistic.js";

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  plugins: {
    "@typescript-eslint": typescript.plugin,
    react: reactPlugin,
    "react-hooks": reactHooksPlugin
  },
  settings: { react: { version: "detect" } },
  rules: {
    ...jsRules,
    ...tsRules,
    ...eslintRules,
    ...reactRecommendedRules.rules,
    ...reactJsxRules.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    ...formatRules,
    ...stylisticRules
  }
};

export default config;
