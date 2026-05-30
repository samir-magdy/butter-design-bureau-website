"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: wire up an email provider (Resend, Nodemailer, etc.)
  console.log("Contact form submission:", { name, email, message });

  return { status: "success", message: "Thanks! I'll get back to you soon." };
}
