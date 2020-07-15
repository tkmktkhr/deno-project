import { RouterContext, Status } from "../deps.ts";

export function getAll(ctx: RouterContext) {
  ctx.response.status = Status.OK;
  ctx.response.body = {
    todo: [],
  };
}
