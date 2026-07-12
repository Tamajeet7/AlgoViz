import { useState } from "react";

export function useSorting() {
  const [array, setArray] = useState<number[]>([]);

  return {
    array,
    setArray,
  };
}