"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Moon, Apple, Dumbbell, Pill, Sparkles, CheckCircle2 } from "lucide-react";

const interests = [
  { id: "medication", label: "복약 관리", icon: Pill },
  { id: "exercise", label: "운동", icon: Dumbbell },
  { id: "sleep", label: "수면", icon: Moon },
  { id: "meal", label: "식사", icon: Apple },
  { id: "mental", label: "마음 건강", icon: Heart },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (step === 1) setStep(2);
    else router.push("/onboarding/caregiver");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(167,243,208,0.34),_transparent_30%),linear-gradient(180deg,_#f7fcfd_0%,_#eef5fb_100%)]">
      <div className="page-container-narrow flex min-h-screen items-center py-10">
        <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="hero-panel p-7 sm:p-9">
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div className="space-y-4">
                <div className="eyebrow bg-white/16 text-white border-white/15">
                  <Sparkles className="h-4 w-4" />
                  간단한 설정으로 시작해요
                </div>
                <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
                  어렵지 않게,
                  <br />나에게 맞는 안심 루틴 만들기
                </h1>
                <p className="text-lg leading-8 text-white/88 sm:text-xl">
                  이름과 관심 분야만 알려주시면, 읽기 쉽고 실천하기 쉬운 화면으로 맞춰드릴게요.
                </p>
              </div>

              <div className="space-y-3 rounded-[1.8rem] bg-white/12 p-5 backdrop-blur-sm">
                {[
                  "큰 글씨와 큰 버튼으로 편안하게 사용",
                  "건강 코칭은 짧고 쉬운 생활 언어로 안내",
                  "보호자 연결은 원할 때만 설정 가능",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-cyan-100" />
                    <p className="text-base leading-7 text-white/92">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-6 sm:p-8">
            <div className="space-y-7">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-500">{step} / 2 단계</p>
                  <div className="flex gap-2">
                    {[1, 2].map((dot) => (
                      <span
                        key={dot}
                        className={`h-2.5 w-10 rounded-full ${step >= dot ? "bg-cyan-600" : "bg-slate-200"}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="section-heading">
                  <h2 className="section-title text-3xl sm:text-4xl">
                    {step === 1 ? "어떻게 불러드리면 좋을까요?" : "관심 있는 분야를 골라주세요"}
                  </h2>
                  <p className="section-copy text-lg sm:text-xl">
                    {step === 1
                      ? "처음엔 꼭 필요한 정보만 여쭤볼게요. 부담 없이 입력해주세요."
                      : "선택하신 내용을 바탕으로 복약, 운동, 수면 루틴을 더 보기 쉽게 정리해드려요."}
                  </p>
                </div>
              </div>

              {step === 1 ? (
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-base font-semibold text-slate-700">이름</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="예: 김순희"
                      className="form-field"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-base font-semibold text-slate-700">연령대</label>
                    <select className="form-field">
                      <option>50대</option>
                      <option>60대</option>
                      <option>70대</option>
                      <option>80대</option>
                    </select>
                  </div>
                  <div className="surface-soft p-4">
                    <p className="text-base leading-7 text-slate-600">
                      입력하신 내용은 더 적절한 말투와 크기, 알림 강도를 맞추는 데만 사용돼요.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest) => {
                    const Icon = interest.icon;
                    const isSelected = selectedInterests.includes(interest.id);

                    return (
                      <button
                        key={interest.id}
                        onClick={() => toggleInterest(interest.id)}
                        className={`rounded-[1.6rem] border p-5 text-left transition-all ${
                          isSelected
                            ? "border-cyan-500 bg-cyan-50 shadow-[0_16px_28px_rgba(6,182,212,0.14)]"
                            : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex flex-col gap-4">
                          <div className={`feature-icon ${isSelected ? "bg-[linear-gradient(135deg,#cffafe,#a7f3d0)]" : "bg-slate-100 text-slate-600"}`}>
                            <Icon className="h-7 w-7" />
                          </div>
                          <div>
                            <p className="text-xl font-bold text-slate-900">{interest.label}</p>
                            <p className="mt-1 text-sm text-slate-500">나중에 언제든 바꿀 수 있어요</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              <Button onClick={handleNext} disabled={step === 1 && !name} className="w-full">
                {step === 1 ? "다음" : "보호자 설정으로"}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
