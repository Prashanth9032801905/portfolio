# GitHub Setup Guide

## 🚀 Import Your Portfolio to GitHub

### Step 1: Install Git (if not already installed)

#### Windows:
1. Download Git from [git-scm.com](https://git-scm.com/download/win)
2. Run the installer with default settings
3. Restart your terminal/command prompt

#### Verify Installation:
```bash
git --version
```

### Step 2: Create GitHub Repository

1. **Sign in to GitHub**: [github.com](https://github.com)
2. **Click "+"** in top right → "New repository"
3. **Repository Settings**:
   - Repository name: `portfolio` or `portfolio-template`
   - Description: `Professional portfolio website built with Next.js`
   - Visibility: Public (recommended for portfolio)
   - Don't initialize with README, .gitignore, or license
4. **Click "Create repository"**

### Step 3: Configure Git Locally

```bash
# Set your GitHub username
git config --global user.name "Prashanth9032801905"

# Set your GitHub email (use the same email as your GitHub account)
git config --global user.email "prashanthpodimekala@gmail.com"
```

### Step 4: Initialize Local Repository

```bash
# Navigate to your portfolio folder
cd c:\Users\SOWMYA\Downloads\portfolio-template

# Initialize Git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Dynamic portfolio with admin dashboard"
```

### Step 5: Connect to GitHub Repository

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/Prashanth9032801905/portfolio.git

# Push to GitHub (use main branch)
git branch -M main
git push -u origin main
```

### Step 6: Verify GitHub Repository

1. Go to your GitHub repository page
2. You should see all your files uploaded
3. Check that the code is properly formatted

### Step 7: Deploy to Vercel (Optional)

Now that your code is on GitHub, you can easily deploy to Vercel:

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Select your portfolio repository
5. Click "Import"
6. Configure settings and deploy

## 📝 GitHub Repository Structure

Your repository will look like this:

```
portfolio/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── admin/             # Admin components
│   ├── EnhancedHero.tsx   # Hero section
│   ├── FresherAbout.tsx   # About section
│   └── Projects.tsx      # Projects section
├── lib/                   # Utilities
│   ├── local-storage.ts   # Local storage management
│   └── mongodb.ts         # Database connection
├── models/                # Data models
├── public/                # Static assets
│   ├── profile.jpg        # Your profile photo
│   └── resumes/           # Resume files
├── scripts/               # Helper scripts
├── vercel.json           # Vercel configuration
├── package.json          # Dependencies
└── README.md              # Project documentation
```

## 🔧 Common Issues & Solutions

### Issue 1: Authentication Error
**Problem**: `Authentication failed for 'https://github.com'`
**Solution**: Use SSH instead of HTTPS
```bash
# Generate SSH key
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"

# Add SSH key to GitHub (copy the public key)
cat ~/.ssh/id_rsa.pub

# Use SSH remote
git remote set-url origin git@github.com:Prashanth9032801905/portfolio.git
```

### Issue 2: Branch Name Error
**Problem**: Default branch is 'master' but GitHub expects 'main'
**Solution**: Rename branch
```bash
git branch -M main
```

### Issue 3: Large Files
**Problem**: Files too large for GitHub
**Solution**: Use Git LFS or remove large files
```bash
# Remove large files
git rm --cached path/to/large/file
git commit -m "Remove large files"
```

## 🎯 Best Practices

### 1. Create a Good README
Your repository already has a professional README with:
- Project description
- Features list
- Tech stack
- Installation instructions
- Deployment guide

### 2. Use .gitignore
Your repository already has proper .gitignore to exclude:
- node_modules/
- .next/
- .env.local
- Build artifacts

### 3. Commit Messages
Use descriptive commit messages:
```bash
git commit -m "feat: add admin dashboard with profile management"
git commit -m "fix: resolve GitHub link issues in projects"
git commit -m "docs: update deployment instructions"
```

### 4. Branch Strategy
For future development:
```bash
# Create feature branch
git checkout -b feature/new-feature

# Work on feature...
git add .
git commit -m "feat: add new feature"

# Merge to main
git checkout main
git merge feature/new-feature
git push origin main
```

## 🌟 Next Steps After GitHub Setup

### 1. Deploy to Vercel
- Connect GitHub repository to Vercel
- Configure environment variables
- Deploy automatically

### 2. Add GitHub Pages (Optional)
- Enable GitHub Pages for documentation
- Use custom domain if desired

### 3. Set Up Actions (Optional)
- Add CI/CD workflows
- Automated testing
- Deployment automation

### 4. Contributing Guidelines
- Add CONTRIBUTING.md
- Set up issue templates
- Define pull request process

## 🎊 Congratulations!

Once completed, you'll have:
- ✅ Professional GitHub repository
- ✅ Version control for your portfolio
- ✅ Easy deployment to Vercel
- ✅ Collaboration capabilities
- ✅ Backup of your code

Your portfolio will be ready for:
- Job applications
- Professional networking
- Open source contributions
- Future development
