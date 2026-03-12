"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Bell, Users, Shield, CheckCircle2 } from "lucide-react";

export default function CaregiverOnboardingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(167,243,208,0.32),_transparent_28%),linear-gradient(180deg,_#f8fcfd_0%,_#eef4fb_100%)]">
      <div className="page-container-narrow flex min-h-screen items-center justify-center py-10">
        <div className="grid w-full max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hero-panel p-8">
            <div className="relative z-10 space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">필요한 상황만 가족과 연결해요</h1>
              <p className="text-lg leading-8 text-white/88">안심하루의 보호자 연결은 감시가 아니라 안심을 위한 장치예요. 공유 범위는 언제든 바꿀 수 있습니다.</p>
              <div className="space-y-3 rounded-[1.7rem] bg-white/12 p-5 backdrop-blur-sm">
                {[
                  "복약 누락이나 도움 요청처럼 꼭 필요한 상황만 공유",
                  "전화번호를 입력하지 않아도 먼저 체험 가능",
                  "나중에 설정에서 범위를 다시 조정 가능",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-cyan-100" />
                    <p className="text-base leading-7 text-white/92">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-6 sm:p-8">
            <div className="space-y-4">
              {[{
                icon: Bell,
                title: "알림 허용",
                copy: "복약 시간, 체크인, 중요한 코칭을 또렷한 알림으로 받아보세요.",
                input: null,
              }, {
                icon: Users,
                title: "보호자 연결",
                copy: "가족에게 안심 정보를 공유할 수 있어요.",
                input: "보호자 전화번호 (선택)",
              }, {
                icon: Shield,
                title: "긴급 연락처",
                copy: "도움이 필요할 때 가장 먼저 연결할 번호를 적어둘 수 있어요.",
                input: "긴급 연락처 (선택)",
              }].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="surface-soft p-5">
                    <div className="flex items-start gap-4">
                      <div className="feature-icon"><Icon className="h-6 w-6" /></div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-base leading-7 text-slate-600">{item.copy}</p>
                        {item.input && <input type="tel" placeholder={item.input} className="form-field mt-4" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 space-y-3">
              <Button onClick={() => router.push("/app")} className="w-full">시작하기</Button>
              <Button variant="secondary" onClick={() => router.push("/app")} className="w-full">나중에 설정하기</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
