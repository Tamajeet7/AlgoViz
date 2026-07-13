import { useEffect, useRef, useState } from "react";

import type { SearchBar, SearchStep } from "../types/searching";
import { generateArray } from "../utils/generateArray";

export function useSearching() {
  const [array, setArray] = useState<SearchBar[]>([]);

  const [arraySize, setArraySize] = useState(40);

  const [speed, setSpeed] = useState(50);

  const [target, setTarget] = useState(50);

  const [comparisons, setComparisons] = useState(0);

  const [isSearching, setIsSearching] = useState(false);

  const [searchResult, setSearchResult] = useState<
    "idle" | "found" | "not-found"
  >("idle");

  const [foundIndex, setFoundIndex] = useState<number | null>(null);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setArray(generateArray(arraySize));

    setComparisons(0);

    setSearchResult("idle");

    setFoundIndex(null);

    setIsSearching(false);
  }, [arraySize]);

  function generateNewArray() {
    if (isSearching) return;

    setArray(generateArray(arraySize));

    setComparisons(0);

    setSearchResult("idle");

    setFoundIndex(null);

    setIsSearching(false);
  }

  function play(steps: SearchStep[]) {
    if (isSearching) return;

    setIsSearching(true);

    setSearchResult("idle");
    setFoundIndex(null);

    let index = 0;

    function animate() {
      if (index >= steps.length) {
        setIsSearching(false);

        const last = steps[steps.length - 1];

        if (last?.found) {
          setSearchResult("found");
          setFoundIndex(last.foundIndex);
        } else {
          setSearchResult("not-found");
        }

        return;
      }

      const step = steps[index];

      setArray(step.array);
      setComparisons(step.comparisons);

      index++;

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

    setArray(generateArray(arraySize));

    setComparisons(0);

    setSearchResult("idle");

    setFoundIndex(null);

    setIsSearching(false);
  }

  return {
    array,

    arraySize,
    setArraySize,

    speed,
    setSpeed,

    target,
    setTarget,

    comparisons,

    isSearching,

    searchResult,

    foundIndex,

    generateNewArray,

    play,

    reset,
  };
}