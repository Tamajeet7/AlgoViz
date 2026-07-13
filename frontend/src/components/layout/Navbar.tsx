import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="text-3xl font-extrabold text-primary"
        >
          AlgoViz
        </Link>

        <div className="flex items-center gap-8 text-sm font-semibold">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/sorting"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition"
            }
          >
            Sorting
          </NavLink>

          <NavLink
            to="/searching"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition"
            }
          >
            Searching
          </NavLink>

          <NavLink
            to="/graph"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition"
            }
          >
            Graph
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "hover:text-primary transition"
            }
          >
            About
          </NavLink>

        </div>

      </div>
    </nav>
  );
}