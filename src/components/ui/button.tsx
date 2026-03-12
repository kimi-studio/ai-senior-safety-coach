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
          "inline-flex items-center justify-center gap-2 rounded-[1.35rem] font-semibold tracking-tight transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-cyan-200/70 disabled:pointer-events-none disabled:opacity-45 active:scale-[0.99]",
          {
            "bg-app-gradient text-white shadow-[0_18px_34px_rgba(8,145,178,0.24)] hover:-translate-y-0.5 hover:shadow-[0_22px_38px_rgba(8,145,178,0.28)]":
              variant === "primary",
            "bg-white text-slate-900 border border-slate-200 shadow-[0_14px_28px_rgba(15,23,42,0.06)] hover:bg-slate-50 hover:-translate-y-0.5":
              variant === "secondary",
            "border-[1.5px] border-cyan-700/20 bg-white/82 text-cyan-900 shadow-[0_12px_26px_rgba(15,23,42,0.05)] hover:bg-cyan-50/80 hover:border-cyan-500/40":
              variant === "outline",
            "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-[0_16px_30px_rgba(244,63,94,0.22)] hover:-translate-y-0.5 hover:shadow-[0_20px_34px_rgba(244,63,94,0.28)]":
              variant === "danger",
          },
          {
            "min-h-[2.9rem] px-4 text-sm": size === "sm",
            "min-h-[3.5rem] px-5 text-base": size === "md",
            "min-h-[4rem] px-6 text-lg": size === "lg",
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
