// @deno-types="./foo.d.ts"
import * as foo from "./foo";

// declare export foo: string = 'foo';

declare const foo: string;

declare module "foo" {
  export default foo;
}
