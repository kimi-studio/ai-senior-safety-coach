import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { mockCaregiver } from "@/lib/mock-data";
import { UserCircle2, Phone, Settings, UserPlus } from "lucide-react";
import Link from "next/link";

export default function FamilyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AppHeader title="가족 연동" showBack />

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>연결된 보호자</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                <UserCircle2 className="w-10 h-10 text-teal-600" />
              </div>
              <div className="flex-1">
                <p className="text-2xl font-bold">{mockCaregiver.name}</p>
                <p className="text-lg text-gray-600">{mockCaregiver.relation}</p>
                <p className="text-lg text-gray-500">{mockCaregiver.phone}</p>
              </div>
              <Link href={`tel:${mockCaregiver.phone}`}>
                <button className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                  <Phone className="w-6 h-6 text-white" />
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>공유 설정</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-xl font-bold">체크인 공유</p>
                <p className="text-lg text-gray-600">매일 상태 공유</p>
              </div>
              <div className="w-14 h-8 bg-teal-500 rounded-full flex items-center justify-end px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-xl font-bold">복약 누락 알림</p>
                <p className="text-lg text-gray-600">2시간 이상 미복용 시</p>
              </div>
              <div className="w-14 h-8 bg-teal-500 rounded-full flex items-center justify-end px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-xl font-bold">위험 상황만 공유</p>
                <p className="text-lg text-gray-600">도움 요청 시에만</p>
              </div>
              <div className="w-14 h-8 bg-gray-300 rounded-full flex items-center px-1">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-blue-900">
              💡 공유 범위 안내
            </h3>
            <p className="text-lg text-blue-800">
              보호자는 설정하신 정보만 받을 수 있어요. 언제든 변경하실 수 있습니다.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button variant="outline" className="w-full">
            <UserPlus className="w-6 h-6 mr-2" />
            다른 보호자 추가
          </Button>
          <Button variant="outline" className="w-full">
            <Settings className="w-6 h-6 mr-2" />
            공유 설정 변경
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
