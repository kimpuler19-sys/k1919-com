from fastapi import FastAPI

app = FastAPI()

@app.get("/api/services")
def get_services():
    return [
        # === EXISTING SERVICES (12) - tetap sama ===
        {
            "title": "🚀 Elite Web Systems (Next.js/Vue.js)",
            "original_price": 200,
            "price": 160,
            "paypal_val": "160",
            "desc": "High-performance web apps with Next.js 15+, Vue.js 3, or Nuxt. Deployed on Vercel Edge for sub-second loading. Includes 3 months of maintenance."
        },
        {
            "title": "⏳ Developer Time Bundle (30 Hours)",
            "original_price": 750,
            "price": 600,
            "paypal_val": "600",
            "desc": "30 hours of dedicated full-stack development. Perfect for custom features, complex integrations, or as a trial for longer engagement."
        },
        {
            "title": "🗄️ Advanced DBA & Performance Ops",
            "original_price": 120,
            "price": 96,
            "paypal_val": "96",
            "desc": "Deep SQL optimization, database hardening, and architecture audits for high-traffic applications. Ensure your data layer is bulletproof."
        },
        {
            "title": "🧪 Trial Engagement (20 Hours)",
            "original_price": 500,
            "price": 400,
            "paypal_val": "400",
            "desc": "Experience quality firsthand. 20 hours of expert development to tackle your most pressing feature or bug, no strings attached."
        },
        {
            "title": "🤝 Monthly Retainer (Full-Time Dedication)",
            "original_price": 3000,
            "price": 2400,
            "paypal_val": "2400",
            "desc": "Your go-to technical partner. Minimum 3-month commitment. Includes strategy, development, and priority support for all your needs."
        },
        {
            "title": "🔮 Pro Solana Enterprise (Rust/Anchor)",
            "original_price": 7000,
            "price": 5600,
            "paypal_val": "5600",
            "desc": "Custom SPL programs, market-making tools, and enterprise-grade security on Solana. The ultimate solution for blockchain innovators."
        },
        {
            "title": "🛡️ Proactive Maintenance Retainer",
            "original_price": 200,
            "price": 160,
            "paypal_val": "160",
            "desc": "Monthly peace of mind: automated updates, 24/7 uptime monitoring, security patching, and monthly performance audits for your site."
        },
        {
            "title": "⚡ Core Web Vitals & Speed Optimization",
            "original_price": 300,
            "price": 240,
            "paypal_val": "240",
            "desc": "One-time project to boost your site speed. Includes comprehensive audit, image optimization, code minification, and Lighthouse score improvement."
        },
        {
            "title": "📦 Full-Stack App (React/Next.js + Backend)",
            "original_price": 1500,
            "price": 1200,
            "paypal_val": "1200",
            "desc": "Build a scalable web application from scratch. Choose your stack: Next.js, TypeScript, Tailwind, and any database (Supabase, PostgreSQL, etc.)."
        },
        {
            "title": "⚙️ Custom Low-Code Business Tool",
            "original_price": 700,
            "price": 560,
            "paypal_val": "560",
            "desc": "Rapidly develop internal tools like custom CRMs or dashboards using low-code platforms. Get a working solution in 2-4 weeks."
        },
        {
            "title": "🤖 AI Feature Integration",
            "original_price": 1000,
            "price": 800,
            "paypal_val": "800",
            "desc": "Add intelligence to your app: custom chatbots, semantic search, or personalized content recommendations powered by AI (Vercel AI SDK, RAG)."
        },
        {
            "title": "🔍 AI-Friendly Website Optimization (AIO)",
            "original_price": 350,
            "price": 280,
            "paypal_val": "280",
            "desc": "Prepare your site for the AI era. We structure your content with schema markup and Q&A format so AI like ChatGPT can find and cite you."
        },
        # === PYTHON SOLUTIONS (disederhanakan menjadi 2 kategori, harga $50 untuk diskusi) ===
        {
            "title": "🐍 Python Development & AI Integration",
            "original_price": 50,  # harga pasar untuk diskusi
            "price": 50,
            "paypal_val": "50",
            "desc": "Custom Python development, AI/LLM integration, API creation, and web apps with FastAPI/Django. Let's discuss your project needs."
        },
        {
            "title": "📊 Data Engineering & Automation (Python)",
            "original_price": 50,
            "price": 50,
            "paypal_val": "50",
            "desc": "Data pipelines, ETL, process automation, web scraping, and machine learning models. Initial consultation to scope your requirements."
        },
        # === PHP SERVICES (2) - dengan border orange nanti di frontend ===
        {
            "title": "🐘 Weekly PHP Maintenance (20 hours/week)",
            "original_price": 750,
            "price": 600,
            "paypal_val": "600",
            "desc": "Dedicated 20 hours per week for PHP updates, bug fixes, and feature enhancements. Perfect for ongoing projects needing regular attention."
        },
        {
            "title": "📊 Custom PHP Dashboard with Server Setup (1 year)",
            "original_price": 1875,
            "price": 1500,
            "paypal_val": "1500",
            "desc": "Complete dashboard development using PHP, including server configuration and 1-year maintenance. 20 hours/week for 2 months."
        }
    ]