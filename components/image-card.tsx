"use client"

import type { GeneratedImage } from "./generator"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"
import { LoadingSpinner } from "./loading-spinner"

interface ImageCardProps {
  image: GeneratedImage
}

export function ImageCard({ image }: ImageCardProps) {
  const [downloading, setDownloading] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleDownload = async () => {
    setDownloading(true)
    try {
      const response = await fetch(image.url)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `image-${image.size}.png`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      console.error("Download failed:", err)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-scale-in">
      <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
        {/* Loading spinner overlay */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-muted">
            <LoadingSpinner />
          </div>
        )}
        {/* Image - always rendered so onLoad fires */}
        <img
          src={image.url}
          alt={`Generated banner ${image.size}`}
          width={image.width}
          height={image.height}
          className={`w-full h-full object-contain group-hover:scale-105 transition-all duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)} // Show something even on error
          loading="lazy"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground">Size</p>
          <p className="font-semibold text-foreground">{image.size}</p>
        </div>
        <Button
          onClick={handleDownload}
          disabled={downloading || !imageLoaded}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Download size={16} />
          {downloading ? "Downloading..." : "Download"}
        </Button>
      </div>
    </div>
  )
}
