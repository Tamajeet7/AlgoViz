type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8 transition duration-300 hover:-translate-y-2 hover:border-primary">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>

      <p className="text-text-secondary">
        {description}
      </p>
    </div>
  );
}