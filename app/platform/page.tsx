import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Capabilities from "@/components/site/Capabilities";
import ContactCTA from "@/components/site/ContactCTA";

export const metadata: Metadata = {
  title: "Platform — Vision AI, ERP, Robotics | Robionix",
  description: "Robionix builds vision AI, manufacturing ERP, robotics, embedded systems, industrial automation and VR, end to end.",
};

export default function PlatformPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <Capabilities />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
