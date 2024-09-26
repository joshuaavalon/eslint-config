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
        "object",
        "unknown"
      ]
    }
  ]
};

export default rules;
