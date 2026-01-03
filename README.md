# Matai Tech Landing Page

Professional landing page for Matai Tech - a freelance/consulting tech company specializing in business automation and data visibility solutions.

## Features

- Modern, responsive design built with Next.js 15 and Tailwind CSS
- Hero section with compelling value proposition
- About section highlighting founder's data engineering background
- Services showcase (Process Automation, Data Analytics, System Integration)
- Software integrations display (12+ platforms)
- Case studies with real results
- Contact form with validation
- SEO optimized

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Development

1. Clone the repository:
```bash
git clone https://github.com/loocpooga/matai-tech-landing.git
cd matai-tech-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New Project"
3. Import your `matai-tech-landing` repository
4. Vercel will automatically detect Next.js settings
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

### Option 2: Deploy via CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy from the project directory:
```bash
vercel
```

3. Follow the prompts to link your project

4. For production deployment:
```bash
vercel --prod
```

## Customization

### Contact Form

The contact form currently uses a simulated submission. To connect it to a real backend:

1. Update the `handleSubmit` function in `app/page.tsx`
2. Options include:
   - [Vercel Serverless Functions](https://vercel.com/docs/functions)
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - Your own API endpoint

### Colors

Primary colors are defined in `tailwind.config.ts`:
- `primary`: Blue tones (main brand color)
- `accent`: Teal tones (secondary accents)

### Content

Edit `app/page.tsx` to update:
- Hero messaging
- Services descriptions
- Software integrations list
- Case studies
- Contact information

### Email

Update the placeholder email `info@mataitech.com` in the footer to your actual business email.

## Project Structure

```
matai-tech-landing/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── public/                  # Static assets (add your logo here)
├── .gitignore
├── next.config.ts           # Next.js configuration
├── package.json
├── postcss.config.mjs       # PostCSS configuration
├── README.md
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Performance

- ✅ Static generation for optimal performance
- ✅ Optimized bundle size (~102 kB First Load JS)
- ✅ Built-in image optimization
- ✅ SEO friendly with proper metadata

## License

Private - All rights reserved by Matai Tech LLC

## Support

For questions or issues, contact: info@mataitech.com
