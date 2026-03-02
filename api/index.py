from fastapi import FastAPI

app = FastAPI()

@app.get("/api/services")
def get_services():
    return [
        {
            "title": "Full-Stack Web Solution", 
            "price": "$150", 
            "paypal_val": "150",
            "desc": "Custom PHP/Next.js development. Dari nol sampai project jadi, full-customized sesuai request klien."
        },
        {
            "title": "DBA & Performance Expert", 
            "price": "$75", 
            "paypal_val": "75",
            "desc": "Optimasi database MySQL/PostgreSQL, keamanan data, dan tuning query untuk skala perusahaan."
        },
        {
            "title": "Live Host Sales Pro", 
            "price": "$50", 
            "paypal_val": "50",
            "desc": "Sesi 2 jam Live Host TikTok/Shopee. Fokus pada product knowledge dan konversi penjualan tinggi."
        },
        {
            "title": "Crypto & Blockchain Consult", 
            "price": "$100", 
            "paypal_val": "100",
            "desc": "Konsultasi teknis pemrograman crypto, smart contract logic, dan arsitektur dApps."
        },
        {
            "title": "Solana All-In Solution", 
            "price": "$2500", 
            "paypal_val": "2500",
            "desc": "Full Project: Landing Page, Whitepaper, Token Minting, & 3 bulan pendampingan teknis eksklusif."
        }
    ]
