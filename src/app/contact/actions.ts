"use server";

export type ContactState = { ok: boolean; message: string };

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function sendContact(prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill Name, Email, and Message." };
  }
  if (!isEmail(email)) {
    return { ok: false, message: "Please enter a valid email." };
  }

  // ✅ Production note:
  // Here you can send email via Resend / Nodemailer / SendGrid.
  // For now we just simulate success so the portfolio works without setup.
  // You can log to Vercel Functions logs:
  console.log("[CONTACT]", { name, email, subject, message });

  return { ok: true, message: "Message received! I’ll get back to you shortly." };
}
