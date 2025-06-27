
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Wave-like animated background */}
      <div className="absolute inset-0 z-0">
        {/* Animated wave shapes */}
        <div className="absolute top-1/4 left-0 w-full h-32 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160 C300,80 600,240 900,160 C1050,120 1150,200 1200,160 L1200,320 L0,320 Z"
              fill="url(#wave1)"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="absolute top-1/2 left-0 w-full h-32 opacity-15">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
          >
            <path
              d="M0,100 C200,180 400,40 600,120 C800,200 1000,60 1200,140 L1200,320 L0,320 Z"
              fill="url(#wave2)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <defs>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Floating wave elements */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse">
            <path
              d="M20,100 C60,60 100,140 140,100 C160,80 180,120 200,100"
              stroke="#10b981"
              strokeWidth="8"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M20,130 C60,90 100,170 140,130 C160,110 180,150 200,130"
              stroke="#06b6d4"
              strokeWidth="6"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
          </svg>
        </div>

        <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse">
            <path
              d="M20,80 C50,40 90,120 120,80 C140,60 160,100 180,80"
              stroke="#059669"
              strokeWidth="6"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
            <path
              d="M20,110 C50,70 90,150 120,110 C140,90 160,130 180,110"
              stroke="#0891b2"
              strokeWidth="4"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
            <Zap className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-slate-300">Cutting-edge development</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Blackwaves
          </span>
          <br />
          <span className="text-slate-200">Software Agency</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          We craft exceptional digital experiences through innovative software development, 
          turning your vision into powerful, scalable solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            <Code className="mr-2 h-5 w-5" />
            View Our Work
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center items-center space-x-8 text-slate-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm">Projects Delivered</div>
          </div>
          <div className="h-8 w-px bg-slate-600"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="h-8 w-px bg-slate-600"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
