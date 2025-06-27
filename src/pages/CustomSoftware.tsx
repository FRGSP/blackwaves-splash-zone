
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Zap, CheckCircle, Users, Clock, Shield, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Tailored Solutions",
    description: "Custom-built applications designed specifically for your business needs and workflows."
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We use the latest technologies and frameworks to ensure your software is future-proof."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Built-in security measures and best practices to protect your data and users."
  },
  {
    icon: Users,
    title: "Collaborative Process",
    description: "Work closely with our team throughout development with regular updates and feedback."
  }
];

const benefits = [
  "Complete ownership of your custom solution",
  "Scalable architecture that grows with your business",
  "Integration with existing systems and workflows",
  "Ongoing support and maintenance",
  "User training and documentation",
  "Performance optimization and monitoring"
];

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your business requirements, existing systems, and goals to create a comprehensive project roadmap."
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Our team creates detailed wireframes, user interfaces, and technical specifications for your approval."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your software using agile methodologies with regular testing and quality assurance checks."
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Launch your application with confidence, backed by our comprehensive support and maintenance services."
  }
];

const CustomSoftware = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
              <Code className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-slate-300">Custom Software Development</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Custom Software
            </span>
            <br />
            <span className="text-slate-200">Built for You</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your unique business challenges into powerful software solutions. 
            We create tailored applications that perfectly fit your workflow and scale with your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Lightbulb className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Custom Software?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Off-the-shelf solutions can't always meet your unique needs. 
              Our custom software development ensures you get exactly what your business requires.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What You <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Get</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Our custom software development service delivers comprehensive solutions 
                that address your specific business challenges and opportunities.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <div className="text-center">
                  <Clock className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Fast Development</h3>
                  <p className="text-slate-300 mb-6">
                    Our agile development process ensures rapid delivery without compromising quality.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-white">12-16</div>
                      <div className="text-sm text-slate-400">Weeks Average</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">24/7</div>
                      <div className="text-sm text-slate-400">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your custom software project 
              is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 text-center group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Custom Solution?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Let's discuss your project and create software that perfectly fits your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Code className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;
