"use client"

import { useState } from "react"
import { GeneratorForm } from "./generator-form"
import { ImageGallery } from "./image-gallery"
import { LoadingSpinner } from "./loading-spinner"

export interface GeneratedImage {
  url: string
  size: string
  width: number
  height: number
}

export function Generator() {
  const [images, setImages] = useState<GeneratedImage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async (prompt: string) => {
    if (!prompt.trim()) {
      setError("Please enter a prompt")
      return
    }
    setLoading(true)
    setError(null)
    setImages([])
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate banner")
      }
      setImages(data.images)
      setLoading(false) // Stop global loading, show gallery immediately
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-balance mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Create Banner with AI
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Generate a stunning banner in a single dimension. Just describe what you want and let AI bring it to life.
        </p>
      </div>
      <div className="space-y-12">
        <GeneratorForm onSubmit={handleGenerate} disabled={loading} />
        {error && (
          <div className="bg-destructive/10 border border-destructive rounded-lg p-4 animate-fade-in">
            <p className="text-destructive font-medium">{error}</p>
          </div>
        )}
        {loading && <LoadingSpinner />}
        {/* Show gallery immediately after API response, each card handles its own loading */}
        {images.length > 0 && <ImageGallery images={images} />}
        {!loading && images.length === 0 && !error && (
          <div className="text-center py-16">
            <div className="inline-block p-8 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground">Enter a prompt and click Generate to create a banner</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
