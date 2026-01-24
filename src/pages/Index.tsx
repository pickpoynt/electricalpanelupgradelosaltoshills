import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BasementWaterInfo from "@/components/landing/BasementWaterInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Basement Water Removal Vail CO | Vail Water Rescue</title>
        <meta name="description" content="Emergency basement water removal in Vail, CO. Expert water extraction, drying, and restoration for mountain homes. 24/7 rapid response. Call (380) 266-0944." />
        <meta name="keywords" content="basement water removal Vail, basement flooding cleanup, water damage restoration Vail CO" />
        <link rel="canonical" href="https://basement-water-removal-vail-co.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <BasementWaterInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
