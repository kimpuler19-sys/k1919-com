from fastapi import FastAPI

app = FastAPI()

@app.get("/api/services")
def get_services():
    return [
        {
            "title": "Elite Web Systems", 
            "price": "150", 
            "paypal_val": "150",
            "desc": "Custom PHP/Next.js Architecture. Full-cycle development engineered for performance and global scale."
        },
        {
            "title": "Advanced DBA Ops", 
            "price": "75", 
            "paypal_val": "75",
            "desc": "SQL Performance tuning, database hardening, and architectural audits for high-traffic environments."
        },
        {
            "title": "Live Commerce Growth", 
            "price": "50", 
            "paypal_val": "50",
            "desc": "Professional high-conversion live hosting for TikTok & Shopee. Bridging technology and sales."
        },
        {
            "title": "Crypto Engineering", 
            "price": "500", 
            "paypal_val": "500",
            "desc": "Technical consulting for crypto programming, smart contract audits, and dApp architecture."
        },
        {
            "title": "Solana All-In-One", 
            "price": "2500", 
            "paypal_val": "2500",
            "desc": "Full Deployment: Landing Page, Whitepaper, Minting Token, and 3-months dedicated technical support."
        },
        {
            "title": "Pro Solana Enterprise", 
            "price": "5000", 
            "paypal_val": "5000",
            "desc": "Solana All-In-One PLUS The Ultimate Solution: Custom SPL Programs (Rust/Anchor), Market-Making tools, and Enterprise Security."
        }
    ]
