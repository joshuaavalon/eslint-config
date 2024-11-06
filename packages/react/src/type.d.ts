declare module "eslint-plugin-react-hooks" {
  import type { Linter } from "eslint";

  export const configs: Record<string, Linter.Config>;
}
