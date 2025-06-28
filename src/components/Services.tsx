
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Database, Cloud, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored applications built with cutting-edge technologies to solve your unique business challenges.",
    color: "from-blue-500 to-cyan-500",
    link: "/custom-software"
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
    color: "from-purple-500 to-pink-500",
    link: "/web-applications"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that engage users and drive business growth.",
    color: "from-green-500 to-emerald-500",
    link: "/mobile-development"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies for maximum performance and reliability.",
    color: "from-orange-500 to-red-500",
    link: "/cloud-solutions"
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimized database architectures that ensure data integrity and lightning-fast performance.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Comprehensive security audits and ongoing maintenance to keep your applications secure and updated.",
    color: "from-teal-500 to-cyan-500"
  }
];

const Services = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in">
            From concept to deployment, we provide end-to-end development services 
            that transform your ideas into powerful digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
                
                {service.link ? (
                  <Link to={service.link}>
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700 transition-all duration-300"
                  >
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
