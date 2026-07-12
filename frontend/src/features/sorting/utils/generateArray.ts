import type { ArrayBar } from "../types/sorting";

export function generateArray(size: number): ArrayBar[] {
  return Array.from({ length: size }, (_, index) => ({
    id: index,
    value: Math.floor(Math.random() * 90) + 10,
  }));
}