import { BLOG_IMAGES } from "@/lib/blog-images"
import { cn } from "@/lib/utils"

interface BlogImageProps {
  imageKey: string
  featured?: boolean
  className?: string
}

export function BlogImage({ imageKey, featured, className }: BlogImageProps) {
  const image = BLOG_IMAGES[imageKey]
  if (!image) return null

  return (
    <figure
      className={cn(
        "overflow-hidden border border-border bg-card",
        featured ? "mb-10" : "my-8",
        className
      )}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={featured ? "eager" : "lazy"}
        decoding="async"
        className="h-auto w-full"
      />
    </figure>
  )
}
