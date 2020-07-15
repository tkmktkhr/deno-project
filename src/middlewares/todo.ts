import { RouterContext, Status } from "../deps.ts";

// 絶対パスでないとだめ
const FILE_PATH = "./src/db/todos.json";

export async function getAll(ctx: RouterContext) {
  const data = await Deno.readFile(FILE_PATH);
  const decoder = new TextDecoder();
  const todos = JSON.parse(decoder.decode(data));
  ctx.response.status = Status.OK;
  ctx.response.body = {
    todo: todos,
  };
}
