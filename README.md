# Lilac Template Clone

A pixel-perfect clone of the Lilac therapy website template built with Next.js 14 and Tailwind CSS.

##  Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern Next.js 14 with App Router
- ✅ Tailwind CSS for styling
- ✅ TypeScript for type safety
- ✅ Smooth scroll navigation
- ✅ Accordion component for professional background
- ✅ Optimized images with Next.js Image component

##  Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

##  Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
lilac-clone/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Specialties.tsx
│   ├── Support.tsx
│   ├── Meet.tsx
│   ├── ProfessionalBackground.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

##  Color Scheme

- Background Beige: `#E8E4DD`
- Card Background: `#C5BDB3`
- Dark Green: `#3D4A3E`
- Light Beige: `#D5CFC5`

##  Sections

1. **Header** - Sticky navigation with Logo, Blog, Contact
2. **Hero** - Full-screen hero with circular image and headline
3. **About** - Split layout introducing the service
4. **Specialties** - Three cards showcasing therapy specialties
5. **Support** - List of challenges with image
6. **Meet** - Personal introduction section
7. **Professional Background** - Accordion with credentials
8. **CTA** - Call-to-action section
9. **Footer** - Simple copyright footer

##  Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Click Deploy

##  License

This is a practice project for educational purposes.