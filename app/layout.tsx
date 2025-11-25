// app/layout.tsx
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import { onestSans } from "@/common/styles/fonts";
import { METADATA } from "@/common/constants/metadata";

export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://radeennndsp.netlify.app"
  ),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: [{ name: METADATA.creator }],
  openGraph: {
    images: METADATA.profile,
    url: "https://radeennndsp.netlify.app",
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}


export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale}>
      <body className={onestSans.className}>
        <NextIntlClientProvider locale={params.locale} messages={{}}>
          <ThemeProviderContext>
            <Layouts>{children}</Layouts>
          </ThemeProviderContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
