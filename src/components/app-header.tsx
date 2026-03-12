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
    <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-200/70 z-10">
      <div className="app-container py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {showBack && (
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          {title && <h1 className="text-xl sm:text-2xl font-bold">{title}</h1>}
        </div>
        {showNotification && (
          <Link
            href="/app/notifications"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </Link>
        )}
      </div>
    </header>
  );
}
