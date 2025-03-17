
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedWork />
    </div>
  );
};

export default Index;
