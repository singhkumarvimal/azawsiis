import { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import CategoryFilter from './components/CategoryFilter';
import ServiceCard from './components/ServiceCard';
import PricingComparison from './components/PricingComparison';
import Footer from './components/Footer';
import { serviceCategories, services, pricingComparison } from './data/services';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate service counts per category
  const serviceCount = useMemo(() => {
    const counts = {};
    serviceCategories.forEach(category => {
      counts[category.id] = services[category.id]?.length || 0;
    });
    return counts;
  }, []);

  // Filter services based on category and search
  const filteredServices = useMemo(() => {
    let allServices = [];
    
    if (activeCategory === 'all') {
      // Get all services from all categories
      Object.values(services).forEach(categoryServices => {
        allServices = [...allServices, ...categoryServices];
      });
    } else {
      // Get services from specific category
      allServices = services[activeCategory] || [];
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      allServices = allServices.filter(service => 
        service.azure.name.toLowerCase().includes(query) ||
        service.aws.name.toLowerCase().includes(query) ||
        service.azure.description.toLowerCase().includes(query) ||
        service.aws.description.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query)
      );
    }

    return allServices;
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery(''); // Clear search when changing category
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setActiveCategory('all'); // Show all categories when searching
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main>
        <Hero />
        <Overview />
        
        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Comparison</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare services across different categories. Each comparison includes features, 
                pricing, pros and cons to help you make informed decisions.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Category Filter Sidebar */}
              <div className="lg:col-span-1">
                <CategoryFilter
                  categories={serviceCategories}
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                  serviceCount={serviceCount}
                />
              </div>

              {/* Services Grid */}
              <div className="lg:col-span-3">
                {searchQuery && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800">
                      Showing {filteredServices.length} results for "{searchQuery}"
                      {filteredServices.length === 0 && (
                        <span className="block mt-1 text-sm">
                          Try adjusting your search terms or browse by category.
                        </span>
                      )}
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => (
                      <ServiceCard key={`${service.category}-${index}`} service={service} />
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl text-gray-400">🔍</span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        {searchQuery ? 'No services found' : 'No services in this category'}
                      </h3>
                      <p className="text-gray-600">
                        {searchQuery 
                          ? 'Try different search terms or browse by category.'
                          : 'Select a different category to view services.'
                        }
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PricingComparison pricingData={pricingComparison} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
