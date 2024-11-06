import type { PrefixRules } from "@joshuaavalon/eslint-config-javascript/utils";
import type { UnprefixedRuleOptions } from "@stylistic/eslint-plugin";


export const stylisticRules: Pick<PrefixRules<UnprefixedRuleOptions, "@stylistic/">, `@stylistic/type-${string}` & keyof PrefixRules<UnprefixedRuleOptions, "@stylistic/">> = {
  "@stylistic/type-annotation-spacing": ["error"],
  "@stylistic/type-generic-spacing": ["error"],
  "@stylistic/type-named-tuple-spacing": ["error"]
};
