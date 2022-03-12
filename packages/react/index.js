module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "@joshuaavalon/eslint-config-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["*.tsx"],
      rules: {
        "no-dupe-class-members": "off"
      }
    },
    {
      files: ["*.jsx", "*.tsx"],
      rules: {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["strictCamelCase"],
            leadingUnderscore: "allowSingleOrDouble"
          },
          {
            selector: "variable",
            format: ["strictCamelCase", "UPPER_CASE", "StrictPascalCase"],
            leadingUnderscore: "allowSingleOrDouble"
          },
          {
            selector: "typeLike",
            format: ["StrictPascalCase"]
          },
          {
            selector: "function",
            format: ["StrictPascalCase", "strictCamelCase"]
          }
        ]
      }
    }
  ]
};
