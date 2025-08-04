using AzureAwsComparisonDotNet.Models;
using AzureAwsComparisonDotNet.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Linq;

namespace AzureAwsComparisonDotNet.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ServiceDataService _serviceDataService;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
            _serviceDataService = new ServiceDataService();
        }

        public IActionResult Index()
        {
            var serviceData = _serviceDataService.GetServiceData();
            return View(serviceData);
        }

        public IActionResult Services(string category = "all", string search = "")
        {
            var serviceData = _serviceDataService.GetServiceData();
            
            // Filter services based on category and search
            var filteredServices = new List<ServiceComparison>();
            
            if (category == "all" || string.IsNullOrEmpty(category))
            {
                // Get all services from all categories
                foreach (var categoryServices in serviceData.Services.Values)
                {
                    filteredServices.AddRange(categoryServices);
                }
            }
            else
            {
                // Get services from specific category
                if (serviceData.Services.ContainsKey(category))
                {
                    filteredServices = serviceData.Services[category];
                }
            }

            // Apply search filter
            if (!string.IsNullOrEmpty(search))
            {
                var searchLower = search.ToLower();
                filteredServices = filteredServices.Where(service =>
                    service.Azure.Name.ToLower().Contains(searchLower) ||
                    service.Aws.Name.ToLower().Contains(searchLower) ||
                    service.Azure.Description.ToLower().Contains(searchLower) ||
                    service.Aws.Description.ToLower().Contains(searchLower) ||
                    service.Category.ToLower().Contains(searchLower)
                ).ToList();
            }

            ViewBag.ServiceCategories = serviceData.ServiceCategories;
            ViewBag.ActiveCategory = category;
            ViewBag.SearchQuery = search;
            ViewBag.ServiceCounts = serviceData.Services.ToDictionary(
                kvp => kvp.Key, 
                kvp => kvp.Value.Count
            );

            return View(filteredServices);
        }

        public IActionResult Pricing()
        {
            var serviceData = _serviceDataService.GetServiceData();
            return View(serviceData.PricingComparison);
        }

        public IActionResult Comparison()
        {
            var serviceData = _serviceDataService.GetServiceData();
            return View(serviceData);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

