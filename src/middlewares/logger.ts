import { Context, green, cyan } from "../../deps.ts";

export async function logger(ctx: Context, next: () => Promise<void>) {
  // ルータが走る前の処理
  await next();
  // ルータが走った後の処理
  console.log(`${green(ctx.request.method)} ${cyan(ctx.request.url.pathname)}`);
}
