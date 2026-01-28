import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BathroomExhaustFanInfo from "@/components/landing/BathroomExhaustFanInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bathroom Exhaust Fan Installation Cave Springs Arkansas | Cave Springs Ventilation Pros</title>
        <meta name="description" content="Professional bathroom exhaust fan installation in Cave Springs, AR. We specialize in ventilation solutions, humidity control, and mold prevention. Call (844) 901-2684." />
        <meta name="keywords" content="bathroom exhaust fan installation Cave Springs Arkansas, bathroom ventilation Cave Springs AR, exhaust fan replacement Arkansas, humidity control ventilation, mold prevention ventilation" />
        <link rel="canonical" href="https://bathroom-exhaust-fan-installation-cave-springs-ar.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Bathroom Exhaust Fan Installation Cave Springs Arkansas | Cave Springs Ventilation Pros" />
        <meta property="og:description" content="Expert bathroom exhaust fan installation and ventilation services in Cave Springs, Arkansas. Improve air quality and prevent moisture damage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bathroom-exhaust-fan-installation-cave-springs-ar.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bathroom Exhaust Fan Installation Cave Springs Arkansas | Cave Springs Ventilation Pros" />
        <meta name="twitter:description" content="Professional bathroom ventilation services in Cave Springs, AR. Exhaust fan installation and replacement. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <BathroomExhaustFanInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
