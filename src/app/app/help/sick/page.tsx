"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AppHeader } from "@/components/app-header";
import { Heart, Phone, Activity } from "lucide-react";
import { useState } from "react";

const symptoms = ["가슴 통증", "호흡 곤란", "두통", "어지러움", "복통", "기타"];

export default function SickHelpPage() {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);
  return <div className="app-shell"><AppHeader title="도움 요청" showBack showNotification={false} /><div className="app-container space-y-5"><Card className="overflow-hidden border-0 bg-gradient-to-r from-rose-500 to-orange-500 text-white"><CardContent className="p-6 text-center"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/18"><Heart className="h-8 w-8" /></div><h2 className="mt-4 text-3xl font-bold">몸이 불편하시군요</h2><p className="mt-2 text-lg text-white/88">어떤 증상이 있으신가요?</p></CardContent></Card><Card><CardContent className="space-y-4 p-6"><h3 className="text-2xl font-bold">증상 선택</h3><div className="grid grid-cols-2 gap-3">{symptoms.map((symptom) => <button key={symptom} onClick={() => setSelectedSymptom(symptom)} className={`rounded-2xl border px-4 py-4 text-lg font-semibold transition ${selectedSymptom === symptom ? "border-rose-500 bg-rose-50 text-rose-800" : "border-slate-200 bg-white text-slate-700"}`}>{symptom}</button>)}</div></CardContent></Card>{selectedSymptom && <Card className="bg-orange-50/80"><CardContent className="flex items-start gap-4 p-6"><div className="feature-icon"><Activity className="h-6 w-6 text-orange-600" /></div><div><h3 className="text-xl font-bold text-orange-950">권장 행동</h3><ul className="mt-3 space-y-2 text-lg text-orange-900/85"><li>• 편안한 자세로 앉거나 누우세요</li><li>• 무리하게 움직이지 마세요</li><li>• 심하면 119에 연락하세요</li></ul></div></CardContent></Card>}<div className="space-y-3"><Button variant="danger" className="w-full"><Phone className="h-6 w-6" />119 긴급 연락</Button><Button className="w-full"><Phone className="h-6 w-6" />보호자에게 연락</Button><Button variant="outline" className="w-full">괜찮아졌어요</Button></div></div></div>;
}
