// import * as foo from "./src/foo.js";
// import goo from "./src/@type/foo.d.ts";
import * as foo from "./foo";

console.log(Deno.args);
console.log(foo instanceof Object);
console.log(foo instanceof String);
console.log(typeof foo);
console.log(typeof foo.foo);
