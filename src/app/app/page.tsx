import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { todayTasks, aiCoaching, mockUser } from "@/lib/mock-data";
import { CheckCircle2, Circle, Sparkles, Phone, HeartPulse, Pill, Users, ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "좋은 아침이에요" : hour < 18 ? "좋은 오후예요" : "좋은 저녁이에요";
  const dateStr = now.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  const completedCount = todayTasks.filter((task) => task.completed).length;

  return (
    <div className="app-shell">
      <div className="app-container space-y-6">
        <section className="hero-panel p-7 sm:p-8">
          <div className="relative z-10 space-y-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base opacity-80">{dateStr}</p>
                <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight">
                  {mockUser.name}님,
                  <br />{greeting}
                </h1>
              </div>
              <div className="rounded-[1.4rem] bg-white/14 p-3 backdrop-blur">
                <HeartPulse className="h-7 w-7" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.4rem] bg-white/14 p-5 backdrop-blur-sm">
                <p className="text-sm text-white/75">오늘 달성</p>
                <p className="mt-1 text-3xl font-bold">{completedCount}/{todayTasks.length}</p>
                <p className="text-sm text-white/80">루틴 완료</p>
              </div>
              <div className="rounded-[1.4rem] bg-white/14 p-5 backdrop-blur-sm">
                <p className="text-sm text-white/75">안심 점수</p>
                <p className="mt-1 text-3xl font-bold">84점</p>
                <p className="text-sm text-white/80">평소보다 좋아요</p>
              </div>
            </div>
          </div>
        </section>

        <Link href="/app/help">
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white shadow-[0_20px_36px_rgba(249,115,22,0.22)]">
            <CardContent className="p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/18 backdrop-blur-sm">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">도움이 필요하세요?</h2>
                    <p className="text-base text-white/88">지금 바로 도움 요청 화면으로 이동해요</p>
                  </div>
                </div>
                <ArrowRight className="h-7 w-7 shrink-0" />
              </div>
            </CardContent>
          </Card>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-7 w-7 text-cyan-700" />
              오늘의 AI 코칭
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(236,254,255,1),rgba(236,253,245,1))] p-5">
              <h3 className="text-[1.6rem] font-bold leading-tight text-slate-900">{aiCoaching.title}</h3>
              <p className="mt-3 text-lg leading-8 text-slate-600">{aiCoaching.reason}</p>
            </div>
            <div className="surface-soft p-5">
              <p className="text-sm font-semibold text-cyan-900/70">오늘의 한 걸음</p>
              <p className="mt-1 text-xl font-bold text-cyan-950">💡 {aiCoaching.action}</p>
            </div>
            <Link href="/app/coaching">
              <Button variant="outline" className="w-full" size="md">자세히 보기</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>오늘 할 일</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayTasks.map((task) => (
              <div key={task.id} className="list-tile flex items-center gap-4">
                {task.completed ? (
                  <CheckCircle2 className="h-8 w-8 shrink-0 text-emerald-600" />
                ) : (
                  <Circle className="h-8 w-8 shrink-0 text-slate-300" />
                )}
                <div className="flex-1">
                  <p className={`text-xl font-bold ${task.completed ? "text-slate-400 line-through" : "text-slate-900"}`}>
                    {task.title}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-base text-slate-500">
                    <Clock3 className="h-4 w-4" />
                    {task.time}
                  </div>
                </div>
                {!task.completed && task.type === "checkin" && (
                  <Link href="/app/checkin">
                    <Button size="sm">하기</Button>
                  </Link>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-5">
          <Link href="/app/medication">
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-between p-7 text-left">
                <div className="feature-icon mb-4"><Pill className="h-7 w-7" /></div>
                <div>
                  <p className="text-xl font-bold text-slate-900">복약 관리</p>
                  <p className="mt-2 text-base leading-6 text-slate-500">오늘 약 일정과 재알림을 한 번에 확인해요</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/app/family">
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-between p-7 text-left">
                <div className="feature-icon mb-4"><Users className="h-7 w-7" /></div>
                <div>
                  <p className="text-xl font-bold text-slate-900">가족 연동</p>
                  <p className="mt-2 text-base leading-6 text-slate-500">안심 공유 범위를 쉽게 조절할 수 있어요</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
