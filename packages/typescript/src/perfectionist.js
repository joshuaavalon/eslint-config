/** @type {import("@stylistic/eslint-plugin").RuleOptions} */
const rules = {
  "perfectionist/sort-imports": [
    "error",
    {
      type: "alphabetical",
      order: "asc",
      ignoreCase: true,
      internalPattern: ["~/**", "#/**"],
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
        "builtin-type",
        "external-type",
        "internal-type",
        "parent-type",
        "sibling-type",
        "index-type",
        "object",
        "unknown"
      ]
    }
  ]
};

export default rules;
