import { Application, bold, yellow } from "./deps.ts";
import { router } from "./router.ts";
import { logger, errorHandler } from "./middlewares/mod.ts";

const app = new Application();

// Middleware
app.use(logger);
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(
    bold(`Start litening on `) + yellow(`${hostname ?? "localhost"}: ${port}`)
  );
});

const port = parseInt(Deno.env.get("PORT") ?? "8000");

app.listen({ port });

// const hostname = "0.0.0.0";
// const port = 8080;
// const listener = Deno.listen({ hostname, port });
// console.log(`Listening on ${hostname}:${port}`);
// for await (const conn of listener) {
//   console.log("------------conn\n");
//   console.log(conn);
//   console.log("------------listener\n");
//   console.log(listener);
//   // Deno.copy(conn, Deno.stdout);
//   const connection = await Deno.copy(conn, conn);
//   console.log("connection\n");
//   console.log(connection);
// }
