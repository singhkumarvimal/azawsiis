import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderFeatureList = (features) => (
    <ul className="space-y-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2 text-sm">
          <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );

  const renderProsCons = (items, isPositive = true) => (
    <ul className="space-y-1">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2 text-sm">
          {isPositive ? (
            <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
          ) : (
            <X className="w-3 h-3 text-red-500 flex-shrink-0" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <Card className="w-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">
              <span className="text-blue-600">{service.azure.name}</span>
              <span className="text-gray-400 mx-2">vs</span>
              <span className="text-orange-500">{service.aws.name}</span>
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Compare {service.category} solutions from both providers
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4"
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Azure Service */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <h4 className="font-semibold text-blue-600">Microsoft Azure</h4>
            </div>
            
            <p className="text-sm text-gray-600">{service.azure.description}</p>
            
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                {service.azure.pricing}
              </Badge>
            </div>

            {isExpanded && (
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-sm mb-2">Key Features</h5>
                  {renderFeatureList(service.azure.features)}
                </div>
                
                <div>
                  <h5 className="font-medium text-sm mb-2 text-green-600">Pros</h5>
                  {renderProsCons(service.azure.pros, true)}
                </div>
                
                <div>
                  <h5 className="font-medium text-sm mb-2 text-red-600">Cons</h5>
                  {renderProsCons(service.azure.cons, false)}
                </div>
              </div>
            )}
          </div>

          {/* AWS Service */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <h4 className="font-semibold text-orange-500">Amazon Web Services</h4>
            </div>
            
            <p className="text-sm text-gray-600">{service.aws.description}</p>
            
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-orange-50 text-orange-700">
                {service.aws.pricing}
              </Badge>
            </div>

            {isExpanded && (
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-sm mb-2">Key Features</h5>
                  {renderFeatureList(service.aws.features)}
                </div>
                
                <div>
                  <h5 className="font-medium text-sm mb-2 text-green-600">Pros</h5>
                  {renderProsCons(service.aws.pros, true)}
                </div>
                
                <div>
                  <h5 className="font-medium text-sm mb-2 text-red-600">Cons</h5>
                  {renderProsCons(service.aws.cons, false)}
                </div>
              </div>
            )}
          </div>
        </div>

        {!isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className="w-full"
            >
              View Detailed Comparison
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

