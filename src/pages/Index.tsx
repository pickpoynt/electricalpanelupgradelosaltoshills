import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import BoatLiftInfo from "@/components/landing/BoatLiftInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Boat Lift Electrician Fair Haven NJ | Fair Haven Marine Electric</title>
        <meta name="description" content="Expert boat lift electrical services in Fair Haven, NJ. Specializing in marine wiring, motor repairs, remote systems, and dock lighting. Call (844) 901-2684 today." />
        <meta name="keywords" content="boat lift electrician Fair Haven NJ, marine electrician Fair Haven, boat lift motor repair NJ, dock wiring Fair Haven, boat lift remote installation NJ" />
        <link rel="canonical" href="https://boat-lift-electrician-fair-haven-nj.com/" />
      </Helmet>
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <BoatLiftInfo />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

