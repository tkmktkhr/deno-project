export function toMap<T extends { id: string }>(data: T[]): Map<string, T> {
  return data.reduce(
    (previous, data) => previous.set(data.id, data),
    new Map()
  );
}

export function fromMap<T extends { id: string }>(data: Map<string, T>): T[] {
  const arr = [];
  for (const v of data.values()) {
    arr.push(v);
  }
  return arr;
}
