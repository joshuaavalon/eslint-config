/** @type {import("eslint").Linter.RulesRecord} */
const extensionRules = {
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",
  "dot-notation": "off",
  "@typescript-eslint/dot-notation": "error",
  "no-array-constructor": "off",
  "@typescript-eslint/no-array-constructor": "error",
  "no-dupe-class-members": "off",
  "@typescript-eslint/no-dupe-class-members": "error",
  "no-implied-eval": "off",
  "@typescript-eslint/no-implied-eval": "error",
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",
  "no-redeclare": "off",
  "@typescript-eslint/no-redeclare": "error",
  "no-throw-literal": "off",
  "@typescript-eslint/only-throw-error": "error",
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": ["error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      ignoreRestSiblings: true
    }],
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": "error",
  "no-useless-constructor": "off",
  "@typescript-eslint/no-useless-constructor": "error",
  "require-await": "off",
  "@typescript-eslint/require-await": "off",
  "no-return-await": "off",
  "@typescript-eslint/return-await": ["error", "always"]
};

/** @type {import("eslint").Linter.RulesRecord} */
const rules = {
  "no-undef": "off",
  "@typescript-eslint/adjacent-overload-signatures": "error",
  "@typescript-eslint/array-type": "error",
  "@typescript-eslint/await-thenable": "error",
  "@typescript-eslint/no-empty-object-type": ["error",
    {
      allowInterfaces: "always",
      allowObjectTypes: "always"
    }],
  "@typescript-eslint/no-unsafe-function-type": "error",
  "@typescript-eslint/no-wrapper-object-types": "error",
  "@typescript-eslint/consistent-generic-constructors": "error",
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: true
    }
  ],
  "@typescript-eslint/explicit-member-accessibility": "error",
  "@typescript-eslint/explicit-module-boundary-types": "error",
  "@typescript-eslint/naming-convention": [
    "error",
    {
      format: ["camelCase"],
      leadingUnderscore: "allow",
      selector: "default"
    },
    {
      format: [
        "camelCase",
        "UPPER_CASE",
        "PascalCase"
      ],
      leadingUnderscore: "allow",
      selector: "variable"
    },
    {
      selector: "typeLike",
      format: ["PascalCase"]
    },
    {
      selector: "import",
      format: ["camelCase", "PascalCase"]
    },
    {
      selector: "function",
      format: ["camelCase", "PascalCase"]
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
  camelcase: "off",
  "@typescript-eslint/no-base-to-string": "error",
  "@typescript-eslint/no-confusing-non-null-assertion": "error",
  "@typescript-eslint/no-confusing-void-expression": "error",
  "@typescript-eslint/no-duplicate-enum-values": "error",
  "@typescript-eslint/no-duplicate-type-constituents": "error",
  "@typescript-eslint/no-dynamic-delete": "error",
  "@typescript-eslint/no-extra-non-null-assertion": "error",
  "@typescript-eslint/no-extraneous-class": "error",
  // "@typescript-eslint/no-floating-promises": "error",
  "@typescript-eslint/no-for-in-array": "error",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "@typescript-eslint/no-inferrable-types": "error",
  "@typescript-eslint/no-invalid-void-type": "error",
  "@typescript-eslint/no-meaningless-void-operator": "error",
  "@typescript-eslint/no-misused-new": "error",
  "@typescript-eslint/no-misused-promises": "error",
  "@typescript-eslint/no-mixed-enums": "error",
  "@typescript-eslint/no-namespace": "error",
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
  "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
  "@typescript-eslint/no-non-null-assertion": "error",
  "@typescript-eslint/no-redundant-type-constituents": "error",
  "@typescript-eslint/no-require-imports": "error",
  "@typescript-eslint/no-this-alias": "error",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
  "@typescript-eslint/no-unnecessary-qualifier": "error",
  "@typescript-eslint/no-unnecessary-type-arguments": "error",
  "@typescript-eslint/no-unnecessary-type-assertion": "error",
  "@typescript-eslint/no-unnecessary-type-constraint": "error",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-declaration-merging": "off",
  "@typescript-eslint/no-unsafe-enum-comparison": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/no-useless-empty-export": "error",
  "@typescript-eslint/non-nullable-type-assertion-style": "error",
  "@typescript-eslint/parameter-properties": "error",
  "@typescript-eslint/prefer-as-const": "error",
  "@typescript-eslint/prefer-enum-initializers": "error",
  "@typescript-eslint/prefer-for-of": "error",
  "@typescript-eslint/prefer-includes": "error",
  "@typescript-eslint/prefer-literal-enum-member": "error",
  "@typescript-eslint/prefer-namespace-keyword": "error",
  "@typescript-eslint/prefer-nullish-coalescing": "error",
  "@typescript-eslint/prefer-optional-chain": "error",
  "@typescript-eslint/prefer-readonly": "error",
  "@typescript-eslint/prefer-reduce-type-parameter": "error",
  "@typescript-eslint/prefer-regexp-exec": "error",
  "@typescript-eslint/prefer-return-this-type": "error",
  "@typescript-eslint/prefer-string-starts-ends-with": "error",
  "@typescript-eslint/promise-function-async": "off",
  "@typescript-eslint/restrict-plus-operands": "error",
  "@typescript-eslint/switch-exhaustiveness-check": "error",
  "@typescript-eslint/unbound-method": "error",
  ...extensionRules,
  "no-duplicate-imports": ["off"]
};

export default rules;
