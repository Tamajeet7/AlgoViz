import type { ArrayBar } from "../types/sorting";

type Props = {
  array: ArrayBar[];
};

export default function ArrayBars({ array }: Props) {
  const gap = 2; // px
  const barWidth = `calc((100% - ${(array.length - 1) * gap}px) / ${array.length})`;

  return (
    <div className="flex h-[45vh] min-h-[260px] max-h-[420px] items-end gap-[2px] rounded-2xl bg-surface p-4 overflow-hidden">
      {array.map((bar) => (
        <div
          key={bar.id}
          className="rounded-t-md bg-gradient-to-t from-[#355CFF] to-[#6F8CFF] transition-all duration-300"
          style={{
            width: barWidth,
            height: `${bar.value}%`,
          }}
        />
      ))}
    </div>
  );
}