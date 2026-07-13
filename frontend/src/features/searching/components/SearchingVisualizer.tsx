import { useState } from "react";

import type { SearchingAlgorithm } from "../types/searching";

import { algorithmInfo } from "../utils/algorithmInfo";

import { linearSearch } from "../algorithms/linearSearch";

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

    comparisons,

    isSearching,

    searchResult,

    foundIndex,

    generateNewArray,

    play,

    reset,
  } = useSearching();

  const [algorithm, setAlgorithm] =
    useState<SearchingAlgorithm>("linear");

  const info = algorithmInfo[algorithm];

  function handleSearch() {
    play(linearSearch(array, target));
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
          className="rounded-xl border border-border bg-surface px-4 py-2"
        >
          <option value="linear">Linear Search</option>

          <option value="binary">
            Binary Search (Coming Soon)
          </option>
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
          onReset={reset}
        />
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6">
        <ArrayBars array={array} />
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Live Statistics
        </h2>

        <div className="space-y-2 text-text-secondary">
          <p>Comparisons: {comparisons}</p>

          <p>
            Status: {
              isSearching
                ? "Searching..."
                : searchResult === "idle"
                ? "Idle"
                : "Finished"
            }
          </p>

          <p>
            Result:{" "}
            {searchResult === "idle" && "—"}

            {searchResult === "found" &&
              `✅ Found at index ${foundIndex}`}

            {searchResult === "not-found" &&
              "❌ Target not found"}
          </p>
        </div>
      </div>
    </div>
  );
}