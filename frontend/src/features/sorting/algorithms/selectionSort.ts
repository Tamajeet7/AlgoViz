import type { ArrayBar, SortStep } from "../types/sorting";

export function selectionSort(array: ArrayBar[]): SortStep[] {
  const arr = array.map((bar) => ({ ...bar }));
  const steps: SortStep[] = [];

  let comparisons = 0;
  let swaps = 0;

  function saveStep() {
    steps.push({
      array: arr.map((bar) => ({ ...bar })),
      comparisons,
      swaps,
    });
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      arr.forEach((bar) => {
        if (bar.state !== "sorted") {
          bar.state = "default";
        }
      });

      arr[min].state = "comparing";
      arr[j].state = "comparing";

      comparisons++;
      saveStep();

      if (arr[j].value < arr[min].value) {
        min = j;
      }
    }

    if (min !== i) {
      arr[i].state = "swapping";
      arr[min].state = "swapping";

      saveStep();

      [arr[i], arr[min]] = [arr[min], arr[i]];

      swaps++;
      saveStep();
    }

    arr[i].state = "sorted";
    saveStep();
  }

  return steps;
}