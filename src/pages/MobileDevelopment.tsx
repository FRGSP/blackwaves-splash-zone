
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Smartphone, Zap, CheckCircle, Users, Tablet, Watch } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Native & Cross-Platform",
    description: "Build native iOS and Android apps or cross-platform solutions using React Native and Flutter."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized for speed and smooth animations with 60fps user experiences."
  },
  {
    icon: Tablet,
    title: "Multi-Device Support",
    description: "Apps that work seamlessly across phones, tablets, and other mobile devices."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces following platform-specific design guidelines and best practices."
  }
];

const platforms = [
  { name: "iOS", icon: "📱", color: "from-gray-400 to-gray-600" },
  { name: "Android", icon: "🤖", color: "from-green-400 to-green-600" },
  { name: "React Native", icon: "⚛️", color: "from-blue-400 to-blue-600" },
  { name: "Flutter", icon: "🔷", color: "from-blue-500 to-cyan-500" }
];

const MobileDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
              <Smartphone className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-slate-300">Mobile Development</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Mobile Apps
            </span>
            <br />
            <span className="text-slate-200">That Engage</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Create powerful native and cross-platform mobile applications that deliver 
            exceptional user experiences and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your App
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
              Mobile App <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Excellence</span>
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Platforms Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Platforms We <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Support</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="text-white font-semibold">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopment;
