import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import HotTubWiringInfo from "@/components/landing/HotTubWiringInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Hot Tub Wiring Electrician Signal Mountain TN | Signal Mountain Hot Tub Electric</title>
        <meta name="description" content="Expert hot tub wiring electrician in Signal Mountain, TN. Specializing in safe 220V spa hookups, GFCI protection, and dedicated sub-panels. Call (844) 901-2684 today." />
        <meta name="keywords" content="hot tub wiring electrician Signal Mountain TN, spa electrical hookup Signal Mountain, swim spa wiring TN, 220V hot tub circuit Signal Mountain, GFCI spa disconnect installation" />
        <link rel="canonical" href="https://hot-tub-wiring-electrician-signal-mountain-tn.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Hot Tub Wiring Electrician Signal Mountain TN | Signal Mountain Hot Tub Electric" />
        <meta property="og:description" content="Professional hot tub and spa electrical services in Signal Mountain, TN. Safe, code-compliant 220V hookups and GFCI protection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hot-tub-wiring-electrician-signal-mountain-tn.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1543967625-f013d528f804?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hot Tub Wiring Electrician Signal Mountain TN | Signal Mountain Hot Tub Electric" />
        <meta name="twitter:description" content="Expert hot tub electrical hookups and spa safety inspections in Signal Mountain, TN. Call (844) 901-2684." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1543967625-f013d528f804?auto=format&fit=crop&q=80" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <HotTubWiringInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
