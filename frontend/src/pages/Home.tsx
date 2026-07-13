import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">

      {/* Hero */}

      <section className="text-center">

        <h1 className="mb-6 text-6xl font-extrabold">
          Learn Algorithms
          <span className="block text-primary">
            Visually
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary">
          AlgoViz helps you understand Data Structures and Algorithms
          through interactive visualizations for sorting, searching
          and graph traversal.
        </p>

        <Link
          to="/sorting"
          className="rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Start Exploring →
        </Link>

      </section>

      {/* Feature Cards */}

      <section className="mt-24 grid gap-8 md:grid-cols-3">

        <Link
          to="/sorting"
          className="rounded-2xl border border-border bg-surface p-8 transition hover:-translate-y-1 hover:border-primary"
        >
          <div className="mb-4 text-5xl">
            🔄
          </div>

          <h2 className="mb-4 text-2xl font-bold">
            Sorting
          </h2>

          <ul className="space-y-2 text-text-secondary">
            <li>• Bubble Sort</li>
            <li>• Selection Sort</li>
            <li>• Insertion Sort</li>
            <li>• Merge Sort</li>
            <li>• Quick Sort</li>
          </ul>

          <p className="mt-8 font-semibold text-primary">
            Open →
          </p>
        </Link>

        <Link
          to="/searching"
          className="rounded-2xl border border-border bg-surface p-8 transition hover:-translate-y-1 hover:border-primary"
        >
          <div className="mb-4 text-5xl">
            🔍
          </div>

          <h2 className="mb-4 text-2xl font-bold">
            Searching
          </h2>

          <ul className="space-y-2 text-text-secondary">
            <li>• Linear Search</li>
            <li>• Binary Search</li>
            <li>• Live Comparisons</li>
            <li>• Animated Search</li>
          </ul>

          <p className="mt-8 font-semibold text-primary">
            Open →
          </p>
        </Link>

        <Link
          to="/graph"
          className="rounded-2xl border border-border bg-surface p-8 transition hover:-translate-y-1 hover:border-primary"
        >
          <div className="mb-4 text-5xl">
            🌐
          </div>

          <h2 className="mb-4 text-2xl font-bold">
            Graph Traversal
          </h2>

          <ul className="space-y-2 text-text-secondary">
            <li>• Breadth First Search</li>
            <li>• Depth First Search</li>
            <li>• Traversal Animation</li>
          </ul>

          <p className="mt-8 font-semibold text-primary">
            Open →
          </p>
        </Link>

      </section>

      {/* Tech Stack */}

      <section className="mt-24 rounded-2xl border border-border bg-surface p-10 text-center">

        <h2 className="mb-8 text-3xl font-bold">
          Built With
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-6 py-3 text-primary"
            >
              {tech}
            </span>
          ))}

        </div>

      </section>

    </div>
  );
}