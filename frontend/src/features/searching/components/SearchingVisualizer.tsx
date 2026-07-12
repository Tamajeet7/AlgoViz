import { useState } from "react";

import type { SearchingAlgorithm } from "../types/searching";

import { algorithmInfo } from "../utils/algorithmInfo";
import { useSearching } from "../hooks/useSearching";

import Toolbar from "./Toolbar";
import ArrayBars from "./ArrayBars";

export default function SearchingVisualizer() {
  const {
    array,

    target,
    setTarget,

    arraySize,
    setArraySize,

    speed,
    setSpeed,

    generateNewArray,
  } = useSearching();

  const [algorithm, setAlgorithm] =
    useState<SearchingAlgorithm>("linear");

  const info = algorithmInfo[algorithm];

  function handleSearch() {
    console.log("Searching for:", target);
  }

  function handleReset() {
    generateNewArray();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Searching Visualizer
        </h1>

        <select
          value={algorithm}
          onChange={(e) =>
            setAlgorithm(e.target.value as SearchingAlgorithm)
          }
          className="rounded-xl border border-border bg-surface px-4 py-2 outline-none"
        >
          <option value="linear">Linear Search</option>
          <option value="binary">Binary Search</option>
        </select>
      </div>

      <div className="rounded-2xl border border-border bg-surface">
        <Toolbar
          target={target}
          arraySize={arraySize}
          speed={speed}
          onTargetChange={setTarget}
          onArraySizeChange={setArraySize}
          onSpeedChange={setSpeed}
          onGenerate={generateNewArray}
          onSearch={handleSearch}
          onReset={handleReset}
        />
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6">
        <ArrayBars array={array} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-xl font-semibold">
            {info.title}
          </h2>

          <div className="space-y-2 text-text-secondary">
            <p>Best: {info.best}</p>
            <p>Average: {info.average}</p>
            <p>Worst: {info.worst}</p>
          </div>
        </div>

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