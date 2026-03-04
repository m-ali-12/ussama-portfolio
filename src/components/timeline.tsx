export function Timeline({
  title,
  items,
}: {
  title: string;
  items: Array<{
    title: string;
    company?: string;
    org?: string;
    period: string;
    bullets: string[];
  }>;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold">{title}</div>
        <span className="badge">Updated</span>
      </div>

      <div className="mt-6 space-y-6">
        {items.map((it, idx) => (
          <div key={idx} className="relative pl-6">
            <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-accent/80" />
            <div className="text-sm font-semibold">
              {it.title}{" "}
              <span className="text-text-faint font-normal">
                {it.company ? `• ${it.company}` : it.org ? `• ${it.org}` : ""}
              </span>
            </div>
            <div className="text-xs text-text-faint mt-1">{it.period}</div>
            <ul className="mt-3 space-y-2 text-sm text-text-muted list-disc pl-5">
              {it.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
