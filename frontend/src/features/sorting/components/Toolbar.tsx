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
    <div className="flex flex-wrap items-center gap-4 border-b border-border p-4">

      <button
        onClick={onGenerate}
        disabled={isSorting}
        className="rounded-lg bg-primary px-4 py-2 text-white disabled:opacity-50"
      >
        🎲 Generate
      </button>

      <button
        onClick={onPlay}
        disabled={isSorting}
        className="rounded-lg border border-border px-4 py-2 disabled:opacity-50"
      >
        ▶ Play
      </button>

      <button
        onClick={onReset}
        className="rounded-lg border border-border px-4 py-2"
      >
        🔄 Reset
      </button>

      <div className="ml-auto flex items-center gap-6">

        <div>
          <p className="text-sm">
            Size {arraySize}
          </p>

          <input
            type="range"
            min={10}
            max={100}
            value={arraySize}
            onChange={(e) =>
              onArraySizeChange(Number(e.target.value))
            }
          />
        </div>

        <div>
          <p className="text-sm">
            Speed {speed}
          </p>

          <input
            type="range"
            min={1}
            max={100}
            value={speed}
            onChange={(e) =>
              onSpeedChange(Number(e.target.value))
            }
          />
        </div>

      </div>

    </div>
  );
}