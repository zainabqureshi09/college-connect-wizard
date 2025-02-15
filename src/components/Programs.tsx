
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, BookOpen, Code } from "lucide-react";

const programs = [
  {
    title: "Computer Science",
    description: "Learn cutting-edge programming and software development",
    icon: Code,
    students: "500+",
  },
  {
    title: "Business Administration",
    description: "Develop leadership skills and business acumen",
    icon: Users,
    students: "450+",
  },
  {
    title: "Data Science",
    description: "Master data analytics and machine learning",
    icon: BookOpen,
    students: "300+",
  },
  {
    title: "Engineering",
    description: "Innovation through advanced engineering principles",
    icon: GraduationCap,
    students: "400+",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-college-primary bg-college-primary/10 rounded-full">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4">
            Academic Excellence & Innovation
          </h2>
          <p className="text-lg text-college-secondary max-w-2xl mx-auto">
            Choose from our diverse range of programs designed to prepare you for
            success in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.title}
              className="p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="mb-4">
                <program.icon className="h-8 w-8 text-college-primary" />
              </div>
              <h3 className="text-xl font-semibold text-college-dark mb-2">
                {program.title}
              </h3>
              <p className="text-college-secondary mb-4">
                {program.description}
              </p>
              <div className="flex items-center text-sm text-college-primary">
                <Users className="h-4 w-4 mr-1" />
                {program.students} Students
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
