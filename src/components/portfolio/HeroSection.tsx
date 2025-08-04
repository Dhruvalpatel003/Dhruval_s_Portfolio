import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={`${import.meta.env.BASE_URL}lovable-uploads/6aee6e83-b018-4c87-84f7-91e05746644b.png`}
                alt="Dhruval Patel"
                className="w-32 h-32 rounded-full border-4 border-white shadow-hero object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-white"></div>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Dhruval Patel
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-tech-blue mb-6">
              Mechanical Engineer
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Mechanical engineer with <span className="font-semibold text-tech-blue">5+ years of experience</span> in design, 
            manufacturing, and automation. Specializing in <span className="font-semibold text-tech-accent">turbomachinery</span>, 
            3D modeling, and lean manufacturing. Passionate about solving engineering problems and improving industrial efficiency.
          </p>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["Turbomachinery", "3D Modeling", "Lean Manufacturing", "CNC Machining", "LabVIEW"].map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="mailto:dhruvalpatel0312@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Get In Touch
              </a>
            </Button>
            <Button variant="tech" size="xl" asChild>
              <a href="https://www.linkedin.com/in/dhruvalpatel03" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-tech-accent" />
              St. Louis, MO
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-tech-accent" />
              (331) 356-3429
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-tech-accent" />
              dhruvalpatel0312@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-accent/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-tech-blue/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-success/10 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;