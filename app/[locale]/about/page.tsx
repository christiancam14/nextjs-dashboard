import { Metadata } from "next";
import Reveal from "@/app//ui/dashboard/reveal";
import TimeLine from "@/app//ui/dashboard/timeLine";
import { principalFont } from "@/app//ui/fonts";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12">
        <Reveal>
          <h3
            className={`${principalFont.className} text-2xl mb-12 text-center`}
          >
            {t("title")}
          </h3>
        </Reveal>
        <Reveal>
          <p className={`${principalFont.className} text-center text-sky-100`}>
            {t("description")}
          </p>
        </Reveal>
        <div className="my-12 w-full">
          <TimeLine />
        </div>
      </div>
    </section>
  );
}
