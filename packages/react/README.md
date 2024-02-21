# @joshuaavalon/eslint-config-react

This is the opinionated ESLint configuration repository that used by myself.
Not support is guaranteed. Use as your own risk.

This configuration include both lint and format rules which may cause conflicts with other formatter like Prettier.

## Getting Started

```
npm i -D eslint @joshuaavalon/eslint-config-react
```

```js
import globals from "globals";
import typescript from "typescript-eslint";
import reactRules from "@joshuaavalon/eslint-config-react";

{
  ...reactRules,
  ignores: ["node_modules", "dist"],
  files: ["**/*.ts", "**/*.tsx"],
  settings: { react: { version: "detect" } },
  languageOptions: {
    parser: typescript.parser,
    parserOptions: {
      project: true,
      tsconfigDirName: import.meta.dirname,
      ecmaFeatures: { jsx: true }
    },
    globals: {
      ...globals.node,
      ...globals.browser,
      ...globals.nodeBuiltin
    }
  }
}
```
