import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MobileHomeInfo from "@/components/landing/MobileHomeInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <MobileHomeInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
