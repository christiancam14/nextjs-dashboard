import AccordionCourses from "@/app/ui/dashboard/accordionCourses";
import Reveal from "@/app/ui/dashboard/reveal";
import { useTranslations } from "next-intl";

export default function CertificationsPage() {
  const t = useTranslations("CertificationsPage");

  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="my-12 w-full flex flex-col justify-center align-middle items-center gap-8">
          <Reveal>
            <h3 className="text-2xl text-center">{t("title")}</h3>
          </Reveal>
          <AccordionCourses />
        </div>
      </div>
    </section>
  );
}
