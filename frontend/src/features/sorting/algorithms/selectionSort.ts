import type { ArrayBar, SortStep } from "../types/sorting";

export function selectionSort(array: ArrayBar[]): SortStep[] {
  const arr = array.map((bar) => ({ ...bar }));
  const steps: SortStep[] = [];

  const save = () => {
    steps.push({
      array: arr.map((bar) => ({ ...bar })),
    });
  };

  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      arr.forEach((b) => {
        if (b.state !== "sorted") b.state = "default";
      });

      arr[min].state = "comparing";
      arr[j].state = "comparing";

      save();

      if (arr[j].value < arr[min].value) {
        min = j;
      }
    }

    if (min !== i) {
      arr[i].state = "swapping";
      arr[min].state = "swapping";

      save();

      [arr[i], arr[min]] = [arr[min], arr[i]];

      save();
    }

    arr[i].state = "sorted";

    save();
  }

  return steps;
}