import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { aiCoaching } from "@/lib/mock-data";
import { Sparkles, Clock, Target, Volume2 } from "lucide-react";

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AppHeader title="AI 코칭" showBack />

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white border-0">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8" />
              <span className="text-xl font-semibold">오늘의 추천</span>
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              {aiCoaching.title}
            </h2>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">왜 추천드리나요?</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                {aiCoaching.reason}
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-2xl">
              <h4 className="text-xl font-bold mb-3 text-teal-900">오늘의 미션</h4>
              <p className="text-2xl font-bold text-teal-900">
                {aiCoaching.action}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <Target className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-600">난이도</p>
                  <p className="text-lg font-bold">{aiCoaching.difficulty}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                <Clock className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="text-sm text-gray-600">시간</p>
                  <p className="text-lg font-bold">{aiCoaching.duration}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-bold">이렇게 해보세요</h3>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-700 font-bold">
                  1
                </div>
                <p className="text-xl text-gray-700 flex-1">
                  편한 신발을 신고 준비하세요
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-700 font-bold">
                  2
                </div>
                <p className="text-xl text-gray-700 flex-1">
                  집 근처를 천천히 걸어보세요
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-700 font-bold">
                  3
                </div>
                <p className="text-xl text-gray-700 flex-1">
                  10분 정도 걸으셨다면 충분해요
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Button className="w-full">완료했어요</Button>
          <Button variant="outline" className="w-full">
            <Volume2 className="w-6 h-6 mr-2" />
            음성으로 듣기
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
