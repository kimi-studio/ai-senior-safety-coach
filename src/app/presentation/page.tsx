import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Shield,
  Users,
  CheckCircle,
  TrendingUp,
  Smartphone,
  Zap,
  Sparkles,
  ArrowRight,
  Brain,
  BellRing,
  Activity,
} from "lucide-react";
import Link from "next/link";

const painPoints = {
  users: [
    "건강 앱은 정보는 많지만 실제 행동으로 이어지기 어렵습니다.",
    "작은 글씨, 복잡한 메뉴, 생소한 용어가 사용 장벽이 됩니다.",
    "불안하거나 위급할 때 누구에게 어떻게 도움을 요청할지 망설이게 됩니다.",
  ],
  caregivers: [
    "항상 부모님의 상태를 확인할 수 없어서 마음이 놓이지 않습니다.",
    "너무 자주 연락하면 부담이 될까 봐, 너무 안 하면 놓칠까 봐 고민합니다.",
    "정말 중요한 알림만 받고 싶지만 기존 서비스는 노이즈가 많습니다.",
  ],
};

const principles = [
  {
    title: "읽기 쉬움",
    copy: "큰 글씨, 넉넉한 간격, 명확한 정보 위계로 인지 부담을 낮춥니다.",
    icon: Heart,
  },
  {
    title: "실천 중심",
    copy: "의학적 진단보다 오늘 바로 가능한 한 가지 행동을 제안합니다.",
    icon: Brain,
  },
  {
    title: "안심형 연결",
    copy: "감시처럼 느껴지지 않도록 필요한 순간에만 보호자와 연결합니다.",
    icon: Users,
  },
  {
    title: "즉시 대응",
    copy: "도움 요청, 복약 누락, 컨디션 저하를 빠르게 행동으로 이어지게 만듭니다.",
    icon: BellRing,
  },
];

const flows = [
  {
    title: "아침 루틴 시작",
    color: "from-teal-500 to-cyan-500",
    steps: ["아침 알림 수신", "홈 진입", "오늘 할 일 확인", "AI 코칭 확인", "첫 행동 실행"],
  },
  {
    title: "복약 누락 대응",
    color: "from-blue-500 to-indigo-500",
    steps: ["복약 알림 발송", "미확인 지속", "재알림", "장시간 미복용", "보호자 알림"],
  },
  {
    title: "도움 요청 상황",
    color: "from-orange-500 to-rose-500",
    steps: ["도움 요청 선택", "상황 유형 선택", "즉시 행동 가이드", "가족/119 연결"],
  },
];

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbfd_0%,#f3f7fb_35%,#ffffff_100%)] text-slate-900">
      <section className="presentation-section overflow-hidden">
        <div className="page-container-wide">
          <div className="hero-panel p-11 sm:p-14 lg:p-16">
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div className="space-y-7">
                <div className="eyebrow bg-white/16 text-white border-white/15">
                  <Sparkles className="h-4 w-4" />
                  안심하루 서비스 제안
                </div>
                <div className="space-y-5">
                  <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.75rem]">
                    중장년층을 위한
                    <br />AI 생활 코치와 안전 연결 경험
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
                    오늘의 루틴을 쉽게 실천하게 돕고, 필요할 때 가족까지 자연스럽게 연결하는
                    고령친화형 케어 서비스입니다.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link href="/app">
                    <Button size="lg" className="min-w-[220px] bg-white text-cyan-800 hover:bg-slate-100">프로토타입 체험하기</Button>
                  </Link>
                  <Link href="/caregiver">
                    <Button size="lg" variant="outline" className="min-w-[220px] border-white/30 bg-white/10 text-white hover:bg-white/16">보호자 화면 보기</Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  ["핵심 가치", "실천 중심의 생활 코칭"],
                  ["주요 대상", "55~72세 본 사용자 + 40~60대 보호자"],
                  ["핵심 기능", "체크인 · 복약 · 도움 요청 · 안심 공유"],
                  ["차별점", "감시가 아닌 안심 경험 설계"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.8rem] bg-white/14 p-7 backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white/70">{label}</p>
                    <p className="mt-2 text-xl font-bold leading-tight text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="presentation-section">
        <div className="page-container-wide">
          <div className="section-heading items-center text-center">
            <div className="eyebrow">왜 필요한가</div>
            <h2 className="section-title max-w-4xl">중장년층은 더 쉬운 실행을, 보호자는 더 조용한 안심을 원합니다</h2>
            <p className="section-copy max-w-3xl">기존 건강 앱의 정보 과잉과 보호자 서비스의 알림 피로 사이를 메우는 생활 밀착형 경험이 필요합니다.</p>
          </div>

          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            <Card className="presentation-grid-card bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)]">
              <CardContent className="space-y-6 p-0">
                <h3 className="text-3xl font-bold">본 사용자 Pain Point</h3>
                <div className="space-y-5">
                  {painPoints.users.map((item) => (
                    <div key={item} className="list-tile flex items-start gap-3 bg-white/80">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                      <p className="text-lg leading-8 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="presentation-grid-card bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_100%)]">
              <CardContent className="space-y-6 p-0">
                <h3 className="text-3xl font-bold">보호자 Pain Point</h3>
                <div className="space-y-5">
                  {painPoints.caregivers.map((item) => (
                    <div key={item} className="list-tile flex items-start gap-3 bg-white/80">
                      <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-blue-500" />
                      <p className="text-lg leading-8 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="presentation-section bg-[linear-gradient(180deg,#f8fbfd_0%,#eef7fb_100%)]">
        <div className="page-container-wide">
          <div className="section-heading items-center text-center">
            <div className="eyebrow">서비스 원칙</div>
            <h2 className="section-title">안심하루가 경험을 설계하는 방식</h2>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="presentation-grid-card">
                  <CardContent className="p-0">
                    <div className="feature-icon mb-6"><Icon className="h-6 w-6" /></div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-4 text-lg leading-8 text-slate-600">{item.copy}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="presentation-section">
        <div className="page-container-wide">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="section-heading">
              <div className="eyebrow">정보 구조</div>
              <h2 className="section-title">사용자와 보호자 모두가 길을 잃지 않는 IA</h2>
              <p className="section-copy">메인 앱은 “오늘 해야 할 일”에 집중하고, 보호자 앱은 “오늘 무슨 일이 있었는지”를 빠르게 파악하게 만듭니다.</p>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <Card className="presentation-grid-card">
                <CardContent className="p-0">
                  <h3 className="mb-6 text-3xl font-bold text-cyan-950">본 사용자 앱 구조</h3>
                  <div className="space-y-4">
                    {["홈", "AI 코칭", "체크인", "복약 관리", "도움 요청", "가족 연동", "내 기록", "설정"].map((item, index) => (
                      <div key={item} className="flex items-center gap-4 rounded-2xl bg-cyan-50/90 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-700 text-white font-bold">{index + 1}</div>
                        <span className="text-lg font-semibold text-slate-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="presentation-grid-card">
                <CardContent className="p-0">
                  <h3 className="mb-6 text-3xl font-bold text-blue-950">보호자 앱 구조</h3>
                  <div className="space-y-4">
                    {["오늘 상태 요약", "활동 이력", "알림 설정", "빠른 연락"].map((item, index) => (
                      <div key={item} className="flex items-center gap-4 rounded-2xl bg-blue-50/90 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white font-bold">{index + 1}</div>
                        <span className="text-lg font-semibold text-slate-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="presentation-section bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="page-container-wide">
          <div className="section-heading items-center text-center">
            <div className="eyebrow">핵심 플로우</div>
            <h2 className="section-title">실행과 안심이 이어지는 대표 시나리오</h2>
          </div>
          <div className="mt-16 grid gap-7 xl:grid-cols-3">
            {flows.map((flow) => (
              <Card key={flow.title} className="presentation-grid-card overflow-hidden">
                <CardContent className="p-0">
                  <div className={`rounded-[1.6rem] bg-gradient-to-r ${flow.color} p-6 text-white`}>
                    <h3 className="text-3xl font-bold">{flow.title}</h3>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-4">
                    {flow.steps.map((step, idx) => (
                      <div key={step} className="info-chip">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-900 text-xs font-bold text-white">{idx + 1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="presentation-section bg-[linear-gradient(135deg,#0f766e_0%,#0f172a_100%)] text-white">
        <div className="page-container-wide">
          <div className="grid gap-7 lg:grid-cols-4">
            {[
              { icon: Smartphone, title: "프론트엔드", copy: "Next.js 기반 프로토타입으로 빠른 검증, 이후 RN/Flutter 확장 가능" },
              { icon: Shield, title: "알림 엔진", copy: "복약/체크인/위험 이벤트의 단계적 룰 엔진 설계" },
              { icon: Activity, title: "데이터 구조", copy: "루틴 상태와 경향을 주간 리포트로 요약하는 구조" },
              { icon: TrendingUp, title: "확장성", copy: "기관 제휴, 보험, 웨어러블 연동까지 자연스럽게 확장 가능" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[1.8rem] bg-white/10 p-7 backdrop-blur-sm">
                  <Icon className="h-10 w-10 text-cyan-200" />
                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-white/78">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="presentation-section">
        <div className="page-container">
          <Card className="overflow-hidden bg-[linear-gradient(135deg,rgba(236,254,255,1),rgba(255,255,255,1),rgba(239,246,255,1))] p-2">
            <CardContent className="p-7 text-center sm:p-12">
              <div className="mx-auto max-w-3xl space-y-6">
                <div className="eyebrow mx-auto">프로토타입 바로 보기</div>
                <h2 className="text-balance text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">실제 흐름으로 사용자 경험을 바로 확인해보세요</h2>
                <p className="text-lg leading-8 text-slate-600 sm:text-xl">메인 앱과 보호자 화면 모두 새로운 디자인 시스템으로 정돈되어 있어, 이해하기 쉬우면서도 발표용으로 충분히 세련된 인상을 전달합니다.</p>
                <div className="flex flex-col justify-center gap-4 pt-3 sm:flex-row">
                  <Link href="/app">
                    <Button size="lg" className="min-w-[220px]">
                      사용자 프로토타입
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/caregiver">
                    <Button size="lg" variant="outline" className="min-w-[220px]">보호자 화면</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-slate-200/70 bg-white/70 py-10 backdrop-blur">
        <div className="page-container-wide flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <Heart className="h-7 w-7 fill-cyan-700 text-cyan-700" />
              <p className="text-2xl font-bold">안심하루</p>
            </div>
            <p className="mt-2 text-base text-slate-500">중장년층을 위한 AI 생활 코치 및 안전 알림 서비스</p>
          </div>
          <p className="text-sm text-slate-400">© 2026 안심하루 · 위시켓 프로젝트 제안용 프로토타입</p>
        </div>
      </footer>
    </div>
  );
}
