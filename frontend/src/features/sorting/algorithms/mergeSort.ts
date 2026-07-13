import type { ArrayBar, SortStep } from "../types/sorting";

export function mergeSort(array: ArrayBar[]): SortStep[] {
  const arr = array.map((bar) => ({ ...bar }));
  const steps: SortStep[] = [];

  let comparisons = 0;
  let swaps = 0;

  function save() {
    steps.push({
      array: arr.map((bar) => ({ ...bar })),
      comparisons,
      swaps,
    });
  }

  function merge(left: number, mid: number, right: number) {
    const temp = arr.slice(left, right + 1);

    let i = 0;
    let j = mid - left + 1;
    let k = left;

    while (
      i <= mid - left &&
      j <= right - left
    ) {
      comparisons++;

      if (temp[i].value <= temp[j].value) {
        arr[k] = { ...temp[i] };
        i++;
      } else {
        arr[k] = { ...temp[j] };
        j++;
      }

      arr[k].state = "swapping";

      swaps++;

      save();

      k++;
    }

    while (i <= mid - left) {
      arr[k] = { ...temp[i] };
      arr[k].state = "swapping";
      save();
      i++;
      k++;
    }

    while (j <= right - left) {
      arr[k] = { ...temp[j] };
      arr[k].state = "swapping";
      save();
      j++;
      k++;
    }
  }

  function sort(left: number, right: number) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    sort(left, mid);

    sort(mid + 1, right);

    merge(left, mid, right);
  }

  sort(0, arr.length - 1);

  arr.forEach((bar) => (bar.state = "sorted"));

  save();

  return steps;
}