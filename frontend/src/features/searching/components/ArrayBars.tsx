import type { SearchBar } from "../types/searching";

type Props = {
  array: SearchBar[];
};

function getColor(state: SearchBar["state"]) {
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
    <div className="flex h-[45vh] min-h-[260px] max-h-[420px] items-end gap-[2px] overflow-hidden rounded-2xl bg-surface p-4">
      {array.map((bar) => (
        <div
          key={bar.id}
          className={`${getColor(bar.state)} rounded-t-md transition-all duration-150`}
          style={{
            width: barWidth,
            height: `${bar.value}%`,
          }}
        />
      ))}
    </div>
  );
}