import Navbar from "@/app/components/Navbar";
import SiteByCredit from "@/app/components/SiteByCredit";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen pb-2">
      <div className="relative z-10 flex-1 bg-white">
        <Navbar />
        <div className="pt-4">{children}</div>
      </div>
      <SiteByCredit />
    </div>
  );
}
