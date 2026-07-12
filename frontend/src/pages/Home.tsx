import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-6 text-6xl font-bold">
        Learn Algorithms
        <span className="text-primary"> Visually</span>
      </h1>

      <p className="mb-10 max-w-2xl text-lg text-text-secondary">
        Interactive visualizations for sorting, searching, graph traversal,
        and pathfinding algorithms.
      </p>

      <Link
        to="/sorting"
        className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Start Exploring
      </Link>
    </div>
  );
}