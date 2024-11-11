import type { Linter } from "eslint";

export const typescriptEslintRules: Record<string, Linter.RuleSeverityAndOptions> = {
  "@typescript-eslint/adjacent-overload-signatures": ["error"],
  "@typescript-eslint/array-type": ["error", { default: "array" }],
  "@typescript-eslint/await-thenable": ["error"],
  "@typescript-eslint/ban-ts-comment": [
    "error",
    {
      minimumDescriptionLength: 3,
      "ts-check": "allow-with-description",
      "ts-expect-error": "allow-with-description",
      "ts-ignore": "allow-with-description",
      "ts-nocheck": "allow-with-description"
    }
  ],
  "@typescript-eslint/ban-tslint-comment": ["error"],
  "@typescript-eslint/class-literal-property-style": ["off"],
  "@typescript-eslint/class-methods-use-this": ["off"],
  "@typescript-eslint/consistent-generic-constructors": ["error"],
  "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
  "@typescript-eslint/consistent-return": ["off"],
  "@typescript-eslint/consistent-type-assertions": ["off"],
  "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
  "@typescript-eslint/consistent-type-exports": ["error"],
  "@typescript-eslint/consistent-type-imports": ["error"],
  "@typescript-eslint/default-param-last": ["error"],
  "@typescript-eslint/dot-notation": ["error"],
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    {
      allowDirectConstAssertionInArrowFunctions: true,
      allowExpressions: true,
      allowHigherOrderFunctions: true,
      allowTypedFunctionExpressions: true
    }
  ],
  "@typescript-eslint/explicit-member-accessibility": ["error"],
  "@typescript-eslint/explicit-module-boundary-types": ["error"],
  "@typescript-eslint/init-declarations": ["off"],
  "@typescript-eslint/max-params": ["error", { max: 3 }],
  "@typescript-eslint/member-ordering": ["off"],
  "@typescript-eslint/method-signature-style": ["off"],
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
      format: ["PascalCase"],
      selector: "typeLike"
    },
    {
      format: ["camelCase", "PascalCase"],
      selector: "import"
    },
    {
      format: ["camelCase", "PascalCase"],
      selector: "function"
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
  "@typescript-eslint/no-array-constructor": ["error"],
  "@typescript-eslint/no-array-delete": ["error"],
  "@typescript-eslint/no-base-to-string": ["error"],
  "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
  "@typescript-eslint/no-confusing-void-expression": ["error"],
  "@typescript-eslint/no-deprecated": ["error"],
  "@typescript-eslint/no-dupe-class-members": ["off"],
  "@typescript-eslint/no-duplicate-enum-values": ["error"],
  "@typescript-eslint/no-duplicate-type-constituents": ["error"],
  "@typescript-eslint/no-dynamic-delete": ["error"],
  "@typescript-eslint/no-empty-function": ["error"],
  "@typescript-eslint/no-empty-object-type": [
    "error",
    {
      allowInterfaces: "always",
      allowObjectTypes: "always"
    }
  ],
  "@typescript-eslint/no-explicit-any": ["off"],
  "@typescript-eslint/no-extra-non-null-assertion": ["error"],
  "@typescript-eslint/no-extraneous-class": ["error"],
  "@typescript-eslint/no-floating-promises": ["off"],
  "@typescript-eslint/no-for-in-array": ["error"],
  "@typescript-eslint/no-implied-eval": ["error"],
  "@typescript-eslint/no-import-type-side-effects": ["error"],
  "@typescript-eslint/no-inferrable-types": ["error"],
  "@typescript-eslint/no-invalid-this": ["off"],
  "@typescript-eslint/no-invalid-void-type": ["error"],
  "@typescript-eslint/no-loop-func": ["error"],
  "@typescript-eslint/no-magic-numbers": ["off"],
  "@typescript-eslint/no-meaningless-void-operator": ["error"],
  "@typescript-eslint/no-misused-new": ["error"],
  "@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
  "@typescript-eslint/no-mixed-enums": ["error"],
  "@typescript-eslint/no-namespace": ["error"],
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["error"],
  "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
  "@typescript-eslint/no-non-null-assertion": ["error"],
  "@typescript-eslint/no-redeclare": ["off"],
  "@typescript-eslint/no-redundant-type-constituents": ["error"],
  "@typescript-eslint/no-require-imports": ["error"],
  "@typescript-eslint/no-restricted-imports": ["off"],
  "@typescript-eslint/no-restricted-types": ["off"],
  "@typescript-eslint/no-shadow": ["off"],
  "@typescript-eslint/no-this-alias": ["error"],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
  "@typescript-eslint/no-unnecessary-condition": ["error"],
  "@typescript-eslint/no-unnecessary-parameter-property-assignment": ["error"],
  "@typescript-eslint/no-unnecessary-qualifier": ["error"],
  "@typescript-eslint/no-unnecessary-template-expression": ["off"],
  "@typescript-eslint/no-unnecessary-type-arguments": ["error"],
  "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
  "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
  "@typescript-eslint/no-unnecessary-type-parameters": ["off"], // Complexity
  "@typescript-eslint/no-unsafe-argument": ["off"],
  "@typescript-eslint/no-unsafe-assignment": ["off"],
  "@typescript-eslint/no-unsafe-call": ["off"],
  "@typescript-eslint/no-unsafe-declaration-merging": ["off"],
  "@typescript-eslint/no-unsafe-enum-comparison": ["off"],
  "@typescript-eslint/no-unsafe-function-type": ["off"],
  "@typescript-eslint/no-unsafe-member-access": ["off"],
  "@typescript-eslint/no-unsafe-return": ["off"],
  "@typescript-eslint/no-unsafe-unary-minus": ["error"],
  "@typescript-eslint/no-unused-expressions": ["error"],
  "@typescript-eslint/no-unused-vars": [
    "error",
    {
      args: "all",
      argsIgnorePattern: "^_",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_",
      ignoreRestSiblings: true,
      varsIgnorePattern: "^_"
    }
  ],
  "@typescript-eslint/no-use-before-define": ["error"],
  "@typescript-eslint/no-useless-constructor": ["error"],
  "@typescript-eslint/no-useless-empty-export": ["error"],
  "@typescript-eslint/no-wrapper-object-types": ["error"],
  "@typescript-eslint/non-nullable-type-assertion-style": ["error"],
  "@typescript-eslint/only-throw-error": ["error"],
  "@typescript-eslint/parameter-properties": ["error"],
  "@typescript-eslint/prefer-as-const": ["error"],
  "@typescript-eslint/prefer-destructuring": ["off"],
  "@typescript-eslint/prefer-enum-initializers": ["error"],
  "@typescript-eslint/prefer-find": ["error"],
  "@typescript-eslint/prefer-for-of": ["error"],
  "@typescript-eslint/prefer-function-type": ["off"],
  "@typescript-eslint/prefer-includes": ["error"],
  "@typescript-eslint/prefer-literal-enum-member": ["error"],
  "@typescript-eslint/prefer-namespace-keyword": ["error"],
  "@typescript-eslint/prefer-nullish-coalescing": ["error"],
  "@typescript-eslint/prefer-optional-chain": ["error"],
  "@typescript-eslint/prefer-promise-reject-errors": ["error"],
  "@typescript-eslint/prefer-readonly": ["error"],
  "@typescript-eslint/prefer-readonly-parameter-types": ["off"],
  "@typescript-eslint/prefer-reduce-type-parameter": ["error"],
  "@typescript-eslint/prefer-regexp-exec": ["error"],
  "@typescript-eslint/prefer-return-this-type": ["error"],
  "@typescript-eslint/prefer-string-starts-ends-with": ["error"],
  "@typescript-eslint/promise-function-async": ["off"],
  "@typescript-eslint/require-array-sort-compare": ["error", { ignoreStringArrays: true }],
  "@typescript-eslint/require-await": ["off"],
  "@typescript-eslint/restrict-plus-operands": ["error"],
  "@typescript-eslint/restrict-template-expressions": ["off"],
  "@typescript-eslint/return-await": ["error", "always"],
  "@typescript-eslint/sort-type-constituents": ["off"],
  "@typescript-eslint/strict-boolean-expressions": ["off"],
  "@typescript-eslint/switch-exhaustiveness-check": ["error", {
    allowDefaultCaseForExhaustiveSwitch: true,
    considerDefaultExhaustiveForUnions: true,
    requireDefaultForNonUnion: false
  }],
  "@typescript-eslint/triple-slash-reference": ["error"],
  "@typescript-eslint/typedef": ["off"],
  "@typescript-eslint/unbound-method": ["error"],
  "@typescript-eslint/unified-signatures": ["off"],
  "@typescript-eslint/use-unknown-in-catch-callback-variable": ["error"],
  "default-case": ["off"],
  "default-param-last": ["off"],
  "dot-notation": ["off"],
  "max-params": ["off"],
  "no-array-constructor": ["off"],
  "no-duplicate-imports": ["off"],
  "no-empty-function": ["off"],
  "no-implied-eval": ["off"],
  "no-invalid-this": ["off"],
  "no-loop-func": ["off"],
  "no-redeclare": ["off"],
  "no-undef": ["off"],
  "no-unused-expressions": ["off"],
  "no-unused-vars": ["off"],
  "no-use-before-define": ["off"],
  "prefer-promise-reject-errors": ["off"],
  "require-await": ["off"]
};
