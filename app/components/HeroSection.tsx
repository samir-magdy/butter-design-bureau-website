export default function HeroSection() {
  return (
    <section
      className="fixed inset-0 z-0"
      style={{
        background: `
          radial-gradient(ellipse 95% 90% at -5% -10%, #D94010 0%, transparent 62%),
          radial-gradient(ellipse 90% 88% at 105% -8%,  #5C1580 0%, transparent 62%),
          radial-gradient(ellipse 70% 60% at 50% 115%,  rgba(55, 10, 80, 0.75) 0%, transparent 60%),
          #ffffff
        `,
      }}
    >
      {/* top-left title */}
      <div className="absolute top-10  left-5 sm:top-14 sm:left-14">
        <p className="text-[3.5rem] font-black leading-none tracking-tight text-white sm:text-[5rem]">
          Butter
        </p>
        <p className="text-[1.6rem] font-normal leading-tight text-black! sm:text-[2.4rem]">
          Design Studio
        </p>
      </div>

      {/* bottom-right tagline */}
      <p className="absolute bottom-10 right-10 max-w-[260px] text-right  leading-relaxed sm:bottom-14 sm:right-14 sm:max-w-150 sm:text-4xl">
        <span className="bg-orange-500/20 px-0.5 text-black/80">
          We build brands that feel refined
        </span>
        <br />
        <span className="bg-orange-500/20 px-0.5 text-black/80">
          and connect effortlessly.
        </span>
      </p>
    </section>
  );
}
