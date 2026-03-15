from fastapi import FastAPI

app = FastAPI()

@app.get("/api/services")
def get_services():
    return [
        # ============================================
        # CATEGORY 1: CORE DEVELOPMENT SERVICES
        # ============================================
        # === 1. Full-Stack Web Development ===
        {
            "title": "🚀 Full-Stack Web Development (React/Next.js)",
            "category": "Core Development",
            "original_price": 2000,
            "price": 1600,
            "paypal_val": "1600",
            "desc": "Complete web application development with modern stack: Next.js 15, React, TypeScript, Tailwind CSS. Includes API integration, database design, and deployment."
        },
        {
            "title": "🐘 PHP Web Development (Laravel/CodeIgniter)",
            "category": "Core Development",
            "original_price": 1500,
            "price": 1200,
            "paypal_val": "1200",
            "desc": "Custom web applications using PHP frameworks. Perfect for e-commerce, CMS, business portals, and legacy system maintenance."
        },
        {
            "title": "📱 API Development & Integration",
            "category": "Core Development",
            "original_price": 1200,
            "price": 960,
            "paypal_val": "960",
            "desc": "RESTful/GraphQL APIs, third-party integrations, payment gateways, and microservices architecture. Average project cost $70-432 [citation:1]."
        },
        {
            "title": "🛒 E-commerce Development",
            "category": "Core Development",
            "original_price": 2500,
            "price": 2000,
            "paypal_val": "2000",
            "desc": "Custom e-commerce solutions with shopping cart, payment integration, inventory management, and admin dashboard."
        },
        {
            "title": "📊 Custom Dashboard Development",
            "category": "Core Development",
            "original_price": 1800,
            "price": 1440,
            "paypal_val": "1440",
            "desc": "Interactive business intelligence dashboards with real-time charts, data visualization, and reporting features."
        },
        
        # === 2. Backend & Database ===
        {
            "title": "⚙️ Backend Development (Node.js/Python)",
            "category": "Core Development",
            "original_price": 1800,
            "price": 1440,
            "paypal_val": "1440",
            "desc": "Scalable backend systems with Node.js, Python (FastAPI/Django), or PHP. Includes database design, authentication, and API development [citation:1]."
        },
        {
            "title": "🗄️ Database Administration & Optimization",
            "category": "Core Development",
            "original_price": 1000,
            "price": 800,
            "paypal_val": "800",
            "desc": "Database design, query optimization, performance tuning, replication setup, and backup strategies for MySQL, PostgreSQL, MongoDB."
        },
        {
            "title": "🔧 Legacy Code Modernization",
            "category": "Core Development",
            "original_price": 2000,
            "price": 1600,
            "paypal_val": "1600",
            "desc": "Migrate legacy PHP/ASP applications to modern stacks (Next.js/Laravel). Improve performance, security, and maintainability."
        },
        
        # ============================================
        # CATEGORY 2: AI & AUTOMATION SERVICES (TRENDING 2026)
        # ============================================
        # === 3. AI Integration & Chatbots ===
        {
            "title": "🤖 AI Chatbot Development",
            "category": "AI & Automation",
            "original_price": 2500,
            "price": 2000,
            "paypal_val": "2000",
            "desc": "Custom AI chatbots with natural language understanding, RAG implementation, and integration with your knowledge base. Market range $45-520 [citation:6]."
        },
        {
            "title": "🧠 AI Integration for Business",
            "category": "AI & Automation",
            "original_price": 3000,
            "price": 2400,
            "paypal_val": "2400",
            "desc": "Integrate OpenAI, Claude, or open-source LLMs into your applications. Semantic search, content generation, automated document processing [citation:2]."
        },
        {
            "title": "🎙️ AI Voice & Audio Solutions",
            "category": "AI & Automation",
            "original_price": 1800,
            "price": 1440,
            "paypal_val": "1440",
            "desc": "Text-to-speech integration, voice cloning, audio content generation using leading TTS APIs. Sub-250ms latency for real-time applications [citation:5]."
        },
        {
            "title": "⚡ Process Automation (RPA)",
            "category": "AI & Automation",
            "original_price": 1500,
            "price": 1200,
            "paypal_val": "1200",
            "desc": "Automate repetitive tasks, data entry, workflow optimization using Python scripts, Zapier/Make integrations, or custom automation solutions."
        },
        {
            "title": "📈 AI-Powered Analytics",
            "category": "AI & Automation",
            "original_price": 2200,
            "price": 1760,
            "paypal_val": "1760",
            "desc": "Predictive analytics, customer behavior analysis, recommendation engines, and business intelligence with machine learning."
        },
        
        # === 4. AI Consulting & Strategy ===
        {
            "title": "🎯 AI Strategy Consulting",
            "category": "AI & Automation",
            "original_price": 800,
            "price": 640,
            "paypal_val": "640",
            "desc": "One-hour consultation to assess your business needs, identify AI opportunities, and create implementation roadmap [citation:3]."
        },
        {
            "title": "🔍 AI Prompt Engineering",
            "category": "AI & Automation",
            "original_price": 500,
            "price": 400,
            "paypal_val": "400",
            "desc": "Design effective prompts for ChatGPT, Midjourney, DALL-E. Optimize AI outputs for marketing, content creation, and customer engagement."
        },
        
        # ============================================
        # CATEGORY 3: INFRASTRUCTURE & OPTIMIZATION
        # ============================================
        # === 5. Cloud & DevOps ===
        {
            "title": "☁️ AWS Cloud Architecture",
            "category": "Infrastructure",
            "original_price": 2000,
            "price": 1600,
            "paypal_val": "1600",
            "desc": "AWS solution design, migration, cost optimization, and infrastructure as code. Market range $88-201 per project [citation:1]."
        },
        {
            "title": "🐳 DevOps & CI/CD Setup",
            "category": "Infrastructure",
            "original_price": 1800,
            "price": 1440,
            "paypal_val": "1440",
            "desc": "Docker containerization, Kubernetes orchestration, GitHub Actions/GitLab CI pipeline setup, automated deployment [citation:1]."
        },
        {
            "title": "🌐 DigitalOcean Infrastructure",
            "category": "Infrastructure",
            "original_price": 1000,
            "price": 800,
            "paypal_val": "800",
            "desc": "Server setup, load balancing, droplet optimization, backup configuration, and performance tuning on DigitalOcean."
        },
        
        # === 6. Security & CDN ===
        {
            "title": "🔒 Server Hardening & Security",
            "category": "Infrastructure",
            "original_price": 900,
            "price": 720,
            "paypal_val": "720",
            "desc": "cPanel/WHM security hardening, firewall configuration, malware scanning, SSL setup, and security audit."
        },
        {
            "title": "⚡ Cloudflare CDN & WAF Setup",
            "category": "Infrastructure",
            "original_price": 600,
            "price": 480,
            "paypal_val": "480",
            "desc": "CDN configuration, DDoS protection, WAF rules, DNS management, and performance optimization with Cloudflare."
        },
        
        # === 7. Performance & Monitoring ===
        {
            "title": "🚀 Website Speed Optimization",
            "category": "Infrastructure",
            "original_price": 800,
            "price": 640,
            "paypal_val": "640",
            "desc": "Core Web Vitals improvement, image optimization, code minification, caching strategies, and Lighthouse score optimization."
        },
        {
            "title": "📊 Server Monitoring Setup",
            "category": "Infrastructure",
            "original_price": 700,
            "price": 560,
            "paypal_val": "560",
            "desc": "Grafana/Prometheus monitoring, alerting, log aggregation, and performance dashboards for servers and applications."
        },
        
        # ============================================
        # ADDITIONAL SERVICES (EXISTING)
        # ============================================
        # === 8. Blockchain & Crypto ===
        {
            "title": "🔮 Solana Blockchain Development",
            "category": "Blockchain",
            "original_price": 5000,
            "price": 4000,
            "paypal_val": "4000",
            "desc": "Custom SPL programs, smart contracts, NFT marketplaces, and DeFi solutions on Solana using Rust/Anchor."
        },
        {
            "title": "💰 Crypto Trading Bot",
            "category": "Blockchain",
            "original_price": 3000,
            "price": 2400,
            "paypal_val": "2400",
            "desc": "Automated trading bots with GRID/DCA strategies, exchange API integration (Binance, Coinbase), and backtesting engine."
        },
        
        # === 9. Maintenance & Support ===
        {
            "title": "🛡️ Proactive Maintenance Retainer",
            "category": "Maintenance",
            "original_price": 500,
            "price": 400,
            "paypal_val": "400",
            "desc": "Monthly website maintenance: security updates, backups, uptime monitoring, and performance audits."
        },
        {
            "title": "⏳ Developer Time Bundle (20 Hours)",
            "category": "Maintenance",
            "original_price": 800,
            "price": 640,
            "paypal_val": "640",
            "desc": "20 hours of dedicated development for bug fixes, feature enhancements, or ongoing support."
        },
        {
            "title": "🤝 Monthly Retainer (Full-Time)",
            "category": "Maintenance",
            "original_price": 3000,
            "price": 2400,
            "paypal_val": "2400",
            "desc": "Full-time dedicated developer. Strategy, development, and priority support for all your needs. Minimum 3-month commitment."
        }
    ]