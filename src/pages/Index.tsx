
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Subjects from "@/components/Subjects";
import Faculty from "@/components/Faculty";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Subjects />
      <Faculty />
    </div>
  );
};

export default Index;
