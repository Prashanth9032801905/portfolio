# Vercel Deployment Guide

## 🚀 Deploy Your Portfolio to Vercel

### Step 1: Prepare Your Project

1. **Commit your code to Git:**
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
```

2. **Push to GitHub:**
```bash
# Create a new repository on GitHub first
git remote add origin https://github.com/Prashanth9032801905/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Through Vercel Dashboard (Recommended)

1. **Sign up/login to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your Project:**
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Settings:**
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Root Directory: `./`

4. **Add Environment Variables:**
   ```
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your-secret-key-here
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin123
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete

#### Option B: Using Vercel CLI

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Follow the prompts:**
   - Link to existing project? No
   - What's your project's name? portfolio
   - In which directory is your code located? ./
   - Want to override the settings? No

### Step 3: Configure Environment Variables

After deployment, add these environment variables in Vercel Dashboard:

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Environment Variables"
3. Add these variables:

```
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-random-secret-key
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-secure-password
```

### Step 4: Test Your Deployment

1. **Visit your site:** `https://your-domain.vercel.app`
2. **Test admin panel:** `/admin/login`
3. **Test all features:** Profile, projects, resume download

### Step 5: Custom Domain (Optional)

1. **Add Custom Domain:**
   - Go to Vercel Dashboard → Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Update Environment Variables:**
   - Change `NEXTAUTH_URL` to your custom domain

## 🔧 Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check for syntax errors
   - Ensure all dependencies are installed
   - Verify environment variables

2. **Admin Panel Not Working:**
   - Check NEXTAUTH_URL matches your domain
   - Verify NEXTAUTH_SECRET is set
   - Clear browser cache

3. **Images Not Loading:**
   - Ensure images are in `/public` folder
   - Check file paths in components
   - Verify image formats

### Environment Variables Explained:

- `NEXTAUTH_URL`: Your deployed site URL
- `NEXTAUTH_SECRET`: Random string for session security
- `ADMIN_EMAIL`: Email for admin login
- `ADMIN_PASSWORD`: Password for admin login

## 🎉 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] Admin panel works
- [ ] Profile photo displays
- [ ] Resume downloads work
- [ ] GitHub links work
- [ ] Mobile responsive
- [ ] Contact forms work (if added)

## 📱 Share Your Portfolio

Once deployed, share your portfolio:
- Add to resume/CV
- LinkedIn profile
- GitHub README
- Job applications
- Social media

## 🔄 Updates and Maintenance

To update your portfolio:
1. Make changes locally
2. Commit and push to GitHub
3. Vercel auto-deploys changes
4. Test updates on live site

## 🚀 Advanced Options

### Custom Domain Setup:
1. Purchase domain from provider
2. Add to Vercel Dashboard
3. Update DNS records
4. Update environment variables

### Analytics Integration:
1. Google Analytics
2. Vercel Analytics
3. Custom tracking scripts

### Performance Optimization:
1. Image optimization
2. Code splitting
3. Caching strategies
4. CDN configuration
