import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { medications } from "@/lib/mock-data";
import { CheckCircle2, Circle, Clock, Plus } from "lucide-react";
import Link from "next/link";

export default function MedicationPage() {
  const morning = medications.filter((m) => m.time === "08:00");
  const evening = medications.filter((m) => m.time === "20:00");
  return <div className="app-shell"><AppHeader title="복약 관리" showBack /><div className="app-container space-y-5"><Card className="hero-panel border-0"><CardContent className="relative z-10 p-7 text-white"><p className="text-lg opacity-80">오늘의 복약률</p><p className="mt-2 text-6xl font-bold">67%</p><p className="mt-2 text-lg text-white/85">2/3 완료 · 저녁 약이 남아 있어요</p></CardContent></Card><Card><CardHeader><CardTitle>오늘 복약 일정</CardTitle></CardHeader><CardContent className="space-y-6"><div><div className="mb-3 flex items-center gap-2"><Clock className="h-5 w-5 text-slate-500" /><h3 className="text-xl font-bold">아침 (08:00)</h3></div><div className="space-y-3">{morning.map((med) => <div key={med.id} className="list-tile flex items-center gap-4"><CheckCircle2 className="h-8 w-8 shrink-0 text-emerald-600" /><div className="flex-1"><p className="text-xl font-bold text-slate-400 line-through">{med.name}</p><p className="text-base text-slate-500">복용 완료 ({med.takenAt})</p></div></div>)}</div></div><div><div className="mb-3 flex items-center gap-2"><Clock className="h-5 w-5 text-slate-500" /><h3 className="text-xl font-bold">저녁 (20:00)</h3></div><div className="space-y-3">{evening.map((med) => <div key={med.id} className="list-tile flex items-center gap-4"><Circle className="h-8 w-8 shrink-0 text-slate-300" /><div className="flex-1"><p className="text-xl font-bold text-slate-900">{med.name}</p><p className="text-base text-slate-500">예정 시간 {med.time}</p></div><Link href="/app/medication/take"><Button size="sm">복용</Button></Link></div>)}</div></div></CardContent></Card><Button variant="outline" className="w-full"><Plus className="h-6 w-6" />새 약 추가하기</Button></div><BottomNav /></div>;
}
