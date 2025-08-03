import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Assembly Engineer",
    company: "Turbo Energy Limited",
    period: "2022–2023",
    location: "India",
    icon: "🧰",
    responsibilities: [
      "Specialized in turbomachinery, pneumatic systems, and controls",
      "Applied lean tools like 5S, DMAIC, and Kaizen",
      "Performed field testing of turbomachinery",
      "Reduced warehouse motion waste through 5S implementation"
    ],
    skills: ["Turbomachinery", "Lean Manufacturing", "5S", "DMAIC", "Kaizen"]
  },
  {
    title: "Junior Designer",
    company: "Unison Corporation",
    period: "2019–2022",
    location: "India", 
    icon: "🛠",
    responsibilities: [
      "Designed 3D models and executed CNC machining",
      "Created BOMs and comprehensive process documentation",
      "Improved manufacturing processes for significant cost savings",
      "Collaborated with QC and maintenance teams for quality assurance"
    ],
    skills: ["3D Modeling", "CNC Machining", "SolidWorks", "Process Improvement"]
  },
  {
    title: "Teaching Assistant",
    company: "Saint Louis University",
    period: "2025",
    location: "St. Louis, MO",
    icon: "🎓",
    responsibilities: [
      "Supported LabVIEW instruction and curriculum development",
      "Provided personalized student learning support",
      "Evaluated engineering experimental tasks and projects"
    ],
    skills: ["LabVIEW", "Teaching", "Student Mentoring", "Engineering Education"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Professional Journey
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A track record of driving innovation and efficiency across diverse engineering environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-l-4 border-l-tech-accent">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{exp.icon}</div>
                    <div>
                      <CardTitle className="text-xl text-foreground mb-1">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-tech-blue font-semibold mb-2">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;