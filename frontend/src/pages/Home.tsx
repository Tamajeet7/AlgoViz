import Button from "../components/common/Button";
import FeatureCard from "../components/common/FeatureCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero */}
      <section className="py-24 text-center">
        <h1 className="mb-6 text-7xl font-extrabold">
          Learn Algorithms
          <span className="text-primary"> Visually</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-text-secondary">
          Interactive visualizations for sorting, searching, graph traversal,
          and pathfinding algorithms. Learn by watching every step.
        </p>

        <div className="flex justify-center gap-6">
          <Button>Start Learning</Button>

          <Button>GitHub</Button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-8 md:grid-cols-3">
        <FeatureCard
          title="Sorting"
          description="Visualize Bubble, Merge, Quick, Heap and many more."
        />

        <FeatureCard
          title="Searching"
          description="Watch Binary Search and Linear Search step-by-step."
        />

        <FeatureCard
          title="Graphs"
          description="Explore BFS, DFS, Dijkstra and pathfinding algorithms."
        />
      </section>
    </div>
  );
}