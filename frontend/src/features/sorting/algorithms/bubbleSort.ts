import type { ArrayBar, SortStep } from "../types/sorting";

export function bubbleSort(array: ArrayBar[]): SortStep[] {
  const arr = array.map(bar => ({ ...bar }));
  const steps: SortStep[] = [];

  const pushStep = () => {
    steps.push({
      array: arr.map(bar => ({ ...bar })),
    });
  };

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length - i - 1; j++) {

      arr.forEach(bar => {
        if (bar.state !== "sorted") {
          bar.state = "default";
        }
      });

      arr[j].state = "comparing";
      arr[j + 1].state = "comparing";

      pushStep();

      if (arr[j].value > arr[j + 1].value) {

        arr[j].state = "swapping";
        arr[j + 1].state = "swapping";

        pushStep();

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }

      pushStep();
    }

    arr[arr.length - i - 1].state = "sorted";
    pushStep();
  }

  return steps;
}