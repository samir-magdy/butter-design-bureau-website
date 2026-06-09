import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Get in touch
      </span>
      <h1 className="mt-3 text-5xl font-light tracking-tight text-neutral-900">
        Contact
      </h1>
      <p className="mt-4 text-sm text-neutral-500">
        Have a project in mind? Fill out the form and I'll be in touch.
      </p>
      <div className="mt-12">
        <ContactForm />
      </div>
    </main>
  );
}
