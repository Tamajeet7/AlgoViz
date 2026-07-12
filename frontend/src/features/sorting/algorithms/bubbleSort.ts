import type { ArrayBar, SortStep } from "../types/sorting";

export function bubbleSort(array: ArrayBar[]): SortStep[] {
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
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr.forEach((bar) => {
        if (bar.state !== "sorted") {
          bar.state = "default";
        }
      });

      arr[j].state = "comparing";
      arr[j + 1].state = "comparing";

      comparisons++;
      saveStep();

      if (arr[j].value > arr[j + 1].value) {
        arr[j].state = "swapping";
        arr[j + 1].state = "swapping";

        saveStep();

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        swaps++;
        saveStep();
      }
    }

    arr[arr.length - i - 1].state = "sorted";
    saveStep();
  }

  return steps;
}