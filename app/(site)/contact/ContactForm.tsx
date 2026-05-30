"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";

const initial: ContactState = { status: "idle", message: "" };

const fieldClass =
  "w-full border-b border-neutral-300 bg-transparent py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none transition-colors duration-200";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);

  if (state.status === "success") {
    return (
      <p className="py-12 text-center text-lg text-neutral-600">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-8">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          className={`${fieldClass} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <p aria-live="polite" className="text-sm text-red-500">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="self-start border border-neutral-900 px-8 py-3 text-sm uppercase tracking-widest text-neutral-900 transition-colors duration-200 hover:bg-neutral-900 hover:text-white disabled:opacity-40"
      >
        {pending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
