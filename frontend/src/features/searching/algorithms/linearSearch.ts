import type { SearchBar, SearchStep } from "../types/searching";

export function linearSearch(
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

  for (let i = 0; i < arr.length; i++) {
    arr.forEach((bar) => {
      if (bar.state !== "found") {
        bar.state = "default";
      }
    });

    arr[i].state = "checking";

    comparisons++;

    save(false, -1);

    if (arr[i].value === target) {
      arr[i].state = "found";

      save(true, i);

      return steps;
    }
  }

  save(false, -1);

  return steps;
}