import type { ArrayBar } from "../types/sorting";

type Props = {
  array: ArrayBar[];
};

export default function ArrayBars({ array }: Props) {
  return (
    <div className="flex h-[500px] items-end gap-1 rounded-xl bg-surface p-4">
      {array.map((bar) => (
        <div
          key={bar.id}
          className="flex-1 rounded bg-primary transition-all duration-300"
          style={{
            height: `${bar.value}px`,
          }}
        />
      ))}
    </div>
  );
}