interface Todo {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

// 起動ディレクトリからの絶対パスでないとだめ
const FILE_PATH = "./src/db/todos.json";

export async function getAll(): Promise<Todo[]> {
  const data = await Deno.readFile(FILE_PATH);
  const decoder = new TextDecoder();
  return JSON.parse(decoder.decode(data));
}
