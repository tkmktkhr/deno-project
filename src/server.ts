const hostname = "0.0.0.0";
const port = 8080;
const listener = Deno.listen({ hostname, port });
console.log(`Listening on ${hostname}:${port}`);
for await (const conn of listener) {
  console.log("------------conn\n");
  console.log(conn);
  console.log("------------listener\n");
  console.log(listener);
  // Deno.copy(conn, Deno.stdout);
  const connection = await Deno.copy(conn, conn);
  console.log("connection\n");
  console.log(connection);
}
