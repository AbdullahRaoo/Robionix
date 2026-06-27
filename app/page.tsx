import CinematicHero from "@/components/site/CinematicHero";
import Capabilities from "@/components/site/Capabilities";
import MagicQCShowcase from "@/components/site/MagicQCShowcase";
import ContactCTA from "@/components/site/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <CinematicHero />
      <Capabilities />
      <MagicQCShowcase />
      <ContactCTA />
    </main>
  );
}
