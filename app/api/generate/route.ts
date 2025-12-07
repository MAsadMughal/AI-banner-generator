import { type NextRequest, NextResponse } from "next/server"

// Only one image size for simplicity
const SIZE = { width: 2400, height: 1256, name: "Banner (1200x628)" }

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json()
    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }
    const image = {
      url: `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${SIZE.width}&height=${SIZE.height}`,
      size: SIZE.name,
      width: SIZE.width,
      height: SIZE.height,
    }
    return NextResponse.json({ images: [image] }, { status: 200 })
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Failed to generate image",
    }, { status: 500 })
  }
}
