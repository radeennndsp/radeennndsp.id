// app/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import { onestSans } from "@/common/styles/fonts";

// Import statis, tidak async
import en from "@/messages/en.json";
import id from "@/messages/id.json";

// map semua locale
const messagesMap = { en, id };
type Locale = keyof typeof messagesMap; // 'en' | 'id'

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale }; // harus cocok type Locale
}

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const locale: Locale = params.locale in messagesMap ? params.locale : "en";
  const messages = messagesMap[locale];

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={onestSans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProviderContext>
            <Layouts>{children}</Layouts>
          </ThemeProviderContext>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
