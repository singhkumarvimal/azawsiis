import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Calculator } from 'lucide-react';

const PricingComparison = ({ pricingData }) => {
  const categories = Object.keys(pricingData);

  const parsePrice = (priceString) => {
    const match = priceString.match(/\$([0-9.]+)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const getCheaperProvider = (azurePrice, awsPrice) => {
    const azureCost = parsePrice(azurePrice);
    const awsCost = parsePrice(awsPrice);
    
    if (azureCost < awsCost) {
      return { provider: 'azure', savings: ((awsCost - azureCost) / awsCost * 100).toFixed(1) };
    } else if (awsCost < azureCost) {
      return { provider: 'aws', savings: ((azureCost - awsCost) / azureCost * 100).toFixed(1) };
    }
    return { provider: 'tie', savings: 0 };
  };

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <DollarSign className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-900">Pricing Comparison</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare costs across different service tiers and usage patterns. 
            Prices are estimates and may vary based on region and specific configurations.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((category) => (
            <Card key={category} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
                <CardTitle className="text-xl capitalize">{category} Services</CardTitle>
                <CardDescription>
                  Compare pricing for {category} services between Azure and AWS
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-900">Service Type</th>
                        <th className="text-left p-4 font-medium text-blue-600">Microsoft Azure</th>
                        <th className="text-left p-4 font-medium text-orange-500">Amazon AWS</th>
                        <th className="text-left p-4 font-medium text-gray-900">Best Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(pricingData[category]).map(([serviceType, prices], index) => {
                        const comparison = getCheaperProvider(prices.azure, prices.aws);
                        
                        return (
                          <tr key={serviceType} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-4 font-medium text-gray-900">{serviceType}</td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <span className="font-mono text-sm">{prices.azure}</span>
                                {comparison.provider === 'azure' && (
                                  <Badge className="bg-green-100 text-green-800">
                                    -{comparison.savings}%
                                  </Badge>
                                )}
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center space-x-2">
                                <span className="font-mono text-sm">{prices.aws}</span>
                                {comparison.provider === 'aws' && (
                                  <Badge className="bg-green-100 text-green-800">
                                    -{comparison.savings}%
                                  </Badge>
                                )}
                              </div>
                            </td>
                            <td className="p-4">
                              {comparison.provider === 'azure' && (
                                <div className="flex items-center space-x-1">
                                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                                  <span className="text-sm font-medium">Azure</span>
                                </div>
                              )}
                              {comparison.provider === 'aws' && (
                                <div className="flex items-center space-x-1">
                                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                  <span className="text-sm font-medium">AWS</span>
                                </div>
                              )}
                              {comparison.provider === 'tie' && (
                                <span className="text-sm text-gray-500">Similar</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Cost Calculator</h3>
              <p className="text-sm text-gray-600">
                Use official pricing calculators for accurate estimates based on your specific needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Cost Optimization</h3>
              <p className="text-sm text-gray-600">
                Both providers offer reserved instances, spot pricing, and other cost-saving options.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <DollarSign className="w-8 h-8 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Hidden Costs</h3>
              <p className="text-sm text-gray-600">
                Consider data transfer, support, and additional service costs in your total calculation.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> Prices shown are estimates based on standard configurations and may vary by region, 
            usage patterns, and specific requirements. Always use official pricing calculators for accurate quotes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;

