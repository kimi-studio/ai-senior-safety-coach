"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AppHeader } from "@/components/app-header";
import { Pill, Clock, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TakeMedicationPage() {
  const router = useRouter();
  return <div className="app-shell"><AppHeader title="복약 확인" showBack showNotification={false} /><div className="app-container space-y-5"><Card className="hero-panel border-0"><CardContent className="relative z-10 space-y-4 p-7 text-center text-white"><div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/18"><Pill className="h-10 w-10" /></div><div><h2 className="text-4xl font-bold">고혈압약</h2><p className="mt-2 text-xl text-white/88">저녁 복약 시간이에요</p></div></CardContent></Card><Card><CardContent className="space-y-4 p-6"><div className="flex items-center gap-4"><div className="feature-icon"><Clock className="h-6 w-6 text-blue-600" /></div><div><p className="text-base text-slate-500">예정 시간</p><p className="text-2xl font-bold">20:00</p></div></div><div className="surface-soft p-4"><p className="text-lg text-slate-700">💊 물과 함께 천천히 복용하세요.</p></div></CardContent></Card><Card><CardContent className="flex items-start gap-4 p-6"><div className="feature-icon"><Bell className="h-6 w-6 text-orange-600" /></div><div><h3 className="text-xl font-bold">알림 설정</h3><p className="mt-2 text-lg leading-8 text-slate-600">복용하지 않으면 30분 후 다시 알려드릴게요. 장시간 미복용 시 보호자에게 알림이 갈 수 있어요.</p></div></CardContent></Card><div className="space-y-3"><Button onClick={() => router.push("/app")} className="w-full">복용 완료</Button><Button variant="secondary" className="w-full">30분 후 알림</Button></div></div></div>;
}
