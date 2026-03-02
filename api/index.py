from fastapi import FastAPI

app = FastAPI()

# Pastikan ada /api/ di depannya
@app.get("/api/services")
def get_services():
    return [
        {"title": "Full-Stack Web Solution", "price": "150", "paypal_val": "150", "desc": "Custom PHP/Next.js development."},
        {"title": "DBA & Performance Expert", "price": "75", "paypal_val": "75", "desc": "Database optimization & SQL performance."},
        {"title": "Live Host Sales Pro", "price": "50", "paypal_val": "50", "desc": "TikTok/Shopee Live Host session."},
        {"title": "Crypto & Blockchain Consult", "price": "100", "paypal_val": "100", "desc": "Technical crypto programming & dApps."},
        {"title": "Solana All-In Solution", "price": "2500", "paypal_val": "2500", "desc": "Landing Page, Whitepaper, Token, & 3 months support."}
    ]
