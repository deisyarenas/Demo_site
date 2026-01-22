# Resume Website

A modern, dark-themed resume website built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Beautiful dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Static site generation for fast loading
- 🚀 Automatic deployment to GitHub Pages

## Getting Started

### Development

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the static site:

```bash
npm run build
```

The static files will be exported to the `out` directory.

## Customization

Edit `app/page.tsx` to customize:
- Your name and title
- Contact information (email, GitHub, LinkedIn)
- Work experience
- Education
- Skills
- About section

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **If your repository is not at the root (e.g., `username.github.io/repo-name`):**
   - Uncomment and update the `basePath` in `next.config.ts`:
   ```typescript
   basePath: '/your-repo-name',
   ```

3. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at `https://yourusername.github.io/repo-name/`

## Project Structure

```
├── app/
│   ├── page.tsx      # Main resume page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Pages deployment workflow
└── next.config.ts     # Next.js configuration
```

## Technologies

- [Next.js](https://nextjs.org) - React framework
- [React](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org) - Type safety
