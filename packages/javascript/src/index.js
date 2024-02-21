import stylisticPlugin from "@stylistic/eslint-plugin";
import eslintRules from "./eslint.js";
import stylisticRules from "./stylistic.js";

/** @type {import("eslint").Linter.FlatConfig} */
const config = {
  plugins: { "@stylistic": stylisticPlugin },
  rules: {
    ...eslintRules,
    ...stylisticRules
  }
};

export default config;
