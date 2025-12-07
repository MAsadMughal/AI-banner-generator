"use client"

import type { GeneratedImage } from "./generator"
import { ImageCard } from "./image-card"

interface ImageGalleryProps {
  images: GeneratedImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Generated Banner</h2>
      <div className="grid grid-cols-1 gap-6 !max-w-sm mx-auto">
        {images.map((image, idx) => (
          <ImageCard key={idx} image={image} />
        ))}
      </div>
    </div>
  )
}
