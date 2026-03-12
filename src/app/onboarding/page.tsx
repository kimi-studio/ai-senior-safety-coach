"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, Moon, Apple, Dumbbell, Pill } from "lucide-react";

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
    if (step === 1) {
      setStep(2);
    } else {
      router.push("/onboarding/caregiver");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="page-container-narrow py-12 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500">
            {step}/2
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {step === 1 ? "반갑습니다!" : "관심 있는 분야를 선택해주세요"}
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              {step === 1
                ? "어떻게 불러드릴까요?"
                : "선택하신 분야를 중심으로 코칭해드릴게요"}
            </p>
          </div>

          {step === 1 ? (
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold mb-2 text-gray-700">
                    이름
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력해주세요"
                    className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold mb-2 text-gray-700">
                    연령대
                  </label>
                  <select className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-teal-500 bg-white">
                    <option>50대</option>
                    <option>60대</option>
                    <option>70대</option>
                    <option>80대</option>
                  </select>
                </div>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest) => {
                const Icon = interest.icon;
                const isSelected = selectedInterests.includes(interest.id);

                return (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`p-5 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? "border-teal-500 bg-teal-50 shadow-[0_10px_24px_rgba(20,184,166,0.15)]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          isSelected ? "bg-teal-100" : "bg-gray-100"
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 ${
                            isSelected ? "text-teal-600" : "text-gray-600"
                          }`}
                        />
                      </div>
                      <span className="text-base font-semibold text-gray-900">
                        {interest.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          <Button
            onClick={handleNext}
            disabled={step === 1 && !name}
            className="w-full"
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
}
