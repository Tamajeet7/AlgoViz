import type { SearchBar } from "../types/searching";

export function generateArray(size: number): SearchBar[] {
  const array = Array.from({ length: size }, (_, index) => ({
    id: index,
    value: Math.floor(Math.random() * 90) + 10,
    state: "default" as const,
  }));

  return array;
}