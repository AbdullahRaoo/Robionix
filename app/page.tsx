import CinematicHero from "@/components/site/CinematicHero";
import MagicQCShowcase from "@/components/site/MagicQCShowcase";
import ProductsHome from "@/components/site/ProductsHome";
import Capabilities from "@/components/site/Capabilities";
import Impact from "@/components/site/Impact";
import ContactCTA from "@/components/site/ContactCTA";
import SiteFooter from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <CinematicHero />
        <MagicQCShowcase />
        <ProductsHome />
        <Capabilities />
        <Impact />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
