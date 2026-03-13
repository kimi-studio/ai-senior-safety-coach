import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, Sparkles, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  "오늘 해야 할 일을 한눈에 보여주는 홈 화면",
  "불안하거나 몸이 불편할 때 바로 이어지는 도움 요청",
  "보호자에게는 꼭 필요한 순간만 전달하는 안심 연동",
];

const metrics = [
  {
    label: "큰 글씨 · 큰 버튼",
    title: "읽기 쉬운 UI",
  },
  {
    label: "AI 코칭",
    title: "작고 실천 가능한 제안",
  },
  {
    label: "보호자 연결",
    title: "감시 아닌 안심",
  },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="page-container-wide section-pad lg:min-h-[88vh] lg:flex lg:items-center">
        <div className="w-full grid items-start gap-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(440px,0.98fr)] lg:gap-24 xl:gap-28">
          <div className="space-y-14 pt-2 text-center lg:space-y-16 lg:pt-4 lg:text-left">
            <div className="space-y-8 lg:space-y-10">
              <div className="eyebrow mx-auto lg:mx-0">
                <Sparkles className="h-4 w-4" />
                중장년층을 위한 AI 생활 코치
              </div>

              <div className="inline-flex items-center justify-center lg:justify-start">
                <div className="hero-panel flex h-28 w-28 items-center justify-center rounded-[2.4rem] sm:h-32 sm:w-32">
                  <Heart className="h-12 w-12 fill-white text-white sm:h-14 sm:w-14" />
                </div>
              </div>

              <div className="mx-auto flex max-w-[42rem] flex-col gap-6 lg:mx-0 lg:max-w-[36rem] lg:gap-7">
                <h1 className="text-balance text-[3.35rem] font-bold leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-[4.25rem] lg:text-[5.15rem]">
                  안심하루
                </h1>
                <p className="text-balance text-[1.85rem] font-semibold leading-[1.24] text-cyan-950/92 sm:text-[2.15rem] lg:text-[2.55rem]">
                  매일을 안심하고 건강하게 보내는 가장 쉬운 방법
                </p>
                <p className="mx-auto max-w-[34rem] text-lg leading-9 text-slate-600 sm:text-xl lg:mx-0 lg:max-w-[32rem]">
                  오늘 해야 할 일은 또렷하게, AI 코칭은 부담 없게, 가족 연결은 필요한 순간만.
                  중장년층이 편안하게 쓰는 생활 루틴 앱을 더 따뜻하고 단단한 경험으로 만들었습니다.
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:space-y-10">
              <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:flex-wrap lg:gap-5">
                <Link href="/onboarding" className="block">
                  <Button className="w-full sm:min-w-[230px]" size="lg">
                    시작하기
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/presentation" className="block">
                  <Button variant="outline" className="w-full sm:min-w-[230px]" size="lg">
                    서비스 소개 보기
                  </Button>
                </Link>
              </div>

              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 xl:gap-6">
                {metrics.map((item) => (
                  <div key={item.title} className="metric-card min-h-[132px] text-left sm:min-h-[148px]">
                    <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                    <p className="mt-4 text-[1.75rem] font-bold leading-[1.2] tracking-[-0.02em] text-slate-900">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-7 pt-2 sm:space-y-8 lg:space-y-10 lg:pt-10">
            <div className="hero-panel p-8 sm:p-10 lg:p-12 xl:p-14">
              <div className="relative z-10 space-y-7 sm:space-y-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="max-w-[26rem]">
                    <p className="text-sm font-semibold text-white/75">오늘의 안심 루틴</p>
                    <h2 className="mt-3 text-[2rem] font-bold leading-[1.18] tracking-[-0.03em] sm:text-[2.35rem]">
                      한 번에 한 가지씩, 차분하게
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-3 backdrop-blur sm:p-4">
                    <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                </div>

                <div className="space-y-4 rounded-[1.9rem] bg-white/14 p-5 backdrop-blur-sm sm:space-y-5 sm:p-6 lg:p-7">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-4 rounded-[1.4rem] bg-white/10 p-4 sm:p-5 lg:gap-5 lg:p-6">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cyan-100" />
                      <p className="text-base leading-7 text-white/95 sm:text-lg sm:leading-8">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7">
              <div className="surface-card p-7 sm:p-8">
                <div className="feature-icon mb-6">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-[1.9rem] font-bold tracking-[-0.02em] text-slate-900">오늘의 코칭</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  &ldquo;오늘은 10분만 집 앞을 걸어보세요&rdquo;처럼 부담 없는 제안만 드려요.
                </p>
              </div>

              <div className="surface-card p-7 sm:p-8">
                <div className="feature-icon mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-[1.9rem] font-bold tracking-[-0.02em] text-slate-900">가족 안심 연결</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  정말 필요한 순간에만 보호자와 연결되도록 설계했어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
