import ArrayBars from "./ArrayBars";
import { useSorting } from "../hooks/useSorting";

export default function SortingVisualizer() {
  const { array } = useSorting();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Sorting Visualizer
      </h1>

      <ArrayBars array={array} />
    </div>
  );
}