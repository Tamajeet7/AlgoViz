import { useEffect, useState } from "react";

import type { ArrayBar } from "../types/sorting";

import { generateArray } from "../utils/generateArray";

export function useSorting() {
  const [array, setArray] = useState<ArrayBar[]>([]);
  const [arraySize, setArraySize] = useState(40);

  const [speed, setSpeed] = useState(50);

  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    setArray(generateArray(arraySize));
  }, [arraySize]);

  function generateNewArray() {
    if (isSorting) return;

    setArray(generateArray(arraySize));
  }

  return {
    array,
    setArray,

    arraySize,
    setArraySize,

    speed,
    setSpeed,

    isSorting,
    setIsSorting,

    generateNewArray,
  };
}