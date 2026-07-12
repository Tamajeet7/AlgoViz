export type BarState =
  | "default"
  | "comparing"
  | "swapping"
  | "sorted";

export interface ArrayBar {
  id: number;
  value: number;
  state: BarState;
}

export interface SortStep {
  array: ArrayBar[];

  comparisons: number;

  swaps: number;
}

export type SortingAlgorithm =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick";