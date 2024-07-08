import Chip from "@/components/chip";
import { NavigationBar } from "@/components/navbar";
import PromoSection from "@/components/promoSection";
import { chipsContent } from "@/utils/arrays";
import { Binary } from "lucide-react";

export default function LandingPage() {
  return (
    <div>
      <NavigationBar/>
      <PromoSection/>
      <main className="flex flex-row justify-center gap-4 my-3 px-4">
        {chipsContent.map((chip, index) => (
          <Chip 
            key={index}
            icon={chip.icon}
            label={chip.label}
          />
        ))}
      </main>
      <div className="h-72 py-6 px-8 bg-deepDark">
        <h2 className="text-3xl text-hyperLight">Aprenda Programação e conquiste sua Vaga</h2>
        <p className="font-light">tenha acesso ao conhecimento sobre diversos temas na programação, <br /> torne-se frontend, backend ou até mesmo fullstack.</p>
        <h3 className="mt-4 text-hyperLight">Conheça nossas trilhas sobre:</h3>
      </div>
    </div>
  );
}
