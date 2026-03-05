import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { SkillBars } from "@/components/skill-bars";
import { site } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="About"
        subtitle="A quick intro about who I am, how I work, and what you can expect when we collaborate."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <div className="text-sm font-semibold">My story</div>
          <div className="mt-3 space-y-3 text-sm text-text-muted leading-6">
            <p>
              I’m {site.name}, a full‑stack developer who likes clean UI, solid backend logic, and
              real deployment workflows. I build App that look professional and
              work smoothly on every device.
            </p>
            <p>
              My priority is always: structure first, then design, then performance. That’s why
              projects stay maintainable and scale without breaking.
            </p>
            <p>
              If you want a portfolio, business site, landing page, or an admin dashboard.
            </p>
          </div>

          <div className="hr" />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white/5 p-4">
              <div className="text-sm font-semibold">Tech I enjoy</div>
              <div className="text-sm text-text-muted mt-2">
                .Dart, Php, SQL, GitHub, 

              </div>
            </div>
            <div className="rounded-2xl border border-border bg-white/5 p-4">
              <div className="text-sm font-semibold">Work style</div>
              <div className="text-sm text-text-muted mt-2">
                Clear requirements → fast prototype → clean components → testing → deployment.
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/contact" className="btn btn-primary">
              Contact me
            </Link>
          </div>
        </div>

        <div className="card p-6">
          <div className="text-sm font-semibold">Profile</div>
          <div className="mt-4 relative aspect-square rounded-2xl overflow-hidden border border-border bg-black/30">
            <Image
              src="../public/projects/image.jpeg"
              // https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop
              alt="Profile placeholder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 92vw, 33vw"
            />
          </div>
          <div className="mt-4 text-sm text-text-muted">
            {/* Replace this image with your own in <span className="text-white/80">/public</span>. */}
          </div>
          <div className="mt-4 space-y-1 text-sm">
            <div className="text-text-muted">Location</div>
            <div>{site.location}</div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="text-sm font-semibold">Skills</div>
        <SkillBars />
      </section>
    </div>
  );
}
