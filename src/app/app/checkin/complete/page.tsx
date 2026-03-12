import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CheckinCompletePage() {
  return <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(167,243,208,0.34),_transparent_30%),linear-gradient(180deg,_#f8fcfd_0%,_#eef5fb_100%)] flex items-center justify-center p-6"><div className="w-full max-w-md space-y-6 text-center"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-app-gradient shadow-[0_20px_36px_rgba(8,145,178,0.22)]"><CheckCircle2 className="h-14 w-14 text-white" /></div><div><h1 className="text-4xl font-bold tracking-tight text-slate-950">체크인 완료!</h1><p className="mt-3 text-2xl text-slate-600">오늘도 함께해주셔서 감사해요</p></div><Card><CardContent className="space-y-3 p-7 text-left"><p className="text-lg font-semibold text-cyan-900">오늘의 한마디</p><p className="text-xl leading-8 text-slate-600">컨디션이 좋으시네요. 오늘 추천드린 산책을 10분만 해보시면 더 상쾌한 하루가 될 거예요.</p></CardContent></Card><div className="space-y-3"><Link href="/app"><Button className="w-full">홈으로</Button></Link><Link href="/app/coaching"><Button variant="outline" className="w-full">오늘의 코칭 보기</Button></Link></div></div></div>;
}
