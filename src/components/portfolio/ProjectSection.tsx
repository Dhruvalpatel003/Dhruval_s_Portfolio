import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/project-automation.jpg";

const ProjectSection = () => {
  const achievements = [[
    "Designed and programmed a 6-DOF robotic manipulator for precision tasks using Python and industry-grade simulation tools.",
    "This hands-on project emphasized the integration of kinematics, trajectory planning, and real-time control using robotic software platforms.",
    "Our setup included object manipulation exercises to enhance task automation and fine motor control in robotic arms."
  ],[
    "As an Assembly Engineer at Turbo Energy Limited, I led a lean transformation project aimed at optimizing component flow and reducing production lead time for turbomachinery assembly."
  ]];

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

              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    Modern Robotics, Robotic Arm Programming & Control
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="space-y-3 mb-6">
                    {achievements[0].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Robotic Programming", "Robot Operating System (ROS)", "Robotic arm Control", "RoboDK", "SOLIDWORKS"].map((tech) => (
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

              <div className="p-8">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    Lean Warehouse Optimization for Turbomachinery Assembly
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="space-y-3 mb-6">
                    {achievements[1].map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["5S", "Kaizen", "Kanban", "Root Cause Analysis", "Enterprise Resource Planning (ERP)"].map((tech) => (
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