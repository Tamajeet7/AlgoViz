import type {
  GraphEdge,
  GraphNode,
} from "../types/graph";

type Props = {
  nodes: GraphNode[];
  edges: GraphEdge[];
};

export default function GraphCanvas({
  nodes,
  edges,
}: Props) {
  function getNode(id: string) {
    return nodes.find((node) => node.id === id)!;
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-8 flex justify-center">
      <svg width="520" height="360">
        {/* Edges */}

        {edges.map((edge) => {
          const from = getNode(edge.from);
          const to = getNode(edge.to);

          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#64748b"
              strokeWidth={3}
            />
          );
        })}

        {/* Nodes */}

        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={26}
              className={`transition-all duration-300 ${
                node.visited
                  ? "fill-green-500"
                  : "fill-blue-600"
              }`}
            />

            <text
              x={node.x}
              y={node.y + 6}
              fill="white"
              textAnchor="middle"
              fontSize="18"
              fontWeight="bold"
            >
              {node.id}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}