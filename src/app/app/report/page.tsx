import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { weeklyReport } from "@/lib/mock-data";
import { CheckCircle, TrendingUp } from "lucide-react";

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AppHeader title="내 기록" />

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <p className="text-xl mb-2 opacity-90">이번 주 달성률</p>
            <p className="text-6xl font-bold mb-4">{weeklyReport.checkInRate}%</p>
            <div className="flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6" />
              <p className="text-lg">지난주보다 15% 증가!</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>주간 요약</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xl font-bold">체크인</p>
                  <p className="text-lg text-gray-600">
                    {weeklyReport.checkInDays}/{weeklyReport.totalDays}일
                  </p>
                </div>
              </div>
              <div className="text-3xl font-bold text-teal-600">
                {weeklyReport.checkInRate}%
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💊</span>
                </div>
                <div>
                  <p className="text-xl font-bold">복약</p>
                  <p className="text-lg text-gray-600">
                    {weeklyReport.medicationDays}/{weeklyReport.totalDays}일
                  </p>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600">
                {weeklyReport.medicationRate}%
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚶</span>
                </div>
                <div>
                  <p className="text-xl font-bold">운동</p>
                  <p className="text-lg text-gray-600">
                    {weeklyReport.exerciseDays}/{weeklyReport.totalDays}일
                  </p>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600">
                {weeklyReport.exerciseRate}%
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-yellow-900">
              🎉 이번 주 칭찬
            </h3>
            <p className="text-xl text-yellow-800">
              이번 주 6일 연속 체크인을 완료하셨어요! 정말 잘하고 계세요. 내일도 함께 해요!
            </p>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
