import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send,
  Clock,
  MessageSquare
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "St. Louis, MO",
    color: "text-tech-blue"
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "(331) 356-3429",
    href: "tel:+13313563429",
    color: "text-tech-accent"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "dhruvalpatel0312@gmail.com",
    href: "mailto:dhruvalpatel0312@gmail.com",
    color: "text-success"
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "Connect with me",
    href: "#",
    color: "text-warning"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            📞 Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next engineering project or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-primary text-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  Contact Information
                </CardTitle>
                <p className="text-white/80">
                  Multiple ways to reach out and connect
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white/90">{contact.label}</div>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-white hover:text-white/80 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-white/80">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-tech-accent" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-semibold text-success">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="secondary" className="text-xs">
                      Open to Opportunities
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Zone</span>
                    <span className="font-semibold">CST (UTC-6)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss how I can help.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project collaboration opportunity" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you need mechanical design expertise, automation solutions, or lean manufacturing consulting, 
              I'm here to help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="tech" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button variant="outline" size="lg">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;