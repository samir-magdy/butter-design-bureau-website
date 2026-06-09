export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[100rem] px-6 pb-24 pt-4 sm:px-10">
      <span className="text-sm uppercase tracking-[0.3em] text-neutral-500">
        About
      </span>
      <h1 className="mt-3 text-7xl font-light tracking-tight text-neutral-900">
        Who we are
      </h1>

      <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:gap-20">
        {/* Image */}
        <div className="w-full lg:w-[45%] lg:shrink-0">
          <img
            src="/amr.jpeg"
            alt=""
            className="w-full aspect-[4/3] object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center space-y-6 max-w-xl text-base sm:text-xl text-neutral-500 leading-relaxed">
          <p>
            We are a visual branding studio specializing in creating
            internationally competitive brand identities, communication systems,
            and visual experiences. Our work combines strategic thinking,
            creative excellence, and market-driven design to help organizations
            build meaningful, memorable, and scalable brands.
          </p>
          <p>
            From brand discovery and strategic positioning to identity design,
            digital experiences, motion graphics, and marketing communications,
            we develop cohesive visual ecosystems that strengthen brand
            perception, increase engagement, and support business growth.
          </p>
        </div>
      </div>
    </main>
  );
}
