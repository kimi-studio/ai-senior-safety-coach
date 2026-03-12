"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Bell, Users, Shield } from "lucide-react";

export default function CaregiverOnboardingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="page-container-narrow py-12 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              보호자 연결 설정
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              필요한 상황만 가족과 공유해요
            </p>
          </div>

        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">알림 허용</h3>
                <p className="text-base text-gray-600">
                  복약 시간과 체크인 알림을 받으실 수 있어요
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">보호자 연결</h3>
                <p className="text-base text-gray-600 mb-3">
                  가족에게 안심 정보를 공유할 수 있어요
                </p>
                <input
                  type="tel"
                  placeholder="보호자 전화번호 (선택)"
                  className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 bg-white"
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">긴급 연락처</h3>
                <p className="text-base text-gray-600 mb-3">
                  도움이 필요할 때 연락할 분의 번호예요
                </p>
                <input
                  type="tel"
                  placeholder="긴급 연락처 (선택)"
                  className="w-full px-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 bg-white"
                />
              </div>
            </div>
          </Card>
        </div>

          <div className="space-y-3">
            <Button onClick={() => router.push("/app")} className="w-full">
              시작하기
            </Button>
            <Button
              variant="secondary"
              onClick={() => router.push("/app")}
              className="w-full"
            >
              나중에 설정하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
