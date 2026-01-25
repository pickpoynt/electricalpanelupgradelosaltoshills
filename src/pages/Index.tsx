import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SmokeOdorInfo from "@/components/landing/SmokeOdorInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Smoke Odor Removal from Upholstery Whitefish MT | Montana Fresh Restore</title>
        <meta name="description" content="Professional smoke odor removal from upholstery in Whitefish, MT. Expert fire damage restoration, deep cleaning, and odor elimination for furniture. Call (380) 266-0944." />
        <meta name="keywords" content="smoke odor removal upholstery Whitefish MT, fire damage furniture cleaning, smoke smell elimination Montana, upholstery restoration Whitefish" />
        <link rel="canonical" href="https://smoke-odor-removal-whitefish-mt.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <SmokeOdorInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
