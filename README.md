# Banner Generator with AI

A modern web application for generating AI-powered banners using the Pollinations.ai API. Create stunning banner images (1200x628) from text prompts with a beautiful, responsive UI.

## Features

- 🎨 **AI-Powered Generation**: Generate high-quality banner images using Pollinations.ai
- 🚀 **Fast & Responsive**: Built with Next.js 16 and React 19
- 💅 **Modern UI**: Beautiful interface with Tailwind CSS and Radix UI components
- 📱 **Mobile Friendly**: Fully responsive design
- ⚡ **Real-time Loading**: Individual loading states for each image
- 📥 **Download Support**: Download generated banners directly

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Image API**: Pollinations.ai

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ideogram-image-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter a descriptive prompt for your banner (e.g., "A futuristic cyberpunk city at night with neon lights")
2. Click "Generate Banner"
3. Wait for the image to generate (may take up to 30 seconds)
4. Once loaded, you can download the banner

## Project Structure

```
├── app/
│   ├── api/
│   │   └── generate/        # API route for image generation
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── generator.tsx         # Main generator component
│   ├── generator-form.tsx    # Input form component
│   ├── image-card.tsx        # Image display card
│   ├── image-gallery.tsx     # Gallery container
│   ├── loading-spinner.tsx    # Loading indicator
│   └── ui/                   # Reusable UI components
├── public/                   # Static assets
└── styles/                   # Global styles
```

## API

The application uses the Pollinations.ai API endpoint:
```
https://image.pollinations.ai/prompt/{prompt}?width=1200&height=628
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

The image generation is configured in `app/api/generate/route.ts`:
- Default size: 1200x628 (Banner format)
- API: Pollinations.ai

## License

This project is private and proprietary.

## Contributing

This is a private project. Contributions are not accepted at this time.

