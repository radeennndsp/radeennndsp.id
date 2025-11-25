// app/layout.tsx
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { getServerSession } from "next-auth";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import type { Metadata, LayoutProps } from "next";
import "./globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import NextAuthProvider from "@/SessionProvider";
import { METADATA } from "@/common/constants/metadata";
import { onestSans } from "@/common/styles/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || ""
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/">) {
  // ✅ Awalnya params adalah Promise<{ locale: string }>
  const { locale } = await params;

  const messages = await getMessages(locale);
  const session = await getServerSession();

  return (
    <html lang={locale} suppressHydrationWarning>
      <Script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="d3a91e08-d129-4de3-9552-63181813c4b9"
      />
      <body className={onestSans.className}>
        <NextTopLoader
          color="#4ade80"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #4ade80,0 0 5px #86efac"
        />
        <NextIntlClientProvider messages={messages}>
          <NextAuthProvider session={session}>
            <ThemeProviderContext>
              <Layouts>{children}</Layouts>
            </ThemeProviderContext>
          </NextAuthProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
