# Portfolio

## Description

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing the professional experience, skills, and projects. The site features a clean design with smooth animations and is optimized for performance and accessibility.

### Live Demo
https://rodriguesfilipe.net

### Key Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI Components**: Built using Shadcn UI components for a polished, professional appearance
- **Smooth Animations**: Integrated scroll reveal animations for enhanced user experience
- **SEO Optimized**: Comprehensive meta tags and structured data for better search engine visibility
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Type-Safe**: Full TypeScript support for reliable, maintainable code

## Installation Instructions

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/s3spyd3r/portfolio-website-react.git
   cd portfolio-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Usage Instructions

### Development

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Lint code**: `npm run lint`

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── HeroSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── CertificatesSection.tsx
│   ├── PortfolioSection.tsx
│   └── ...
├── pages/              # Page components
├── data/               # Static data files
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

### Customization

To customize the portfolio content:

1. Update personal information in `src/data/metadata.json`
2. Modify section data in the respective JSON files in `src/data/`
3. Customize styling in the component files or Tailwind classes
4. Update images in the `public/assets/` directory

### Deployment

The project is configured for deployment on any static hosting service. After building with `npm run build`, upload the `dist/` folder contents to your hosting provider.

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

For Netlify deployment:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```