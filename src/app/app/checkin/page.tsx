"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { Smile, Meh, Frown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const moods = [
  { id: "good", label: "좋아요", icon: Smile, tone: "text-emerald-500" },
  { id: "ok", label: "보통이에요", icon: Meh, tone: "text-amber-500" },
  { id: "bad", label: "조금 안 좋아요", icon: Frown, tone: "text-orange-500" },
];

const symptoms = ["두통", "어지러움", "피곤함", "소화불량", "관절 통증", "수면 부족"];

export default function CheckinPage() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [memo, setMemo] = useState("");

  const toggleSymptom = (symptom: string) => setSelectedSymptoms((prev) => prev.includes(symptom) ? prev.filter((s) => s !== symptom) : [...prev, symptom]);

  return (
    <div className="app-shell">
      <AppHeader title="오늘의 체크인" showBack />
      <div className="app-container space-y-5">
        <Card className="bg-[linear-gradient(135deg,#ecfeff_0%,#ffffff_100%)]">
          <CardContent className="space-y-2 p-6">
            <h2 className="text-3xl font-bold tracking-tight">오늘 컨디션은 어떠세요?</h2>
            <p className="text-lg leading-8 text-slate-600">한 번의 선택만으로 충분해요. 솔직하게 알려주시면 오늘 코칭을 더 편안하게 맞춰드릴게요.</p>
          </CardContent>
        </Card>
        <div className="grid grid-cols-3 gap-3">
          {moods.map((mood) => {
            const Icon = mood.icon;
            const isSelected = selectedMood === mood.id;
            return (
              <button key={mood.id} onClick={() => setSelectedMood(mood.id)} className={`rounded-[1.6rem] border p-4 transition-all ${isSelected ? "border-cyan-500 bg-cyan-50 shadow-[0_14px_28px_rgba(6,182,212,0.14)]" : "border-slate-200 bg-white hover:border-slate-300"}`}>
                <div className="flex flex-col items-center gap-3">
                  <Icon className={`h-11 w-11 ${mood.tone}`} />
                  <span className="text-lg font-bold text-slate-900 leading-tight text-center">{mood.label}</span>
                </div>
              </button>
            );
          })}
        </div>
        {selectedMood && <Card><CardContent className="space-y-4 p-6"><h3 className="text-2xl font-bold">불편한 증상이 있나요?</h3><div className="grid grid-cols-2 gap-3">{symptoms.map((symptom) => <button key={symptom} onClick={() => toggleSymptom(symptom)} className={`rounded-2xl border px-4 py-3 text-lg font-semibold transition ${selectedSymptoms.includes(symptom) ? "border-cyan-500 bg-cyan-50 text-cyan-900" : "border-slate-200 bg-white text-slate-700"}`}>{symptom}</button>)}</div></CardContent></Card>}
        {selectedMood && <Card><CardContent className="space-y-4 p-6"><h3 className="text-2xl font-bold">추가로 남기실 말씀</h3><textarea value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="특별히 기억하고 싶은 내용을 적어주세요 (선택)" className="form-field min-h-[120px]" /></CardContent></Card>}
        <Button onClick={() => router.push("/app/checkin/complete")} disabled={!selectedMood} className="w-full">저장하기</Button>
      </div>
      <BottomNav />
    </div>
  );
}
