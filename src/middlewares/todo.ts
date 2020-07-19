import { RouterContext, Status } from "../deps.ts";
import { todoModel } from "../models/mod.ts";
import { getParams, handleOK, handleError } from "./utils.ts";

export async function getAll(ctx: RouterContext) {
  const todos = await todoModel.getAll();
  handleOK(ctx, todos);
}

export async function a() {}

export async function get(ctx: RouterContext) {
  const params = await getParams(ctx);
  // ctx.params;
  // await ctx.request.body()
  const [todo, error] = await todoModel.get(params);
  if (error) {
    return handleError(ctx, error);
  }

  return handleOK(ctx, todo);
}
