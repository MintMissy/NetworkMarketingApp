export function databaseGetObjectsAdapter<T>(map: { [key: string]: T }) {
  const mappedObject = [];
  for (const entry of Object.entries(map)) {
    mappedObject.push({ ...entry[1], id: entry[0] });
  }

  return mappedObject;
}
