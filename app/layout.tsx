// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import { onestSans } from "@/common/styles/fonts";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const messages = await getMessages({ locale: params.locale });

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <Script defer src="https://cloud.umami.is/script.js" data-website-id="d3a91e08-d129-4de3-9552-63181813c4b9" />
      <body className={onestSans.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ThemeProviderContext>
            <Layouts>{children}</Layouts>
          </ThemeProviderContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
