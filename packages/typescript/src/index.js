import typescript from "typescript-eslint";
import jsRules from "@joshuaavalon/eslint-config-javascript";
import eslintRules from "./eslint.js";
import stylisticRules from "./stylistic.js";

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  plugins: {
    ...jsRules.plugins,
    "@typescript-eslint": typescript.plugin
  },
  rules: {
    ...jsRules.rules,
    ...eslintRules,
    ...stylisticRules
  }
};

export default config;
