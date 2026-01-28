import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SurgeProtectorInfo from "@/components/landing/SurgeProtectorInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Whole House Surge Protector Installation Cave Springs Arkansas | Cave Springs Surge Protection Experts</title>
        <meta name="description" content="Professional whole house surge protector installation in Cave Springs, AR. Protect your home from power surges and lightning strikes. Licensed electricians. Call (844) 901-2684." />
        <meta name="keywords" content="whole house surge protector installation Cave Springs Arkansas, surge protector installation cost, electrician surge protector, home surge protection system, electrical panel surge protector" />
        <link rel="canonical" href="https://whole-house-surge-protector-cave-springs-ar.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Whole House Surge Protector Installation Cave Springs Arkansas | Cave Springs Surge Protection Experts" />
        <meta property="og:description" content="Expert whole house surge protector installation in Cave Springs, Arkansas. Safeguard your electronics and appliances from damaging power surges." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whole-house-surge-protector-cave-springs-ar.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Whole House Surge Protector Installation Cave Springs Arkansas | Cave Springs Surge Protection Experts" />
        <meta name="twitter:description" content="Professional surge protection services in Cave Springs, AR. Main panel surge protector installation. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <SurgeProtectorInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
