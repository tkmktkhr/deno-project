# deno-project
Sample Deno programme 

## Deno run 
### By denon
denon start

### By deno
deno run --allow-net --allow-env --allow-read ./src/server.ts

## Deno cache reload
deno cache --reload src/deps.ts

## Check a tree listing of all dependencies
deno info --no-check src/deps.ts

## Deno test
### Single file
deno test ./src/middlewares/__test__/root.test.ts