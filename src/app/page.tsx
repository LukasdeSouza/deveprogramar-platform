import CardCourse from "@/components/cards/cardCourse";
import { CarouselDemo } from "@/components/carousel";
import Chip from "@/components/chip";
import { NavigationBar } from "@/components/navbar";
import PromoSection from "@/components/promoSection";
import { cardCoursesArray, chipsContent } from "@/utils/arrays";

export default function LandingPage() {
  return (
    <div>
      <NavigationBar/>
      <PromoSection/>
      <main className="flex flex-row flex-wrap justify-center gap-4 my-3 px-4">
        {chipsContent.map((chip, index) => (
          <Chip 
            key={index}
            icon={chip.icon}
            label={chip.label}
          />
        ))}
      </main>
      <div className="h-52 pt-8 px-8 bg-deepDark text-center">
        {/* <CarouselDemo /> */}
        <h2 className="text-3xl text-hyperLight">Aprenda Programação e conquiste sua Vaga</h2>
        <p className="font-light">tenha acesso ao conhecimento sobre diversos temas na programação, <br /> torne-se frontend, backend ou até mesmo fullstack.</p>
        <h3 className="mt-4 text-hyperLight">Conheça nossas trilhas sobre:</h3>
      </div>
      <div className="flex flex-row flex-wrap px-8 mb-4 gap-4">
        {cardCoursesArray.map((card, index) => (
          <CardCourse 
            key={index} 
            title={card.title} 
            description={card.description}
            complexity={card.complexity}
          />

        ))}
        {/* <CardCourse title="Web Design" description="dauishda" complexity="Iniciante"/> */}
      </div>
    </div>
  );
}
