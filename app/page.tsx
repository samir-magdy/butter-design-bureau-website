import BackToTop from "./components/BackToTop";
import HeroSection from "./components/HeroSection";
import PortfolioGrid from "./components/PortfolioGrid";
import SiteByCredit from "./components/SiteByCredit";

export const metadata = {
  title: { absolute: "Butter Design Bureau" },
  description:
    "A visual branding studio creating internationally competitive brand identities, communication systems, and visual experiences. Strategic thinking meets creative excellence.",
};

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-dvh" aria-hidden="true" />
      <PortfolioGrid />
      <BackToTop />
      <SiteByCredit />
    </>
  );
}
