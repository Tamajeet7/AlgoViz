import type {
  GraphEdge,
  GraphStep,
} from "../types/graph";

export function bfs(edges: GraphEdge[]): GraphStep[] {
  const graph: Record<string, string[]> = {};

  edges.forEach((edge) => {
    if (!graph[edge.from]) graph[edge.from] = [];
    if (!graph[edge.to]) graph[edge.to] = [];

    graph[edge.from].push(edge.to);
    graph[edge.to].push(edge.from);
  });

  const queue = ["A"];
  const visited = new Set<string>();

  const steps: GraphStep[] = [];

  while (queue.length) {
    const current = queue.shift()!;

    if (visited.has(current)) continue;

    visited.add(current);

    steps.push({
      current,
      visited: [...visited],
    });

    graph[current].forEach((next) => {
      if (!visited.has(next)) {
        queue.push(next);
      }
    });
  }

  return steps;
}