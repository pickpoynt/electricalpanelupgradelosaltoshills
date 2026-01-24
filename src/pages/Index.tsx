import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import GarageFloodInfo from "@/components/landing/GarageFloodInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Flooded Garage Water Removal Tiburon | Tiburon Restoration</title>
        <meta name="description" content="Emergency flooded garage water removal in Tiburon, CA. Rapid pump-out services for hillside runoff, storm flooding, and drainage failures. Call (380) 266-0944." />
        <meta name="keywords" content="flooded garage water removal Tiburon, garage flood cleanup, hillside runoff drainage, emergency water extraction Tiburon CA" />
        <link rel="canonical" href="https://flooded-garage-removal-tiburon.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <GarageFloodInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
