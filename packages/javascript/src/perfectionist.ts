import type { Linter } from "eslint";
import type { rules } from "eslint-plugin-perfectionist";
import type { Prefix } from "./utils.js";

type OmitRules =
  | "@perfectionist/sort-interfaces"
  | "@perfectionist/sort-intersection-types"
  | "@perfectionist/sort-jsx-props"
  | "@perfectionist/sort-modules" // Break define first
  | "@perfectionist/sort-object-types"
  | "@perfectionist/sort-union-types";

type Rules = Record<Prefix<keyof typeof rules, "@perfectionist/">, Linter.RuleSeverityAndOptions>;

export const perfectionistRules: Omit<Rules, OmitRules> = {
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
  "@perfectionist/sort-decorators": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      sortOnAccessors: true,
      sortOnClasses: true,
      sortOnMethods: true,
      sortOnParameters: true,
      sortOnProperties: true,
      specialCharacters: "keep",
      type: "alphabetical"
    }
  ],
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
  "@perfectionist/sort-heritage-clauses": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      specialCharacters: "keep",
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
      internalPattern: ["^~/.+", "^@/.+", "^#.+", "^#.*/.*"],
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
