
import { Card } from "@/components/ui/card";
import { Mail, Phone, GraduationCap } from "lucide-react";

const faculty = [
  {
    name: "Dr. Sarah Johnson",
    position: "Head of Sciences",
    department: "Physics",
    image: "https://i.pravatar.cc/300?img=1",
    email: "sarah.johnson@example.com",
    phone: "+1234567890",
  },
  {
    name: "Prof. Maria Garcia",
    position: "Senior Professor",
    department: "Literature",
    image: "https://i.pravatar.cc/300?img=2",
    email: "maria.garcia@example.com",
    phone: "+1234567891",
  },
  {
    name: "Dr. Emily Chen",
    position: "Department Head",
    department: "Mathematics",
    image: "https://i.pravatar.cc/300?img=3",
    email: "emily.chen@example.com",
    phone: "+1234567892",
  },
  {
    name: "Prof. Lisa Thompson",
    position: "Senior Lecturer",
    department: "History",
    image: "https://i.pravatar.cc/300?img=4",
    email: "lisa.thompson@example.com",
    phone: "+1234567893",
  },
];

const Faculty = () => {
  return (
    <section id="faculty" className="py-20 bg-gradient-to-b from-white to-college-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-college-primary bg-college-primary/10 rounded-full">
            Our Educators
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-college-dark mb-4 tracking-tight">
            Meet Our Distinguished Faculty
          </h2>
          <p className="text-lg text-college-secondary max-w-2xl mx-auto leading-relaxed">
            Learn from experienced educators dedicated to shaping the future of our students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <Card
              key={member.name}
              className="group overflow-hidden animate-fade-up hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-college-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-college-primary font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-college-secondary text-sm mb-4">
                  {member.department}
                </p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center text-sm text-college-secondary hover:text-college-primary transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center text-sm text-college-secondary hover:text-college-primary transition-colors duration-300"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
