import { toMap, fromMap } from "./utils.ts";
import { uuid } from "../deps.ts";

interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

// 起動ディレクトリからの絶対パスでないとだめ
const FILE_PATH = "./src/db/todos.json";

// JSONファイルから全データを取得してくる。
export async function getAll(): Promise<Todo[]> {
  const data = await Deno.readFile(FILE_PATH);
  const decoder = new TextDecoder();
  return JSON.parse(decoder.decode(data));
}

type Result<T> = [T, undefined] | [undefined, Error];

// idを指定してデータを取得してくる
export async function get({ id }: Pick<Todo, "id">): Promise<Result<Todo>> {
  // Pickを使用してTOdoリストの中からidを返すように
  const todos = await getAll();
  console.log(id);
  const todo = toMap(todos).get(id);
  if (!todo) {
    return [undefined, new Error("Cannnot find item.!!!!")];
  }
  return [todo, undefined];
}

// titleを指定してデータを作成する
export async function create({ title }: Pick<Todo, "title">): Promise<true> {
  const todos = await getAll();
  const id = uuid.generate();
  const now = new Date().toISOString();

  const updateData = {
    id,
    done: false,
    title,
    createdAt: now,
    updatedAt: now,
  };

  await updateAll([...todos, updateData]);

  return true;
}

// 全データの登録
export async function updateAll(todos: Todo[]): Promise<true> {
  const encoder = new TextEncoder();
  Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(todos)));
  return true;
}

// 全データの更新
export async function update(
  params: Partial<Todo> & Pick<Todo, "id">
): Promise<Result<true>> {
  const todos = await getAll();
  const todosMap = toMap(todos);
  const current = todosMap.get(params.id);

  if (!current) {
    return [undefined, new Error("Cannot find item")];
  }

  todosMap.set(params.id, {
    ...current,
    ...params,
    updatedAt: new Date().toISOString(),
  });

  await updateAll(fromMap(todosMap));

  return [true, undefined];
}

export async function remove({ id }: Pick<Todo, "id">): Promise<Result<true>> {
  const todos = await getAll();
  const todosMap = toMap(todos);

  if (!todosMap.has(id)) {
    return [undefined, new Error("Cannot find item")];
  }

  todosMap.delete(id);
  await updateAll(fromMap(todosMap));
  return [true, undefined];
}
