# Podimekala Prashanth - Portfolio Website

A modern, high-end developer portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Featuring smooth animations, glassmorphism design, and a premium dark theme.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Dark Theme**: Elegant dark theme with neon gradient accents
- **Smooth Animations**: Scroll-based animations, hover effects, and micro-interactions
- **Glassmorphism**: Beautiful glass-morphism cards with backdrop blur
- **Responsive Design**: Mobile-first approach with smooth layouts for all devices
- **Interactive Elements**: Animated typing effect, floating particles, and progress indicators
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
portfolio-template/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # Reusable React components
│   ├── Hero.tsx           # Hero section with animated typing
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects portfolio
│   ├── Experience.tsx     # Experience timeline
│   ├── Contact.tsx        # Contact form and info
│   └── Navbar.tsx         # Sticky navigation
├── styles/               # Global styles
│   └── globals.css       # Tailwind + custom styles
├── public/              # Static assets
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tools**: PostCSS, Autoprefixer

## 🎨 Design Features

### Color Scheme
- **Background**: Dark slate (#0f172a)
- **Primary**: Purple (#8b5cf6)
- **Secondary**: Cyan (#06b6d4)
- **Accent**: Blue (#3b82f6)

### Animations
- Typing animation for role text
- Floating particles in hero section
- Scroll-triggered fade-in animations
- Hover scale and glow effects
- Smooth page transitions
- Progress bar indicator

### UI Components
- Glassmorphism cards with backdrop blur
- Gradient borders and text
- Custom scrollbar styling
- Responsive grid layouts
- Interactive navigation with active states

## 📱 Sections

1. **Hero Section**
   - Animated name and role typing
   - Floating orbital elements
   - CTA buttons and social links
   - Scroll indicator

2. **About Section**
   - Professional summary
   - Statistics display
   - Contact information card

3. **Skills Section**
   - Categorized skill grid
   - Technology icons
   - Hover effects

4. **Projects Section**
   - Card-based project showcase
   - Tech stack display
   - Live demo and GitHub links

5. **Experience Section**
   - Timeline layout
   - Work, education, and certifications
   - Animated on scroll

6. **Contact Section**
   - Contact form
   - Contact information
   - Social media links

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `app/layout.tsx` - Metadata and SEO
- `components/Hero.tsx` - Name, roles, social links
- `components/About.tsx` - About text and stats
- `components/Projects.tsx` - Project details
- `components/Experience.tsx` - Experience timeline
- `components/Contact.tsx` - Contact information

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `styles/globals.css` for global styles
- Adjust component-specific styles in individual files

### Colors
The color scheme is defined in `tailwind.config.js`. Modify the `extend.colors` section to customize the theme.

## 🌟 Deployment

### Quick Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

3. **Set Environment Variables** in Vercel Dashboard:
   - `NEXTAUTH_URL`: Your Vercel domain
   - `NEXTAUTH_SECRET`: Random secret key
   - `ADMIN_EMAIL`: Admin login email
   - `ADMIN_PASSWORD`: Admin login password

### Manual Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings
4. Set environment variables
5. Deploy

### Environment Variables Required

```bash
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
```

### Other Platforms

This project also works on:
- Netlify
- AWS Amplify
- Railway
- Digital Ocean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: prashanthpodimekala@gmail.com
- **Location**: Hyderabad, India
- **Portfolio**: [Your Portfolio URL]

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
