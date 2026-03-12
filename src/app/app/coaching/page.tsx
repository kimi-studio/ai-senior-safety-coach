import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { aiCoaching } from "@/lib/mock-data";
import { Sparkles, Clock, Target, Volume2, CheckCircle2 } from "lucide-react";

export default function CoachingPage() {
  return (
    <div className="app-shell">
      <AppHeader title="AI 코칭" showBack />
      <div className="app-container space-y-5">
        <Card className="hero-panel border-0"><CardContent className="relative z-10 space-y-4 p-7"><div className="flex items-center gap-2 text-white/85"><Sparkles className="h-7 w-7" /><span className="text-xl font-semibold">오늘의 추천</span></div><h2 className="text-4xl font-bold leading-tight text-white">{aiCoaching.title}</h2><p className="text-lg leading-8 text-white/88">{aiCoaching.encouragement}</p></CardContent></Card>
        <Card><CardContent className="space-y-5 p-6"><div><h3 className="text-2xl font-bold">왜 추천드리나요?</h3><p className="mt-3 text-lg leading-8 text-slate-600">{aiCoaching.reason}</p></div><div className="surface-soft p-5"><h4 className="text-lg font-semibold text-cyan-900/70">오늘의 미션</h4><p className="mt-2 text-2xl font-bold text-cyan-950">{aiCoaching.action}</p></div><div className="grid grid-cols-2 gap-3"><div className="metric-card"><Target className="h-6 w-6 text-cyan-700" /><p className="mt-3 text-sm text-slate-500">난이도</p><p className="text-xl font-bold">{aiCoaching.difficulty}</p></div><div className="metric-card"><Clock className="h-6 w-6 text-cyan-700" /><p className="mt-3 text-sm text-slate-500">예상 시간</p><p className="text-xl font-bold">{aiCoaching.duration}</p></div></div></CardContent></Card>
        <Card><CardContent className="space-y-4 p-6"><h3 className="text-2xl font-bold">이렇게 해보세요</h3>{["편한 신발을 신고 준비하세요","집 근처를 천천히 걸어보세요","10분 정도 걸으셨다면 충분해요"].map((step, index) => <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 p-4"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-cyan-800 font-bold">{index + 1}</div><p className="flex-1 text-lg leading-7 text-slate-700">{step}</p></div>)}</CardContent></Card>
        <Card className="bg-emerald-50/80"><CardContent className="flex items-start gap-3 p-6"><CheckCircle2 className="mt-1 h-6 w-6 text-emerald-600" /><p className="text-lg leading-8 text-emerald-900">무리하지 않고 숨이 편한 정도만 유지해도 충분합니다. 중요한 건 꾸준함이에요.</p></CardContent></Card>
        <div className="space-y-3"><Button className="w-full">완료했어요</Button><Button variant="outline" className="w-full"><Volume2 className="h-6 w-6" />음성으로 듣기</Button></div>
      </div><BottomNav />
    </div>
  );
}
