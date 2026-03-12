import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockUser } from "@/lib/mock-data";
import { ArrowLeft, Bell, AlertCircle, Shield } from "lucide-react";
import Link from "next/link";

export default function CaregiverSettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="page-container-narrow py-10 space-y-6">
        <div className="surface-card p-6">
          <div className="flex items-center gap-4">
            <Link href="/caregiver">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </button>
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                알림 설정
              </h1>
              <p className="text-sm text-gray-600">
                {mockUser.name}님 관련 알림
              </p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-6 h-6 text-teal-600" />
              알림 받을 내용
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl">
              <div className="flex-1">
                <p className="text-lg font-bold mb-1">일일 상태 요약</p>
                <p className="text-sm text-gray-600">
                  매일 저녁 8시에 오늘 요약 전송
                </p>
              </div>
              <div className="w-14 h-8 bg-teal-500 rounded-full flex items-center justify-end px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl">
              <div className="flex-1">
                <p className="text-lg font-bold mb-1">체크인 누락</p>
                <p className="text-sm text-gray-600">
                  오후 2시까지 미체크인 시 알림
                </p>
              </div>
              <div className="w-14 h-8 bg-teal-500 rounded-full flex items-center justify-end px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl">
              <div className="flex-1">
                <p className="text-lg font-bold mb-1">복약 누락</p>
                <p className="text-sm text-gray-600">
                  예정 시간 2시간 경과 시 알림
                </p>
              </div>
              <div className="w-14 h-8 bg-teal-500 rounded-full flex items-center justify-end px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-5 bg-gray-50 rounded-2xl">
              <div className="flex-1">
                <p className="text-lg font-bold mb-1">컨디션 저하</p>
                <p className="text-sm text-gray-600">
                  2일 연속 안 좋음 선택 시 알림
                </p>
              </div>
              <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              긴급 알림
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-orange-50 rounded-2xl border-2 border-orange-200">
              <div className="flex-1">
                <p className="text-lg font-bold mb-1 text-orange-900">도움 요청</p>
                <p className="text-sm text-orange-700">
                  즉시 알림 (변경 불가)
                </p>
              </div>
              <div className="w-14 h-8 bg-orange-500 rounded-full flex items-center justify-end px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">
                  알림 민감도 안내
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  설정하신 내용에 따라 알림을 받으실 수 있어요.
                  긴급 상황(도움 요청, 응급)은 항상 즉시 알려드립니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button className="w-full">설정 저장</Button>
          <Link href="/caregiver">
            <Button variant="outline" className="w-full">
              돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
