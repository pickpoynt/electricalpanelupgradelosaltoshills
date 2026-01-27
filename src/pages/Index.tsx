import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SmartSwitchInfo from "@/components/landing/SmartSwitchInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Smart Switch Installation Signal Mountain TN | Signal Mountain Automation & Lighting</title>
        <meta name="description" content="Expert smart switch installation in Signal Mountain, TN. We specialize in lighting automation for historic homes, Lutron Caseta retrofits, and whole-home control. Call (844) 901-2684." />
        <meta name="keywords" content="smart switch installation Signal Mountain TN, smart lighting Signal Mountain, home automation Signal Mountain, Lutron Caseta installation TN, smart switch retrofitting Signal Mountain" />
        <link rel="canonical" href="https://smart-switch-installation-signal-mountain-tn.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Smart Switch Installation Signal Mountain TN | Signal Mountain Automation & Lighting" />
        <meta property="og:description" content="Professional smart switch installation and home automation services in Signal Mountain, TN. Modern technology for classic homes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smart-switch-installation-signal-mountain-tn.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Smart Switch Installation Signal Mountain TN | Signal Mountain Automation & Lighting" />
        <meta name="twitter:description" content="Transform your home with expert smart switch installation on Signal Mountain. Call (844) 901-2684 for a free consultation." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <SmartSwitchInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
