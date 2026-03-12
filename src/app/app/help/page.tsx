import { Card, CardContent } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { Heart, AlertCircle, Cloud, Phone } from "lucide-react";
import Link from "next/link";

const helpOptions = [
  {
    id: "sick",
    title: "몸이 불편해요",
    icon: Heart,
    color: "red",
    bgColor: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    id: "fell",
    title: "넘어졌어요",
    icon: AlertCircle,
    color: "orange",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
  },
  {
    id: "anxious",
    title: "불안해요",
    icon: Cloud,
    color: "blue",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    id: "contact",
    title: "가족에게 연락할래요",
    icon: Phone,
    color: "green",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
];

export default function HelpPage() {
  return (
    <div className="app-shell">
      <AppHeader title="도움 요청" showBack />

      <div className="app-container space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold">어떤 도움이 필요하세요?</h2>
          <p className="text-base sm:text-lg text-gray-600">바로 도와드릴게요</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {helpOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Link key={option.id} href={`/app/help/${option.id}`}>
                <Card className="hover:shadow-lg transition-shadow border-2 border-gray-200 hover:border-gray-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-16 h-16 ${option.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`w-8 h-8 ${option.textColor}`} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">{option.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <Card className="bg-teal-50 border-teal-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-2 text-teal-900">
              💡 안심하세요
            </h3>
            <p className="text-base text-teal-800">
              언제든 도움을 요청하셔도 괜찮아요. 필요하면 바로 가족에게 알려드릴게요.
            </p>
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
