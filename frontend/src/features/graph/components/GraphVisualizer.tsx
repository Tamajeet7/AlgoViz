import { useState } from "react";

import type { GraphAlgorithm } from "../types/graph";

import { bfs } from "../algorithms/bfs";
import { dfs } from "../algorithms/dfs";

import { algorithmInfo } from "../utils/algorithmInfo";

import { useGraph } from "../hooks/useGraph";

import Toolbar from "./Toolbar";
import GraphCanvas from "./GraphCanvas";

export default function GraphVisualizer() {
  const {
    nodes,
    edges,
    visitedOrder,
    isRunning,
    play,
    reset,
  } = useGraph();

  const [algorithm, setAlgorithm] =
    useState<GraphAlgorithm>("bfs");

  const info = algorithmInfo[algorithm];

  function handleRun() {
    if (algorithm === "bfs") {
      play(bfs(edges));
    } else {
      play(dfs(edges));
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Graph Visualizer
        </h1>

        <span className="text-sm text-text-secondary">
          Starting Node: A
        </span>
      </div>

      {/* Toolbar */}

      <Toolbar
        algorithm={algorithm}
        isRunning={isRunning}
        onAlgorithmChange={setAlgorithm}
        onRun={handleRun}
        onReset={reset}
      />

      {/* Graph */}

      <GraphCanvas
        nodes={nodes}
        edges={edges}
      />

      {/* Bottom Cards */}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Traversal */}

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Traversal Order
          </h2>

          <p className="leading-7 text-text-secondary">
            {visitedOrder.length
              ? visitedOrder.join(" → ")
              : "Press Run"}
          </p>
        </div>

        {/* Complexity */}

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Complexity
          </h2>

          <div className="space-y-2 text-text-secondary">
            <p>Best: {info.best}</p>
            <p>Average: {info.average}</p>
            <p>Worst: {info.worst}</p>
          </div>
        </div>

        {/* Explanation */}

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Explanation
          </h2>

          <p className="leading-7 text-text-secondary">
            {info.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}