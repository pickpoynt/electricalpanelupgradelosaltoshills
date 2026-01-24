import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import StormSurgeInfo from "@/components/landing/StormSurgeInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Storm Surge Water Damage Cleanup Gulf Breeze FL | Gulf Breeze Storm Restoration</title>
        <meta name="description" content="Professional storm surge water damage cleanup in Gulf Breeze, FL. Emergency flood extraction, saltwater corrosion prevention, and structural drying. Call (380) 266-0944." />
        <meta name="keywords" content="storm surge cleanup Gulf Breeze, hurricane water damage, saltwater flood removal, restoration Gulf Breeze FL" />
        <link rel="canonical" href="https://storm-surge-cleanup-gulf-breeze-fl.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <StormSurgeInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
