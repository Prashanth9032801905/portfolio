#!/bin/bash

# Portfolio Deployment Script for Vercel

echo "🚀 Starting Portfolio Deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial portfolio setup"
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "🌐 Deploying to Vercel..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "🎉 Deployment successful!"
        echo "📱 Don't forget to set up environment variables in Vercel Dashboard:"
        echo "   - NEXTAUTH_URL"
        echo "   - NEXTAUTH_SECRET"
        echo "   - ADMIN_EMAIL"
        echo "   - ADMIN_PASSWORD"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
