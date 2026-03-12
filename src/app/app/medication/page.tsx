import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { medications } from "@/lib/mock-data";
import { CheckCircle2, Circle, Clock, Plus } from "lucide-react";
import Link from "next/link";

export default function MedicationPage() {
  const morning = medications.filter((m) => m.time === "08:00");
  const evening = medications.filter((m) => m.time === "20:00");

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AppHeader title="복약 관리" showBack />

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <p className="text-xl mb-2 opacity-90">오늘의 복약률</p>
            <p className="text-6xl font-bold mb-2">67%</p>
            <p className="text-lg opacity-90">2/3 완료</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>오늘 복약 일정</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <h3 className="text-xl font-bold">아침 (08:00)</h3>
              </div>
              <div className="space-y-3">
                {morning.map((med) => (
                  <div
                    key={med.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                  >
                    <CheckCircle2 className="w-8 h-8 text-teal-600 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-500 line-through">
                        {med.name}
                      </p>
                      <p className="text-lg text-gray-400">
                        복용 완료 ({med.takenAt})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-gray-600" />
                <h3 className="text-xl font-bold">저녁 (20:00)</h3>
              </div>
              <div className="space-y-3">
                {evening.map((med) => (
                  <div
                    key={med.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                  >
                    <Circle className="w-8 h-8 text-gray-400 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900">
                        {med.name}
                      </p>
                      <p className="text-lg text-gray-500">예정 시간: {med.time}</p>
                    </div>
                    <Link href="/app/medication/take">
                      <Button size="sm">복용</Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="w-full">
          <Plus className="w-6 h-6 mr-2" />
          새 약 추가하기
        </Button>
      </div>

      <BottomNav />
    </div>
  );
}
