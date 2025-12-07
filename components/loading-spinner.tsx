export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-6">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-spin" />
        <div className="absolute inset-2 bg-background rounded-full" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold">Generating your banner...</p>
        <p className="text-sm text-muted-foreground">Please wait while we create your banner</p>
        <p className="text-xs text-muted-foreground/70 mt-2">This may take up to 30 seconds</p>
      </div>
    </div>
  )
}
