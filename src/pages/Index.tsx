import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import AtticSmokeInfo from "@/components/landing/AtticSmokeInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Smoke Odor Removal Attic Woodland Park | Woodland Park Attic Restore</title>
        <meta name="description" content="Professional smoke odor removal from attics in Woodland Park, CO. Expert attic cleaning, insulation deodorization, and fire smoke restoration. Call (380) 266-0944 now." />
        <meta name="keywords" content="smoke odor removal attic Woodland Park, attic smoke restoration CO, attic insulation deodorization, Woodland Park smoke cleanup" />
        <link rel="canonical" href="https://smoke-odor-removal-attic-woodland-park.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <AtticSmokeInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
