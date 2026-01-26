import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import DockLightingInfo from "@/components/landing/DockLightingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dock Lighting Installation Fair Haven NJ | Fair Haven Marine Light</title>
        <meta name="description" content="Professional dock lighting installation in Fair Haven, NJ. Specializing in LED piling lights, underwater LEDs, and landscape lighting for docks. Call (844) 901-2684 today." />
        <meta name="keywords" content="dock lighting installation Fair Haven NJ, marine lighting Fair Haven, underwater dock lights NJ, dock LED installation Fair Haven, piling lights Fair Haven" />
        <link rel="canonical" href="https://dock-lighting-installation-fair-haven-nj.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <DockLightingInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;


