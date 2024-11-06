import type { PrefixRuleModules } from "@joshuaavalon/eslint-config-javascript/utils";
import type { rules } from "eslint-plugin-perfectionist";

type PickRules =
  | "@perfectionist/sort-jsx-props";

export const perfectionistRules: Pick<PrefixRuleModules<typeof rules, "@perfectionist/">, PickRules> = {
  "@perfectionist/sort-jsx-props": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      type: "alphabetical"
    }
  ]
};
