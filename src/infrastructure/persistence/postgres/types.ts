export type Fields<T> =
  | '*'
  | {
      [K in keyof T & string]: T[K] extends object
        ? `${K}.*` | `${K}.${Fields<T[K]>}`
        : K;
    }[keyof T & string];
