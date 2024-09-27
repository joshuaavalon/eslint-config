/** @type {import("@stylistic/eslint-plugin").RuleOptions} */
const rules = {
  "perfectionist/sort-imports": [
    "error",
    {
      type: "alphabetical",
      order: "asc",
      ignoreCase: true,
      internalPattern: ["~/**", "@/**", "#**"],
      newlinesBetween: "ignore",
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
      ]
    }
  ],
  "perfectionist/sort-named-exports": [
    "error",
    {
      type: "alphabetical",
      order: "asc",
      ignoreCase: true,
      groupKind: "mixed"
    }
  ],
  "perfectionist/sort-exports": [
    "error",
    {
      type: "alphabetical",
      order: "asc",
      ignoreCase: true,
      partitionByComment: false,
      partitionByNewLine: false,
      groupKind: "mixed"
    }
  ]
};

export default rules;
