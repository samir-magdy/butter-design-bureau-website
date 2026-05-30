import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative z-10 bg-white">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}
