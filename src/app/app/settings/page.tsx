import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { Type, Volume2, Bell, Shield, User, Info, ChevronRight } from "lucide-react";
import Link from "next/link";

const settingsGroups = [{ title: "접근성", items: [{ icon: Type, label: "글씨 크기", value: "크게", href: "#" }, { icon: Volume2, label: "음성 안내", value: "켜짐", href: "#" }] }, { title: "알림", items: [{ icon: Bell, label: "알림 설정", value: "켜짐", href: "#" }, { icon: Bell, label: "알림 시간", value: "아침 8시", href: "#" }] }, { title: "개인정보", items: [{ icon: User, label: "프로필 정보", value: "", href: "#" }, { icon: Shield, label: "개인정보 처리방침", value: "", href: "#" }] }, { title: "정보", items: [{ icon: Info, label: "버전 정보", value: "1.0.0", href: "#" }, { icon: Info, label: "서비스 이용약관", value: "", href: "#" }] }];

export default function SettingsPage() {
  return <div className="app-shell"><AppHeader title="설정" /><div className="app-container space-y-5">{settingsGroups.map((group) => <Card key={group.title}><CardHeader><CardTitle>{group.title}</CardTitle></CardHeader><CardContent className="space-y-2">{group.items.map((item) => { const Icon = item.icon; return <Link key={item.label} href={item.href}><div className="list-tile flex items-center justify-between"><div className="flex items-center gap-4"><div className="feature-icon"><Icon className="h-5 w-5" /></div><span className="text-xl font-semibold">{item.label}</span></div><div className="flex items-center gap-2 text-slate-500">{item.value && <span className="text-base">{item.value}</span>}<ChevronRight className="h-5 w-5" /></div></div></Link>; })}</CardContent></Card>)}</div><BottomNav /></div>;
}
