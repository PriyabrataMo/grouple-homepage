import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { CompanyLogos } from "@/components/CompanyLogos";
import { FeaturePills } from "@/components/FeaturePills";
import { Footer } from "@/components/Footer";
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex flex-1 flex-col items-center px-6 sm:px-10 py-10 max-w-[1440px] mx-auto w-full">
        <Hero />
        <CompanyLogos />
        <FeatureShowcase />
        <FeaturePills />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}
