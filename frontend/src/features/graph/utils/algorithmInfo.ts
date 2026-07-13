import type { GraphAlgorithm } from "../types/graph";

export const algorithmInfo: Record<
  GraphAlgorithm,
  {
    title: string;
    best: string;
    average: string;
    worst: string;
    explanation: string;
  }
> = {
  bfs: {
    title: "Breadth First Search",
    best: "O(V + E)",
    average: "O(V + E)",
    worst: "O(V + E)",
    explanation:
      "Breadth First Search explores the graph level by level using a queue. It always visits all neighbours before moving deeper."
  },

  dfs: {
    title: "Depth First Search",
    best: "O(V + E)",
    average: "O(V + E)",
    worst: "O(V + E)",
    explanation:
      "Depth First Search explores one path completely before backtracking. It is commonly implemented using recursion or a stack."
  }
};