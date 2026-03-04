import { skills } from "@/lib/data";

export function SkillBars() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {skills.map((group) => (
        <div key={group.group} className="card p-6">
          <div className="text-sm font-semibold">{group.group}</div>
          <div className="mt-4 space-y-4">
            {group.items.map((s) => (
              <div key={s.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">{s.name}</span>
                  <span className="text-text-faint">{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/5 border border-border overflow-hidden">
                  <div
                    className="h-full bg-accent/80"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
