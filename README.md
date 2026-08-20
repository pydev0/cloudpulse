# CloudPulse Technologies

Professional IT solutions website for [CloudPulse Technologies](https://cloudpulsetechnologies.com).

## Tech Stack

- **Next.js 14** - App Router, SSR/SSG
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Scroll & hover animations
- **Nodemailer** - Contact form emails via Hostinger SMTP
- **Lucide React** - Icons

## Pages

- `/` - Home (hero, services overview, stats, CTA)
- `/about` - Company story, mission & vision, values
- `/services` - Detailed service cards with process section
- `/portfolio` - Case study cards with project images
- `/contact` - Contact form with email delivery

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file (see `.env.example`):

```
SMTP_USER=hr@cloudpulsetechnologies.com
SMTP_PASS=your_email_password
```

## Deployment

Hosted on **Vercel** with auto-deploy from `main` branch. Domain managed via **Hostinger**.
