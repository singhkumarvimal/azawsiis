import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Users, 
  Calendar, 
  Award,
  Building,
  Zap,
  Shield,
  DollarSign
} from 'lucide-react';

const Overview = () => {
  const azureStats = [
    { label: 'Global Regions', value: '60+', icon: Globe },
    { label: 'Founded', value: '2010', icon: Calendar },
    { label: 'Market Share', value: '23%', icon: Award },
    { label: 'Enterprise Focus', value: 'Strong', icon: Building }
  ];

  const awsStats = [
    { label: 'Global Regions', value: '33', icon: Globe },
    { label: 'Founded', value: '2006', icon: Calendar },
    { label: 'Market Share', value: '32%', icon: Award },
    { label: 'Service Count', value: '200+', icon: Zap }
  ];

  const comparisonAreas = [
    {
      title: 'Market Position',
      azure: 'Second largest cloud provider with strong enterprise integration',
      aws: 'Market leader with the most comprehensive service portfolio',
      icon: Award
    },
    {
      title: 'Pricing Model',
      azure: 'Competitive pricing with hybrid cloud discounts',
      aws: 'Pay-as-you-go with extensive cost optimization options',
      icon: DollarSign
    },
    {
      title: 'Enterprise Integration',
      azure: 'Seamless integration with Microsoft ecosystem',
      aws: 'Strong enterprise features with broad third-party support',
      icon: Building
    },
    {
      title: 'Security & Compliance',
      azure: 'Built-in security with compliance certifications',
      aws: 'Comprehensive security services and compliance frameworks',
      icon: Shield
    }
  ];

  return (
    <section id="overview" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Overview</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare the key characteristics, strengths, and market positions of Microsoft Azure and Amazon Web Services.
          </p>
        </div>

        {/* Provider Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Azure Stats */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Az</span>
                </div>
                <div>
                  <CardTitle className="text-blue-600">Microsoft Azure</CardTitle>
                  <CardDescription>Enterprise-focused cloud platform</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {azureStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 space-y-2">
                <Badge className="bg-blue-100 text-blue-800">Hybrid Cloud Leader</Badge>
                <Badge className="bg-blue-100 text-blue-800">Microsoft Integration</Badge>
                <Badge className="bg-blue-100 text-blue-800">Enterprise Ready</Badge>
              </div>
            </CardContent>
          </Card>

          {/* AWS Stats */}
          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AWS</span>
                </div>
                <div>
                  <CardTitle className="text-orange-500">Amazon Web Services</CardTitle>
                  <CardDescription>Comprehensive cloud computing platform</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {awsStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 space-y-2">
                <Badge className="bg-orange-100 text-orange-800">Market Leader</Badge>
                <Badge className="bg-orange-100 text-orange-800">Most Services</Badge>
                <Badge className="bg-orange-100 text-orange-800">Innovation Pioneer</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Areas */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Comparison Areas</h3>
          
          {comparisonAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    {/* Category */}
                    <div className="p-6 bg-gray-50 flex items-center justify-center">
                      <div className="text-center">
                        <IconComponent className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                        <h4 className="font-semibold text-gray-900">{area.title}</h4>
                      </div>
                    </div>
                    
                    {/* Azure */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <span className="font-medium text-blue-600">Azure</span>
                      </div>
                      <p className="text-sm text-gray-600">{area.azure}</p>
                    </div>
                    
                    {/* AWS */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="font-medium text-orange-500">AWS</span>
                      </div>
                      <p className="text-sm text-gray-600">{area.aws}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Decision Guide */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-600">Choose Azure If:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You're heavily invested in Microsoft ecosystem</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You need strong hybrid cloud capabilities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enterprise integration is a priority</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You prefer integrated development tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-500">Choose AWS If:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You want the most comprehensive service catalog</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You're building cloud-native applications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You need cutting-edge services and features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>You value mature ecosystem and community</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Overview;

