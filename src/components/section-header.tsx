export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? <p className="text-text-muted max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}
