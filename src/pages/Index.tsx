import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import KnobTubeInfo from "@/components/landing/KnobTubeInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Knob and tube wiring replacement Signal Mountain TN | Signal Mountain Wiring Experts</title>
        <meta name="description" content="Expert knob and tube wiring replacement in Signal Mountain, TN. Specializing in historic home rewiring, insurance certifications, and panel modernization. Call (844) 901-2684 today." />
        <meta name="keywords" content="knob and tube wiring replacement Signal Mountain TN, historic home rewiring Signal Mountain, electrical fire hazard removal TN, knob and tube removal experts, Signal Mountain electrician historic home" />
        <link rel="canonical" href="https://knob-and-tube-wiring-replacement-signal-mountain-tn.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Knob and tube wiring replacement Signal Mountain TN | Signal Mountain Wiring Experts" />
        <meta property="og:description" content="Professional knob and tube wiring replacement in Signal Mountain, TN. Modernizing historic homes with safe, grounded electrical systems." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://knob-and-tube-wiring-replacement-signal-mountain-tn.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1563770660941-20978e8700f1?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Knob and tube wiring replacement Signal Mountain TN | Signal Mountain Wiring Experts" />
        <meta name="twitter:description" content="Expert historic home rewiring and knob and tube replacement in Signal Mountain, TN. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1563770660941-20978e8700f1?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <KnobTubeInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
