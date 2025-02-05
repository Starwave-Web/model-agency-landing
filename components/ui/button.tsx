import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "rounded-[12px] px-7 py-[10px] text-btn-mobile md:text-btn font-semibold",
  {
    variants: {
      variant: {
        default:
          "bg-btn-primary text-white hover:bg-btn-hover active:bg-btn-active disabled:bg-btn-primary/75 disabled:text-white/75",
        white:
          "bg-white text-[#1C1D1F] hover:bg-[#CACACA] active:bg-[#A9A9A9] disabled:bg-white/75 disabled:text-[#1C1D1F]/75",
        outline:
          "bg-origin-border bg-btn-outline bg-transparent border-[1.5px] text-white hover:border-transparent hover:bg-btn-hover active:border-transparent active:bg-btn-active diabled:border-transparent disabled:bg-btn-primary/75 disabled:text-white/75",
        icon: "rounded-full h-[1.875rem] w-[1.875rem] md:h-[3.75rem] md:w-[3.75rem] p-[0.9375rem] bg-btn-arrow hover:bg-btn-hover active:bg-btn-active disabled:bg-btn-primary/75",
        ghost: "bg-trasparent border-none text-white hover:bg-[#CACACA] active:bg-[#A9A9A9] disabled:bg-white/75 disabled:text-[#1C1D1F]/75"  
      },
      size: {
        default: "px-6 py-2",
        icon: "h-[3.125rem] w-[3.125rem] p-[0.625rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
