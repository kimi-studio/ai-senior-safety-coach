"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AppHeader } from "@/components/app-header";
import { Pill, Clock, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function TakeMedicationPage() {
  const router = useRouter();

  const handleTaken = () => {
    router.push("/app");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader title="복약 확인" showBack showNotification={false} />

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0">
          <CardContent className="p-8 text-center space-y-4">
            <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto">
              <Pill className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">고혈압약</h2>
              <p className="text-xl opacity-90">저녁 복약 시간이에요</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-lg text-gray-600">예정 시간</p>
                <p className="text-2xl font-bold">20:00</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-2xl">
              <p className="text-lg text-blue-900">
                💊 물과 함께 복용하세요
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">알림 설정</h3>
                <p className="text-lg text-gray-600">
                  복용하지 않으면 30분 후 다시 알려드릴게요.
                  {" "}장시간 미복용 시 보호자에게 알림이 갈 수 있어요.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button onClick={handleTaken} className="w-full">
            복용 완료
          </Button>
          <Button variant="secondary" className="w-full">
            30분 후 알림
          </Button>
        </div>
      </div>
    </div>
  );
}
