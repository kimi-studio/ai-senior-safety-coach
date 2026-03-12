"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { Smile, Meh, Frown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const moods = [
  { id: "good", label: "좋아요", icon: Smile, color: "green" },
  { id: "ok", label: "보통이에요", icon: Meh, color: "yellow" },
  { id: "bad", label: "조금 안 좋아요", icon: Frown, color: "orange" },
];

const symptoms = [
  "두통", "어지러움", "피곤함", "소화불량", "관절 통증", "수면 부족"
];

export default function CheckinPage() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [memo, setMemo] = useState("");

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSave = () => {
    router.push("/app/checkin/complete");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AppHeader title="오늘의 체크인" showBack />

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">오늘 컨디션은 어떠세요?</h2>
          <p className="text-xl text-gray-600">솔직하게 알려주세요</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {moods.map((mood) => {
            const Icon = mood.icon;
            const isSelected = selectedMood === mood.id;

            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`p-6 rounded-2xl border-2 transition-all ${
                  isSelected
                    ? "border-teal-500 bg-teal-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center gap-3">
                  <Icon
                    className={`w-12 h-12 ${
                      mood.color === "green"
                        ? "text-green-500"
                        : mood.color === "yellow"
                        ? "text-yellow-500"
                        : "text-orange-500"
                    }`}
                  />
                  <span className="text-lg font-semibold text-center leading-tight">
                    {mood.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {selectedMood && (
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">불편한 증상이 있나요?</h3>
              <p className="text-lg text-gray-600">선택 사항이에요</p>
              <div className="grid grid-cols-2 gap-3">
                {symptoms.map((symptom) => {
                  const isSelected = selectedSymptoms.includes(symptom);
                  return (
                    <button
                      key={symptom}
                      onClick={() => toggleSymptom(symptom)}
                      className={`px-4 py-3 rounded-xl border-2 text-lg font-medium transition-all ${
                        isSelected
                          ? "border-teal-500 bg-teal-50 text-teal-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {symptom}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {selectedMood && (
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">추가로 남기실 말씀</h3>
              <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="특별히 기억하고 싶은 내용을 적어주세요 (선택)"
                className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 min-h-[100px]"
              />
            </CardContent>
          </Card>
        )}

        <Button
          onClick={handleSave}
          disabled={!selectedMood}
          className="w-full"
        >
          저장하기
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
