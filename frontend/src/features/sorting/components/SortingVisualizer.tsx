import { bubbleSort } from "../algorithms/bubbleSort";

import ArrayBars from "./ArrayBars";
import Toolbar from "./Toolbar";

import { useSorting } from "../hooks/useSorting";

export default function SortingVisualizer() {
  const {
    array,

    arraySize,
    setArraySize,

    speed,
    setSpeed,

    isSorting,

    generateNewArray,

    play,
    reset,
  } = useSorting();

  function handlePlay() {
    const steps = bubbleSort(array);

    play(steps);
  }

  return (
    <div className="rounded-2xl border border-border bg-surface">

      <div className="flex items-center justify-between p-6">

        <h1 className="text-2xl font-bold">
          Sorting Visualizer
        </h1>

        <select className="rounded-lg border border-border bg-background px-3 py-2">

          <option>Bubble Sort</option>

        </select>

      </div>

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

      <div className="p-6">

        <ArrayBars array={array} />

      </div>

    </div>
  );
}