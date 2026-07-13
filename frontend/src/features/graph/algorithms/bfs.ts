import type { GraphEdge, GraphStep } from "../types/graph";

export function bfs(edges: GraphEdge[]): GraphStep[] {
  const graph: Record<string, string[]> = {};

  edges.forEach((edge) => {
    graph[edge.from] ??= [];
    graph[edge.to] ??= [];

    graph[edge.from].push(edge.to);
    graph[edge.to].push(edge.from);
  });

  const queue = ["A"];

  const visited = new Set<string>();

  const steps: GraphStep[] = [];

  while (queue.length) {
    const node = queue.shift()!;

    if (visited.has(node)) continue;

    visited.add(node);

    steps.push({
      current: node,
      visited: [...visited],
    });

    graph[node].forEach((next) => {
      if (!visited.has(next)) {
        queue.push(next);
      }
    });
  }

  return steps;
}