import type { SearchingAlgorithm } from "../types/searching";

export const algorithmInfo: Record<
  SearchingAlgorithm,
  {
    title: string;
    best: string;
    average: string;
    worst: string;
    explanation: string;
  }
> = {
  linear: {
    title: "Linear Search",
    best: "O(1)",
    average: "O(n)",
    worst: "O(n)",
    explanation:
      "Linear Search checks each element one by one until the target value is found or the array ends.",
  },

  binary: {
    title: "Binary Search",
    best: "O(1)",
    average: "O(log n)",
    worst: "O(log n)",
    explanation:
      "Binary Search repeatedly divides a sorted array into halves to quickly locate the target element.",
  },
};