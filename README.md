# AI Banner Generator 🎨

A modern, lightning-fast web application for generating high-quality AI-powered banner images from text prompts. Create stunning 1200x628px banners in seconds using the Pollinations.ai API.

**Live Demo:** https://ai-banner-generator-ebon.vercel.app

## 🎯 Overview

AI Banner Generator is a sleek, responsive web application that leverages artificial intelligence to create professional-quality banner images. Simply describe what you want, and let AI do the creative work. Perfect for social media, blog headers, marketing materials, and more.

### Why Use AI Banner Generator?

- ⚡ **Instant Generation** - Create banners in seconds
- 🎨 **High Quality** - Professional 1200x628px images
- 💡 **Easy to Use** - Simple, intuitive interface
- 🚀 **Fast & Responsive** - Built with cutting-edge tech
- 📱 **Mobile Friendly** - Works seamlessly on all devices
- 💾 **Download Ready** - Save banners directly to your device

## ✨ Features

### Core Features
- 🤖 **AI-Powered Generation** - Generate high-quality banner images using Pollinations.ai
- 🎨 **Instant Previews** - See generated banners immediately
- 📥 **One-Click Download** - Download banners as PNG files
- ⚡ **Real-time Loading States** - Individual loading indicators for each banner
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎯 **Optimized Dimensions** - Banners in perfect 1200x628px format

### User Experience
- ✅ Clean, modern interface
- ✅ Fast generation times (typically under 30 seconds)
- ✅ Multiple banner generation support
- ✅ Error handling and user feedback
- ✅ Vercel Analytics integration
- ✅ Beautiful loading animations

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 |
| **Runtime** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | Radix UI |
| **Package Manager** | npm/yarn/pnpm |
| **Image API** | Pollinations.ai |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/MAsadMughal/AI-banner-generator.git
cd AI-banner-generator
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser:**
Visit [http://localhost:3000](http://localhost:3000)

## 💻 Usage

1. **Enter a prompt** - Describe the banner you want to create
   - Example: "A futuristic cyberpunk city at night with neon lights"
   - Be descriptive for better results

2. **Click "Generate Banner"** - Start the generation process

3. **Wait for generation** - Images typically generate within 30 seconds
   - Real-time loading state shows progress

4. **Download your banner** - Click the download button to save

## 📁 Project Structure

```
AI-banner-generator/
├── app/
│   ├── api/
│   │   └── generate/            # API route for image generation
│   │       └── route.ts         # Generation endpoint
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── favicon.ico
├── components/
│   ├── generator.tsx            # Main generator component
│   ├── generator-form.tsx       # Input form component
│   ├── image-card.tsx           # Individual banner card
│   ├── image-gallery.tsx        # Gallery container
│   ├── loading-spinner.tsx      # Loading indicator
│   └── ui/                      # Reusable UI components
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── ...
├── hooks/                       # Custom React hooks
│   ├── use-image-generation.ts
│   └── ...
├── lib/
│   ├── api.ts                   # API utilities
│   ├── utils.ts                 # Helper functions
│   └── constants.ts             # Constants
├── public/                      # Static assets
│   ├── favicon.ico
│   └── ...
├── styles/                      # Global styles
├── next.config.mjs              # Next.js configuration
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
├── components.json              # Component registry
├── package.json
└── .env.example                 # Environment variables template
```

## 🔌 API Reference

### Image Generation Endpoint

**Pollinations.ai API:**
```
GET https://image.pollinations.ai/prompt/{prompt}?width=1200&height=628
```

**Features:**
- Free to use
- No API key required
- Supports custom dimensions
- Returns high-quality images

**Image Specifications:**
- **Default Width:** 1200px
- **Default Height:** 628px
- **Format:** PNG
- **Quality:** High

### Application API Route

**Internal Generate Endpoint:**
```
POST /api/generate
Content-Type: application/json

{
  "prompt": "your banner description"
}
```

**Response:**
```json
{
  "success": true,
  "imageUrl": "https://image.pollinations.ai/prompt/...",
  "prompt": "your banner description"
}
```

## 📦 Available Scripts

```bash
# Development
npm run dev              # Start development server on port 3000

# Production
npm run build           # Build for production
npm run start           # Start production server

# Linting & Code Quality
npm run lint            # Run ESLint
```

## 🎨 Customization

### Changing Banner Dimensions

Edit the image generation in `app/api/generate/route.ts`:

```typescript
const width = 1200;  // Change width
const height = 628;  // Change height
```

### Styling

- **Tailwind CSS:** Edit `tailwind.config.js`
- **Global Styles:** Edit `app/globals.css`
- **Components:** Edit individual component files in `components/`

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_id_here

# Image Generation
NEXT_PUBLIC_IMAGE_API=https://image.pollinations.ai

# Application
NODE_ENV=development
```

## 🎯 Prompt Tips for Best Results

- ✅ **Be Specific** - "A sunset over mountains" → "A vibrant orange sunset over snow-capped Rocky Mountains with a lake reflection"
- ✅ **Describe Mood** - Include lighting, atmosphere, and mood
- ✅ **Mention Style** - "cinematic", "minimalist", "watercolor", "oil painting"
- ✅ **Use Keywords** - Include relevant keywords for better matching
- ❌ **Avoid** - Too vague descriptions or contradictory elements

### Example Prompts

1. "Professional tech conference banner with speakers and blue gradient background"
2. "Minimalist white and black design with geometric shapes, modern startup aesthetic"
3. "Colorful e-commerce shopping banner with product elements and sale highlights"
4. "Dark technology background with AI and machine learning elements"

## 🔒 Security

- ✅ No personal data collection
- ✅ No authentication required
- ✅ API calls proxied through Next.js
- ✅ CORS configured appropriately
- ✅ Input validation and sanitization

## 📊 Performance

- **First Paint:** < 1s
- **Time to Interactive:** < 2s
- **Lighthouse Score:** 90+
- **Image Generation:** Typically 15-30 seconds

## 🐛 Troubleshooting

### Images Not Generating?
- Check internet connection
- Verify Pollinations.ai API is accessible
- Try a different prompt
- Clear browser cache and reload

### Slow Generation?
- This is normal - AI image generation takes time
- Complex prompts may take longer
- Refresh the page if stuck

### Download Not Working?
- Check browser download settings
- Try a different browser
- Disable ad blockers
- Check available disk space

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👨‍💻 Author

**Asad Mughal**
- GitHub: [@MAsadMughal](https://github.com/MAsadMughal)
- Portfolio: [Portfolio](https://asadmughal.dev)

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact via email

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Image Generation by [Pollinations.ai](https://pollinations.ai/)
- Hosted on [Vercel](https://vercel.com/)

---

**Last Updated:** December 2025
**Next.js Version:** 16
**React Version:** 19
**Node Version:** 18+
