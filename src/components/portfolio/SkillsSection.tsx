import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Cog, 
  Zap, 
  Cpu, 
  Settings, 
  Monitor,
  Wrench,
  Brain,
  Target
} from "lucide-react";

const skillCategories = [
  {
    title: "Lean Manufacturing",
    icon: <Brain className="w-5 h-5" />,
    description: "Process optimization and waste reduction",
    skills: [
      { name: "5S Implementation", level: 95 },
      { name: "Kaizen", level: 90 },
      { name: "DMAIC", level: 88 },
      { name: "Kanban", level: 85 }
    ],
    color: "tech-blue"
  },
  {
    title: "3D Modeling & Design",
    icon: <Monitor className="w-5 h-5" />,
    description: "Advanced CAD design and modeling",
    skills: [
      { name: "SolidWorks", level: 95 },
      { name: "Inventor", level: 90 },
      { name: "AutoCAD", level: 85 },
      { name: "3D Prototyping", level: 88 }
    ],
    color: "tech-accent"
  },
  {
    title: "Manufacturing & Machining",
    icon: <Cog className="w-5 h-5" />,
    description: "Precision manufacturing processes",
    skills: [
      { name: "CNC Machining", level: 92 },
      { name: "Casting", level: 80 },
      { name: "Molding", level: 78 },
      { name: "Quality Control", level: 90 }
    ],
    color: "success"
  },
  {
    title: "Control Systems",
    icon: <Cpu className="w-5 h-5" />,
    description: "Automation and control technologies",
    skills: [
      { name: "LabVIEW", level: 88 },
      { name: "Robotic Arms", level: 85 },
      { name: "Vision Systems", level: 82 },
      { name: "ERP/MRP Systems", level: 80 }
    ],
    color: "warning"
  }
];

const systemExpertise = [
  { name: "Pneumatic Systems", icon: <Zap className="w-4 h-4" /> },
  { name: "Electric Systems", icon: <Settings className="w-4 h-4" /> },
  { name: "Hydraulic Systems", icon: <Wrench className="w-4 h-4" /> },
  { name: "Turbomachinery", icon: <Target className="w-4 h-4" /> }
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            🧠 Core Competencies
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning design, manufacturing, and automation
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-${category.color}/10 text-${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Systems Expertise */}
        <Card className="bg-gradient-primary text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Systems Expertise</CardTitle>
            <p className="text-white/80">
              Specialized knowledge in multiple engineering systems
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {systemExpertise.map((system, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                    {system.icon}
                  </div>
                  <h4 className="font-semibold text-sm">{system.name}</h4>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;