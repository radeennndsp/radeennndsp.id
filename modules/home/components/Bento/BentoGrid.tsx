"use client";
import BentoCard from "./BentoCard";
import { SiBento as BentoIcon } from "react-icons/si";
import { useTranslations } from "next-intl";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { BENTO } from "@/common/constants/bento";

const BentoGrid = () => {
  const t = useTranslations("HomePage.bento");

  // Handle possible client-reference proxy shapes where the imported
  // `BENTO` may be wrapped (e.g. under `.default`), or otherwise not an array.
  const rawBento: any = BENTO;
  const items: any[] = Array.isArray(rawBento)
    ? rawBento
    : Array.isArray(rawBento?.default)
    ? rawBento.default
    : Array.isArray(rawBento?.BENTO)
    ? rawBento.BENTO
    : [];

  const filteredBento = items.filter((item) => item?.isShow);

  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title={t("title")} icon={<BentoIcon size={24} />} />
        <SectionSubHeading>{t("sub_title")}</SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
        {filteredBento.map((item, index) => (
          <BentoCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
