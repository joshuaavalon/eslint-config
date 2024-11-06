import type { rules } from "eslint-plugin-perfectionist";
import type { PrefixRuleModules } from "./utils.js";

type OmitRules =
  | "@perfectionist/sort-astro-attributes"
  | "@perfectionist/sort-interfaces"
  | "@perfectionist/sort-intersection-types"
  | "@perfectionist/sort-jsx-props"
  | "@perfectionist/sort-object-types"
  | "@perfectionist/sort-svelte-attributes"
  | "@perfectionist/sort-union-types"
  | "@perfectionist/sort-vue-attributes";

export const perfectionistRules: Omit<PrefixRuleModules<typeof rules, "@perfectionist/">, OmitRules> = {
  "@perfectionist/sort-array-includes": [
    "error",
    {
      groupKind: "mixed",
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-classes": ["off"],
  "@perfectionist/sort-enums": [
    "error",
    {
      forceNumericSort: true,
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      sortByValue: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-exports": [
    "error",
    {
      groupKind: "mixed",
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
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
        "object",
        "unknown"
      ],
      ignoreCase: true,
      internalPattern: ["~/**", "@/**", "#**", "#**/**"],
      newlinesBetween: "ignore",
      order: "asc",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-maps": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-named-exports": [
    "error",
    {
      groupKind: "mixed",
      ignoreCase: true,
      order: "asc",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-named-imports": [
    "error",
    {
      groupKind: "mixed",
      ignoreAlias: true,
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-objects": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-sets": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-switch-case": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-variable-declarations": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ]
};
