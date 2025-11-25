// app/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import { onestSans } from "@/common/styles/fonts";

import en from "@/messages/en.json";
import id from "@/messages/id.json";

// Pastikan key sesuai file
const messagesMap = { en, id };
type Locale = keyof typeof messagesMap; // 'en' | 'id'

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

const RootLayout = ({ children, params }: RootLayoutProps) => {
  // fallback aman
  const locale: Locale = params.locale in messagesMap ? params.locale : 'en';
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
