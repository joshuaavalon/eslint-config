import type { RulesConfig } from "@eslint/core";

export const perfectionistRules: RulesConfig = {
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
      groups: [
        "conditional",
        "function",
        "import",
        "intersection",
        "named",
        "keyword",
        "literal",
        "object",
        "operator",
        "tuple",
        "union",
        "nullish"
      ],
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ]
};
