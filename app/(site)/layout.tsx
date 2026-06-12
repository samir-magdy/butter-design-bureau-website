import Navbar from "@/app/components/Navbar";
import SiteByCredit from "@/app/components/SiteByCredit";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="relative z-10 flex-1 bg-white">
        <Navbar />
        {children}
      </div>
      <SiteByCredit />
    </div>
  );
}
