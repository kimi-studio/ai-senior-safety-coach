import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { Bell, CheckCircle, Heart } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "medication",
    title: "저녁 약 복용 시간이에요",
    time: "1시간 전",
    read: false,
    icon: "💊",
  },
  {
    id: 2,
    type: "coaching",
    title: "오늘의 새로운 AI 코칭이 도착했어요",
    time: "3시간 전",
    read: true,
    icon: "✨",
  },
  {
    id: 3,
    type: "checkin",
    title: "오늘의 체크인을 완료해주세요",
    time: "5시간 전",
    read: true,
    icon: "✓",
  },
  {
    id: 4,
    type: "family",
    title: "보호자가 안부 메시지를 보냈어요",
    time: "어제",
    read: true,
    icon: "👨‍👩‍👦",
  },
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <AppHeader title="알림" showBack showNotification={false} />

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>오늘</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {notifications.slice(0, 3).map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-2xl transition-colors ${
                  notification.read ? "bg-gray-50" : "bg-teal-50 border-2 border-teal-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{notification.icon}</div>
                  <div className="flex-1">
                    <p
                      className={`text-xl font-semibold mb-1 ${
                        notification.read ? "text-gray-700" : "text-gray-900"
                      }`}
                    >
                      {notification.title}
                    </p>
                    <p className="text-lg text-gray-500">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className="w-3 h-3 bg-teal-500 rounded-full flex-shrink-0 mt-2"></div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>이전 알림</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {notifications.slice(3).map((notification) => (
              <div
                key={notification.id}
                className="p-4 bg-gray-50 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{notification.icon}</div>
                  <div className="flex-1">
                    <p className="text-xl font-semibold mb-1 text-gray-700">
                      {notification.title}
                    </p>
                    <p className="text-lg text-gray-500">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <BottomNav />
    </div>
  );
}
