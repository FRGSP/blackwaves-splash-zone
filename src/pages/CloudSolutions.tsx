
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cloud, Zap, Shield, Database, Server, Globe } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Scalable Infrastructure",
    description: "Auto-scaling cloud architecture that grows with your business needs and traffic demands."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security measures including encryption, firewalls, and compliance standards."
  },
  {
    icon: Server,
    title: "High Availability",
    description: "99.9% uptime guarantee with redundant systems and automatic failover capabilities."
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Robust data storage and backup solutions with real-time synchronization."
  }
];

const providers = [
  { name: "AWS", color: "from-orange-400 to-orange-600" },
  { name: "Google Cloud", color: "from-blue-400 to-blue-600" },
  { name: "Azure", color: "from-blue-500 to-cyan-500" },
  { name: "Digital Ocean", color: "from-blue-600 to-blue-800" }
];

const CloudSolutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
              <Cloud className="h-4 w-4 text-orange-400" />
              <span className="text-sm text-slate-300">Cloud Solutions</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud
            </span>
            <br />
            <span className="text-slate-200">Infrastructure</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Scalable cloud infrastructure and deployment strategies for maximum performance, 
            reliability, and cost efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Deploy to Cloud
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Advantages</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cloud <span className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Providers</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {providers.map((provider, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${provider.color} flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-white font-bold text-sm">{provider.name.charAt(0)}</span>
                </div>
                <h3 className="text-white font-semibold">{provider.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
