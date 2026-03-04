"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "./actions";
import { Send } from "lucide-react";

const initial: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initial);

  return (
    <form action={action} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-text-muted">Your Name</label>
          <input
            name="name"
            className="w-full rounded-xl border border-border bg-white/5 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40"
            placeholder="Ussama Binyamin"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-text-muted">Your Email</label>
          <input
            name="email"
            type="email"
            className="w-full rounded-xl border border-border bg-white/5 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40"
            placeholder="muhammadussama35@gmail.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-text-muted">Subject</label>
        <input
          name="subject"
          className="w-full rounded-xl border border-border bg-white/5 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40"
          placeholder="Project / collaboration"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-text-muted">Message</label>
        <textarea
          name="message"
          rows={5}
          className="w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/40"
          placeholder="Tell me what you want to build…"
        />
      </div>

      {state.message ? (
        <div className={`text-sm ${state.ok ? "text-green-300" : "text-amber-200"}`}>
          {state.message}
        </div>
      ) : null}

      <button className="btn btn-primary" disabled={pending} type="submit">
        <Send size={16} />
        {pending ? "Sending..." : "Send Message"}
      </button>

      
    </form>
  );
}
