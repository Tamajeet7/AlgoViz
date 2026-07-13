type Props = {
  algorithm: "bfs" | "dfs";

  isRunning: boolean;

  onAlgorithmChange: (
    algorithm: "bfs" | "dfs"
  ) => void;

  onRun: () => void;

  onReset: () => void;
};

export default function Toolbar({
  algorithm,
  isRunning,
  onAlgorithmChange,
  onRun,
  onReset,
}: Props) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <label className="font-medium">
            Algorithm
          </label>

          <select
            value={algorithm}
            disabled={isRunning}
            onChange={(e) =>
              onAlgorithmChange(
                e.target.value as "bfs" | "dfs"
              )
            }
            className="rounded-xl border border-border bg-background px-4 py-2"
          >
            <option value="bfs">
              Breadth First Search
            </option>

            <option value="dfs">
              Depth First Search
            </option>
          </select>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onRun}
            disabled={isRunning}
            className="rounded-xl bg-primary px-5 py-2 font-medium text-white disabled:opacity-50"
          >
            ▶ Run
          </button>

          <button
            onClick={onReset}
            disabled={isRunning}
            className="rounded-xl border border-border px-5 py-2 disabled:opacity-50"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}