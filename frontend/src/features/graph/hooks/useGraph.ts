import { useEffect, useRef, useState } from "react";

import type {
  GraphEdge,
  GraphNode,
  GraphStep,
} from "../types/graph";

export function useGraph() {
  const initialNodes: GraphNode[] = [
    { id: "A", x: 250, y: 50, visited: false },
    { id: "B", x: 120, y: 150, visited: false },
    { id: "C", x: 380, y: 150, visited: false },
    { id: "D", x: 70, y: 280, visited: false },
    { id: "E", x: 250, y: 280, visited: false },
    { id: "F", x: 430, y: 280, visited: false },
  ];

  const initialEdges: GraphEdge[] = [
    { from: "A", to: "B" },
    { from: "A", to: "C" },
    { from: "B", to: "D" },
    { from: "B", to: "E" },
    { from: "C", to: "F" },
    { from: "E", to: "F" },
  ];

  const [nodes, setNodes] = useState<GraphNode[]>(initialNodes);

  const [edges] = useState<GraphEdge[]>(initialEdges);

  const [visitedOrder, setVisitedOrder] = useState<string[]>([]);

  const [isRunning, setIsRunning] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  function play(steps: GraphStep[]) {
    if (isRunning) return;

    reset();

    setIsRunning(true);

    let index = 0;

    function animate() {
      if (index >= steps.length) {
        setIsRunning(false);
        return;
      }

      const step = steps[index];

      setNodes((prev) =>
        prev.map((node) => ({
          ...node,
          visited: step.visited.includes(node.id),
        }))
      );

      setVisitedOrder(step.visited);

      index++;

      timeoutRef.current = window.setTimeout(
        animate,
        700
      );
    }

    animate();
  }

  function reset() {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    setNodes((prev) =>
      prev.map((node) => ({
        ...node,
        visited: false,
      }))
    );

    setVisitedOrder([]);

    setIsRunning(false);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    nodes,
    edges,

    visitedOrder,

    isRunning,

    play,

    reset,
  };
}