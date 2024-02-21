```js
import globals from "globals";
{
  ignores: ["node_modules", "dist"],
  files: [
    "**/*.js",
    "**/*.mjs",
    "**/*.cjs"
  ],
  languageOptions: {
    globals: { ...globals.node }
  },
}
```
