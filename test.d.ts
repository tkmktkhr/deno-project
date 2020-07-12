// @deno-types="./foo.d.ts"
import * as foo from "file:///Users/takahiro/deno-project/src/foo.ts";

// declare export foo: string = 'foo';

declare const foo: string;

declare module "foo" {
  export default foo;
}
