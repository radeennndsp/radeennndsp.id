import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import { METADATA } from "@/common/constants/metadata";
import Home from "@/modules/home";

// Import semua locale secara sinkron
import en from "@/messages/en.json";
import id from "@/messages/id.json";

const messagesMap: Record<string, any> = {
  en,
  id,
};

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

const RootLayout = ({ children, params }: RootLayoutProps) => {
  const localeMessages = messagesMap[params.locale] || messagesMap["en"];

  return (
    <html lang={params.locale}>
      <body>
        <Container data-aos="fade-up">{children}</Container>
      </body>
    </html>
  );
};

export default RootLayout;
