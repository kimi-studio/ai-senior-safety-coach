import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caregiverSummary, mockCaregiver, mockUser } from "@/lib/mock-data";
import { CheckCircle, AlertCircle, Phone, MessageCircle, Clock, Activity, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CaregiverHomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.36),_transparent_28%),linear-gradient(180deg,_#f8fbff_0%,_#eef4fb_100%)]">
      <div className="page-container-narrow py-10 sm:py-12 space-y-7">
        <section className="hero-panel p-7 sm:p-9">
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <div className="eyebrow bg-white/16 text-white border-white/15">보호자 모드</div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{mockUser.name}님 상태</h1>
              <p className="text-lg text-white/85">오늘 상태를 한눈에 보고, 필요할 때만 바로 연락할 수 있어요.</p>
            </div>
            <Link href="/app">
              <Button variant="outline" className="border-white/30 bg-white/12 text-white hover:bg-white/18">사용자 모드 보기</Button>
            </Link>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card className="bg-emerald-50/90">
            <CardContent className="p-7 text-center">
              <CheckCircle className="mx-auto mb-3 h-12 w-12 text-emerald-600" />
              <p className="text-sm font-semibold text-emerald-800/70">마지막 체크인</p>
              <p className="mt-2 text-2xl font-bold text-emerald-950">{caregiverSummary.lastCheckIn}</p>
              <p className="mt-2 text-base text-emerald-700">{caregiverSummary.checkInStatus}</p>
            </CardContent>
          </Card>
          <Card className="bg-sky-50/90">
            <CardContent className="p-7 text-center">
              <Activity className="mx-auto mb-3 h-12 w-12 text-sky-600" />
              <p className="text-sm font-semibold text-sky-800/70">복약 상태</p>
              <p className="mt-2 text-2xl font-bold text-sky-950">{caregiverSummary.medicationStatus}</p>
              <p className="mt-2 text-base text-sky-700">오늘 2/3 완료</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-7 text-center">
              <AlertCircle className="mx-auto mb-3 h-12 w-12 text-slate-400" />
              <p className="text-sm font-semibold text-slate-500">위험 이벤트</p>
              <p className="mt-2 text-2xl font-bold text-slate-950">{caregiverSummary.todayEvents}건</p>
              <p className="mt-2 text-base text-slate-500">특이사항 없음</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between gap-4">
                <span>최근 활동</span>
                <Link href="/caregiver/history">
                  <Button variant="outline" size="sm">전체 보기</Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {caregiverSummary.recentAlerts.map((alert) => (
                <div key={alert.id} className="list-tile flex items-start gap-4">
                  <div className="text-3xl">
                    {alert.type === "medication" && "💊"}
                    {alert.type === "checkin" && "✓"}
                    {alert.type === "exercise" && "🚶"}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-bold text-slate-900">{alert.message}</p>
                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      {alert.time}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-[linear-gradient(135deg,rgba(236,253,245,1),rgba(239,246,255,1))]">
              <CardContent className="p-7">
                <div className="flex items-start gap-4">
                  <div className="feature-icon"><ShieldCheck className="h-6 w-6" /></div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">오늘의 안심 요약</h3>
                    <p className="mt-3 text-lg leading-8 text-slate-600">
                      오늘 {mockUser.name}님은 체크인과 복약을 잘 진행하고 계세요. 특별한 이상 징후는 없고, 생활 루틴도 안정적으로 이어지고 있습니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-7 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">주 보호자</p>
                  <p className="mt-1 text-2xl font-bold text-slate-900">{mockCaregiver.name} · {mockCaregiver.relation}</p>
                  <p className="text-base text-slate-500">연락처 {mockCaregiver.phone}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link href={`tel:${mockCaregiver.phone}`}>
                    <Button className="w-full"><Phone className="h-5 w-5" />전화 걸기</Button>
                  </Link>
                  <Link href="/caregiver/settings">
                    <Button variant="outline" className="w-full"><MessageCircle className="h-5 w-5" />알림 설정</Button>
                  </Link>
                </div>
                <Link href="/caregiver/history" className="flex items-center justify-between rounded-[1.3rem] border border-slate-200 px-4 py-4 text-slate-700 transition hover:bg-slate-50">
                  <span className="text-base font-semibold">이력 상세 화면으로 이동</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
