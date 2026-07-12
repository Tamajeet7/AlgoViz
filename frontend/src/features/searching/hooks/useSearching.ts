import { useEffect, useState } from "react";

import type { SearchBar } from "../types/searching";
import { generateArray } from "../utils/generateArray";

export function useSearching() {
  const [array, setArray] = useState<SearchBar[]>([]);

  const [arraySize, setArraySize] = useState(40);

  const [speed, setSpeed] = useState(50);

  const [target, setTarget] = useState(50);

  useEffect(() => {
    setArray(generateArray(arraySize));
  }, [arraySize]);

  function generateNewArray() {
    setArray(generateArray(arraySize));
  }

  return {
    array,
    setArray,

    arraySize,
    setArraySize,

    speed,
    setSpeed,

    target,
    setTarget,

    generateNewArray,
  };
}