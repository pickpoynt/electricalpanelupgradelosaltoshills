import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import LogCabinFireInfo from "@/components/landing/LogCabinFireInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Fire Damage Cleanup for Log Cabins Whitefish MT | Montana Cabin Restore</title>
        <meta name="description" content="Expert fire damage cleanup for log cabins in Whitefish, MT. Specialized restoration for charred logs, smoke damage, and structural repairs. Call (380) 266-0944." />
        <meta name="keywords" content="fire damage cleanup log cabins Whitefish MT, log cabin fire restoration Montana, charred log repair, smoke damage log homes" />
        <link rel="canonical" href="https://fire-damage-log-cabins-whitefish-mt.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <LogCabinFireInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
