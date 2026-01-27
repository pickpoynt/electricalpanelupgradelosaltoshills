import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SmokeDetectorInfo from "@/components/landing/SmokeDetectorInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Smoke Detector Hardwiring Signal Mountain TN | Signal Mountain Fire Safety</title>
        <meta name="description" content="Professional smoke detector hardwiring in Signal Mountain, TN. We specialize in interconnected life safety systems, CO detection, and fire code compliance. Call (844) 901-2684." />
        <meta name="keywords" content="smoke detector hardwiring Signal Mountain TN, fire alarm installation Signal Mountain, interconnected smoke detectors TN, CO detector hardwiring Signal Mountain, fire code compliance electrician" />
        <link rel="canonical" href="https://smoke-detector-hardwiring-signal-mountain-tn.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Smoke Detector Hardwiring Signal Mountain TN | Signal Mountain Fire Safety" />
        <meta property="og:description" content="Expert smoke detector hardwiring and fire safety services in Signal Mountain, TN. Protect your mountain home with interconnected alarms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smoke-detector-hardwiring-signal-mountain-tn.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smoke Detector Hardwiring Signal Mountain TN | Signal Mountain Fire Safety" />
        <meta name="twitter:description" content="Certified fire safety electrical services on Signal Mountain. Interconnected smoke and CO alarms for your home. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <SmokeDetectorInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
