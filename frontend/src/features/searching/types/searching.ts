export type BarState =
  | "default"
  | "checking"
  | "found";

export interface SearchBar {
  id: number;
  value: number;
  state: BarState;
}

export interface SearchStep {
  array: SearchBar[];

  comparisons: number;

  found: boolean;

  foundIndex: number;
}

export type SearchingAlgorithm =
  | "linear"
  | "binary";