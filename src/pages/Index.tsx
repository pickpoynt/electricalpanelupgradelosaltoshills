import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SootRemovalInfo from "@/components/landing/SootRemovalInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Soot Removal from Walls Sparta WI | Sparta Restoration Experts</title>
        <meta name="description" content="Professional soot removal from walls in Sparta, WI. Expert cleanup for smoke damage, fire soot, and furnace puffs. 24/7 restoration services. Call (380) 266-0944." />
        <meta name="keywords" content="soot removal from walls Sparta WI, smoke damage wall cleaning, fire soot cleanup Sparta, furnace puff back cleaning Wisconsin" />
        <link rel="canonical" href="https://soot-removal-walls-sparta-wi.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <SootRemovalInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
