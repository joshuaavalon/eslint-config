/** @type {import("@stylistic/eslint-plugin").RuleOptions} */
const rules = {
  "@stylistic/array-bracket-newline": ["error", { multiline: true }],
  "@stylistic/array-bracket-spacing": ["error", "never"],
  "@stylistic/array-element-newline": [
    "error",
    {
      ArrayExpression: {
        multiline: true,
        minItems: 3
      },
      ArrayPattern: {
        multiline: true,
        minItems: 3
      }
    }
  ],
  "@stylistic/arrow-parens": ["error", "as-needed"],
  "@stylistic/arrow-spacing": [
    "error",
    {
      before: true,
      after: true
    }
  ],
  "@stylistic/block-spacing": ["error", "always"],
  "@stylistic/brace-style": ["error", "1tbs"],
  "@stylistic/comma-dangle": ["error", "never"],
  "@stylistic/comma-spacing": [
    "error",
    {
      before: false,
      after: true
    }
  ],
  "@stylistic/comma-style": ["error", "last"],
  "@stylistic/computed-property-spacing": ["error", "never"],
  "@stylistic/dot-location": ["error", "property"],
  "@stylistic/eol-last": ["error", "always"],
  "@stylistic/function-call-argument-newline": ["error", "consistent"],
  "@stylistic/function-call-spacing": ["error", "never"],
  "@stylistic/function-paren-newline": ["error", "multiline"],
  "@stylistic/generator-star-spacing": [
    "error",
    {
      before: true,
      after: false
    }
  ],
  "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
  "@stylistic/indent": ["error", 2],
  "@stylistic/indent-binary-ops": ["error", 2],
  "@stylistic/key-spacing": ["error", { afterColon: true }],
  "@stylistic/keyword-spacing": [
    "error",
    {
      before: true,
      after: true
    }
  ],
  "@stylistic/linebreak-style": ["error", "unix"],
  "@stylistic/lines-around-comment": [
    "error",
    {
      beforeBlockComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
      allowClassStart: true,
      afterHashbangComment: true
    }
  ],
  "@stylistic/lines-between-class-members": [
    "error",
    {
      enforce: [
        {
          blankLine: "never",
          prev: "field",
          next: "field"
        },
        {
          blankLine: "always",
          prev: "*",
          next: "method"
        },
        {
          blankLine: "always",
          prev: "method",
          next: "*"
        }
      ]
    }
  ],
  "@stylistic/max-len": "off",
  "@stylistic/max-statements-per-line": ["error", { max: 1 }],
  "@stylistic/member-delimiter-style": "error",
  "@stylistic/multiline-ternary": ["error", "always-multiline"],
  "@stylistic/new-parens": ["error", "always"],
  "@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
  "@stylistic/no-extra-parens": [
    "error",
    "all",
    {
      enforceForFunctionPrototypeMethods: false,
      nestedBinaryExpressions: false,
      ignoreJSX: "all"
    }
  ],
  "@stylistic/no-extra-semi": "error",
  "@stylistic/no-floating-decimal": "error",
  "@stylistic/no-mixed-operators": "error",
  "@stylistic/no-mixed-spaces-and-tabs": "error",
  "@stylistic/no-multi-spaces": "error",
  "@stylistic/no-multiple-empty-lines": [
    "error",
    {
      max: 2,
      maxEOF: 1,
      maxBOF: 0
    }
  ],
  "@stylistic/no-tabs": ["error"],
  "@stylistic/no-trailing-spaces": "error",
  "@stylistic/no-whitespace-before-property": "error",
  "@stylistic/nonblock-statement-body-position": ["error", "beside"],
  "@stylistic/object-curly-newline": [
    "error",
    {
      ObjectExpression: { multiline: true },
      ObjectPattern: { multiline: true },
      ImportDeclaration: { multiline: true },
      ExportDeclaration: { multiline: true }
    }
  ],
  "@stylistic/object-curly-spacing": ["error", "always"],
  "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
  "@stylistic/one-var-declaration-per-line": ["error", "always"],
  "@stylistic/operator-linebreak": ["error", "before"],
  "@stylistic/padded-blocks": ["error", "never"],
  "@stylistic/quote-props": ["error", "as-needed"],
  "@stylistic/quotes": ["error", "double"],
  "@stylistic/rest-spread-spacing": ["error", "never"],
  "@stylistic/semi": ["error", "always"],
  "@stylistic/semi-spacing": "error",
  "@stylistic/semi-style": ["error", "last"],
  "@stylistic/space-before-blocks": "error",
  "@stylistic/space-before-function-paren": ["error", { anonymous: "always", named: "never", asyncArrow: "always" }],
  "@stylistic/space-in-parens": ["error", "never"],
  "@stylistic/space-infix-ops": "error",
  "@stylistic/space-unary-ops": "error",
  "@stylistic/spaced-comment": [
    "error",
    "always",
    { markers: ["/"] }
  ],
  "@stylistic/switch-colon-spacing": "error",
  "@stylistic/template-curly-spacing": ["error", "never"],
  "@stylistic/template-tag-spacing": ["error", "never"],
  "@stylistic/wrap-iife": ["error", "inside"],
  "@stylistic/yield-star-spacing": ["error", "after"]
};

export default rules;
