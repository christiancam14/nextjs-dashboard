import { Metadata } from "next";
import Reveal from "@/app//ui/dashboard/reveal";
import { principalFont } from "@/app//ui/fonts";
import { useTranslations } from "next-intl";
import { calculateExperienceYears } from "@/helpers/calculateExperienceYears";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  const yearsOfExperience = calculateExperienceYears();

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
            {t("description", { years: yearsOfExperience })}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
