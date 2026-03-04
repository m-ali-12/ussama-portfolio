import Link from "next/link";
import { Download } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Timeline } from "@/components/timeline";
import { education, experience } from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Resume"
        subtitle="Experience, education, and what I’ve worked on. Keep it simple, clean, and credible."
      />

      <div className="flex flex-wrap gap-3">
        
        <Link className="btn" href="/portfolio">
          See projects
        </Link>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <Timeline title="Experience" items={experience} />
        <Timeline title="Education" items={education} />
      </section>

      <section className="card p-6">
        <div className="text-sm font-semibold">Quick summary</div>
        <p className="text-sm text-text-muted mt-3">
          I build modern App and dashboards with strong structure, reusable components, and production-friendly deployment.

        </p>
      </section>
    </div>
  );
}
