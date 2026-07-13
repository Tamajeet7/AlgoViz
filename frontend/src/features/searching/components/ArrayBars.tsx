import type { SearchBar } from "../types/searching";

type Props = {
  array: SearchBar[];
};

function getBarColor(state: SearchBar["state"]) {
  switch (state) {
    case "checking":
      return "bg-yellow-400";

    case "found":
      return "bg-green-500";

    default:
      return "bg-primary";
  }
}

export default function ArrayBars({ array }: Props) {
  const gap = 2;

  const barWidth = `calc((100% - ${
    (array.length - 1) * gap
  }px) / ${array.length})`;

  return (
    <div className="flex h-[45vh] min-h-[260px] max-h-[420px] items-end gap-[2px] overflow-hidden rounded-xl bg-surface p-4">
      {array.map((bar) => (
        <div
          key={bar.id}
          className="relative flex justify-center"
          style={{
            width: barWidth,
            height: "100%",
          }}
        >
          {(bar.state === "checking" ||
            bar.state === "found") && (
            <div className="absolute top-0 text-xs font-semibold text-white">
              {bar.value}
            </div>
          )}

          <div
            className={`${getBarColor(bar.state)} absolute bottom-0 w-full rounded-t-md transition-all duration-150`}
            style={{
              height: `${bar.value}%`,
            }}
          />
        </div>
      ))}
    </div>
  );
}