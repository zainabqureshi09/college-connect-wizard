
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-college-light to-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-up">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-college-primary bg-college-primary/10 rounded-full">
            Welcome to EduTech
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-college-dark mb-6">
            Shape Your Future with
            <span className="text-college-primary"> Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-college-secondary max-w-2xl mx-auto mb-8">
            Discover world-class education that empowers you to achieve your dreams
            and make a difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#programs"
              className="px-8 py-3 bg-college-primary text-white rounded-lg hover:bg-college-primary/90 transition-colors duration-200 flex items-center gap-2"
            >
              Explore Programs
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-college-primary text-college-primary rounded-lg hover:bg-college-primary/10 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
