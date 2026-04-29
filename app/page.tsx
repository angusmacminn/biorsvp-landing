import CTA from "../components/CTA";
import Events from "../components/Events";
import Features from "../components/Features";
import Footer from "../components/Footer";
import FormSection from "../components/FormSection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Stats from "../components/Stats";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Events />
        <Stats />
        <FormSection />
        <Partners />
        <CTA />
        
      </main>
      <Footer />
    </>
  );
}
