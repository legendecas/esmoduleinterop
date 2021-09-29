import { foo } from 'mod-b';

/**
 * ../mod-b/dist/index.d.ts:1:1
 * "import * as modA from 'mod-a';"
 * Compilation failed for type originates at this import. 
 * > A namespace-style import cannot be called or constructed, 
 * > and will cause a failure at runtime. 
 */
console.log(foo);
