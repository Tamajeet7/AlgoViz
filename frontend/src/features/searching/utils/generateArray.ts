import type { SearchBar } from "../types/searching";

export function generateArray(
  size: number,
  sorted = false
): SearchBar[] {
  const array: SearchBar[] = Array.from(
    { length: size },
    (_, index) => ({
      id: index,
      value: Math.floor(Math.random() * 90) + 10,
      state: "default",
    })
  );

  if (sorted) {
    array.sort((a, b) => a.value - b.value);
  }

  return array;
}