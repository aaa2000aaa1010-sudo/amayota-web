import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "合同会社AMAYOTA",
  description: "合同会社AMAYOTAは、大学生向けスキルシェア・マッチングプラットフォーム「Three Good」を運営しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} min-h-full flex flex-col bg-white`}>{children}</body>
    </html>
  );
}
