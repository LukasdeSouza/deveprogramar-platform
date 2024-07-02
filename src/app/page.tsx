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
    </div>
  );
}
