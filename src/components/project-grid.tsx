"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { ExternalLink, Github } from "lucide-react";
import { projects, type ProjectCategory } from "@/lib/data";
import { ProjectModal } from "./project-modal";

const cats: ProjectCategory[] = ["All", "Web", "Dashboard", "E‑Commerce", "Landing"];

export function ProjectGrid() {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            className={clsx("btn", active === c && "btn-primary")}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {filtered.map((p) => (
          <div key={p.slug} className="card overflow-hidden">
            <button
              className="relative w-full aspect-[16/10] bg-black/30"
              onClick={() => {
                setSelected(p);
                setOpen(true);
              }}
              aria-label={`Open ${p.title}`}
            >
              <Image
                src={p.cover}
                alt={p.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 92vw, 50vw"
              />
            </button>

            <div className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{p.title}</div>
                  <div className="text-xs text-text-faint mt-1">{p.category}</div>
                </div>
                <div className="flex gap-2">
                  <a className="btn" href={p.links.live} target="_blank" rel="noreferrer" aria-label="Live">
                    <ExternalLink size={16} />
                  </a>
                  <a className="btn" href={p.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <p className="text-sm text-text-muted">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        project={selected}
      />
    </div>
  );
}
