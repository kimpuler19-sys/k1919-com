from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/")
def home():
    return HTMLResponse(content="""
        <html>
            <head><title>Kimpuler Agency</title></head>
            <body style="background:#0f172a; color:white; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; font-family:sans-serif; text-align:center;">
                <h1 style="color:#38bdf8; font-size:3rem;">Kimpuler Agency</h1>
                <p style="color:#94a3b8; font-size:1.2rem;">Web Design | PHP Dev | DBA | Live Host</p>
                <div style="margin-top:20px;">
                    <a href="/api/services" style="color:#10b981; text-decoration:none; border:1px solid #10b981; padding:10px 20px; border-radius:5px;">Lihat Jasa & Harga</a>
                </div>
            </body>
        </html>
    """)

@app.get("/api/hello")
def hello_kimpuler():
    return {"message": "Welcome to Kimpuler Agency API (Python Powered!)"}

@app.get("/api/services")
def get_services():
    return [
        {"id": 1, "name": "Full Solution Dev", "price": "$5000"},
        {"id": 2, "name": "DBA & Optimization", "price": "$150/hr"},
        {"id": 3, "name": "Live Host Commerce", "price": "$100/hr"}
    ]
