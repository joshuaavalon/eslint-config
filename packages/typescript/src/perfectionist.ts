import type { Prefix } from "@joshuaavalon/eslint-config-javascript/utils";
import type { Linter } from "eslint";
import type { rules } from "eslint-plugin-perfectionist";

type PickRules =
  | "@perfectionist/sort-imports"
  | "@perfectionist/sort-interfaces"
  | "@perfectionist/sort-intersection-types"
  | "@perfectionist/sort-object-types"
  | "@perfectionist/sort-union-types";

  type Rules = Record<Prefix<keyof typeof rules, "@perfectionist/">, Linter.RuleSeverityAndOptions>;

export const perfectionistRules: Pick<Rules, PickRules> = {
  "@perfectionist/sort-imports": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "side-effect",
        "index",
        "side-effect-style",
        "builtin-type",
        "external-type",
        "internal-type",
        "parent-type",
        "sibling-type",
        "index-type",
        "object",
        "unknown"
      ],
      ignoreCase: true,
      internalPattern: ["^~/.+", "^@/.+", "^#.+", "^#.*/.*"],
      newlinesBetween: "ignore",
      order: "asc",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-interfaces": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-intersection-types": [
    "error",
    {
      groups: [],
      ignoreCase: true,
      order: "asc",
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-object-types": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-union-types": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ]
};
