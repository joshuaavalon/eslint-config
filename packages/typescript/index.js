module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        format: ["camelCase"],
        leadingUnderscore: "allow",
        selector: "default"
      },
      {
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
        selector: "variable"
      },
      {
        format: ["PascalCase"],
        selector: "typeLike"
      },
      {
        format: null,
        modifiers: ["destructured"],
        selector: "variable"
      },
      {
        format: null,
        selector: "objectLiteralProperty"
      }
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-expressions": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true
      }
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        typedefs: false
      }
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true
      }
    ],
    "array-callback-return": "error",
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "block-scoped-var": "error",
    "comma-dangle": ["error", "never"],
    complexity: "error",
    "consistent-return": "error",
    curly: "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-location": ["error", "property"],
    "eol-last": ["error", "always"],
    eqeqeq: "error",
    "guard-for-in": "error",
    "linebreak-style": ["error", "unix"],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true
      }
    ],
    "no-alert": "error",
    "no-caller": "error",
    "no-console": "off",
    "no-constructor-return": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-promise-executor-return": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable-loop": "error",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-backreference": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "prefer-arrow-callback": "error",
    "prefer-named-capture-group": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prettier/prettier": [
      "error",
      {
        arrowParens: "avoid",
        trailingComma: "none"
      }
    ],
    quotes: "off",
    "require-unicode-regexp": "error",
    "semi-style": ["error", "last"],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    "vars-on-top": "error",
    "wrap-iife": "error",
    yoda: "error"
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["*.ts"],
      rules: {
        "no-dupe-class-members": "off"
      }
    }
  ]
};
