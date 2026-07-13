import { useEffect, useState } from "react";

import type { SearchingAlgorithm } from "../types/searching";

import { linearSearch } from "../algorithms/linearSearch";
import { binarySearch } from "../algorithms/binarySearch";

import { algorithmInfo } from "../utils/algorithmInfo";

import { useSearching } from "../hooks/useSearching";

import Toolbar from "./Toolbar";
import ArrayBars from "./ArrayBars";

export default function SearchingVisualizer() {
  const {
    array,
    setArray,

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

  const [error, setError] = useState("");

  const info = algorithmInfo[algorithm];

  useEffect(() => {
    generateNewArray(algorithm === "binary");
  }, [algorithm]);

  function clearHighlights() {
    setArray((prev) =>
      prev.map((bar) => ({
        ...bar,
        state: "default",
      }))
    );
  }

  function handleSearch() {
    if (target < 10 || target > 99) {
      setError("Target must be between 10 and 99.");
      return;
    }

    setError("");

    clearHighlights();

    if (algorithm === "binary") {
      play(binarySearch(array, target));
    } else {
      play(linearSearch(array, target));
    }
  }

  function handleGenerate() {
    setError("");

    generateNewArray(algorithm === "binary");
  }

  function handleReset() {
    setError("");

    reset();

    generateNewArray(algorithm === "binary");
  }

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Searching Visualizer
        </h1>

        <select
          value={algorithm}
          onChange={(e) =>
            setAlgorithm(
              e.target.value as SearchingAlgorithm
            )
          }
          className="rounded-xl border border-border bg-surface px-4 py-2 outline-none"
        >
          <option value="linear">
            Linear Search
          </option>

          <option value="binary">
            Binary Search
          </option>
        </select>
      </div>

      {algorithm === "binary" && (
        <div className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-4 text-blue-300">
          Binary Search requires a sorted array. The generated array
          has been automatically sorted.
        </div>
      )}

      {/* Toolbar */}

      <div className="rounded-2xl border border-border bg-surface">
        <Toolbar
          target={target}
          arraySize={arraySize}
          speed={speed}
          isSearching={isSearching}
          error={error}
          onTargetChange={setTarget}
          onArraySizeChange={setArraySize}
          onSpeedChange={setSpeed}
          onGenerate={handleGenerate}
          onSearch={handleSearch}
          onReset={handleReset}
        />
      </div>

      {/* Visualization */}

      <div className="rounded-2xl border border-border bg-surface p-6">
        <ArrayBars array={array} />
      </div>

      {/* Bottom Cards */}

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Live Statistics
          </h2>

          <div className="space-y-2 text-text-secondary">
            <p>
              <strong className="text-white">
                Comparisons:
              </strong>{" "}
              {comparisons}
            </p>

            <p>
              <strong className="text-white">
                Status:
              </strong>{" "}
              {isSearching
                ? "Searching..."
                : searchResult === "idle"
                ? "Idle"
                : "Finished"}
            </p>

            <p>
              <strong className="text-white">
                Result:
              </strong>{" "}
              {searchResult === "idle" && "—"}

              {searchResult === "found" &&
                `✅ Found at index ${foundIndex}`}

              {searchResult === "not-found" &&
                "❌ Target not found"}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Complexity
          </h2>

          <div className="space-y-2 text-text-secondary">
            <p>
              <strong className="text-white">
                Best:
              </strong>{" "}
              {info.best}
            </p>

            <p>
              <strong className="text-white">
                Average:
              </strong>{" "}
              {info.average}
            </p>

            <p>
              <strong className="text-white">
                Worst:
              </strong>{" "}
              {info.worst}
            </p>
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