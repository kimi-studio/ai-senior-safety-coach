import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";

const notifications = [
  { id: 1, title: "저녁 약 복용 시간이에요", time: "1시간 전", read: false, icon: "💊" },
  { id: 2, title: "오늘의 새로운 AI 코칭이 도착했어요", time: "3시간 전", read: true, icon: "✨" },
  { id: 3, title: "오늘의 체크인을 완료해주세요", time: "5시간 전", read: true, icon: "✓" },
  { id: 4, title: "보호자가 안부 메시지를 보냈어요", time: "어제", read: true, icon: "👨‍👩‍👦" },
];

export default function NotificationsPage() {
  return <div className="app-shell"><AppHeader title="알림" showBack showNotification={false} /><div className="app-container space-y-5"><Card><CardHeader><CardTitle>오늘</CardTitle></CardHeader><CardContent className="space-y-3">{notifications.slice(0, 3).map((n) => <div key={n.id} className={`rounded-[1.4rem] p-4 ${n.read ? "bg-slate-50" : "border border-cyan-200 bg-cyan-50"}`}><div className="flex items-start gap-4"><div className="text-3xl">{n.icon}</div><div className="flex-1"><p className="text-xl font-bold text-slate-900">{n.title}</p><p className="mt-1 text-base text-slate-500">{n.time}</p></div>{!n.read && <div className="mt-2 h-3 w-3 rounded-full bg-cyan-500" />}</div></div>)}</CardContent></Card><Card><CardHeader><CardTitle>이전 알림</CardTitle></CardHeader><CardContent className="space-y-3">{notifications.slice(3).map((n) => <div key={n.id} className="rounded-[1.4rem] bg-slate-50 p-4"><div className="flex items-start gap-4"><div className="text-3xl">{n.icon}</div><div><p className="text-xl font-bold text-slate-800">{n.title}</p><p className="mt-1 text-base text-slate-500">{n.time}</p></div></div></div>)}</CardContent></Card></div><BottomNav /></div>;
}
