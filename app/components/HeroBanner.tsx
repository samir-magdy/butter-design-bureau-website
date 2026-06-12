export default function HeroBanner() {
  return (
    <div
      className="w-full flex items-center justify-between px-4 py-3 lg:py-0 lg:aspect-[12/1] lg:px-[3.5vw] [background:linear-gradient(to_right,#4A2680_0%,#E83A18_30%,#ffffff_45%)] lg:[background:linear-gradient(to_right,#4A2680_0%,#E83A18_28%,#ffffff_68%)]"
    >
      <div className="leading-[1.05]">
        <p className="font-bold text-white m-0 text-2xl lg:text-[2.8vw]">
          Butter
        </p>
        <p className="font-light text-white m-0 text-[1rem] lg:text-[1.4vw]">
          Design Bureau.
        </p>
      </div>

      <p className="pt-2 text-start text-black m-0 text-[0.85rem] leading-snug lg:text-[1.5vw]">
        We build brands that <strong>feel refined</strong>
        <br />
        and <strong>connect effortlessly.</strong>
      </p>
    </div>
  );
}
