"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, MessageCircle, CheckCircle, BarChart3, Settings } from "lucide-react";

const navItems = [
  { href: "/app", label: "홈", icon: Home },
  { href: "/app/coaching", label: "코칭", icon: MessageCircle },
  { href: "/app/checkin", label: "체크인", icon: CheckCircle },
  { href: "/app/report", label: "기록", icon: BarChart3 },
  { href: "/app/settings", label: "설정", icon: Settings },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 px-3 pb-3">
      <div className="mx-auto w-full max-w-[470px] rounded-[2rem] border border-white/70 bg-white/86 p-2 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="grid h-[74px] grid-cols-5 gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 rounded-[1.3rem] px-1 text-[11px] font-semibold tracking-tight transition-all",
                  isActive
                    ? "bg-cyan-50 text-cyan-800 shadow-[inset_0_0_0_1px_rgba(8,145,178,0.15)]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                )}
              >
                <Icon className={cn("h-5 w-5", isActive && "scale-105")} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
