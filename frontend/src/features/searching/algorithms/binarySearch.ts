import type { SearchBar, SearchStep } from "../types/searching";

export function binarySearch(
  array: SearchBar[],
  target: number
): SearchStep[] {
  const arr = array.map((bar) => ({ ...bar }));

  const steps: SearchStep[] = [];

  let comparisons = 0;

  function save(found: boolean, foundIndex: number) {
    steps.push({
      array: arr.map((bar) => ({ ...bar })),
      comparisons,
      found,
      foundIndex,
    });
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    arr.forEach((bar) => {
      if (bar.state !== "found") {
        bar.state = "default";
      }
    });

    const mid = Math.floor((left + right) / 2);

    arr[mid].state = "checking";

    comparisons++;

    save(false, -1);

    if (arr[mid].value === target) {
      arr[mid].state = "found";

      save(true, mid);

      return steps;
    }

    if (arr[mid].value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  save(false, -1);

  return steps;
}