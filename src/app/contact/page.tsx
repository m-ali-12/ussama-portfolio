import { SectionHeader } from "@/components/section-header";
import { contactCards } from "@/lib/data";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <SectionHeader
        title="Contact"
        subtitle="Send a message for projects, collaboration, or support. I reply quickly."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="card p-6 space-y-4">
          <div className="text-sm font-semibold">Contact info</div>
          <div className="space-y-3">
            {contactCards.map((c) => (
              <div key={c.label} className="rounded-2xl border border-border bg-white/5 p-4">
                <div className="text-xs text-text-faint">{c.label}</div>
                <div className="text-sm mt-1">{c.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 lg:col-span-2">
          <div className="text-sm font-semibold">Get in touch</div>
          <p className="text-sm text-text-muted mt-2">
            Share your idea, required pages, and deadline. I’ll respond with a clear plan and timeline.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
