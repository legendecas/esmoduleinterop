import * as modA from 'mod-a';

/** the problem arise when `foo` is any *Type* from mod-a */
export const foo: ReturnType<typeof modA> = modA();
