type Props = {
  target: number;
  arraySize: number;
  speed: number;
  isSearching: boolean;

  error: string;

  onTargetChange: (value: number) => void;
  onArraySizeChange: (value: number) => void;
  onSpeedChange: (value: number) => void;

  onGenerate: () => void;
  onSearch: () => void;
  onReset: () => void;
};

export default function Toolbar({
  target,
  arraySize,
  speed,
  isSearching,
  error,
  onTargetChange,
  onArraySizeChange,
  onSpeedChange,
  onGenerate,
  onSearch,
  onReset,
}: Props) {
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onGenerate}
          disabled={isSearching}
          className="rounded-xl bg-primary px-5 py-2 font-medium text-white disabled:opacity-50"
        >
          🎲 Generate
        </button>

        <button
          onClick={onSearch}
          disabled={isSearching}
          className="rounded-xl border border-border px-5 py-2 disabled:opacity-50"
        >
          {isSearching ? "Searching..." : "🔍 Search"}
        </button>

        <button
          onClick={onReset}
          disabled={isSearching}
          className="rounded-xl border border-border px-5 py-2 disabled:opacity-50"
        >
          🔄 Reset
        </button>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Target Value
        </label>

        <input
          type="number"
          min={10}
          max={99}
          value={target}
          onChange={(e) =>
            onTargetChange(Number(e.target.value))
          }
          className="w-full rounded-xl border border-border bg-background px-4 py-2"
        />

        {error && (
          <p className="mt-2 text-sm text-red-400">
            {error}
          </p>
        )}
      </div>

      <div>
        <div className="mb-2 flex justify-between">
          <span>Array Size</span>
          <span>{arraySize}</span>
        </div>

        <input
          type="range"
          min={10}
          max={100}
          value={arraySize}
          onChange={(e) =>
            onArraySizeChange(Number(e.target.value))
          }
          className="w-full"
        />
      </div>

      <div>
        <div className="mb-2 flex justify-between">
          <span>Animation Speed</span>
          <span>{speed}</span>
        </div>

        <input
          type="range"
          min={1}
          max={100}
          value={speed}
          onChange={(e) =>
            onSpeedChange(Number(e.target.value))
          }
          className="w-full"
        />
      </div>
    </div>
  );
}