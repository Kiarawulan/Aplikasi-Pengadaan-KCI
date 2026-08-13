@echo off
echo ===================================================
echo   Pengadaan KCI - Laravel Backend + React Frontend
echo ===================================================
echo.

echo 1. Memastikan MySQL XAMPP berjalan...
start /B cmd /c "C:\xampp\mysql_start.bat" >nul 2>&1

timeout /t 2 /nobreak >nul

echo 2. Menjalankan Server Laravel (Backend API: http://localhost:8000)...
start "Laravel Backend API" cmd /k "cd /d "%~dp0pengadaan-kci" && php artisan serve --port=8000"

timeout /t 2 /nobreak >nul

echo 3. Menjalankan React Frontend (http://localhost:5173)...
start "React Frontend" cmd /k "cd /d "%~dp0final_project" && npm run dev"

echo.
echo ===================================================
echo   Sistem Pengadaan KCI Berhasil Dijalankan!
echo   - Backend API : http://localhost:8000
echo   - Frontend App: http://localhost:5173
echo.
echo   AKUN DEMO:
echo   - Admin   : admin@sipro.com / admin123
echo   - IT User : it@sipro.com / it123
echo ===================================================
pause
