import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import { onestSans } from "@/common/styles/fonts";

import en from "@/messages/en.json";
import id from "@/messages/id.json";

const messagesMap = { en, id };

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: "en" | "id" };
}

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const messages = messagesMap[params.locale] || messagesMap.en;

  return (
    <html lang={params.locale} suppressHydrationWarning>
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
