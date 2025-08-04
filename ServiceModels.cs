using System.Collections.Generic;

namespace AzureAwsComparisonDotNet.Models
{
    public class ServiceCategory
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public string Description { get; set; }
    }

    public class CloudServiceDetail
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Pricing { get; set; }
        public List<string> Features { get; set; }
        public List<string> Pros { get; set; }
        public List<string> Cons { get; set; }
    }

    public class ServiceComparison
    {
        public CloudServiceDetail Azure { get; set; }
        public CloudServiceDetail Aws { get; set; }
        public string Category { get; set; }
    }

    public class PricingDetails
    {
        public string Azure { get; set; }
        public string Aws { get; set; }
    }

    public class ServiceData
    {
        public List<ServiceCategory> ServiceCategories { get; set; }
        public Dictionary<string, List<ServiceComparison>> Services { get; set; }
        public Dictionary<string, Dictionary<string, PricingDetails>> PricingComparison { get; set; }

        public ServiceData()
        {
            ServiceCategories = new List<ServiceCategory>();
            Services = new Dictionary<string, List<ServiceComparison>>();
            PricingComparison = new Dictionary<string, Dictionary<string, PricingDetails>>();
        }
    }
}

