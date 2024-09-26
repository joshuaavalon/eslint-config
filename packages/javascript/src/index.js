import stylisticPlugin from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import eslintRules from "./eslint.js";
import perfectionistRules from "./perfectionist.js";
import stylisticRules from "./stylistic.js";

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: { "@stylistic": stylisticPlugin, perfectionist },
  rules: {
    ...eslintRules,
    ...stylisticRules,
    ...perfectionistRules
  }
};

export default config;
