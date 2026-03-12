import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { caregiverSummary, mockUser } from "@/lib/mock-data";
import { CheckCircle, AlertCircle, Phone, MessageCircle, Clock, Activity } from "lucide-react";
import Link from "next/link";

export default function CaregiverHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="page-container-narrow py-10 space-y-6">
        <div className="surface-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">보호자 모드</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {mockUser.name}님 상태
              </h1>
            </div>
            <Link href="/app">
              <Button variant="outline" size="sm">
                사용자 모드로
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-sm text-gray-700 mb-1">마지막 체크인</p>
              <p className="text-xl font-bold text-green-900">
                {caregiverSummary.lastCheckIn}
              </p>
              <p className="text-sm text-green-700 mt-2">
                {caregiverSummary.checkInStatus}
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-6 text-center">
              <Activity className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <p className="text-sm text-gray-700 mb-1">복약 상태</p>
              <p className="text-xl font-bold text-blue-900">
                {caregiverSummary.medicationStatus}
              </p>
              <p className="text-sm text-blue-700 mt-2">
                오늘 2/3 완료
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 bg-white">
            <CardContent className="p-6 text-center">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-700 mb-1">위험 이벤트</p>
              <p className="text-xl font-bold text-gray-900">
                {caregiverSummary.todayEvents}건
              </p>
              <p className="text-sm text-gray-600 mt-2">
                이상 없음
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>최근 활동</span>
              <Link href="/caregiver/history">
                <Button variant="outline" size="sm">
                  전체 보기
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {caregiverSummary.recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                <div className="flex-shrink-0">
                  {alert.type === "medication" && <span className="text-3xl">💊</span>}
                  {alert.type === "checkin" && <span className="text-3xl">✓</span>}
                  {alert.type === "exercise" && <span className="text-3xl">🚶</span>}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-gray-900 mb-1">
                    {alert.message}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <p className="text-sm">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-teal-50 border-teal-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-3 text-teal-900">
              💡 안심 요약
            </h3>
            <p className="text-base text-teal-800 leading-relaxed">
              오늘 {mockUser.name}님은 건강하게 하루를 보내고 계세요.
              체크인과 복약을 잘 실천하고 계시며, 특별한 이상 징후는 없습니다.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href={`tel:${mockUser.name}`}>
            <Button className="w-full h-16 text-base">
              <Phone className="w-6 h-6 mr-3" />
              전화 걸기
            </Button>
          </Link>
          <Link href="/caregiver/settings">
            <Button variant="outline" className="w-full h-16 text-base">
              <MessageCircle className="w-6 h-6 mr-3" />
              알림 설정
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
