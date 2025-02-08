import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

const fontNotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["Next.js", "React", "shadcn/ui"],
  authors: [
    {
      name: '名前です。',
      url: siteConfig.url
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'ja',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    // images: []
  },
  twitter: {
    card: "summary_large_image",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: 'テスト',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* font-smoothing: antialiased;
      SafariやFirefox向けのアンチエイリアス処理を指定します。
      animationでフォントがピクピクする不具合は、下記で解消する可能性があります。 */}
      <body
        className={cn(
          "bg-background antialiased min-h-screen",
          fontNotoSansJP.className
        )}
      >
        {children}
      </body>
    </html>
  );
}