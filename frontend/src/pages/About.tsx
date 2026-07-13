export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="mb-8 text-5xl font-bold">
        About AlgoViz
      </h1>

      <p className="mb-12 text-lg leading-8 text-text-secondary">
        AlgoViz is an interactive algorithm visualization platform
        built to help students understand how popular algorithms work
        through real-time animations. Instead of only reading theory,
        users can watch each algorithm execute step by step while
        observing comparisons, swaps, traversal order, and time
        complexity.
      </p>

      <div className="grid gap-8 md:grid-cols-2">

        <div className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="mb-5 text-2xl font-semibold">
            Features
          </h2>

          <ul className="space-y-3 text-text-secondary">

            <li>✅ Bubble Sort</li>
            <li>✅ Selection Sort</li>
            <li>✅ Insertion Sort</li>
            <li>✅ Merge Sort</li>
            <li>✅ Quick Sort</li>
            <li>✅ Linear Search</li>
            <li>✅ Binary Search</li>
            <li>✅ Breadth First Search</li>
            <li>✅ Depth First Search</li>

          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">

          <h2 className="mb-5 text-2xl font-semibold">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">

            {[
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "React Router",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-4 py-2 text-primary"
              >
                {tech}
              </span>
            ))}

          </div>

          <p className="mt-8 leading-7 text-text-secondary">
            The project follows a feature-based architecture using
            reusable React components and custom hooks to manage
            algorithm animations and state.
          </p>

        </div>

      </div>

      <div className="mt-12 rounded-2xl border border-border bg-surface p-8">

        <h2 className="mb-4 text-2xl font-semibold">
          Why AlgoViz?
        </h2>

        <p className="leading-8 text-text-secondary">
          Visual learning makes algorithms significantly easier to
          understand. AlgoViz allows learners to experiment with
          different algorithms, compare their behavior, and build a
          stronger intuition for problem solving and data structures.
        </p>

      </div>

    </div>
  );
}