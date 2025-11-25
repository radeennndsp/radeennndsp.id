import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import Container from "@/common/components/elements/Container";

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

// Fungsi getMessages harus dikasih object { locale }
async function getMessages(locale: string) {
  const messages = await import(`@/locales/${locale}.json`);
  return messages.default;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const messages = await getMessages(params.locale);

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Container>{children}</Container>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
