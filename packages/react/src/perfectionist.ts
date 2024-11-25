import type { Prefix } from "@joshuaavalon/eslint-config-javascript/utils";
import type { Linter } from "eslint";
import type { rules } from "eslint-plugin-perfectionist";

type PickRules =
  | "@perfectionist/sort-jsx-props";

  type Rules = Record<Prefix<keyof typeof rules, "@perfectionist/">, Linter.RuleSeverityAndOptions>;

export const perfectionistRules: Pick<Rules, PickRules> = {
  "@perfectionist/sort-jsx-props": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      type: "alphabetical"
    }
  ]
};
