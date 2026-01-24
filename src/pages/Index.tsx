import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SumpPumpInfo from "@/components/landing/SumpPumpInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sump Pump Failure Water Cleanup Cohasset MA | Cohasset Restoration</title>
        <meta name="description" content="Emergency sump pump failure water cleanup in Cohasset, MA. 24/7 flooded basement restoration, water extraction, and drying services. Call (380) 266-0944." />
        <meta name="keywords" content="sump pump failure cleanup Cohasset MA, flooded basement restoration, emergency water removal Cohasset, sewage backup cleanup" />
        <link rel="canonical" href="https://sump-pump-failure-cohasset-ma.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <SumpPumpInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
