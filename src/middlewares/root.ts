// APIにあたるコアな実装
import { Status, RouterContext } from "../deps.ts";

export function getHome(ctx: RouterContext) {
  ctx.response.status = Status.OK;
  ctx.response.body = "Todo list API deno";
}
