import typescript from "typescript-eslint";
import jsRules from "@joshuaavalon/eslint-config-javascript";
import formatRules from "@joshuaavalon/eslint-config-javascript/stylistic";
import eslintRules from "./eslint.js";

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  plugins: { "@typescript-eslint": typescript.plugin },
  rules: {
    ...jsRules,
    ...eslintRules,
    ...formatRules
  }
};

export default config;
