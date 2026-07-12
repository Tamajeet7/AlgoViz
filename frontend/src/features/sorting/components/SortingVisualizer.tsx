import Toolbar from "./Toolbar";
import ArrayBars from "./ArrayBars";

import { useSorting } from "../hooks/useSorting";

export default function SortingVisualizer() {
  const {
    array,

    arraySize,
    setArraySize,

    speed,
    setSpeed,

    generateNewArray,
  } = useSorting();

  return (
    <div className="rounded-2xl border border-border bg-surface">

      <div className="flex items-center justify-between p-6">

        <h1 className="text-2xl font-bold">
          Sorting Visualizer
        </h1>

        <select className="rounded-lg border border-border bg-background px-3 py-2">

          <option>Bubble Sort</option>
          <option>Selection Sort</option>
          <option>Insertion Sort</option>
          <option>Merge Sort</option>
          <option>Quick Sort</option>

        </select>

      </div>

      <Toolbar
        arraySize={arraySize}
        speed={speed}
        onGenerate={generateNewArray}
        onArraySizeChange={setArraySize}
        onSpeedChange={setSpeed}
      />

      <div className="p-6">

        <ArrayBars array={array} />

      </div>

      <div className="flex justify-center gap-10 border-t border-border p-4 text-sm text-text-secondary">

        <span>Comparisons 0</span>

        <span>Swaps 0</span>

        <span>Time 0 ms</span>

      </div>

    </div>
  );
}