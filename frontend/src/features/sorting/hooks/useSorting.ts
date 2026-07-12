import { useEffect, useState } from "react";

import type { ArrayBar } from "../types/sorting";

import { generateArray } from "../utils/generateArray";

export function useSorting() {
  const [array, setArray] = useState<ArrayBar[]>([]);
  const [arraySize, setArraySize] = useState(40);

  useEffect(() => {
    setArray(generateArray(arraySize));
  }, [arraySize]);

  return {
    array,
    setArray,

    arraySize,
    setArraySize,

    generateNewArray: () => setArray(generateArray(arraySize)),
  };
}