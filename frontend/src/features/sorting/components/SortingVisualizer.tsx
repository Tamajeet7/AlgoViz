import { useState } from "react";

import type { SortingAlgorithm } from "../types/sorting";

import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "../algorithms/mergeSort";
import { quickSort } from "../algorithms/quickSort";

import { algorithmInfo } from "../utils/algorithmInfo";

import { useSorting } from "../hooks/useSorting";

import Toolbar from "./Toolbar";
import ArrayBars from "./ArrayBars";

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
    switch (algorithm) {
      case "bubble":
        play(bubbleSort(array));
        break;

      case "selection":
        play(selectionSort(array));
        break;

      case "insertion":
        play(insertionSort(array));
        break;

      case "merge":
        play(mergeSort(array));
        break;

      case "quick":
        play(quickSort(array));
        break;
    }
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Sorting Visualizer
        </h1>

        <select
          value={algorithm}
          onChange={(e) =>
            setAlgorithm(
              e.target.value as SortingAlgorithm
            )
          }
          className="rounded-xl border border-border bg-surface px-4 py-2"
        >
          <option value="bubble">
            Bubble Sort
          </option>

          <option value="selection">
            Selection Sort
          </option>

          <option value="insertion">
            Insertion Sort
          </option>

          <option value="merge">
            Merge Sort
          </option>

          <option value="quick">
            Quick Sort
          </option>
        </select>

      </div>

      {/* Toolbar */}

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
              Comparisons: {comparisons}
            </p>

            <p>
              Swaps: {swaps}
            </p>

            <p>
              Status:{" "}
              {isSorting
                ? "Sorting..."
                : "Idle"}
            </p>

          </div>

        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">

          <h2 className="mb-4 text-xl font-semibold">
            Complexity
          </h2>

          <div className="space-y-2 text-text-secondary">

            <p>
              Best: {info.best}
            </p>

            <p>
              Average: {info.average}
            </p>

            <p>
              Worst: {info.worst}
            </p>

            <p>
              Space: {info.space}
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