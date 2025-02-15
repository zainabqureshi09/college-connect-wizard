
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "1000+",
    label: "Graduates",
  },
  {
    icon: Award,
    value: "50+",
    label: "Years of Excellence",
  },
  {
    icon: BookOpen,
    value: "20+",
    label: "Programs",
  },
  {
    icon: Users,
    value: "100+",
    label: "Expert Faculty",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-college-light/50 to-transparent" />
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_center,rgba(30,136,229,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-college-primary bg-college-primary/10 rounded-full">
            Our Legacy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4 tracking-tight">
            Empowering Education Since 1970
          </h2>
          <p className="text-lg text-college-secondary max-w-2xl mx-auto leading-relaxed">
            Firoza Khatoon Women College has been a pioneer in women's education,
            fostering academic excellence and personal growth for over five decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="animate-fade-up delay-100">
            <h3 className="text-2xl font-semibold text-college-dark mb-4">
              Our Vision
            </h3>
            <p className="text-college-secondary leading-relaxed">
              To be a leading institution in women's education, empowering students
              with knowledge, skills, and values to become leaders in their chosen
              fields and contribute meaningfully to society.
            </p>
          </div>
          <div className="animate-fade-up delay-200">
            <h3 className="text-2xl font-semibold text-college-dark mb-4">
              Our Mission
            </h3>
            <p className="text-college-secondary leading-relaxed">
              To provide quality education in a nurturing environment that
              promotes academic excellence, critical thinking, and character
              development while preparing students for successful careers and
              lifelong learning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up group hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-college-primary group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-college-dark mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-college-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
