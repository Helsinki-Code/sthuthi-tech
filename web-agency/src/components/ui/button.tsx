import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-colors outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-brand-orange",
  {
    variants: {
      variant: {
        fill: "bg-brand-orange text-brand-orange-ink px-5 py-3 hover:bg-foreground hover:text-background",
        outline: "border border-foreground px-5 py-3 hover:border-brand-orange hover:text-brand-orange",
        text: "gap-1.5 text-foreground hover:text-brand-orange px-0 py-0",
      },
      size: {
        default: "",
        sm: "px-3.5 py-2 text-[10px]",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "fill",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
