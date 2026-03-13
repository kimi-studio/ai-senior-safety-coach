import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, Users, CheckCircle2, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen overflow-x-hidden pb-28 lg:pb-0">
      <section className="page-container-wide flex min-h-screen items-center justify-center py-24 text-center lg:py-32">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
          <div className="eyebrow mb-8">
            <Sparkles className="h-4 w-4" />
            중장년층을 위한 AI 생활 코치
          </div>

          <h1 className="mt-4 mb-6 text-balance text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-[5.15rem]">
            안심하루
          </h1>

          <p className="max-w-3xl text-balance text-xl font-semibold leading-[1.45] text-cyan-950/92 lg:text-3xl">
            매일을 안심하고 건강하게 보내는 가장 쉬운 방법
          </p>

          <div className="mt-12 hidden lg:block">
            <Link href="/onboarding">
              <Button size="lg" className="min-w-[240px]">
                시작하기
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="page-container py-24 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="section-heading items-center">
            <div className="eyebrow">왜 안심하루인가</div>
            <h2 className="section-title max-w-3xl">오늘 해야 할 일은 또렷하게, 도움은 필요한 순간에만 이어지도록</h2>
            <p className="section-copy max-w-2xl text-base leading-relaxed lg:text-lg">
              오늘 해야 할 일은 또렷하게, AI 코칭은 부담 없게, 가족 연결은 필요한 순간만.
              중장년층이 편안하게 쓰는 생활 루틴 앱을 더 따뜻하고 단단한 경험으로 만들었습니다.
            </p>
          </div>

          <div className="mt-12 grid w-full gap-5 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {metrics.map((item) => (
              <div key={item.title} className="metric-card stat-card min-h-[180px] text-left lg:min-h-[210px]">
                <p className="text-sm font-semibold tracking-[-0.01em] text-slate-500">{item.label}</p>
                <p className="mt-6 max-w-[12rem] text-[1.9rem] font-bold leading-[1.2] tracking-[-0.03em] text-slate-900 lg:text-[2.15rem]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 hidden lg:block">
            <Link href="/presentation">
              <Button variant="outline" size="lg" className="min-w-[240px]">
                서비스 소개 보기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="page-container-wide">
          <div className="mx-auto max-w-[1100px] space-y-6 lg:space-y-8">
            <div className="hero-panel hero-panel-mobile-bleed p-7 sm:p-9 lg:p-12">
              <div className="relative z-10 space-y-7 lg:space-y-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="max-w-[34rem]">
                    <p className="text-sm font-semibold text-white/72">오늘의 안심 루틴</p>
                    <h2 className="mt-3 text-[1.95rem] font-bold leading-[1.18] tracking-[-0.03em] sm:text-[2.2rem] lg:text-[2.5rem]">
                      한 번에 한 가지씩, 차분하게
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-white/12 p-3 sm:p-4">
                    <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                </div>

                <div className="divide-y divide-white/15 overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/8">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-4 px-5 py-5 sm:px-6 sm:py-6 lg:gap-5">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cyan-100" />
                      <p className="text-base leading-relaxed text-white/95 lg:text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2 lg:gap-8">
              <div className="surface-card p-7 sm:p-8 lg:p-9">
                <div className="feature-icon mb-6">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-[1.7rem] font-bold tracking-[-0.02em] text-slate-900 lg:text-[1.9rem]">오늘의 코칭</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
                  &ldquo;오늘은 10분만 집 앞을 걸어보세요&rdquo;처럼 부담 없는 제안만 드려요.
                </p>
              </div>

              <div className="surface-card p-7 sm:p-8 lg:p-9">
                <div className="feature-icon mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-[1.7rem] font-bold tracking-[-0.02em] text-slate-900 lg:text-[1.9rem]">가족 안심 연결</h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 lg:text-lg">
                  정말 필요한 순간에만 보호자와 연결되도록 설계했어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mobile-sticky-cta lg:hidden">
        <Link href="/onboarding" className="block flex-1">
          <Button size="lg" className="w-full">
            시작하기
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
