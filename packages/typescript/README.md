# @joshuaavalon/eslint-config-typescript

This is the opinionated ESLint configuration repository that used by myself.
Not support is guaranteed. Use as your own risk.

This configuration include both lint and format rules which may cause conflicts with other formatter like Prettier.

## Getting Started

```
npm i -D eslint @joshuaavalon/eslint-config-typescript
```

```js
import globals from "globals";
import typescript from "typescript-eslint";
import jsConfig from "@joshuaavalon/eslint-config-javascript";
import tsConfig from "@joshuaavalon/eslint-config-typescript";

[
  {
    ...tsConfig,
    ignores: ["node_modules", "dist"],
    files: ["**/*.ts"],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        project: true,
        tsconfigDirName: import.meta.dirname
      },
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.nodeBuiltin
      }
    }
  }
];
```
