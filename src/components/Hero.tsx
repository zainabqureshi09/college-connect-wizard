
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-college-light via-white to-white pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-college-primary bg-college-primary/10 rounded-full animate-fade-in hover:bg-college-primary/20 transition-colors duration-300">
            Welcome to Firoza Khatoon Women College
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-college-dark mb-6 animate-slide-in tracking-tight">
            Empowering Women Through
            <span className="text-college-primary animate-float inline-block">
              {" "}
              Education
            </span>
          </h1>
          <p className="text-lg md:text-xl text-college-secondary max-w-2xl mx-auto mb-8 animate-fade-up delay-200 leading-relaxed">
            Join a legacy of academic excellence and leadership in women's
            education, shaping the leaders of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-300">
            <a
              href="#admissions"
              className="group px-8 py-3 bg-college-primary text-white rounded-lg hover:bg-college-dark transition-all duration-300 flex items-center gap-2 transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#subjects"
              className="px-8 py-3 border-2 border-college-primary text-college-primary rounded-lg hover:bg-college-primary/10 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Explore Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
