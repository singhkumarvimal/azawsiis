// Azure and AWS Services Data
export const serviceCategories = [
  {
    id: 'compute',
    name: 'Compute Services',
    icon: 'Server',
    description: 'Virtual machines, containers, and serverless computing'
  },
  {
    id: 'storage',
    name: 'Storage Services',
    icon: 'Database',
    description: 'Object storage, block storage, and file systems'
  },
  {
    id: 'database',
    name: 'Database Services',
    icon: 'Database',
    description: 'Relational and NoSQL database solutions'
  },
  {
    id: 'networking',
    name: 'Networking & CDN',
    icon: 'Network',
    description: 'Virtual networks, load balancers, and content delivery'
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: 'Brain',
    description: 'Artificial intelligence and machine learning services'
  },
  {
    id: 'security',
    name: 'Security & Identity',
    icon: 'Shield',
    description: 'Identity management, security, and compliance'
  }
];

export const services = {
  compute: [
    {
      azure: {
        name: 'Azure Virtual Machines',
        description: 'Scalable on-demand compute capacity',
        pricing: 'Starting from $0.008/hour',
        features: ['Windows & Linux support', 'Auto-scaling', 'Multiple VM sizes', 'Hybrid cloud ready'],
        pros: ['Excellent Windows integration', 'Hybrid cloud capabilities', 'Reserved instances savings'],
        cons: ['Complex pricing model', 'Limited free tier']
      },
      aws: {
        name: 'Amazon EC2',
        description: 'Resizable compute capacity in the cloud',
        pricing: 'Starting from $0.0058/hour',
        features: ['Multiple instance types', 'Spot instances', 'Auto Scaling', 'Elastic Load Balancing'],
        pros: ['Mature platform', 'Extensive instance types', 'Spot pricing savings'],
        cons: ['Steep learning curve', 'Data transfer costs']
      },
      category: 'compute'
    },
    {
      azure: {
        name: 'Azure Functions',
        description: 'Event-driven serverless compute',
        pricing: 'Pay per execution',
        features: ['Multiple languages', 'Event triggers', 'Auto-scaling', 'Consumption-based pricing'],
        pros: ['Integrated with Azure ecosystem', 'Visual Studio integration'],
        cons: ['Cold start latency', 'Limited execution time']
      },
      aws: {
        name: 'AWS Lambda',
        description: 'Run code without provisioning servers',
        pricing: 'Pay per request and duration',
        features: ['Multiple runtimes', 'Event-driven', 'Auto-scaling', 'VPC support'],
        pros: ['Pioneer in serverless', 'Extensive integrations', 'Large community'],
        cons: ['Vendor lock-in', 'Cold start issues']
      },
      category: 'compute'
    },
    {
      azure: {
        name: 'Azure Kubernetes Service (AKS)',
        description: 'Managed Kubernetes container orchestration',
        pricing: 'Free control plane, pay for nodes',
        features: ['Managed control plane', 'Auto-scaling', 'Azure AD integration', 'DevOps integration'],
        pros: ['No control plane costs', 'Strong enterprise features'],
        cons: ['Fewer regions than EKS', 'Azure-specific features']
      },
      aws: {
        name: 'Amazon EKS',
        description: 'Managed Kubernetes service',
        pricing: '$0.10/hour per cluster + node costs',
        features: ['Managed control plane', 'Auto-scaling', 'IAM integration', 'Fargate support'],
        pros: ['Highly available', 'AWS service integrations', 'Fargate serverless option'],
        cons: ['Control plane costs', 'Complex networking']
      },
      category: 'compute'
    }
  ],
  storage: [
    {
      azure: {
        name: 'Azure Blob Storage',
        description: 'Massively scalable object storage',
        pricing: 'Starting from $0.0184/GB/month',
        features: ['Hot, cool, archive tiers', 'Lifecycle management', 'Geo-redundancy', 'CDN integration'],
        pros: ['Multiple access tiers', 'Strong consistency', 'Azure ecosystem integration'],
        cons: ['Limited regions for some tiers', 'Complex pricing tiers']
      },
      aws: {
        name: 'Amazon S3',
        description: 'Object storage built to store and retrieve data',
        pricing: 'Starting from $0.023/GB/month',
        features: ['Multiple storage classes', 'Lifecycle policies', 'Cross-region replication', 'Event notifications'],
        pros: ['Industry standard', 'Extensive integrations', 'Mature feature set'],
        cons: ['Data transfer costs', 'Complex pricing model']
      },
      category: 'storage'
    },
    {
      azure: {
        name: 'Azure Files',
        description: 'Fully managed file shares in the cloud',
        pricing: 'Starting from $0.06/GB/month',
        features: ['SMB and NFS protocols', 'Azure AD authentication', 'Snapshot support', 'Backup integration'],
        pros: ['Native Windows integration', 'Enterprise features', 'Hybrid scenarios'],
        cons: ['Higher costs', 'Performance limitations']
      },
      aws: {
        name: 'Amazon EFS',
        description: 'Scalable file storage for EC2',
        pricing: 'Starting from $0.30/GB/month',
        features: ['POSIX-compliant', 'Auto-scaling', 'Multiple performance modes', 'Encryption support'],
        pros: ['Automatic scaling', 'High performance', 'POSIX compliance'],
        cons: ['Expensive', 'Linux only']
      },
      category: 'storage'
    }
  ],
  database: [
    {
      azure: {
        name: 'Azure SQL Database',
        description: 'Fully managed relational database',
        pricing: 'Starting from $5/month',
        features: ['Auto-scaling', 'Built-in intelligence', 'Advanced security', 'Hybrid scenarios'],
        pros: ['SQL Server compatibility', 'Intelligent performance', 'Enterprise features'],
        cons: ['Microsoft ecosystem lock-in', 'Limited customization']
      },
      aws: {
        name: 'Amazon RDS',
        description: 'Managed relational database service',
        pricing: 'Starting from $12.41/month',
        features: ['Multiple engines', 'Automated backups', 'Multi-AZ deployment', 'Read replicas'],
        pros: ['Multiple database engines', 'Mature service', 'High availability options'],
        cons: ['Limited customization', 'Vendor lock-in']
      },
      category: 'database'
    },
    {
      azure: {
        name: 'Azure Cosmos DB',
        description: 'Globally distributed NoSQL database',
        pricing: 'Starting from $24/month',
        features: ['Multi-model support', 'Global distribution', 'Multiple consistency levels', 'Auto-scaling'],
        pros: ['Global distribution', 'Multiple APIs', 'Guaranteed SLAs'],
        cons: ['Complex pricing', 'Learning curve']
      },
      aws: {
        name: 'Amazon DynamoDB',
        description: 'Fast and flexible NoSQL database',
        pricing: 'Pay per request or provisioned capacity',
        features: ['Serverless option', 'Global tables', 'Auto-scaling', 'Point-in-time recovery'],
        pros: ['Serverless option', 'Predictable performance', 'AWS integrations'],
        cons: ['Query limitations', 'Vendor lock-in']
      },
      category: 'database'
    }
  ],
  networking: [
    {
      azure: {
        name: 'Azure Virtual Network',
        description: 'Isolated network environment in Azure',
        pricing: 'Free for basic networking',
        features: ['Subnets', 'Network security groups', 'VPN Gateway', 'ExpressRoute'],
        pros: ['Integrated with Azure services', 'Hybrid connectivity', 'Network security'],
        cons: ['Complex configuration', 'Limited cross-region peering']
      },
      aws: {
        name: 'Amazon VPC',
        description: 'Isolated cloud resources in a virtual network',
        pricing: 'Free for basic VPC',
        features: ['Subnets', 'Security groups', 'VPN connections', 'Direct Connect'],
        pros: ['Mature networking features', 'Flexible configuration', 'Strong security'],
        cons: ['Complex setup', 'NAT Gateway costs']
      },
      category: 'networking'
    },
    {
      azure: {
        name: 'Azure CDN',
        description: 'Global content delivery network',
        pricing: 'Starting from $0.081/GB',
        features: ['Multiple providers', 'Custom domains', 'SSL support', 'Real-time analytics'],
        pros: ['Multiple CDN providers', 'Azure integration', 'Custom rules'],
        cons: ['Limited PoPs compared to CloudFront', 'Configuration complexity']
      },
      aws: {
        name: 'Amazon CloudFront',
        description: 'Fast content delivery network',
        pricing: 'Starting from $0.085/GB',
        features: ['Global edge locations', 'Lambda@Edge', 'Real-time logs', 'Origin shield'],
        pros: ['Extensive global network', 'Lambda@Edge', 'AWS integration'],
        cons: ['Complex pricing', 'Configuration complexity']
      },
      category: 'networking'
    }
  ],
  ai: [
    {
      azure: {
        name: 'Azure Cognitive Services',
        description: 'AI services for vision, speech, language, and decision',
        pricing: 'Pay per transaction',
        features: ['Computer Vision', 'Speech Services', 'Language Understanding', 'Decision APIs'],
        pros: ['Comprehensive AI portfolio', 'Easy integration', 'Enterprise ready'],
        cons: ['Microsoft ecosystem dependency', 'Limited customization']
      },
      aws: {
        name: 'Amazon AI Services',
        description: 'Machine learning services for developers',
        pricing: 'Pay per use',
        features: ['Rekognition', 'Polly', 'Comprehend', 'Lex'],
        pros: ['Mature AI services', 'AWS ecosystem integration', 'Scalable'],
        cons: ['Service fragmentation', 'Learning curve']
      },
      category: 'ai'
    },
    {
      azure: {
        name: 'Azure Machine Learning',
        description: 'End-to-end machine learning lifecycle',
        pricing: 'Pay for compute resources',
        features: ['AutoML', 'MLOps', 'Designer interface', 'Responsible AI'],
        pros: ['Comprehensive ML platform', 'Visual designer', 'Enterprise features'],
        cons: ['Complex pricing', 'Steep learning curve']
      },
      aws: {
        name: 'Amazon SageMaker',
        description: 'Build, train, and deploy ML models',
        pricing: 'Pay for compute and storage',
        features: ['Jupyter notebooks', 'AutoML', 'Model deployment', 'MLOps'],
        pros: ['Comprehensive ML platform', 'Jupyter integration', 'Scalable'],
        cons: ['Complex pricing', 'AWS-specific knowledge required']
      },
      category: 'ai'
    }
  ],
  security: [
    {
      azure: {
        name: 'Azure Active Directory',
        description: 'Identity and access management service',
        pricing: 'Free tier available, premium from $6/user/month',
        features: ['Single sign-on', 'Multi-factor authentication', 'Conditional access', 'Identity protection'],
        pros: ['Enterprise integration', 'Comprehensive features', 'Hybrid scenarios'],
        cons: ['Complex licensing', 'Microsoft ecosystem dependency']
      },
      aws: {
        name: 'AWS IAM',
        description: 'Identity and access management',
        pricing: 'Free for basic IAM',
        features: ['Fine-grained permissions', 'Roles and policies', 'Multi-factor authentication', 'Access analyzer'],
        pros: ['Granular control', 'Free basic features', 'AWS service integration'],
        cons: ['Complex policy language', 'Learning curve']
      },
      category: 'security'
    },
    {
      azure: {
        name: 'Azure Security Center',
        description: 'Unified security management and threat protection',
        pricing: 'Free tier available, standard from $15/node/month',
        features: ['Security recommendations', 'Threat detection', 'Compliance dashboard', 'Just-in-time access'],
        pros: ['Comprehensive security posture', 'Threat intelligence', 'Compliance support'],
        cons: ['Additional costs for advanced features', 'Complex configuration']
      },
      aws: {
        name: 'AWS Security Hub',
        description: 'Centralized security findings management',
        pricing: 'Pay per finding and compliance check',
        features: ['Security standards', 'Finding aggregation', 'Custom insights', 'Integration with AWS services'],
        pros: ['Centralized security view', 'AWS service integration', 'Compliance frameworks'],
        cons: ['Additional service costs', 'Complex setup']
      },
      category: 'security'
    }
  ]
};

export const pricingComparison = {
  compute: {
    'Small Instance (1 vCPU, 1GB RAM)': {
      azure: '$8.76/month (B1s)',
      aws: '$8.47/month (t3.nano)'
    },
    'Medium Instance (2 vCPU, 4GB RAM)': {
      azure: '$35.04/month (B2s)',
      aws: '$30.37/month (t3.medium)'
    },
    'Large Instance (4 vCPU, 16GB RAM)': {
      azure: '$140.16/month (D4s_v3)',
      aws: '$121.47/month (t3.xlarge)'
    }
  },
  storage: {
    'Object Storage (per GB/month)': {
      azure: '$0.0184 (Hot tier)',
      aws: '$0.023 (Standard)'
    },
    'Block Storage (per GB/month)': {
      azure: '$0.048 (Premium SSD)',
      aws: '$0.10 (gp3)'
    }
  },
  database: {
    'Small Database (1 vCore, 5GB)': {
      azure: '$5.00/month (Basic)',
      aws: '$12.41/month (db.t3.micro)'
    },
    'Medium Database (2 vCore, 50GB)': {
      azure: '$15.00/month (S1)',
      aws: '$29.93/month (db.t3.small)'
    }
  }
};

