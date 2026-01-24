import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import FrozenPipeInfo from "@/components/landing/FrozenPipeInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Frozen Pipe Burst Cleanup Rye Brook NY | Rye Brook Restoration</title>
        <meta name="description" content="Emergency frozen pipe burst cleanup in Rye Brook, NY. 24/7 water damage restoration, basement flooding extraction, and structural drying. Call (380) 266-0944." />
        <meta name="keywords" content="frozen pipe burst cleanup Rye Brook, basement flooding cleanup, water damage restoration NY, burst pipe repair" />
        <link rel="canonical" href="https://frozen-pipe-cleanup-rye-brook-ny.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <FrozenPipeInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
