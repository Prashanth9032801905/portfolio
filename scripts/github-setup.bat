@echo off
echo 🚀 Setting up GitHub repository for your portfolio...
echo.

REM Check if Git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed. Please install Git from https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo ✅ Git is installed!
echo.

REM Configure Git user
echo 🔧 Configuring Git user...
git config --global user.name "Prashanth9032801905"
git config --global user.email "prashanthpodimekala@gmail.com"
echo.

REM Initialize repository
echo 📁 Initializing Git repository...
git init
echo.

REM Add all files
echo 📦 Adding files to repository...
git add .
echo.

REM Commit changes
echo 💾 Creating initial commit...
git commit -m "Initial commit: Dynamic portfolio with admin dashboard"
echo.

REM Add remote origin
echo 🔗 Connecting to GitHub repository...
echo.
echo ⚠️  IMPORTANT: Make sure you created a repository on GitHub first!
echo ⚠️  Repository name: portfolio
echo ⚠️  Repository URL: https://github.com/Prashanth9032801905/portfolio.git
echo.
pause

git remote add origin https://github.com/Prashanth9032801905/portfolio.git
git branch -M main
echo.

REM Push to GitHub
echo 📤 Pushing to GitHub...
git push -u origin main
echo.

if %errorlevel% equ 0 (
    echo.
    echo 🎉 SUCCESS! Your portfolio is now on GitHub!
    echo.
    echo 📱 Repository URL: https://github.com/Prashanth9032801905/portfolio
    echo.
    echo 🚀 Next steps:
    echo 1. Visit your repository on GitHub
    echo 2. Deploy to Vercel using: npm run deploy
    echo 3. Share your portfolio URL!
) else (
    echo.
    echo ❌ Push failed! Please check:
    echo 1. Did you create the repository on GitHub?
    echo 2. Is the repository name correct?
    echo 3. Do you have authentication set up?
    echo.
    echo 💡 Try using SSH instead of HTTPS if authentication fails
)

echo.
pause
