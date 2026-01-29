import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ElectricalPanelInfo from "@/components/landing/ElectricalPanelInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Electrical panel upgrade Seward Nebraska | Seward Panel Upgrade Pros</title>
        <meta name="description" content="Professional electrical panel upgrade services in Seward, NE. We provide safe, code-compliant panel upgrades to meet modern electrical demands. Licensed electricians. Call (844) 901-2684." />
        <meta name="keywords" content="electrical panel upgrade Seward Nebraska, electrical panel replacement Seward NE, electrical panel installation Seward, electrical service panel upgrade, electrical panel modernization Seward" />
        <link rel="canonical" href="https://electrical-panel-upgrade-seward-nebraska.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Electrical panel upgrade Seward Nebraska | Seward Panel Upgrade Pros" />
        <meta property="og:description" content="Professional electrical panel upgrade services in Seward, Nebraska. Safe, code-compliant upgrades for modern electrical demands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://electrical-panel-upgrade-seward-nebraska.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621905252522-186368b31c6b?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Electrical panel upgrade Seward Nebraska | Seward Panel Upgrade Pros" />
        <meta name="twitter:description" content="Professional electrical panel upgrade services in Seward NE. Safe panel replacements and installations. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1621905252522-186368b31c6b?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <ElectricalPanelInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
