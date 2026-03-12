import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { todayTasks, aiCoaching, mockUser } from "@/lib/mock-data";
import { CheckCircle2, Circle, Sparkles, AlertCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "좋은 아침이에요" : hour < 18 ? "좋은 오후예요" : "좋은 저녁이에요";
  const dateStr = now.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="app-shell">
      <div className="app-container px-4">
        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-7 rounded-3xl shadow-[0_18px_35px_rgba(13,148,136,0.3)]">
          <div className="space-y-2">
            <p className="text-base sm:text-lg opacity-90">{dateStr}</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              {mockUser.name}님,<br />
              {greeting}!
            </h1>
          </div>
        </div>

        <div className="px-2 -mt-4 space-y-6">
          <Link href="/app/help">
            <Card className="bg-gradient-to-r from-orange-500 to-pink-500 border-0 text-white shadow-[0_16px_30px_rgba(244,114,182,0.3)] hover:shadow-[0_20px_38px_rgba(244,114,182,0.35)] transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">도움이 필요하세요?</h3>
                      <p className="text-base sm:text-lg opacity-90">바로 연결해드릴게요</p>
                    </div>
                  </div>
                  <AlertCircle className="w-8 h-8" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-7 h-7 text-teal-600" />
                오늘의 AI 코칭
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {aiCoaching.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600">
                  {aiCoaching.reason}
                </p>
              </div>
              <div className="bg-teal-50 p-4 rounded-2xl">
                <p className="text-lg sm:text-xl font-semibold text-teal-900">
                  💡 {aiCoaching.action}
                </p>
              </div>
              <Link href="/app/coaching">
                <Button variant="outline" className="w-full" size="md">
                  자세히 보기
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>오늘 할 일</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-8 h-8 text-teal-600 flex-shrink-0" />
                  ) : (
                    <Circle className="w-8 h-8 text-gray-400 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p
                      className={`text-lg sm:text-xl font-semibold ${
                        task.completed ? "text-gray-500 line-through" : "text-gray-900"
                      }`}
                    >
                      {task.title}
                    </p>
                    <p className="text-base sm:text-lg text-gray-500">{task.time}</p>
                  </div>
                  {!task.completed && task.type === "checkin" && (
                    <Link href="/app/checkin">
                      <Button size="sm">하기</Button>
                    </Link>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Link href="/app/medication">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">💊</span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold">복약 관리</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/app/family">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-3xl">👨‍👩‍👦</span>
                  </div>
                  <p className="text-lg sm:text-xl font-bold">가족 연동</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
