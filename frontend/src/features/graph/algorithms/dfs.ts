import type { GraphEdge, GraphStep } from "../types/graph";

export function dfs(edges: GraphEdge[]): GraphStep[] {
  const graph: Record<string, string[]> = {};

  edges.forEach((edge) => {
    graph[edge.from] ??= [];
    graph[edge.to] ??= [];

    graph[edge.from].push(edge.to);
    graph[edge.to].push(edge.from);
  });

  const stack = ["A"];

  const visited = new Set<string>();

  const steps: GraphStep[] = [];

  while (stack.length) {
    const node = stack.pop()!;

    if (visited.has(node)) continue;

    visited.add(node);

    steps.push({
      current: node,
      visited: [...visited],
    });

    [...graph[node]].reverse().forEach((next) => {
      if (!visited.has(next)) {
        stack.push(next);
      }
    });
  }

  return steps;
}