import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Services"
        subtitle="Clear services, clean scope, and a professional layout — inspired by the modern dark style you shared."
      />

      <section className="grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="card p-6">
            <div className="text-sm font-semibold">{s.title}</div>
            <p className="text-sm text-text-muted mt-2">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-text-muted list-disc pl-5">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link className="btn btn-primary" href="/contact">
                Schedule a consultation
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="card p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold">How I work</div>
            <div className="mt-3 space-y-2 text-sm text-text-muted">
              <p>1) Requirements + quick UI wireframe (same day)</p>
              <p>2) Build pages + components with clean structure</p>
              <p>3) Connect data / API / DB (if needed)</p>
              <p>4) Testing + performance tuning</p>

            </div>
          </div>
          <div className="rounded-2xl border border-border bg-white/5 p-5">
            <div className="text-sm font-semibold">Best for</div>
            <div className="mt-3 space-y-2 text-sm text-text-muted">
              <p>• Portfolios</p>
              <p>• Agency websites</p>
              <p>• Landing pages</p>
              <p>• Admin dashboards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
