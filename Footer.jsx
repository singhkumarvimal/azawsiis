import { Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    azure: [
      { name: 'Azure Documentation', url: 'https://docs.microsoft.com/azure' },
      { name: 'Azure Pricing Calculator', url: 'https://azure.microsoft.com/pricing/calculator' },
      { name: 'Azure Status', url: 'https://status.azure.com' }
    ],
    aws: [
      { name: 'AWS Documentation', url: 'https://docs.aws.amazon.com' },
      { name: 'AWS Pricing Calculator', url: 'https://calculator.aws' },
      { name: 'AWS Status', url: 'https://status.aws.amazon.com' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VS</span>
              </div>
              <h3 className="text-xl font-bold">Azure vs AWS</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Comprehensive cloud platform comparison to help you make informed decisions.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for the cloud community</span>
            </div>
          </div>

          {/* Azure Links */}
          <div>
            <h4 className="font-semibold text-blue-400 mb-4">Microsoft Azure</h4>
            <ul className="space-y-2">
              {links.azure.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center space-x-1 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AWS Links */}
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">Amazon Web Services</h4>
            <ul className="space-y-2">
              {links.aws.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm flex items-center space-x-1 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-gray-300 mb-4">About This Site</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span>Data updated daily from official sources</span>
              </li>
              <li>
                <span>Pricing estimates may vary by region</span>
              </li>
              <li>
                <span>Not affiliated with Microsoft or Amazon</span>
              </li>
              <li>
                <span>Open source comparison data</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Azure vs AWS Comparison. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 text-center">
            <strong>Disclaimer:</strong> This comparison is for informational purposes only. 
            Pricing and features are subject to change. Always consult official documentation 
            and pricing calculators for the most current information. Microsoft Azure and Amazon Web Services 
            are trademarks of their respective companies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

