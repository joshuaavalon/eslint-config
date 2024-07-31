import typescript from "typescript-eslint";
import jsConfig from "@joshuaavalon/eslint-config-javascript";
import eslintRules from "./eslint.js";
import stylisticRules from "./stylistic.js";

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: {
    ...jsConfig.plugins,
    "@typescript-eslint": typescript.plugin
  },
  rules: {
    ...jsConfig.rules,
    ...eslintRules,
    ...stylisticRules
  }
};

export default config;
