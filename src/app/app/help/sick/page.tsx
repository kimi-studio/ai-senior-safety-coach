"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AppHeader } from "@/components/app-header";
import { Heart, Phone, Activity } from "lucide-react";
import { useState } from "react";

const symptoms = [
  "가슴 통증", "호흡 곤란", "두통", "어지러움", "복통", "기타"
];

export default function SickHelpPage() {
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  return (
    <div className="app-shell">
      <AppHeader title="도움 요청" showBack showNotification={false} />

      <div className="app-container space-y-6">
        <Card className="bg-gradient-to-r from-red-500 to-pink-500 border-0 text-white">
          <CardContent className="p-6 text-center space-y-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">몸이 불편하시군요</h2>
              <p className="text-base sm:text-lg opacity-90">어떤 증상이 있으신가요?</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-bold">증상 선택</h3>
            <div className="grid grid-cols-2 gap-3">
              {symptoms.map((symptom) => {
                const isSelected = selectedSymptom === symptom;
                return (
                  <button
                    key={symptom}
                    onClick={() => setSelectedSymptom(symptom)}
                    className={`px-4 py-3 rounded-xl border-2 text-base font-medium transition-all ${
                      isSelected
                        ? "border-red-500 bg-red-50 text-red-700"
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

        {selectedSymptom && (
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-orange-900">
                    권장 행동
                  </h3>
                  <ul className="space-y-2 text-base text-orange-800">
                    <li>• 편안한 자세로 앉거나 누우세요</li>
                    <li>• 무리하게 움직이지 마세요</li>
                    <li>• 심하면 119에 연락하세요</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="space-y-3">
          <Button variant="danger" className="w-full">
            <Phone className="w-6 h-6 mr-2" />
            119 긴급 연락
          </Button>
          <Button className="w-full">
            <Phone className="w-6 h-6 mr-2" />
            보호자에게 연락
          </Button>
          <Button variant="outline" className="w-full">
            괜찮아졌어요
          </Button>
        </div>
      </div>
    </div>
  );
}
