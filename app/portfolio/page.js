'use client'
import Link from 'next/link'

const caseStudies = [
  // === EXISTING PROJECTS (20) ===
  // 1. PHP Web Development (Privates) - 2011
  {
    id: 1,
    title: "PHP Web Development (Privates)",
    year: "2011",
    category: "PHP Development",
    points: [
      "Built a custom content management system (CMS) with native PHP and MySQL",
      "Implemented multi-level authentication for admin and users",
      "Developed file upload and management module with basic security",
      "Integrated local payment gateway for a simple e-commerce system"
    ],
    tech: ["PHP 5.3", "MySQL", "jQuery", "HTML/CSS"]
  },
  // 2. PHP Web Development (Privates) - 2013
  {
    id: 2,
    title: "PHP Web Development (Privates)",
    year: "2013",
    category: "PHP Development",
    points: [
      "Developed CodeIgniter-based application with MVC architecture",
      "Created reporting and analytics dashboard for management",
      "Optimized database queries to handle 50,000+ records",
      "Implemented REST API for third-party integrations"
    ],
    tech: ["PHP 5.4", "CodeIgniter", "MySQL", "Bootstrap"]
  },
  // 3. PHP Web Development (Privates) - 2015
  {
    id: 3,
    title: "PHP Web Development (Privates)",
    year: "2015",
    category: "PHP Development",
    points: [
      "Built inventory management system with Laravel 4.2",
      "Developed real-time notification feature using WebSocket",
      "Implemented queue system for background job processing",
      "Migrated database from MySQL to PostgreSQL for scalability"
    ],
    tech: ["PHP 5.6", "Laravel 4", "PostgreSQL", "Redis", "WebSocket"]
  },
  // 4. Maintenance Dashboards - 2016
  {
    id: 4,
    title: "Maintenance Dashboards (Privates)",
    year: "2016",
    category: "Dashboard Development",
    points: [
      "Built server monitoring dashboard with real-time charts",
      "Integrated APIs from various data sources (servers, apps, databases)",
      "Developed alert and notification system for anomaly detection",
      "Optimized dashboard performance for load times under 2 seconds"
    ],
    tech: ["PHP 7", "Laravel 5", "MySQL", "Chart.js", "AJAX"]
  },
  // 5. Maintenance Dashboards - 2018
  {
    id: 5,
    title: "Maintenance Dashboards (Privates)",
    year: "2018",
    category: "Dashboard Development",
    points: [
      "Developed dashboard for monitoring 50+ servers and applications",
      "Implemented centralized logging system with Elasticsearch",
      "Created interactive data visualizations for operations team",
      "Integrated with Slack for automatic notifications"
    ],
    tech: ["PHP 7.2", "Laravel 5.6", "Elasticsearch", "Vue.js", "Redis"]
  },
  // 6. Education Project (Privates) - 2017
  {
    id: 6,
    title: "Education Project (Privates)",
    year: "2017",
    category: "Education",
    points: [
      "Built Learning Management System (LMS) for 500+ students",
      "Developed online exam module with automated grading",
      "Created discussion forum and collaboration features",
      "Integrated payment system for course registration"
    ],
    tech: ["PHP 7", "Laravel 5.4", "MySQL", "Bootstrap", "AJAX"]
  },
  // 7. Education Project (Privates) - 2019
  {
    id: 7,
    title: "Education Project (Privates)",
    year: "2019",
    category: "Education",
    points: [
      "Developed e-learning platform with video streaming",
      "Created digital certification system with QR code verification",
      "Implemented gamification to boost student engagement",
      "Analytics dashboard to track learning progress"
    ],
    tech: ["PHP 7.3", "Laravel 6", "MySQL", "FFmpeg", "Redis"]
  },
  // 8. Crypto Solution - 2020
  {
    id: 8,
    title: "Crypto Solution (Privates)",
    year: "2020",
    category: "Cryptocurrency",
    points: [
      "Developed exchange platform with multi-exchange API integration",
      "Built real-time crypto price monitoring from various sources",
      "Implemented portfolio tracking with chart visualizations",
      "Alert system for significant price movements via email/telegram"
    ],
    tech: ["PHP 7.4", "Laravel 7", "Redis", "WebSocket", "Chart.js"]
  },
  // 9. Coin Auto Trades - 2021
  {
    id: 9,
    title: "Coin Auto Trades (Privates)",
    year: "2021",
    category: "Cryptocurrency",
    points: [
      "Built automated trading bot with GRID and DCA strategies",
      "Integrated Binance, Kraken, and Coinbase APIs for order execution",
      "Developed backtesting engine to test trading strategies",
      "Monitoring dashboard with real-time P&L"
    ],
    tech: ["Python 3.8", "CCXT Library", "Redis", "PostgreSQL", "Django"]
  },
  // 10. Social Media BOT Python Script - 2022
  {
    id: 10,
    title: "Social Media BOT Python Script (Privates)",
    year: "2022",
    category: "Python Automation",
    points: [
      "Developed Instagram bot for auto-like, follow, and comments using Selenium",
      "Implemented proxy rotation and fingerprint spoofing to avoid bans",
      "Multi-account management with centralized database",
      "Scheduling system for automated content posting"
    ],
    tech: ["Python 3.9", "Selenium", "Proxy Rotator", "PostgreSQL", "Celery"]
  },
  // 11. Social Media BOT Python Script - 2023
  {
    id: 11,
    title: "Social Media BOT Python Script (Privates)",
    year: "2023",
    category: "Python Automation",
    points: [
      "Built Twitter/X bot for auto-retweet and engagement",
      "Integrated OpenAI API for automated content generation",
      "Real-time trending topics and hashtag monitoring system",
      "Analytics dashboard to measure campaign performance"
    ],
    tech: ["Python 3.10", "Twitter API v2", "OpenAI API", "MongoDB", "Flask"]
  },
  // 12. Fixing PHP Project - 2022
  {
    id: 12,
    title: "Fixing PHP Project (Privates)",
    year: "2022",
    category: "PHP Maintenance",
    points: [
      "Migrated PHP 5.6 project to PHP 7.4 for compatibility and security",
      "Fixed critical security vulnerabilities (SQL injection, XSS)",
      "Optimized slow database queries (reducing execution time by 70%)",
      "Refactored spaghetti code into organized MVC structure"
    ],
    tech: ["PHP 7.4", "MySQL", "jQuery", "Bootstrap"]
  },
  // 13. DBA Database Projects - 2021
  {
    id: 13,
    title: "DBA Database Projects (Privates)",
    year: "2021",
    category: "Database Administration",
    points: [
      "Redesigned database schema to handle 1M+ transactions per day",
      "Implemented database replication for high availability",
      "Optimized indexing and query tuning (60% speed improvement)",
      "Built backup and recovery strategy with point-in-time recovery"
    ],
    tech: ["PostgreSQL 13", "pgBouncer", "Patroni", "Python", "Bash"]
  },
  // 14. Automatic Scanning Data - 2023
  {
    id: 14,
    title: "Automatic Scanning Data (Privates)",
    year: "2023",
    category: "Data Processing",
    points: [
      "Built OCR system for scanning and extracting data from documents",
      "Automated pipeline to process 10,000+ documents per day",
      "Implemented computer vision for document type classification",
      "Integrated with client's ERP system via REST API"
    ],
    tech: ["Python 3.10", "Tesseract OCR", "OpenCV", "RabbitMQ", "FastAPI"]
  },
  // 15. AI Project - 2024
  {
    id: 15,
    title: "AI Project (Privates)",
    year: "2024",
    category: "Artificial Intelligence",
    points: [
      "Developed customer service chatbot with RAG (Retrieval-Augmented Generation)",
      "Fine-tuned LLM for healthcare domain with proprietary data",
      "Built vector database for semantic search (Pinecone/Weaviate)",
      "Implemented evaluation and monitoring system for AI performance"
    ],
    tech: ["Python 3.11", "LangChain", "OpenAI API", "Pinecone", "FastAPI"]
  },
  // 16. AI Project - 2025
  {
    id: 16,
    title: "AI Project (Privates)",
    year: "2025",
    category: "Artificial Intelligence",
    points: [
      "Built recommendation engine with collaborative filtering",
      "Implemented computer vision for visual product search",
      "Content personalization system based on user behavior",
      "Analytics dashboard to measure AI impact on conversions"
    ],
    tech: ["Python 3.12", "TensorFlow", "PyTorch", "Redis", "PostgreSQL"]
  },
  // 17. Project Idea Business - 2024
  {
    id: 17,
    title: "Project Idea Business (Privates)",
    year: "2024",
    category: "Business Application",
    points: [
      "Built MVP in 3 months with core business features",
      "Developed subscription and automated billing system",
      "Integrated multiple payment gateways (Stripe, Midtrans)",
      "Analytics dashboard to track business metrics"
    ],
    tech: ["Laravel 11", "Vue.js", "MySQL", "Redis", "Tailwind CSS"]
  },
  // 18. Protection Websites Projects - 2023
  {
    id: 18,
    title: "Protection Websites Projects (Privates)",
    year: "2023",
    category: "Security",
    points: [
      "Implemented custom Web Application Firewall (WAF)",
      "Brute force attack detection and prevention system",
      "Encrypted sensitive data in database (AES-256)",
      "Regular security audits and penetration testing"
    ],
    tech: ["PHP 8.1", "Laravel 10", "Nginx", "Fail2ban", "ModSecurity"]
  },
  // 19. Python Web Development - 2025
  {
    id: 19,
    title: "Python Web Development (Privates)",
    year: "2025",
    category: "Python Development",
    points: [
      "Built backend API with FastAPI for mobile app",
      "Implemented WebSocket for real-time chat feature",
      "Integrated with various third-party services (Stripe, SendGrid)",
      "Performance optimization with async database queries"
    ],
    tech: ["Python 3.12", "FastAPI", "PostgreSQL", "Redis", "Docker"]
  },
  // 20. Full Custom Development - 2026
  {
    id: 20,
    title: "Full Custom Development (Privates)",
    year: "2026",
    category: "Full Stack Development",
    points: [
      "Built enterprise application with microservices architecture",
      "Implemented CI/CD pipeline with GitHub Actions",
      "Containerization with Docker and Kubernetes orchestration",
      "Monitoring and observability with Prometheus + Grafana"
    ],
    tech: ["Next.js 15", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "Redis"]
  },
  // === NEW PROJECTS (2016-2025) - 10 additional ===
  // 21. 2016 - E-commerce Integration
  {
    id: 21,
    title: "E-commerce Integration (Privates)",
    year: "2016",
    category: "E-commerce",
    points: [
      "Integrated payment gateway and inventory sync for an e-commerce platform",
      "Developed custom shipping calculator with real-time rates",
      "Implemented order management dashboard for admin",
      "Optimized database for 10,000+ products"
    ],
    tech: ["PHP 5.6", "Laravel 5.2", "MySQL", "jQuery"]
  },
  // 22. 2017 - Real Estate Platform
  {
    id: 22,
    title: "Real Estate Platform (Privates)",
    year: "2017",
    category: "Real Estate",
    points: [
      "Built property listing website with advanced search filters",
      "Integrated map-based search using Google Maps API",
      "Developed agent dashboard for listing management",
      "Implemented lead capture and CRM integration"
    ],
    tech: ["PHP 7", "Laravel 5.4", "MySQL", "Google Maps API", "Bootstrap"]
  },
  // 23. 2018 - API Development for Mobile App
  {
    id: 23,
    title: "API Development for Mobile App (Privates)",
    year: "2018",
    category: "API Development",
    points: [
      "Designed and built RESTful API for a social networking app",
      "Implemented JWT authentication and rate limiting",
      "Created real-time notifications using WebSocket",
      "Optimized API response time with caching (Redis)"
    ],
    tech: ["PHP 7.2", "Lumen", "MySQL", "Redis", "WebSocket"]
  },
  // 24. 2019 - Mobile App Backend
  {
    id: 24,
    title: "Mobile App Backend (Privates)",
    year: "2019",
    category: "Backend Development",
    points: [
      "Developed backend for a fitness tracking app with user profiles",
      "Integrated third-party APIs for step tracking and nutrition data",
      "Built analytics dashboard for user engagement",
      "Implemented push notifications via Firebase"
    ],
    tech: ["PHP 7.3", "Laravel 6", "MySQL", "Firebase", "Redis"]
  },
  // 25. 2020 - DeFi Dashboard
  {
    id: 25,
    title: "DeFi Dashboard (Privates)",
    year: "2020",
    category: "DeFi",
    points: [
      "Created dashboard for tracking DeFi portfolio across multiple chains",
      "Integrated with Ethereum and Solana RPC endpoints",
      "Developed real-time price charts using WebSocket",
      "Implemented wallet connection (MetaMask, Phantom)"
    ],
    tech: ["Node.js", "React", "Ethers.js", "Solana Web3.js", "Chart.js"]
  },
  // 26. 2021 - NFT Marketplace
  {
    id: 26,
    title: "NFT Marketplace (Privates)",
    year: "2021",
    category: "NFT",
    points: [
      "Built NFT minting and marketplace platform on Solana",
      "Integrated Metaplex protocol for NFT creation",
      "Developed frontend with React and Tailwind CSS",
      "Implemented auction and fixed-price listing features"
    ],
    tech: ["React", "Next.js", "Solana Web3.js", "Metaplex", "Tailwind"]
  },
  // 27. 2022 - Supply Chain Tracking
  {
    id: 27,
    title: "Supply Chain Tracking (Privates)",
    year: "2022",
    category: "Blockchain",
    points: [
      "Developed blockchain-based supply chain tracking system",
      "Created smart contracts for product provenance (Solidity)",
      "Built dashboard for stakeholders to trace items",
      "Integrated QR code scanning for easy tracking"
    ],
    tech: ["Ethereum", "Solidity", "React", "Node.js", "IPFS"]
  },
  // 28. 2023 - Healthcare Management System
  {
    id: 28,
    title: "Healthcare Management System (Privates)",
    year: "2023",
    category: "Healthcare",
    points: [
      "Built comprehensive HMS with patient records, appointments, billing",
      "Implemented role-based access for doctors, nurses, admins",
      "Integrated telemedicine module with video calls (WebRTC)",
      "Ensured HIPAA compliance with data encryption"
    ],
    tech: ["PHP 8.1", "Laravel 10", "MySQL", "WebRTC", "AES encryption"]
  },
  // 29. 2024 - AI Content Generator
  {
    id: 29,
    title: "AI Content Generator (Privates)",
    year: "2024",
    category: "AI SaaS",
    points: [
      "Developed AI-powered content generation tool using GPT-4",
      "Built subscription-based SaaS with Stripe integration",
      "Created user-friendly editor for content customization",
      "Implemented usage tracking and rate limiting"
    ],
    tech: ["Python 3.11", "FastAPI", "React", "OpenAI API", "Stripe"]
  },
  // 30. 2025 - IoT Data Platform
  {
    id: 30,
    title: "IoT Data Platform (Privates)",
    year: "2025",
    category: "IoT",
    points: [
      "Built platform to ingest and visualize IoT sensor data",
      "Implemented MQTT broker for real-time data streaming",
      "Developed dashboards with time-series charts",
      "Integrated anomaly detection using machine learning"
    ],
    tech: ["Node.js", "InfluxDB", "Grafana", "MQTT", "Python"]
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-purple-500/30">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <nav className="flex justify-between items-center mb-16 border-b border-white/5 pb-8 font-mono">
          <Link href="/" className="text-3xl font-black tracking-tighter text-white uppercase italic underline decoration-purple-500 decoration-4 underline-offset-8">KIMPULER</Link>
          <Link href="/" className="text-white/60 hover:text-white transition text-sm">← Back to Home</Link>
        </nav>

        <header className="mb-16">
          <h1 className="text-5xl font-black text-white mb-6">Project Portfolio</h1>
          <p className="text-xl text-slate-400 max-w-3xl">30+ private projects spanning 2011–2026. All client details are confidential, but the results speak for themselves.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((project) => (
            <div key={project.id} className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">{project.year}</span>
                <span className="text-xs text-slate-500">#{project.category}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <div className="mb-4 flex-grow">
                <ul className="space-y-2">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="text-slate-400 text-sm flex gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Have a similar project in mind?</h2>
          <a href="https://wa.me/6283841632837" target="_blank" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-purple-500 transition shadow-xl">
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  )
}