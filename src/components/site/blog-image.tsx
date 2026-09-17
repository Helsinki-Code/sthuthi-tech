import { BLOG_IMAGES } from "@/lib/blog-images"

export function BlogImage({ imageKey, featured = false }: { imageKey: string; featured?: boolean }) {
  const image = BLOG_IMAGES[imageKey]
  if (!image) return null
  return (
    <figure className={featured ? "mb-12" : "my-10"}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={featured ? "eager" : "lazy"}
        fetchPriority={featured ? "high" : "auto"}
        decoding="async"
        className="block h-auto w-full border border-border"
      />
    </figure>
  )
}
