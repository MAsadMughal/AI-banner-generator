"use client"

import { type FormEvent, useState, type ChangeEvent } from "react"
import { Button } from "@/components/ui/button"

interface GeneratorFormProps {
  onSubmit: (prompt: string) => Promise<void>
  disabled: boolean
}

export function GeneratorForm({ onSubmit, disabled }: GeneratorFormProps) {
  const [prompt, setPrompt] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await onSubmit(prompt)
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg">
        <label htmlFor="prompt" className="block text-sm font-semibold mb-3">
          Describe your banner
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={handleChange}
          placeholder="e.g., A futuristic cyberpunk city at night with neon lights reflecting on wet streets..."
          disabled={disabled}
          className="w-full h-32 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none disabled:opacity-50"
        />
        <div className="mt-6 flex gap-3">
          <Button
            type="submit"
            disabled={disabled}
            className="flex-1 md:flex-initial bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200"
          >
            {disabled ? "Generating..." : "Generate Banner"}
          </Button>
          <Button type="button" onClick={() => setPrompt("")} variant="outline" disabled={disabled} className="px-6">
            Clear
          </Button>
        </div>
      </div>
    </form>
  )
}
