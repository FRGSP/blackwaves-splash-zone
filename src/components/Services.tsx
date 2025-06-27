
import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Globe, Database, Cloud, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored applications built with cutting-edge technologies to solve your unique business challenges.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps that engage users and drive business growth.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies for maximum performance and reliability.",
    color: "from-orange-500 to-red-500"
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end development services 
            that transform your ideas into powerful digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
