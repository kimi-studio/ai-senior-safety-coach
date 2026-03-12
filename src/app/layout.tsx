import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const ibmPlexSansKr = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans-kr",
});

export const metadata: Metadata = {
  title: "안심하루 - AI 생활 코치",
  description: "중장년층을 위한 AI 생활 코치 및 안전 알림 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={ibmPlexSansKr.className}>{children}</body>
    </html>
  );
}
