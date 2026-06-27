import CinematicHero from "@/components/site/CinematicHero";
import Capabilities from "@/components/site/Capabilities";
import MagicQCShowcase from "@/components/site/MagicQCShowcase";
import RMES from "@/components/site/RMES";
import SelectedWork from "@/components/site/SelectedWork";
import Team from "@/components/site/Team";
import ContactCTA from "@/components/site/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <CinematicHero />
      <Capabilities />
      <MagicQCShowcase />
      <RMES />
      <SelectedWork />
      <Team />
      <ContactCTA />
    </main>
  );
}
