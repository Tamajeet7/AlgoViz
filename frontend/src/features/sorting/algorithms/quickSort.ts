import type { ArrayBar, SortStep } from "../types/sorting";

export function quickSort(array: ArrayBar[]): SortStep[] {
  const arr = array.map((bar) => ({ ...bar }));

  const steps: SortStep[] = [];

  let comparisons = 0;

  let swaps = 0;

  function save() {
    steps.push({
      array: arr.map((b) => ({ ...b })),
      comparisons,
      swaps,
    });
  }

  function partition(low: number, high: number) {
    const pivot = arr[high].value;

    let i = low;

    for (let j = low; j < high; j++) {
      comparisons++;

      if (arr[j].value < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];

        arr[i].state = "swapping";
        arr[j].state = "swapping";

        swaps++;

        save();

        i++;
      }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];

    swaps++;

    save();

    return i;
  }

  function sort(low: number, high: number) {
    if (low >= high) return;

    const pi = partition(low, high);

    sort(low, pi - 1);

    sort(pi + 1, high);
  }

  sort(0, arr.length - 1);

  arr.forEach((bar) => (bar.state = "sorted"));

  save();

  return steps;
}