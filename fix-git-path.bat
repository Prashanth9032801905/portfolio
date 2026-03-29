@echo off
echo 🔧 Fixing Git PATH in Windows...
echo.

REM Find Git installation path
echo 📁 Searching for Git installation...
for %%f in (
    "C:\Program Files\Git\bin\git.exe"
    "C:\Program Files (x86)\Git\bin\git.exe"
    "C:\Git\bin\git.exe"
) do (
    if exist %%f (
        echo ✅ Found Git at: %%~dpf
        set GIT_PATH=%%~dpf
        goto :found
    )
)

echo ❌ Git not found in standard locations
echo Please make sure Git is installed correctly
pause
exit /b 1

:found
echo.
echo 🚀 Adding Git to system PATH...
echo.
echo You need to add these paths to your Environment Variables:
echo.
echo %GIT_PATH%
echo %GIT_PATH%..\cmd
echo.
echo Steps:
echo 1. Press Windows Key + R
echo 2. Type: sysdm.cpl
echo 3. Go to Advanced → Environment Variables
echo 4. Edit "Path" under System variables
echo 5. Add: %GIT_PATH%
echo 6. Add: %GIT_PATH%..\cmd
echo 7. Click OK on all windows
echo 8. Restart PowerShell
echo.
pause
