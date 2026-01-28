import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import HistoricHomeRewiringInfo from "@/components/landing/HistoricHomeRewiringInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Historic Home Rewiring Signal Mountain TN | Signal Mountain Historic Electrical</title>
        <meta name="description" content="Expert historic home rewiring in Signal Mountain, TN. We specialize in knob-and-tube replacement, cloth-wired systems, and vintage home electrical upgrades. Call (844) 901-2684." />
        <meta name="keywords" content="historic home rewiring Signal Mountain TN, knob and tube replacement Signal Mountain, vintage home electrical upgrade TN, old house rewiring Signal Mountain, heritage home electrician" />
        <link rel="canonical" href="https://historic-home-rewiring-signal-mountain-tn.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Historic Home Rewiring Signal Mountain TN | Signal Mountain Historic Electrical" />
        <meta property="og:description" content="Specialized electrical rewiring for historic and vintage homes in Signal Mountain, TN. Preserve your home's character while upgrading to modern safety." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://historic-home-rewiring-signal-mountain-tn.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Historic Home Rewiring Signal Mountain TN | Signal Mountain Historic Electrical" />
        <meta name="twitter:description" content="Expert vintage and historic home rewiring on Signal Mountain. Knob-and-tube replacement and panel upgrades. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <HistoricHomeRewiringInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
