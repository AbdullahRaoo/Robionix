import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import SelectedWork from "@/components/site/SelectedWork";
import RMES from "@/components/site/RMES";
import ContactCTA from "@/components/site/ContactCTA";

export const metadata: Metadata = {
  title: "Work — shipped systems | Robionix",
  description: "Deployed Robionix systems: RMES manufacturing ERP, KMES knitting MES, AI bib recognition, the Smart Helmet, and ERPNext rollouts.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <SelectedWork />
        <RMES />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
