import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import LandscapeLightingInfo from "@/components/landing/LandscapeLightingInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Landscape Lighting Repair Fair Haven NJ | Fair Haven Garden Light</title>
        <meta name="description" content="Expert landscape lighting repair in Fair Haven, NJ. Specializing in wire repair, transformer fixes, LED retrofitting, and system restoration. Call (844) 901-2684 today." />
        <meta name="keywords" content="landscape lighting repair Fair Haven NJ, outdoor lighting repair Fair Haven, fix garden lights NJ, transformer repair Fair Haven, LED landscape lighting upgrade" />
        <link rel="canonical" href="https://landscape-lighting-repair-fair-haven-nj.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <LandscapeLightingInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;



