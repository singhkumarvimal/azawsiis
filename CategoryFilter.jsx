import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Server, 
  Database, 
  HardDrive, 
  Network, 
  Brain, 
  Shield,
  Filter
} from 'lucide-react';

const iconMap = {
  Server: Server,
  Database: Database,
  HardDrive: HardDrive,
  Network: Network,
  Brain: Brain,
  Shield: Shield
};

const CategoryFilter = ({ categories, activeCategory, onCategoryChange, serviceCount }) => {
  const getIcon = (iconName) => {
    const IconComponent = iconMap[iconName] || Server;
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
      </div>
      
      <div className="space-y-2">
        <Button
          variant={activeCategory === 'all' ? 'default' : 'outline'}
          onClick={() => onCategoryChange('all')}
          className="w-full justify-start"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded"></div>
              <span>All Services</span>
            </div>
            <Badge variant="secondary" className="ml-2">
              {Object.values(serviceCount).reduce((total, count) => total + count, 0)}
            </Badge>
          </div>
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category.id)}
            className="w-full justify-start"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                {getIcon(category.icon)}
                <span>{category.name}</span>
              </div>
              <Badge variant="secondary" className="ml-2">
                {serviceCount[category.id] || 0}
              </Badge>
            </div>
          </Button>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-sm text-gray-900 mb-2">Quick Stats</h4>
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Total Services:</span>
            <span className="font-medium">
              {Object.values(serviceCount).reduce((total, count) => total + count, 0)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Categories:</span>
            <span className="font-medium">{categories.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Last Updated:</span>
            <span className="font-medium">Today</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;

