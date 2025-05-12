import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { CompanyLogos } from "@/components/CompanyLogos";
import { FeaturePills } from "@/components/FeaturePills";
import { Footer } from "@/components/Footer";
import Demo from "@/components/Demo";
import { Faq } from "@/components/Faq";
import Awards from "@/components/Awards";
import Venues from "@/components/Venues";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />

      <main className="flex flex-1 flex-col items-center px-2 md:px-6 py-10 max-w-[1440px] mx-auto w-full">
        <Hero />
        <CompanyLogos />

        <FeatureShowcase />
        <FeaturePills />
        <Venues />
        <Awards />
        <Testimonials />
        <Faq />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}
