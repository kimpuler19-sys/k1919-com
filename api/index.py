from fastapi import FastAPI

app = FastAPI()

@app.get("/api/services")
def get_services():
    return [
        {
            "title": "Elite Web Systems", 
            "price": "150", "paypal_val": "150",
            "desc": "Next-Gen Stack: Next.js 15+, Vue.js 3, Nuxt 3, & Vercel Edge. Engineered for sub-second loading speeds."
        },
        {
            "title": "Hire 30 Hours Bundle", 
            "price": "450", "paypal_val": "450",
            "desc": "Expert programming for full development. Standard rate $25/hr, discounted to $15/hr. Best for complex customizations."
        },
        {
            "title": "Advanced DBA Ops", 
            "price": "75", "paypal_val": "75",
            "desc": "SQL Performance tuning, database hardening, and architectural audits for high-traffic environments."
        },
        {
            "title": "Hire Trial (20 Hours)", 
            "price": "400", "paypal_val": "400",
            "desc": "Perfect for testing our quality. 20 hours of dedicated expert programming and full customization for your project."
        },
        {
            "title": "Monthly Retainer", 
            "price": "2000", "paypal_val": "2000",
            "desc": "Full-time dedicated development. High customization & new ideation. Min. 3 months contract. Priority support included."
        },
        {
            "title": "Pro Solana Enterprise", 
            "price": "5000", "paypal_val": "5000",
            "desc": "The Ultimate Solution: Custom SPL Programs (Rust/Anchor), Market-Making tools, and Enterprise Security."
        }
    ]
