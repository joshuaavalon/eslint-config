# @joshuaavalon/eslint-config-javascript

This is the opinionated ESLint configuration repository that used by myself.
Not support is guaranteed. Use as your own risk.

This configuration include both lint and format rules which may cause conflicts with other formatter like Prettier.

## Getting Started

```
npm i -D eslint @joshuaavalon/eslint-config-javascript
```

```js
// eslint.config.js
import globals from "globals";
import jsConfig from "@joshuaavalon/eslint-config-javascript";

{
  ...jsConfig,
  ignores: ["node_modules", "dist"],
  files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
  languageOptions: {
    globals: { ...globals.node }
  }
}
```
