import { useEffect, useRef, useState } from "react";

import type { ArrayBar, SortStep } from "../types/sorting";

import { generateArray } from "../utils/generateArray";

export function useSorting() {
  const [array, setArray] = useState<ArrayBar[]>([]);
  const [arraySize, setArraySize] = useState(40);

  const [speed, setSpeed] = useState(50);

  const [isSorting, setIsSorting] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setArray(generateArray(arraySize));
  }, [arraySize]);

  function generateNewArray() {
    if (isSorting) return;

    setArray(generateArray(arraySize));
  }

  function play(steps: SortStep[]) {
    if (isSorting) return;

    setIsSorting(true);

    let i = 0;

    function animate() {
      if (i >= steps.length) {
        setIsSorting(false);
        return;
      }

      setArray(steps[i].array);

      i++;

      timeoutRef.current = window.setTimeout(
        animate,
        101 - speed
      );
    }

    animate();
  }

  function reset() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsSorting(false);

    setArray(generateArray(arraySize));
  }

  return {
    array,

    arraySize,
    setArraySize,

    speed,
    setSpeed,

    isSorting,

    generateNewArray,

    play,
    reset,
  };
}