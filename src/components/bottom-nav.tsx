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
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200/70 pb-safe shadow-[0_-10px_24px_rgba(15,23,42,0.08)]">
      <div className="app-container py-2">
        <div className="flex justify-around items-center h-[68px]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                  isActive
                    ? "text-teal-600"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                <Icon className="w-6 h-6" />
                <span className="text-[11px] font-medium tracking-tight">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
