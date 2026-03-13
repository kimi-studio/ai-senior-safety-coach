import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, Sparkles, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  "오늘 해야 할 일을 한눈에 보여주는 홈 화면",
  "불안하거나 몸이 불편할 때 바로 이어지는 도움 요청",
  "보호자에게는 꼭 필요한 순간만 전달하는 안심 연동",
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="page-container-wide section-pad lg:min-h-[72vh] lg:flex lg:items-center">
        <div className="w-full grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <div className="eyebrow mx-auto lg:mx-0">
                <Sparkles className="h-4 w-4" />
                중장년층을 위한 AI 생활 코치
              </div>
              <div className="inline-flex items-center justify-center lg:justify-start">
                <div className="hero-panel flex h-24 w-24 items-center justify-center rounded-[2rem]">
                  <Heart className="h-12 w-12 fill-white text-white" />
                </div>
              </div>
              <div className="space-y-5">
                <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[4.25rem]">
                  안심하루
                </h1>
                <p className="mx-auto max-w-xl text-balance text-xl font-semibold text-cyan-950/90 sm:text-2xl lg:mx-0 lg:text-[1.9rem]">
                  매일을 안심하고 건강하게 보내는 가장 쉬운 방법
                </p>
                <p className="mx-auto max-w-xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
                  오늘 해야 할 일은 또렷하게, AI 코칭은 부담 없게, 가족 연결은 필요한 순간만.
                  중장년층이 편안하게 쓰는 생활 루틴 앱을 더 따뜻하고 단단한 경험으로 만들었습니다.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/onboarding" className="block">
                  <Button className="w-full sm:min-w-[210px]" size="lg">
                    시작하기
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/presentation" className="block">
                  <Button variant="outline" className="w-full sm:min-w-[210px]" size="lg">
                    서비스 소개 보기
                  </Button>
                </Link>
              </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              <div className="metric-card text-left">
                  <p className="text-sm font-semibold text-slate-500">큰 글씨 · 큰 버튼</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">읽기 쉬운 UI</p>
                </div>
                <div className="metric-card text-left">
                  <p className="text-sm font-semibold text-slate-500">AI 코칭</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">작고 실천 가능한 제안</p>
              </div>
              <div className="metric-card text-left sm:col-span-2 lg:col-span-1">
                <p className="text-sm font-semibold text-slate-500">보호자 연결</p>
                <p className="mt-2 text-xl font-bold text-slate-900">감시 아닌 안심</p>
              </div>
            </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="hero-panel p-8 sm:p-10 lg:p-11">
              <div className="relative z-10 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white/75">오늘의 안심 루틴</p>
                    <h2 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">한 번에 한 가지씩, 차분하게</h2>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                </div>
                <div className="space-y-4 rounded-[1.7rem] bg-white/14 p-5 backdrop-blur-sm">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cyan-100" />
                      <p className="text-base leading-6 text-white/95 sm:text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-6">
                <div className="feature-icon mb-4">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">오늘의 코칭</h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  &ldquo;오늘은 10분만 집 앞을 걸어보세요&rdquo;처럼 부담 없는 제안만 드려요.
                </p>
              </div>
              <div className="surface-card p-6">
                <div className="feature-icon mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">가족 안심 연결</h3>
                <p className="mt-2 text-base leading-7 text-slate-600">정말 필요한 순간에만 보호자와 연결되도록 설계했어요.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
