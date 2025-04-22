import type { Collection, Ref, FindAllOptions } from '@mikro-orm/core';

export type RelationKeys<T> = {
  [K in keyof T]: T[K] extends Collection<any> | Ref<any> ? K : never;
}[keyof T] &
  string;

export type FindAllWithRelations<T, E extends string = never> = FindAllOptions<
  T,
  RelationKeys<T>,
  '*',
  E
>;
