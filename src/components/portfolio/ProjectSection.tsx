import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Target, Users } from "lucide-react";
import projectImage from "@/assets/project-automation.jpg";

const ProjectSection = () => {
  const metrics = [
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Inspection Time",
      value: "40% Reduction",
      color: "text-success"
    },
    {
      icon: <Target className="w-5 h-5" />,
      label: "Defect Detection",
      value: "25% Improvement", 
      color: "text-tech-accent"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      label: "Quality Control",
      value: "Enhanced",
      color: "text-tech-blue"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Cross-Department",
      value: "Collaboration",
      color: "text-warning"
    }
  ];

  const achievements = [
    "Designed custom CAD fixturing for precise component positioning",
    "Programmed robotic arm integration with advanced vision system",
    "Collaborated across departments for comprehensive quality control",
    "Ensured regulatory compliance via rigorous testing and calibration"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🔍 Featured Project
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Key Project Spotlight
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Demonstrating innovation in automation and quality control
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-card shadow-hero border-0 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 md:h-full">
                <img 
                  src={projectImage}
                  alt="Automated Inspection System"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/20 to-transparent"></div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    Modern Robotics – Robotic Arm Programming & Control
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Revolutionary automation solution that transformed quality control processes
                  </p>
                </CardHeader>

                <CardContent className="p-0">
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                        <div className={`flex justify-center mb-2 ${metric.color}`}>
                          {metric.icon}
                        </div>
                        <div className="font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["CAD Design", "Robotic Programming", "Vision Systems", "Quality Control", "Testing & Calibration"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="accent" className="w-full">
                    View Project Details
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;