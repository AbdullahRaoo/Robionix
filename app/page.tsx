import CinematicHero from "@/components/site/CinematicHero";
import Capabilities from "@/components/site/Capabilities";
import MagicQCShowcase from "@/components/site/MagicQCShowcase";
import SelectedWork from "@/components/site/SelectedWork";
import Team from "@/components/site/Team";
import ContactCTA from "@/components/site/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <CinematicHero />
      <Capabilities />
      <MagicQCShowcase />
      <SelectedWork />
      <Team />
      <ContactCTA />
    </main>
  );
}
