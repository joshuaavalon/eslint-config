/** @type {import("@stylistic/eslint-plugin").RuleOptions} */
const rules = {
  "@stylistic/jsx-closing-bracket-location": ["error"],
  "@stylistic/jsx-closing-tag-location": ["error"],
  "@stylistic/jsx-curly-brace-presence": ["error", { props: "never", children: "never", propElementValues: "always" }],
  "@stylistic/jsx-curly-newline": ["error", "never"],
  "@stylistic/jsx-curly-spacing": ["error", { when: "never", children: true, attributes: true }],
  "@stylistic/jsx-equals-spacing": ["error", "never"],
  "@stylistic/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
  "@stylistic/jsx-indent": ["error", 2],
  "@stylistic/jsx-indent-props": ["error", 2],
  "@stylistic/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
  "@stylistic/jsx-newline": ["error", { prevent: true, allowMultilines: false }],
  "@stylistic/jsx-one-expression-per-line": ["error", { allow: "single-child" }],
  "@stylistic/jsx-props-no-multi-spaces": ["error"],
  "@stylistic/jsx-quotes": ["error", "prefer-double"],
  "@stylistic/jsx-self-closing-comp": ["error", { component: true, html: true }],
  "@stylistic/jsx-tag-spacing": [
    "error",
    {
      closingSlash: "never",
      beforeSelfClosing: "always",
      afterOpening: "never",
      beforeClosing: "never"
    }
  ],
  "@stylistic/jsx-wrap-multilines": [
    "error",
    {
      declaration: "parens-new-line",
      assignment: "parens-new-line",
      return: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line"
    }
  ]
};

export default rules;
