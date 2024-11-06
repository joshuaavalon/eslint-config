import type { RuleModule } from "@typescript-eslint/utils/ts-eslint";
import type { Linter } from "eslint";

export type Prefix<TKey, TPrefix extends string> = TKey extends string
  ? `${TPrefix}${TKey}`
  : never;

export type RemovePrefix<TPrefixedKey, TPrefix extends string> = TPrefixedKey extends Prefix<infer TKey, TPrefix>
  ? TKey
  : "";

export type PrefixedValue<TObject extends object, TPrefixedKey extends string, TPrefix extends string> = TObject extends Record<RemovePrefix<TPrefixedKey, TPrefix>, infer TValue>
  ? TValue
  : never;

export type RuleOptions<T> = T extends any[] ? T : never;

export type PrefixRules<TObject extends object, TPrefix extends string> = {
  [K in Prefix<keyof TObject, TPrefix>]: Linter.RuleSeverityAndOptions<RuleOptions<PrefixedValue<TObject, K, TPrefix>>>
};

export type OptionsRuleModule<T> = T extends RuleModule<any, infer U, any, any> ? U : never;

export type PrefixRuleModules<TObject extends object, TPrefix extends string> = {
  [K in Prefix<keyof TObject, TPrefix>]: Linter.RuleSeverityAndOptions<RuleOptions<OptionsRuleModule<PrefixedValue<TObject, K, TPrefix>>>>
};
