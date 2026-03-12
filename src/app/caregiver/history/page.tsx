import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockUser } from "@/lib/mock-data";
import { ArrowLeft, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import Link from "next/link";

const historyItems = [
  {
    id: 1,
    date: "2026-03-12",
    time: "20:15",
    type: "medication",
    message: "저녁 약 복용 완료",
    severity: "normal",
    icon: "💊",
  },
  {
    id: 2,
    date: "2026-03-12",
    time: "15:20",
    type: "exercise",
    message: "산책 15분 완료",
    severity: "normal",
    icon: "🚶",
  },
  {
    id: 3,
    date: "2026-03-12",
    time: "10:30",
    type: "checkin",
    message: "아침 체크인 - 컨디션 좋음",
    severity: "normal",
    icon: "✓",
  },
  {
    id: 4,
    date: "2026-03-12",
    time: "08:15",
    type: "medication",
    message: "아침 약 복용 완료",
    severity: "normal",
    icon: "💊",
  },
  {
    id: 5,
    date: "2026-03-11",
    time: "20:45",
    type: "medication",
    message: "복약 1시간 지연 (정상 복용)",
    severity: "warning",
    icon: "⚠️",
  },
  {
    id: 6,
    date: "2026-03-11",
    time: "16:00",
    type: "checkin",
    message: "오후 체크인 - 조금 피곤함",
    severity: "warning",
    icon: "😐",
  },
];

export default function CaregiverHistoryPage() {
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
                활동 이력
              </h1>
              <p className="text-sm text-gray-600">
                {mockUser.name}님의 최근 활동
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>오늘 (3/12)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {historyItems.filter(item => item.date === "2026-03-12").map((item) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-4 p-4 rounded-2xl ${
                    item.severity === "warning"
                      ? "bg-yellow-50 border-2 border-yellow-200"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-900 mb-1">
                      {item.message}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <p className="text-sm">{item.time}</p>
                    </div>
                  </div>
                  {item.severity === "normal" ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>어제 (3/11)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {historyItems.filter(item => item.date === "2026-03-11").map((item) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-4 p-4 rounded-2xl ${
                    item.severity === "warning"
                      ? "bg-yellow-50 border-2 border-yellow-200"
                      : "bg-gray-50"
                  }`}
                >
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-900 mb-1">
                      {item.message}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <p className="text-sm">{item.time}</p>
                    </div>
                  </div>
                  {item.severity === "normal" ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Link href="/caregiver">
          <Button variant="outline" className="w-full">
            돌아가기
          </Button>
        </Link>
      </div>
    </div>
  );
}
