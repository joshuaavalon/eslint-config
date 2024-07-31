/** @type {import("eslint").Linter.RulesRecord} */
const rules = {
  "array-callback-return": [
    "error",
    {
      allowImplicit: false,

      /**
       * `.forEach()` should not return values
       */
      checkForEach: true,
      allowVoid: false
    }
  ],
  "constructor-super": ["error"],
  "for-direction": ["error"],
  "getter-return": ["error"],
  "no-async-promise-executor": ["error"],
  "no-await-in-loop": ["error"],
  "no-class-assign": ["error"],
  "no-compare-neg-zero": ["error"],
  "no-cond-assign": ["error"],
  "no-const-assign": ["error"],
  "no-constant-binary-expression": ["error"],
  "no-constant-condition": ["error"],
  "no-constructor-return": ["error"],
  "no-control-regex": ["error"],
  "no-debugger": ["error"],
  "no-dupe-args": ["error"],
  "no-dupe-class-members": ["error"],
  "no-dupe-else-if": ["error"],
  "no-dupe-keys": ["error"],
  "no-duplicate-case": ["error"],
  "no-duplicate-imports": ["error"],
  "no-empty-character-class": ["error"],
  "no-empty-pattern": ["error"],
  "no-ex-assign": ["error"],
  "no-fallthrough": ["error"],
  "no-func-assign": ["error"],
  "no-import-assign": ["error"],
  "no-inner-declarations": ["error"],
  "no-invalid-regexp": ["error"],
  "no-irregular-whitespace": ["error"],
  "no-loss-of-precision": ["error"],
  "no-misleading-character-class": ["error"],
  "no-new-native-nonconstructor": ["error"],
  "no-obj-calls": ["error"],
  "no-promise-executor-return": ["error"],
  "no-prototype-builtins": ["error"],
  "no-self-assign": ["error"],
  "no-self-compare": ["error"],
  "no-setter-return": ["error"],
  "no-sparse-arrays": ["error"],
  "no-template-curly-in-string": ["error"],
  "no-this-before-super": ["error"],
  "no-undef": ["error"],
  "no-unexpected-multiline": ["error"],
  "no-unmodified-loop-condition": ["error"],
  "no-unreachable": ["error"],
  "no-unreachable-loop": ["error"],
  "no-unsafe-finally": ["error"],
  "no-unsafe-negation": ["error"],
  "no-unsafe-optional-chaining": ["error"],
  "no-unused-private-class-members": ["error"],
  "no-unused-vars": ["error"],
  "no-use-before-define": ["error"],
  "no-useless-backreference": ["error"],
  "require-atomic-updates": ["off"],
  "use-isnan": ["error"],
  "valid-typeof": ["error"],
  "accessor-pairs": ["error"],
  "arrow-body-style": ["error", "as-needed"],
  "block-scoped-var": ["error"],
  camelcase: ["error"],
  "capitalized-comments": ["error"],
  complexity: ["error"],
  "consistent-return": ["error"],
  "consistent-this": ["error"],
  curly: ["error", "all"],
  "default-case": ["error"],
  "default-case-last": ["error"],
  "default-param-last": ["error"],
  "dot-notation": ["error"],
  eqeqeq: ["error", "always"],
  "grouped-accessor-pairs": ["error"],
  "guard-for-in": ["off"],
  "func-name-matching": ["off"],
  "func-names": ["error", "as-needed"],
  "func-style": ["off"],
  "id-denylist": ["off"],
  "id-length": ["off"],
  "id-match": ["off"],
  "init-declarations": ["off"],
  "logical-assignment-operators": ["error", "always"],
  "max-depth": ["error"],
  "max-lines": ["off"],
  "max-lines-per-function": ["off"],
  "max-nested-callbacks": ["error", { max: 3 }],
  "max-params": ["error", { max: 3 }],
  "max-statements": ["off"],
  "new-cap": ["off"],
  "no-alert": ["error"],
  "no-array-constructor": ["error"],
  "no-bitwise": ["error"],
  "no-caller": ["error"],
  "no-case-declarations": ["error"],
  "no-console": ["off"],
  "no-continue": ["off"],
  "no-delete-var": ["error"],
  "no-div-regex": ["error"],
  "no-else-return": ["error"],
  "no-empty": ["error"],
  "no-empty-function": ["error"],
  "no-empty-static-block": ["error"],
  "no-eq-null": ["error"],
  "no-eval": ["error"],
  "no-extend-native": ["error"],
  "no-extra-bind": ["error"],
  "no-extra-boolean-cast": ["error"],
  "no-extra-label": ["error"],
  "no-global-assign": ["error"],
  "no-implicit-coercion": ["error"],
  "no-implicit-globals": ["error"],
  "no-implied-eval": ["error"],
  "no-inline-comments": ["off"],
  "no-invalid-this": ["error"],
  "no-iterator": ["error"],
  "no-label-var": ["error"],
  "no-labels": ["error"],
  "no-lone-blocks": ["error"],
  "no-lonely-if": ["error"],
  "no-loop-func": ["error"],
  "no-magic-numbers": ["off"],
  "no-mixed-operators": ["off"],
  "no-multi-assign": ["error"],
  "no-multi-str": ["error"],
  "no-negated-condition": ["off"],
  "no-nested-ternary": ["off"],
  "no-new": ["error"],
  "no-new-func": ["error"],
  "no-new-wrappers": ["error"],
  "no-nonoctal-decimal-escape": ["error"],
  "no-object-constructor": ["error"],
  "no-octal": ["error"],
  "no-octal-escape": ["error"],
  "no-param-reassign": ["error"],
  "no-plusplus": ["off"],
  "no-proto": ["error"],
  "no-redeclare": ["error"],
  "no-regex-spaces": ["error"],
  "no-restricted-exports": ["off"],
  "no-restricted-globals": ["off"],
  "no-restricted-imports": ["off"],
  "no-restricted-properties": ["off"],
  "no-restricted-syntax": ["off"],
  "no-return-assign": ["error"],
  "no-return-await": ["error"],
  "no-script-url": ["error"],
  "no-sequences": ["error"],
  "no-shadow": ["error", { builtinGlobals: true, hoist: "all" }],
  "no-shadow-restricted-names": ["error"],
  "no-ternary": ["off"],
  "no-throw-literal": ["error"],
  "no-undef-init": ["off"],
  "no-undefined": ["off"],
  "no-underscore-dangle": ["error"],
  "no-unneeded-ternary": ["error"],
  "no-unused-expressions": ["error"],
  "no-unused-labels": ["error"],
  "no-useless-call": ["error"],
  "no-useless-catch": ["error"],
  "no-useless-computed-key": ["error"],
  "no-useless-concat": ["error"],
  "no-useless-constructor": ["error"],
  "no-useless-escape": ["error"],
  "no-useless-rename": ["error"],
  "no-useless-return": ["error"],
  "no-var": ["error"],
  "no-void": ["error"],
  "no-warning-comments": ["off"],
  "no-with": ["error"],
  "object-shorthand": ["error", "always"],
  "one-var": ["error", "never"],
  "operator-assignment": ["error", "always"],
  "prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],
  "prefer-const": ["error"],
  "prefer-destructuring": ["error",
    { object: true, array: false },
    { enforceForRenamedProperties: true }],
  "prefer-exponentiation-operator": ["error"],
  "prefer-named-capture-group": ["error"],
  "prefer-numeric-literals": ["error"],
  "prefer-object-has-own": ["error"],
  "prefer-object-spread": ["error"],
  "prefer-promise-reject-errors": ["error"],
  "prefer-regex-literals": ["error"],
  "prefer-rest-params": ["error"],
  "prefer-spread": ["error"],
  "prefer-template": ["error"],
  radix: ["error", "as-needed"],
  "require-await": ["error"],
  "require-unicode-regexp": ["error"],
  "require-yield": ["error"],
  "sort-imports": ["error", { ignoreDeclarationSort: true }],
  "sort-keys": ["off"],
  "sort-vars": ["error"],
  strict: ["off"],
  "symbol-description": ["error"],
  "vars-on-top": ["error"],
  yoda: ["error"]
};

export default rules;
