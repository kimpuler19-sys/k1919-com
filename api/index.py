from fastapi import FastAPI

app = FastAPI()

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




@app.get("/api/")
def read_root():
    return {"status": "Kimpuler API is Online"}

