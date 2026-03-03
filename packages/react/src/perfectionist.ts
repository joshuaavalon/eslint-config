import type { RulesConfig } from "@eslint/core";

export const perfectionistRules: RulesConfig = {
  "@perfectionist/sort-jsx-props": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      type: "alphabetical"
    }
  ]
};
