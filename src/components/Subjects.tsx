
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
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-college-primary bg-college-primary/10 rounded-full">
            Academic Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4">
            Comprehensive Education Programs
          </h2>
          <p className="text-lg text-college-secondary max-w-2xl mx-auto">
            Discover our diverse range of academic programs designed to nurture
            talent and foster intellectual growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <Card
              key={subject.title}
              className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-4">
                <subject.icon className="h-8 w-8 text-college-primary" />
              </div>
              <h3 className="text-xl font-semibold text-college-dark mb-2">
                {subject.title}
              </h3>
              <p className="text-college-secondary mb-4">
                {subject.description}
              </p>
              <div className="flex items-center text-sm text-college-primary">
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
