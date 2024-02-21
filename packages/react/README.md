```js
import globals from "globals";
import typescript from "typescript-eslint";
{
  ignores: ["node_modules", "dist"],
  files: ["**/*.ts", "**/*.tsx"],
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
