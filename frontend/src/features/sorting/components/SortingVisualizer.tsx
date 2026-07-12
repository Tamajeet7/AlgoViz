import { useState } from "react";

import type { SortingAlgorithm } from "../types/sorting";

import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";

import { algorithmInfo } from "../utils/algorithmInfo";

import { useSorting } from "../hooks/useSorting";

import ArrayBars from "./ArrayBars";
import Toolbar from "./Toolbar";

export default function SortingVisualizer() {
  const {
    array,

    arraySize,
    setArraySize,

    speed,
    setSpeed,

    isSorting,

    comparisons,
    swaps,

    generateNewArray,

    play,
    reset,
  } = useSorting();

  const [algorithm, setAlgorithm] =
    useState<SortingAlgorithm>("bubble");

  const info = algorithmInfo[algorithm];

  function handlePlay() {
    let steps;

    switch (algorithm) {
      case "selection":
        steps = selectionSort(array);
        break;

      case "insertion":
        steps = insertionSort(array);
        break;

      default:
        steps = bubbleSort(array);
    }

    play(steps);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Sorting Visualizer
        </h1>

        <select
          value={algorithm}
          onChange={(e) =>
            setAlgorithm(e.target.value as SortingAlgorithm)
          }
          className="rounded-xl border border-border bg-surface px-4 py-2 outline-none"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge" disabled>
            Merge Sort (Coming Soon)
          </option>
          <option value="quick" disabled>
            Quick Sort (Coming Soon)
          </option>
        </select>
      </div>

      <div className="rounded-2xl border border-border bg-surface">
        <Toolbar
          arraySize={arraySize}
          speed={speed}
          isSorting={isSorting}
          onGenerate={generateNewArray}
          onPlay={handlePlay}
          onReset={reset}
          onArraySizeChange={setArraySize}
          onSpeedChange={setSpeed}
        />
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6">
        <ArrayBars array={array} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Live Statistics */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Live Statistics
          </h2>

          <div className="space-y-2 text-text-secondary">
            <p>Comparisons: {comparisons}</p>
            <p>Swaps: {swaps}</p>
            <p>Status: {isSorting ? "Sorting..." : "Idle"}</p>
          </div>
        </div>

        {/* Complexity */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="mb-4 text-xl font-semibold">
            {info.title}
          </h2>

          <div className="space-y-2 text-text-secondary">
            <p>Best: {info.best}</p>
            <p>Average: {info.average}</p>
            <p>Worst: {info.worst}</p>
            <p>Space: {info.space}</p>
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