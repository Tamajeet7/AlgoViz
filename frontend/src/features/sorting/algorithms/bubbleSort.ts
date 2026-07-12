import type { ArrayBar, SortStep } from "../types/sorting";

export function bubbleSort(array: ArrayBar[]): SortStep[] {
  const arr = array.map((bar) => ({ ...bar }));
  const steps: SortStep[] = [];

  function saveStep() {
    steps.push({
      array: arr.map((bar) => ({ ...bar })),
    });
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Reset all non-sorted bars
      arr.forEach((bar) => {
        if (bar.state !== "sorted") {
          bar.state = "default";
        }
      });

      // Highlight bars being compared
      arr[j].state = "comparing";
      arr[j + 1].state = "comparing";

      saveStep();

      if (arr[j].value > arr[j + 1].value) {
        // Highlight swap
        arr[j].state = "swapping";
        arr[j + 1].state = "swapping";

        saveStep();

        // Swap bars
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        saveStep();
      }
    }

    // Mark last sorted element
    arr[arr.length - i - 1].state = "sorted";
    saveStep();
  }

  return steps;
}