import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold text-primary transition hover:opacity-80"
        >
          AlgoViz
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <Link to="/sorting" className="hover:text-primary transition">
            Sorting
          </Link>

          <Link to="/searching" className="hover:text-primary transition">
            Searching
          </Link>

          <Link to="/graph" className="hover:text-primary transition">
            Graph
          </Link>

          <Link to="/about" className="hover:text-primary transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}