export interface GraphNode {
  id: string;
  x: number;
  y: number;
  visited: boolean;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export interface GraphStep {
  visited: string[];
  current: string;
}

export type GraphAlgorithm =
  | "bfs"
  | "dfs";