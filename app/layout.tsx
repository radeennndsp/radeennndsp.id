import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import { METADATA } from "@/common/constants/metadata";
import Home from "@/modules/home";

// Import statis semua locale
import en from "@/messages/en.json";
import id from "@/messages/id.json";

// Map semua messages
const messagesMap: Record<string, any> = {
  en,
  id,
};

// Fungsi getMessages
async function getMessages(locale: string) {
  return messagesMap[locale] || messagesMap["en"];
}

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const localeMessages = await getMessages(params.locale);

  return (
    <html lang={params.locale}>
      <body>
        <Container data-aos="fade-up">
          {children}
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
