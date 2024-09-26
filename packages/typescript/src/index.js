import jsConfig from "@joshuaavalon/eslint-config-javascript";
import typescript from "typescript-eslint";
import eslintRules from "./eslint.js";
import perfectionistRules from "./perfectionist.js";
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
    ...stylisticRules,
    ...perfectionistRules
  }
};

export default config;
