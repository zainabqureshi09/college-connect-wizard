
import { Card } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap, Newspaper } from "lucide-react";

const subjects = [
  {
    title: "Arts & Humanities",
    description: "Literature, History, Philosophy, and Cultural Studies",
    icon: BookOpen,
    students: "300+",
  },
  {
    title: "Sciences",
    description: "Physics, Chemistry, Biology, and Mathematics",
    icon: GraduationCap,
    students: "250+",
  },
  {
    title: "Commerce",
    description: "Accounting, Economics, and Business Studies",
    icon: Users,
    students: "200+",
  },
  {
    title: "Liberal Studies",
    description: "Psychology, Sociology, and Political Science",
    icon: Newspaper,
    students: "150+",
  },
];

const Subjects = () => {
  return (
    <section id="subjects" className="py-20 bg-gradient-to-b from-white to-college-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-college-primary bg-college-primary/10 rounded-full hover:bg-college-primary/20 transition-colors duration-300">
            Academic Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4 tracking-tight">
            Comprehensive Education Programs
          </h2>
          <p className="text-lg text-college-secondary max-w-2xl mx-auto leading-relaxed">
            Discover our diverse range of academic programs designed to nurture
            talent and foster intellectual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <Card
              key={subject.title}
              className="group p-6 hover:shadow-xl transition-all duration-300 animate-fade-up transform hover:-translate-y-1 hover:bg-college-light/20 border-2 border-transparent hover:border-college-primary/20"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="mb-4 group-hover:animate-float">
                <subject.icon className="h-8 w-8 text-college-primary transition-colors duration-300 group-hover:text-college-dark" />
              </div>
              <h3 className="text-xl font-semibold text-college-dark mb-2 tracking-tight">
                {subject.title}
              </h3>
              <p className="text-college-secondary mb-4 leading-relaxed">
                {subject.description}
              </p>
              <div className="flex items-center text-sm text-college-primary group-hover:text-college-dark transition-colors duration-300">
                <Users className="h-4 w-4 mr-1" />
                {subject.students} Students
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
