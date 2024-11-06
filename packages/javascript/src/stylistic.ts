import type { UnprefixedRuleOptions } from "@stylistic/eslint-plugin";
import type { PrefixRules } from "./utils.js";

type OmitRules = "@stylistic/func-call-spacing";

export const stylisticRules: Omit<PrefixRules<UnprefixedRuleOptions, "@stylistic/">, `@stylistic/jsx-${string}` | `@stylistic/type-${string}` | OmitRules> = {
  "@stylistic/array-bracket-newline": ["error", "consistent"],
  "@stylistic/array-bracket-spacing": ["error", "never"],
  "@stylistic/array-element-newline": [
    "error",
    {
      ArrayExpression: "consistent",
      ArrayPattern: "consistent"
    }
  ],
  "@stylistic/arrow-parens": ["error", "as-needed"],
  "@stylistic/arrow-spacing": [
    "error",
    {
      after: true,
      before: true
    }
  ],
  "@stylistic/block-spacing": ["error", "always"],
  "@stylistic/brace-style": ["error", "1tbs"],
  "@stylistic/comma-dangle": ["error", "never"],
  "@stylistic/comma-spacing": [
    "error",
    {
      after: true,
      before: false
    }
  ],
  "@stylistic/comma-style": ["error", "last"],
  "@stylistic/computed-property-spacing": ["error", "never"],
  "@stylistic/curly-newline": ["error", { consistent: true, multiline: true }],
  "@stylistic/dot-location": ["error", "property"],
  "@stylistic/eol-last": ["error", "always"],
  "@stylistic/function-call-argument-newline": ["error", "consistent"],
  "@stylistic/function-call-spacing": ["error", "never"],
  "@stylistic/function-paren-newline": ["error", "multiline"],
  "@stylistic/generator-star-spacing": [
    "error",
    {
      after: false,
      before: true
    }
  ],
  "@stylistic/implicit-arrow-linebreak": ["error", "beside"],
  "@stylistic/indent": ["error", 2],
  "@stylistic/indent-binary-ops": ["error", 2],
  "@stylistic/key-spacing": ["error", { afterColon: true }],
  "@stylistic/keyword-spacing": [
    "error",
    {
      after: true,
      before: true
    }
  ],
  "@stylistic/line-comment-position": ["off"],
  "@stylistic/linebreak-style": ["error", "unix"],
  "@stylistic/lines-around-comment": [
    "error",
    {
      afterHashbangComment: true,
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      beforeBlockComment: true
    }
  ],
  "@stylistic/lines-between-class-members": [
    "error",
    {
      enforce: [
        {
          blankLine: "never",
          next: "field",
          prev: "field"
        },
        {
          blankLine: "always",
          next: "method",
          prev: "*"
        },
        {
          blankLine: "always",
          next: "*",
          prev: "method"
        }
      ]
    }
  ],
  "@stylistic/max-len": ["off"],
  "@stylistic/max-statements-per-line": ["error", { max: 1 }],
  "@stylistic/member-delimiter-style": ["error"],

  /**
   * Break comment code block
   */
  "@stylistic/multiline-comment-style": ["off"],
  "@stylistic/multiline-ternary": ["error", "always-multiline"],
  "@stylistic/new-parens": ["error", "always"],
  "@stylistic/newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
  "@stylistic/no-confusing-arrow": ["off"],
  "@stylistic/no-extra-parens": [
    "error",
    "all",
    {
      enforceForFunctionPrototypeMethods: false,
      ignoreJSX: "all",
      nestedBinaryExpressions: false
    }
  ],
  "@stylistic/no-extra-semi": ["error"],
  "@stylistic/no-floating-decimal": ["error"],
  "@stylistic/no-mixed-operators": ["error"],
  "@stylistic/no-mixed-spaces-and-tabs": ["error"],
  "@stylistic/no-multi-spaces": ["error"],
  "@stylistic/no-multiple-empty-lines": [
    "error",
    {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }
  ],
  "@stylistic/no-tabs": ["error"],
  "@stylistic/no-trailing-spaces": ["error"],
  "@stylistic/no-whitespace-before-property": ["error"],
  "@stylistic/nonblock-statement-body-position": ["error", "beside"],
  "@stylistic/object-curly-newline": [
    "error",
    {
      ExportDeclaration: { multiline: true },
      ImportDeclaration: { multiline: true },
      ObjectExpression: { multiline: true },
      ObjectPattern: { multiline: true }
    }
  ],
  "@stylistic/object-curly-spacing": ["error", "always"],
  "@stylistic/object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
  "@stylistic/one-var-declaration-per-line": ["error", "always"],
  "@stylistic/operator-linebreak": ["error", "before"],
  "@stylistic/padded-blocks": ["error", "never"],
  "@stylistic/padding-line-between-statements": ["off"],
  "@stylistic/quote-props": ["error", "as-needed"],
  "@stylistic/quotes": ["error", "double"],
  "@stylistic/rest-spread-spacing": ["error", "never"],
  "@stylistic/semi": ["error", "always"],
  "@stylistic/semi-spacing": ["error"],
  "@stylistic/semi-style": ["error", "last"],
  "@stylistic/space-before-blocks": ["error"],
  "@stylistic/space-before-function-paren": ["error", { anonymous: "always", asyncArrow: "always", named: "never" }],
  "@stylistic/space-in-parens": ["error", "never"],
  "@stylistic/space-infix-ops": ["error"],
  "@stylistic/space-unary-ops": ["error"],
  "@stylistic/spaced-comment": [
    "error",
    "always",
    { markers: ["/"] }
  ],
  "@stylistic/switch-colon-spacing": ["error"],
  "@stylistic/template-curly-spacing": ["error", "never"],
  "@stylistic/template-tag-spacing": ["error", "never"],
  "@stylistic/wrap-iife": ["error", "inside"],
  "@stylistic/wrap-regex": ["off"],
  "@stylistic/yield-star-spacing": ["error", "after"]
};
