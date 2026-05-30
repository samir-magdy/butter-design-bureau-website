import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PortfolioGrid from "./components/PortfolioGrid";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-screen" aria-hidden="true" />
      <PortfolioGrid />
      <Footer />
    </>
  );
}
