import type { SortingAlgorithm } from "../types/sorting";

export const algorithmInfo: Record<
  SortingAlgorithm,
  {
    title: string;
    best: string;
    average: string;
    worst: string;
    space: string;
    explanation: string;
  }
> = {
  bubble: {
    title: "Bubble Sort",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    explanation:
      "Bubble Sort repeatedly compares adjacent elements and swaps them until the array is sorted.",
  },

  selection: {
    title: "Selection Sort",
    best: "O(n²)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    explanation:
      "Selection Sort repeatedly selects the minimum element and places it at the beginning of the array.",
  },

  insertion: {
    title: "Insertion Sort",
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    explanation:
      "Insertion Sort builds the sorted portion of the array one element at a time by inserting each element into its correct position.",
  },

  merge: {
    title: "Merge Sort",
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n log n)",
    space: "O(n)",
    explanation:
      "Merge Sort uses the divide-and-conquer technique by recursively splitting the array into halves and merging them back in sorted order.",
  },

  quick: {
    title: "Quick Sort",
    best: "O(n log n)",
    average: "O(n log n)",
    worst: "O(n²)",
    space: "O(log n)",
    explanation:
      "Quick Sort selects a pivot element, partitions the array around it, and recursively sorts the resulting partitions.",
  },
};