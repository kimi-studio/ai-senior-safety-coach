import { Card, CardContent } from "@/components/ui/card";
import { BottomNav } from "@/components/bottom-nav";
import { AppHeader } from "@/components/app-header";
import { Heart, AlertCircle, Cloud, Phone } from "lucide-react";
import Link from "next/link";

const helpOptions = [
  { id: "sick", title: "몸이 불편해요", icon: Heart, bg: "bg-rose-50", text: "text-rose-600" },
  { id: "fell", title: "넘어졌어요", icon: AlertCircle, bg: "bg-orange-50", text: "text-orange-600" },
  { id: "anxious", title: "불안해요", icon: Cloud, bg: "bg-sky-50", text: "text-sky-600" },
  { id: "contact", title: "가족에게 연락할래요", icon: Phone, bg: "bg-emerald-50", text: "text-emerald-600" },
];

export default function HelpPage() {
  return <div className="app-shell"><AppHeader title="도움 요청" showBack /><div className="app-container space-y-5"><Card className="bg-[linear-gradient(135deg,#fff7ed_0%,#fff1f2_100%)]"><CardContent className="space-y-2 p-6"><h2 className="text-3xl font-bold">어떤 도움이 필요하세요?</h2><p className="text-lg leading-8 text-slate-600">급하더라도 어렵게 설명하지 않으셔도 괜찮아요. 아래에서 가장 가까운 상황을 눌러주세요.</p></CardContent></Card><div className="space-y-3">{helpOptions.map((option) => { const Icon = option.icon; return <Link key={option.id} href={`/app/help/${option.id}`}><Card className="transition hover:-translate-y-0.5"><CardContent className="p-5"><div className="flex items-center gap-5"><div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.3rem] ${option.bg}`}><Icon className={`h-8 w-8 ${option.text}`} /></div><div><h3 className="text-2xl font-bold text-slate-900">{option.title}</h3><p className="mt-1 text-base text-slate-500">눌러서 바로 도움 가이드를 확인해요</p></div></div></CardContent></Card></Link>; })}</div><Card className="bg-cyan-50/80"><CardContent className="p-6"><h3 className="text-xl font-bold text-cyan-950">안심하세요</h3><p className="mt-2 text-lg leading-8 text-cyan-900/85">언제든 도움을 요청하셔도 괜찮아요. 필요하면 바로 가족이나 긴급 연락으로 이어드릴게요.</p></CardContent></Card></div><BottomNav /></div>;
}
