const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/amrksherif" },
  { label: "Instagram", href: "https://www.instagram.com/amr.sherif/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amr-sherif-31081218a/" },
];

const email = "a.sherifworks@gmail.com";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-neutral-950 px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-[95rem]">
        {/* Main row */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Left — identity */}
          <div className="flex flex-col gap-2">
            <span className="text-lg font-extralight tracking-tight text-white">
              Amr Sherif
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Design &amp; Development
            </span>
          </div>

          {/* Right — contact */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-neutral-800 pt-6">
          <span className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Amr Sherif. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
