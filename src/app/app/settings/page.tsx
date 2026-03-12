import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { Type, Volume2, Bell, Shield, User, Info, ChevronRight } from "lucide-react";
import Link from "next/link";

const settingsGroups = [
  {
    title: "접근성",
    items: [
      { icon: Type, label: "글씨 크기", value: "크게", href: "#" },
      { icon: Volume2, label: "음성 안내", value: "켜짐", href: "#" },
    ],
  },
  {
    title: "알림",
    items: [
      { icon: Bell, label: "알림 설정", value: "켜짐", href: "#" },
      { icon: Bell, label: "알림 시간", value: "아침 8시", href: "#" },
    ],
  },
  {
    title: "개인정보",
    items: [
      { icon: User, label: "프로필 정보", value: "", href: "#" },
      { icon: Shield, label: "개인정보 처리방침", value: "", href: "#" },
    ],
  },
  {
    title: "정보",
    items: [
      { icon: Info, label: "버전 정보", value: "1.0.0", href: "#" },
      { icon: Info, label: "서비스 이용약관", value: "", href: "#" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AppHeader title="설정" />

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {settingsGroups.map((group, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {group.items.map((item, itemIdx) => {
                const Icon = item.icon;
                return (
                  <Link key={itemIdx} href={item.href}>
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                      <div className="flex items-center gap-4">
                        <Icon className="w-6 h-6 text-gray-600" />
                        <span className="text-xl font-medium">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.value && (
                          <span className="text-lg text-gray-500">{item.value}</span>
                        )}
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
