import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="page-container-wide py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl flex items-center justify-center shadow-[0_16px_32px_rgba(20,184,166,0.35)]">
                  <Heart className="w-14 h-14 text-white fill-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-[0_8px_16px_rgba(249,115,22,0.35)]">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                안심하루
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                매일을 안심하고 건강하게
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                오늘 해야 할 일을 쉽게 알려주고, 필요할 때 가족까지 연결되는
                중장년층 맞춤 AI 생활 코칭 서비스입니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/onboarding" className="block w-full sm:w-auto">
                <Button className="w-full sm:min-w-[180px]" size="lg">
                  시작하기
                </Button>
              </Link>
              <Link href="/presentation" className="block w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:min-w-[180px]" size="md">
                  서비스 소개 보기
                </Button>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="surface-soft p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                오늘의 안심 루틴
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-teal-600" />
                  </div>
                  <p className="text-base text-left text-gray-700">
                    오늘 해야 할 일을 쉽게 알려드려요
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-cyan-600" />
                  </div>
                  <p className="text-base text-left text-gray-700">
                    불안할 때 바로 도움을 드려요
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-blue-600" />
                  </div>
                  <p className="text-base text-left text-gray-700">
                    가족과 안심하고 연결해드려요
                  </p>
                </div>
              </div>
            </div>

            <div className="surface-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">AI 코치 미리보기</p>
                  <p className="text-lg font-semibold text-gray-900">
                    오늘은 10분 산책 어떠세요?
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    실천 가능한 작은 행동을 제안해드려요
                  </p>
                </div>
                <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-2xl">
                  💡
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
