import { Button } from '@/components/ui/button';
import { ArrowDown, Cloud, Zap, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Azure</span> vs <span className="text-orange-500">AWS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive comparison of Microsoft Azure and Amazon Web Services. 
            Compare services, pricing, and features to make informed cloud decisions.
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Cloud className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">200+ Services Compared</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-gray-700">Real-time Pricing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Updated Daily</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Compare Services
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
            >
              View Pricing
            </Button>
          </div>

          <div className="mt-12 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-20"></div>
      </div>
    </section>
  );
};

export default Hero;

