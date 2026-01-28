import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CheapElectricianInfo from "@/components/landing/CheapElectricianInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Cheap Electrician Brevard NC | Brevard Affordable Electricians</title>
        <meta name="description" content="Affordable electrician services in Brevard, NC. Budget electrical work, low-cost repairs, and cheap electrical services. Licensed electricians. Call (844) 901-2684." />
        <meta name="keywords" content="cheap electrician Brevard NC, affordable electrician Brevard NC, budget electrician Brevard NC, low cost electrician Brevard NC, cheap electrical services Brevard NC" />
        <link rel="canonical" href="https://cheap-electrician-brevard-nc.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Cheap Electrician Brevard NC | Brevard Affordable Electricians" />
        <meta property="og:description" content="Affordable, budget-friendly electrical services in Brevard, North Carolina. Quality electrical work at competitive prices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cheap-electrician-brevard-nc.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cheap Electrician Brevard NC | Brevard Affordable Electricians" />
        <meta name="twitter:description" content="Budget electrician services in Brevard NC. Affordable electrical repairs and installations. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <CheapElectricianInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
