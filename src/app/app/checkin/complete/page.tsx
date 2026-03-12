import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CheckinCompletePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle2 className="w-14 h-14 text-white" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-gray-900">
            체크인 완료!
          </h1>
          <p className="text-2xl text-gray-700">
            오늘도 함께해주셔서 감사해요
          </p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-4">
            <div className="text-left space-y-3">
              <p className="text-xl text-gray-700">
                💡 <strong>오늘의 한마디</strong>
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                컨디션이 좋으시네요! 오늘 추천드린 산책을 해보시면 더 좋을 것 같아요.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <Link href="/app">
            <Button className="w-full">홈으로</Button>
          </Link>
          <Link href="/app/coaching">
            <Button variant="outline" className="w-full">
              오늘의 코칭 보기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
