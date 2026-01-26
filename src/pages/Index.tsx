import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import PatioHeaterInfo from "@/components/landing/PatioHeaterInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Outdoor Patio Heater Wiring Fair Haven NJ | Fair Haven Patio Heat</title>
        <meta name="description" content="Expert outdoor patio heater wiring in Fair Haven, NJ. Specializing in 240V dedicated circuits, infrared heater installation, and weatherproof control systems. Call (844) 901-2684 today." />
        <meta name="keywords" content="outdoor patio heater wiring Fair Haven NJ, electric patio heater installation Fair Haven, infratech heater wiring NJ, outdoor electrical heaters Fair Haven, patio heater circuit install" />
        <link rel="canonical" href="https://outdoor-patio-heater-wiring-fair-haven-nj.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <PatioHeaterInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;




