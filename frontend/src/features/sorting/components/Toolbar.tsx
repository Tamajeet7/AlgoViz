type Props = {
  arraySize: number;
  speed: number;
  isSorting: boolean;

  onGenerate: () => void;
  onPlay: () => void;
  onReset: () => void;

  onArraySizeChange: (value: number) => void;
  onSpeedChange: (value: number) => void;
};

export default function Toolbar({
  arraySize,
  speed,
  isSorting,
  onGenerate,
  onPlay,
  onReset,
  onArraySizeChange,
  onSpeedChange,
}: Props) {
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onGenerate}
          disabled={isSorting}
          className="rounded-xl bg-primary px-5 py-2 font-medium text-white transition hover:opacity-90 disabled:opacity-50"
        >
          🎲 Generate
        </button>

        <button
          onClick={onPlay}
          disabled={isSorting}
          className="rounded-xl border border-border px-5 py-2 transition hover:bg-white/5 disabled:opacity-50"
        >
          ▶ Play
        </button>

        <button
          onClick={onReset}
          className="rounded-xl border border-border px-5 py-2 transition hover:bg-white/5"
        >
          🔄 Reset
        </button>
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
          onChange={(e) => onArraySizeChange(Number(e.target.value))}
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
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}