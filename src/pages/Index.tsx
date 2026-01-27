import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import HeatedFloorInfo from "@/components/landing/HeatedFloorInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Heated Floor Electrical Repair Fair Haven NJ | Fair Haven Floor Warmth</title>
        <meta name="description" content="Expert heated floor electrical repair in Fair Haven, NJ. Specializing in thermostat troubleshooting, cable fault locating, and circuit repair for radiant heating. Call (844) 901-2684 today." />
        <meta name="keywords" content="heated floor electrical repair Fair Haven NJ, radiant floor heating repair Fair Haven, electric floor heat troubleshooting NJ, floor heating thermostat repair Fair Haven, underfloor heating cable repair" />
        <link rel="canonical" href="https://heated-floor-electrical-repair-fair-haven-nj.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Heated Floor Electrical Repair Fair Haven NJ | Fair Haven Floor Warmth" />
        <meta property="og:description" content="Professional heated floor electrical repair in Fair Haven, NJ. Specialized radiant heat diagnostics and repair services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://heated-floor-electrical-repair-fair-haven-nj.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1556911220-e15224bbaf47?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heated Floor Electrical Repair Fair Haven NJ | Fair Haven Floor Warmth" />
        <meta name="twitter:description" content="Expert radiant heat troubleshooting and cable repair in Fair Haven, NJ. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1556911220-e15224bbaf47?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <HeatedFloorInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;




