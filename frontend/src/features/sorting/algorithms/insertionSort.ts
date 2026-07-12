import type { ArrayBar, SortStep } from "../types/sorting";

export function insertionSort(array: ArrayBar[]): SortStep[] {
  const arr = array.map((bar) => ({ ...bar }));
  const steps: SortStep[] = [];

  const save = () =>
    steps.push({
      array: arr.map((bar) => ({ ...bar })),
    });

  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1].value > arr[j].value) {
      arr.forEach((b) => {
        if (b.state !== "sorted") b.state = "default";
      });

      arr[j - 1].state = "swapping";
      arr[j].state = "swapping";

      save();

      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];

      save();

      j--;
    }
  }

  arr.forEach((b) => (b.state = "sorted"));

  save();

  return steps;
}