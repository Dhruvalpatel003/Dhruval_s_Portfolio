import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Master of Engineering (MEng)",
    school: "Saint Louis University",
    period: "2023–2025",
    location: "St. Louis, MO",
    icon: "🎓",
    status: "Completed",
    description: "Advanced mechanical engineering focusing on automation, control systems, and industrial optimization.",
    highlights: [
      "Teaching Assistant for LabVIEW courses",
      "Graduate research in automation systems",
      "Advanced coursework in turbomachinery"
    ]
  },
  {
    degree: "Bachelor of Engineering (BE)",
    school: "Parul Institute",
    period: "2016–2019",
    location: "India",
    icon: "🎓",
    status: "Completed",
    description: "Mechanical Engineering with focus on design, manufacturing, and thermal systems.",
    highlights: [
      "Strong foundation in mechanical design",
      "Manufacturing processes specialization", 
      "CAD/CAM systems proficiency"
    ]
  }
];

const certifications = [
  "Lean Manufacturing Certification",
  "SolidWorks Professional (CSWP)",
  "CNC Programming Certification",
  "5S Implementation Training"
];

const EducationSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🎓 Academic Foundation
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic background complemented by industry certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <div className="space-y-8 mb-16">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-hero transition-all duration-300 border-l-4 border-l-tech-blue">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{edu.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                          <Badge 
                            variant={edu.status === "In Progress" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {edu.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-tech-blue font-semibold mb-2">
                          <GraduationCap className="w-4 h-4" />
                          {edu.school}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Award className="w-4 h-4 text-tech-accent" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-tech-accent" />
                Experienced Skills
              </CardTitle>
              <p className="text-muted-foreground">
                Industry-recognized qualifications and specialized training
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                    <div className="w-3 h-3 bg-success rounded-full flex-shrink-0"></div>
                    <span className="font-medium text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;