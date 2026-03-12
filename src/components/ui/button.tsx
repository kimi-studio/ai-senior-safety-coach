import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "lg", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-sm shadow-teal-500/20 hover:from-teal-600 hover:to-cyan-700 focus:ring-teal-500":
              variant === "primary",
            "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500":
              variant === "secondary",
            "border-2 border-teal-500/80 text-teal-700 hover:bg-teal-50 focus:ring-teal-500":
              variant === "outline",
            "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500":
              variant === "danger",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-5 py-3 text-base": size === "md",
            "px-6 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
