
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Users, Code, Smartphone, Database, Shield } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $180k",
    icon: Code,
    description: "Join our engineering team to build scalable web applications using modern technologies like React, Node.js, and cloud platforms.",
  },
  {
    title: "Mobile App Developer",
    department: "Engineering",
    location: "New York / Remote",
    type: "Full-time",
    salary: "$100k - $160k",
    icon: Smartphone,
    description: "Develop cutting-edge mobile applications for iOS and Android platforms using React Native and native technologies.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Austin / Remote",
    type: "Full-time",
    salary: "$110k - $170k",
    icon: Database,
    description: "Manage and optimize our cloud infrastructure, CI/CD pipelines, and ensure system reliability and scalability.",
  },
  {
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $190k",
    icon: Shield,
    description: "Protect our applications and infrastructure by implementing security best practices and conducting security audits.",
  },
];

const benefits = [
  "Competitive salary and equity packages",
  "Comprehensive health, dental, and vision insurance",
  "Flexible work arrangements and remote options",
  "Professional development budget",
  "Unlimited PTO policy",
  "State-of-the-art equipment and tools",
  "Team building events and company retreats",
  "Retirement savings plan with company matching",
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Build the future of software development with a passionate team of innovators. 
            We're looking for talented individuals who share our vision of creating exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              View Open Positions
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Positions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career and make an impact with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <job.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <p className="text-slate-300 mb-4 text-sm leading-relaxed">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>

                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">With Us?</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                We believe in creating an environment where our team members can thrive, 
                grow, and make meaningful contributions to innovative projects.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-slate-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">50+ Team Members</h3>
                  <p className="text-slate-300">Across 15+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Impact?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Don't see a position that fits? We're always looking for exceptional talent. 
            Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
            >
              Send Your Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3"
            >
              Contact HR Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
