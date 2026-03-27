import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickAccess from "@/components/QuickAccess";
import Directions from "@/components/Directions";
import AddressCard from "@/components/AddressCard";
import FinalCTA from "@/components/FinalCTA";
import AboutUs from "@/components/AboutUs";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        <Hero />
        <QuickAccess />
        <Directions />
        <AddressCard />
        <FinalCTA />
        <AboutUs />
      </div>
    </LanguageProvider>
  );
};

export default Index;
