type Props = {
  arraySize: number;
  speed: number;

  onGenerate: () => void;

  onArraySizeChange: (value: number) => void;
  onSpeedChange: (value: number) => void;
};

export default function Toolbar({
  arraySize,
  speed,
  onGenerate,
  onArraySizeChange,
  onSpeedChange,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b border-border p-4">

      <button
        onClick={onGenerate}
        className="rounded-lg bg-primary px-4 py-2 font-medium"
      >
        🎲 Generate
      </button>

      <button className="rounded-lg border border-border px-4 py-2">
        ▶ Start
      </button>

      <button className="rounded-lg border border-border px-4 py-2">
        🔄 Reset
      </button>

      <div className="ml-auto flex items-center gap-6">

        <div className="flex items-center gap-2">

          <span className="text-sm">
            Size
          </span>

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

        <div className="flex items-center gap-2">

          <span className="text-sm">
            Speed
          </span>

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