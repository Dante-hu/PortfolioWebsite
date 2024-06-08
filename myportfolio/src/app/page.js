import HeroSection from "./componets/HeroSection.1";
import Navbar from "./componets/Navbar";
import AboutSection from "./componets/AboutSection";
import ProjectSection from "./componets/ProjectSection";
import Image from "next/image";
import Contactme from "./componets/Contactme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container ">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Contactme />
      </div>
    </main>
  );
}
