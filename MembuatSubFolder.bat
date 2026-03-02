: 2. Membuat Sub-Folder
mkdir api
mkdir public
mkdir app

:: 3. Membuat file Backend Python (api/index.py)
echo from fastapi import FastAPI > api\index.py
echo. >> api\index.py
echo app = FastAPI() >> api\index.py
echo. >> api\index.py
echo @app.get("/api/hello") >> api\index.py
echo def hello(): >> api\index.py
echo     return {"message": "Welcome to Kimpuler Agency API (Python Powered!)"} >> api\index.py

:: 4. Membuat file requirements.txt
echo fastapi > requirements.txt
echo uvicorn >> requirements.txt

:: 5. Membuat file vercel.json (Konfigurasi Vercel)
echo { > vercel.json
echo   "rewrites": [ >> vercel.json
echo     { >> vercel.json
echo       "source": "/api/(.*)", >> vercel.json
echo       "destination": "/api/index.py" >> vercel.json
echo     } >> vercel.json
echo   ] >> vercel.json
echo } >> vercel.json

:: 6. Membuat file dummy Frontend (app/page.tsx)
echo export default function Page() { > app\page.tsx
echo   return ( >> app\page.tsx
echo     ^<main style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}^> >> app\page.tsx
echo       ^<h1^>Kimpuler Agency^</h1^> >> app\page.tsx
echo       ^<p^>Web Design ^| PHP Dev ^| DBA ^| Live Host^</p^> >> app\page.tsx
echo       ^<p^>Status: Hybrid Python Backend Active^</p^> >> app\page.tsx
echo     ^</main^> >> app\page.tsx
echo   ); >> app\page.tsx
echo } >> app\page.tsx

:: 7. Membuat file README untuk instruksi GitHub
echo # Kimpuler Agency > README.md
echo Full Solution Digital Agency Website (Next.js + Python) >> README.md

echo ====================================================
echo SELESAI! Folder "kimpuler-agency" siap digunakan.
echo ====================================================
pause