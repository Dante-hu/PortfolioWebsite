import HeroSection from "./componets/HeroSection.1";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container ">
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
