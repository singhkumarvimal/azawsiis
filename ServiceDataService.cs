using AzureAwsComparisonDotNet.Models;
using System.Collections.Generic;

namespace AzureAwsComparisonDotNet.Services
{
    public class ServiceDataService
    {
        public ServiceData GetServiceData()
        {
            var serviceData = new ServiceData();

            // Service Categories
            serviceData.ServiceCategories = new List<ServiceCategory>
            {
                new ServiceCategory { Id = "compute", Name = "Compute Services", Icon = "Server", Description = "Virtual machines, containers, and serverless computing" },
                new ServiceCategory { Id = "storage", Name = "Storage Services", Icon = "Database", Description = "Object storage, block storage, and file systems" },
                new ServiceCategory { Id = "database", Name = "Database Services", Icon = "Database", Description = "Relational and NoSQL database solutions" },
                new ServiceCategory { Id = "networking", Name = "Networking & CDN", Icon = "Network", Description = "Virtual networks, load balancers, and content delivery" },
                new ServiceCategory { Id = "ai", Name = "AI & Machine Learning", Icon = "Brain", Description = "Artificial intelligence and machine learning services" },
                new ServiceCategory { Id = "security", Name = "Security & Identity", Icon = "Shield", Description = "Identity management, security, and compliance" }
            };

            // Compute Services
            serviceData.Services["compute"] = new List<ServiceComparison>
            {
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Virtual Machines",
                        Description = "Scalable on-demand compute capacity",
                        Pricing = "Starting from $0.008/hour",
                        Features = new List<string> { "Windows & Linux support", "Auto-scaling", "Multiple VM sizes", "Hybrid cloud ready" },
                        Pros = new List<string> { "Excellent Windows integration", "Hybrid cloud capabilities", "Reserved instances savings" },
                        Cons = new List<string> { "Complex pricing model", "Limited free tier" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon EC2",
                        Description = "Resizable compute capacity in the cloud",
                        Pricing = "Starting from $0.0058/hour",
                        Features = new List<string> { "Multiple instance types", "Spot instances", "Auto Scaling", "Elastic Load Balancing" },
                        Pros = new List<string> { "Mature platform", "Extensive instance types", "Spot pricing savings" },
                        Cons = new List<string> { "Steep learning curve", "Data transfer costs" }
                    },
                    Category = "compute"
                },
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Functions",
                        Description = "Event-driven serverless compute",
                        Pricing = "Pay per execution",
                        Features = new List<string> { "Multiple languages", "Event triggers", "Auto-scaling", "Consumption-based pricing" },
                        Pros = new List<string> { "Integrated with Azure ecosystem", "Visual Studio integration" },
                        Cons = new List<string> { "Cold start latency", "Limited execution time" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "AWS Lambda",
                        Description = "Run code without provisioning servers",
                        Pricing = "Pay per request and duration",
                        Features = new List<string> { "Multiple runtimes", "Event-driven", "Auto-scaling", "VPC support" },
                        Pros = new List<string> { "Pioneer in serverless", "Extensive integrations", "Large community" },
                        Cons = new List<string> { "Vendor lock-in", "Cold start issues" }
                    },
                    Category = "compute"
                },
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Kubernetes Service (AKS)",
                        Description = "Managed Kubernetes container orchestration",
                        Pricing = "Free control plane, pay for nodes",
                        Features = new List<string> { "Managed control plane", "Auto-scaling", "Azure AD integration", "DevOps integration" },
                        Pros = new List<string> { "No control plane costs", "Strong enterprise features" },
                        Cons = new List<string> { "Fewer regions than EKS", "Azure-specific features" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon EKS",
                        Description = "Managed Kubernetes service",
                        Pricing = "$0.10/hour per cluster + node costs",
                        Features = new List<string> { "Managed control plane", "Auto-scaling", "IAM integration", "Fargate support" },
                        Pros = new List<string> { "Highly available", "AWS service integrations", "Fargate serverless option" },
                        Cons = new List<string> { "Control plane costs", "Complex networking" }
                    },
                    Category = "compute"
                }
            };

            // Storage Services
            serviceData.Services["storage"] = new List<ServiceComparison>
            {
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Blob Storage",
                        Description = "Massively scalable object storage",
                        Pricing = "Starting from $0.0184/GB/month",
                        Features = new List<string> { "Hot, cool, archive tiers", "Lifecycle management", "Geo-redundancy", "CDN integration" },
                        Pros = new List<string> { "Multiple access tiers", "Strong consistency", "Azure ecosystem integration" },
                        Cons = new List<string> { "Limited regions for some tiers", "Complex pricing tiers" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon S3",
                        Description = "Object storage built to store and retrieve data",
                        Pricing = "Starting from $0.023/GB/month",
                        Features = new List<string> { "Multiple storage classes", "Lifecycle policies", "Cross-region replication", "Event notifications" },
                        Pros = new List<string> { "Industry standard", "Extensive integrations", "Mature feature set" },
                        Cons = new List<string> { "Data transfer costs", "Complex pricing model" }
                    },
                    Category = "storage"
                },
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Files",
                        Description = "Fully managed file shares in the cloud",
                        Pricing = "Starting from $0.06/GB/month",
                        Features = new List<string> { "SMB and NFS protocols", "Azure AD authentication", "Snapshot support", "Backup integration" },
                        Pros = new List<string> { "Native Windows integration", "Enterprise features", "Hybrid scenarios" },
                        Cons = new List<string> { "Higher costs", "Performance limitations" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon EFS",
                        Description = "Scalable file storage for EC2",
                        Pricing = "Starting from $0.30/GB/month",
                        Features = new List<string> { "POSIX-compliant", "Auto-scaling", "Multiple performance modes", "Encryption support" },
                        Pros = new List<string> { "Automatic scaling", "High performance", "POSIX compliance" },
                        Cons = new List<string> { "Expensive", "Linux only" }
                    },
                    Category = "storage"
                }
            };

            // Database Services
            serviceData.Services["database"] = new List<ServiceComparison>
            {
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure SQL Database",
                        Description = "Fully managed relational database",
                        Pricing = "Starting from $5/month",
                        Features = new List<string> { "Auto-scaling", "Built-in intelligence", "Advanced security", "Hybrid scenarios" },
                        Pros = new List<string> { "SQL Server compatibility", "Intelligent performance", "Enterprise features" },
                        Cons = new List<string> { "Microsoft ecosystem lock-in", "Limited customization" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon RDS",
                        Description = "Managed relational database service",
                        Pricing = "Starting from $12.41/month",
                        Features = new List<string> { "Multiple engines", "Automated backups", "Multi-AZ deployment", "Read replicas" },
                        Pros = new List<string> { "Multiple database engines", "Mature service", "High availability options" },
                        Cons = new List<string> { "Limited customization", "Vendor lock-in" }
                    },
                    Category = "database"
                },
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Cosmos DB",
                        Description = "Globally distributed NoSQL database",
                        Pricing = "Starting from $24/month",
                        Features = new List<string> { "Multi-model support", "Global distribution", "Multiple consistency levels", "Auto-scaling" },
                        Pros = new List<string> { "Global distribution", "Multiple APIs", "Guaranteed SLAs" },
                        Cons = new List<string> { "Complex pricing", "Learning curve" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon DynamoDB",
                        Description = "Fast and flexible NoSQL database",
                        Pricing = "Pay per request or provisioned capacity",
                        Features = new List<string> { "Serverless option", "Global tables", "Auto-scaling", "Point-in-time recovery" },
                        Pros = new List<string> { "Serverless option", "Predictable performance", "AWS integrations" },
                        Cons = new List<string> { "Query limitations", "Vendor lock-in" }
                    },
                    Category = "database"
                }
            };

            // Networking Services
            serviceData.Services["networking"] = new List<ServiceComparison>
            {
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Virtual Network",
                        Description = "Isolated network environment in Azure",
                        Pricing = "Free for basic networking",
                        Features = new List<string> { "Subnets", "Network security groups", "VPN Gateway", "ExpressRoute" },
                        Pros = new List<string> { "Integrated with Azure services", "Hybrid connectivity", "Network security" },
                        Cons = new List<string> { "Complex configuration", "Limited cross-region peering" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon VPC",
                        Description = "Isolated cloud resources in a virtual network",
                        Pricing = "Free for basic VPC",
                        Features = new List<string> { "Subnets", "Security groups", "VPN connections", "Direct Connect" },
                        Pros = new List<string> { "Mature networking features", "Flexible configuration", "Strong security" },
                        Cons = new List<string> { "Complex setup", "NAT Gateway costs" }
                    },
                    Category = "networking"
                },
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure CDN",
                        Description = "Global content delivery network",
                        Pricing = "Starting from $0.081/GB",
                        Features = new List<string> { "Multiple providers", "Custom domains", "SSL support", "Real-time analytics" },
                        Pros = new List<string> { "Multiple CDN providers", "Azure integration", "Custom rules" },
                        Cons = new List<string> { "Limited PoPs compared to CloudFront", "Configuration complexity" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon CloudFront",
                        Description = "Fast content delivery network",
                        Pricing = "Starting from $0.085/GB",
                        Features = new List<string> { "Global edge locations", "Lambda@Edge", "Real-time logs", "Origin shield" },
                        Pros = new List<string> { "Extensive global network", "Lambda@Edge", "AWS integration" },
                        Cons = new List<string> { "Complex pricing", "Configuration complexity" }
                    },
                    Category = "networking"
                }
            };

            // AI Services
            serviceData.Services["ai"] = new List<ServiceComparison>
            {
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Cognitive Services",
                        Description = "AI services for vision, speech, language, and decision",
                        Pricing = "Pay per transaction",
                        Features = new List<string> { "Computer Vision", "Speech Services", "Language Understanding", "Decision APIs" },
                        Pros = new List<string> { "Comprehensive AI portfolio", "Easy integration", "Enterprise ready" },
                        Cons = new List<string> { "Microsoft ecosystem dependency", "Limited customization" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon AI Services",
                        Description = "Machine learning services for developers",
                        Pricing = "Pay per use",
                        Features = new List<string> { "Rekognition", "Polly", "Comprehend", "Lex" },
                        Pros = new List<string> { "Mature AI services", "AWS ecosystem integration", "Scalable" },
                        Cons = new List<string> { "Service fragmentation", "Learning curve" }
                    },
                    Category = "ai"
                },
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Machine Learning",
                        Description = "End-to-end machine learning lifecycle",
                        Pricing = "Pay for compute resources",
                        Features = new List<string> { "AutoML", "MLOps", "Designer interface", "Responsible AI" },
                        Pros = new List<string> { "Comprehensive ML platform", "Visual designer", "Enterprise features" },
                        Cons = new List<string> { "Complex pricing", "Steep learning curve" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "Amazon SageMaker",
                        Description = "Build, train, and deploy ML models",
                        Pricing = "Pay for compute and storage",
                        Features = new List<string> { "Jupyter notebooks", "AutoML", "Model deployment", "MLOps" },
                        Pros = new List<string> { "Comprehensive ML platform", "Jupyter integration", "Scalable" },
                        Cons = new List<string> { "Complex pricing", "AWS-specific knowledge required" }
                    },
                    Category = "ai"
                }
            };

            // Security Services
            serviceData.Services["security"] = new List<ServiceComparison>
            {
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Active Directory",
                        Description = "Identity and access management service",
                        Pricing = "Free tier available, premium from $6/user/month",
                        Features = new List<string> { "Single sign-on", "Multi-factor authentication", "Conditional access", "Identity protection" },
                        Pros = new List<string> { "Enterprise integration", "Comprehensive features", "Hybrid scenarios" },
                        Cons = new List<string> { "Complex licensing", "Microsoft ecosystem dependency" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "AWS IAM",
                        Description = "Identity and access management",
                        Pricing = "Free for basic IAM",
                        Features = new List<string> { "Fine-grained permissions", "Roles and policies", "Multi-factor authentication", "Access analyzer" },
                        Pros = new List<string> { "Granular control", "Free basic features", "AWS service integration" },
                        Cons = new List<string> { "Complex policy language", "Learning curve" }
                    },
                    Category = "security"
                },
                new ServiceComparison
                {
                    Azure = new CloudServiceDetail
                    {
                        Name = "Azure Security Center",
                        Description = "Unified security management and threat protection",
                        Pricing = "Free tier available, standard from $15/node/month",
                        Features = new List<string> { "Security recommendations", "Threat detection", "Compliance dashboard", "Just-in-time access" },
                        Pros = new List<string> { "Comprehensive security posture", "Threat intelligence", "Compliance support" },
                        Cons = new List<string> { "Additional costs for advanced features", "Complex configuration" }
                    },
                    Aws = new CloudServiceDetail
                    {
                        Name = "AWS Security Hub",
                        Description = "Centralized security findings management",
                        Pricing = "Pay per finding and compliance check",
                        Features = new List<string> { "Security standards", "Finding aggregation", "Custom insights", "Integration with AWS services" },
                        Pros = new List<string> { "Centralized security view", "AWS service integration", "Compliance frameworks" },
                        Cons = new List<string> { "Additional service costs", "Complex setup" }
                    },
                    Category = "security"
                }
            };

            // Pricing Comparison
            serviceData.PricingComparison["compute"] = new Dictionary<string, PricingDetails>
            {
                ["Small Instance (1 vCPU, 1GB RAM)"] = new PricingDetails { Azure = "$8.76/month (B1s)", Aws = "$8.47/month (t3.nano)" },
                ["Medium Instance (2 vCPU, 4GB RAM)"] = new PricingDetails { Azure = "$35.04/month (B2s)", Aws = "$30.37/month (t3.medium)" },
                ["Large Instance (4 vCPU, 16GB RAM)"] = new PricingDetails { Azure = "$140.16/month (D4s_v3)", Aws = "$121.47/month (t3.xlarge)" }
            };

            serviceData.PricingComparison["storage"] = new Dictionary<string, PricingDetails>
            {
                ["Object Storage (per GB/month)"] = new PricingDetails { Azure = "$0.0184 (Hot tier)", Aws = "$0.023 (Standard)" },
                ["Block Storage (per GB/month)"] = new PricingDetails { Azure = "$0.048 (Premium SSD)", Aws = "$0.10 (gp3)" }
            };

            serviceData.PricingComparison["database"] = new Dictionary<string, PricingDetails>
            {
                ["Small Database (1 vCore, 5GB)"] = new PricingDetails { Azure = "$5.00/month (Basic)", Aws = "$12.41/month (db.t3.micro)" },
                ["Medium Database (2 vCore, 50GB)"] = new PricingDetails { Azure = "$15.00/month (S1)", Aws = "$29.93/month (db.t3.small)" }
            };

            return serviceData;
        }
    }
}

