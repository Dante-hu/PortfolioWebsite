import HeroSect from "./componets/HeroSect";
import Navbar from "./componets/Navbar";
import AboutSection from "./componets/AboutSection";
import ProjectSection from "./componets/ProjectSection";
import Contactme from "./componets/Contactme";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 pt-24">
        <HeroSect />
        <AboutSection />
        <ProjectSection />
        <Contactme />
      </div>
    </main>
  );
}
