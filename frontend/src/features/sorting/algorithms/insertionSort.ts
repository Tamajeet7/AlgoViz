import type { ArrayBar, SortStep } from "../types/sorting";

export function insertionSort(array: ArrayBar[]): SortStep[] {
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

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0) {
      comparisons++;

      arr.forEach((bar) => {
        if (bar.state !== "sorted") {
          bar.state = "default";
        }
      });

      arr[j - 1].state = "comparing";
      arr[j].state = "comparing";

      saveStep();

      if (arr[j - 1].value <= arr[j].value) {
        break;
      }

      arr[j - 1].state = "swapping";
      arr[j].state = "swapping";

      saveStep();

      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];

      swaps++;
      saveStep();

      j--;
    }
  }

  arr.forEach((bar) => {
    bar.state = "sorted";
  });

  saveStep();

  return steps;
}