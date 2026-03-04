import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { highlights, site } from "@/lib/data";
import { HighlightIcon } from "@/components/icon";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-5">
          <div className="badge">Available for freelance • Remote</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Hi, I’m <span className="text-white">{site.name}</span> — I build
            <span className="text-accent"> modern</span> App.
          </h1>
          <p className="text-text-muted max-w-xl">
            Professional, multi‑page portfolio +  Apps with clean UI, strong backend, and SEO-first structure.
            Built for speed, clarity, and real-world deployment on Vercel.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link className="btn btn-primary" href="/portfolio">
              View Portfolio <ArrowRight size={16} />
            </Link>
            <Link className="btn" href="/contact">
              Let’s Talk <ArrowRight size={16} />
            </Link>
            
          </div>

          <div className="flex flex-col gap-2 text-sm text-text-muted pt-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent" />
              Clean UI + responsive layout (mobile-first)
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent" />
              Proper routing (each section is a separate page)
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-accent" />
              Ready for GitHub 
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="card p-6 md:p-8 overflow-hidden">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-text-muted">Current focus</div>
                <div className="text-lg font-semibold mt-1">Full‑Stack • Flutter • .Dart </div>
              </div>
              <span className="badge animate-floaty">⚡ Fast builds</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl border border-border bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 border border-border">
                      <HighlightIcon name={h.icon} />
                    </span>
                    {h.title}
                  </div>
                  <div className="text-sm text-text-muted mt-2">{h.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-black/20 p-4">
              <div className="text-xs text-text-faint"></div>
              <div className="text-sm text-text-muted mt-1">
               
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-text-faint">
          </div>
        </div>
      </section>

      <section className="card p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-1">
            <div className="text-2xl font-semibold">10+</div>
            <div className="text-sm text-text-muted">Projects completed</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold">3–7 days</div>
            <div className="text-sm text-text-muted">Typical delivery timeline</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-semibold">A+</div>
            <div className="text-sm text-text-muted">Code quality & structure</div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-sm font-semibold">Featured preview</div>
          <p className="text-sm text-text-muted mt-2">
            This layout is inspired by a modern dark portfolio style (like the video you shared): top navbar,
            clean pages, cards, and a project lightbox.
          </p>
          <div className="mt-4 relative aspect-[16/9] rounded-2xl border border-border overflow-hidden bg-black/30">
            <Image
              src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
              alt="Workspace preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 92vw, 50vw"
            />
          </div>
        </div>

        <div className="card p-6">
          <div className="text-sm font-semibold">What you get</div>
          <ul className="mt-4 space-y-2 text-sm text-text-muted list-disc pl-5">
            <li>Separate pages for every section (Home, About, Resume, Services, Portfolio, Contact)</li>
            <li>Portfolio filters + project modal preview</li>
            <li>Reusable components + centralized data file</li>
            <li>Clean UI with dark theme + subtle glow</li>
            <li>Vercel ready (App Router)</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/about">
              Explore About <ArrowRight size={16} />
            </Link>
            <Link className="btn" href="/services">
              Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
