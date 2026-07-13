import type {
  GraphEdge,
  GraphStep,
} from "../types/graph";

export function dfs(edges: GraphEdge[]): GraphStep[] {
  const graph: Record<string, string[]> = {};

  edges.forEach((edge) => {
    if (!graph[edge.from]) graph[edge.from] = [];
    if (!graph[edge.to]) graph[edge.to] = [];

    graph[edge.from].push(edge.to);
    graph[edge.to].push(edge.from);
  });

  const stack = ["A"];

  const visited = new Set<string>();

  const steps: GraphStep[] = [];

  while (stack.length) {
    const current = stack.pop()!;

    if (visited.has(current)) continue;

    visited.add(current);

    steps.push({
      current,
      visited: [...visited],
    });

    [...graph[current]].reverse().forEach((next) => {
      if (!visited.has(next)) {
        stack.push(next);
      }
    });
  }

  return steps;
}