// import * as foo from "file:///Users/takahiro/deno-project/src/foo.ts"; // OK
import * as foo from "./foo.ts"; // OK
// import { foo } from "./foo.ts"; // NG 使い方としては正しい
// import foo from "./foo.ts"; // 書き方すらNG

console.log(Deno.args);
console.log(foo instanceof Object);
console.log(foo instanceof String);
console.log(typeof foo);
console.log(typeof foo.foo);

// Sumple code https://deno.land/manual/getting_started/first_steps#reading-a-file
// const filenames = Deno.args;
// for (const filename of filenames) {
//   const file = await Deno.open(filename);
//   await Deno.copy(file, Deno.stdout);
//   file.close();
// }
