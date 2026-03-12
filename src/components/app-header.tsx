"use client";

import { ArrowLeft, Bell } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AppHeaderProps {
  title?: string;
  showBack?: boolean;
  showNotification?: boolean;
}

export function AppHeader({ title, showBack = false, showNotification = true }: AppHeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-20 border-b border-white/60 bg-white/72 backdrop-blur-xl">
      <div className="app-container py-3">
        <div className="surface-soft flex min-h-[4.4rem] items-center justify-between px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            {showBack && (
              <button
                onClick={() => router.back()}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
                aria-label="뒤로 가기"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            {title && <h1 className="truncate text-[1.35rem] font-bold tracking-tight text-slate-900 sm:text-[1.55rem]">{title}</h1>}
          </div>
          {showNotification && (
            <Link
              href="/app/notifications"
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              aria-label="알림"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
