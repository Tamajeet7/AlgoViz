export interface ArrayBar {
  id: number;
  value: number;
}

export interface SortStep {
  array: ArrayBar[];
  comparing: number[];
  swapped: number[];
}

export type SortingAlgorithm =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick";