"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { MdContacts } from "react-icons/md";

import { inter } from "@/app//ui/fonts";
import Reveal from "@/app/ui/dashboard/reveal";
import { useTranslations } from "next-intl";
import BtnCurriculum from "@/app/ui/dashboard/btnCurriculum";
import { calculateExperienceYears } from "@/helpers/calculateExperienceYears";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const yearsOfExperience = calculateExperienceYears();

  return (
    <section className="w-screen pt-20 md:pt-32">
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row shrink-0 items-end rounded-lg pt-6 pb-8 md:p-4  col md:row">
          <div className="flex flex-col flex-1 col-6 text-center items-center md:items-end md:text-right self-center gap-2">
            <Reveal>
              <>
                <h2 className={`${inter.className} text-4xl font-extrabold`}>
                  Christian Camacho Galvis
                </h2>
              </>
            </Reveal>
            <Reveal>
              <p className="text-2xl font-bold">{t("frontend")}</p>
            </Reveal>
            <Reveal>
              <p className="text-lg max-w-96 mx-auto md:mr-0 md:ml-auto">
                {t("yearsExperience", { years: yearsOfExperience })}
              </p>
            </Reveal>
            <Reveal>
              <p className="text-medium max-w-96 mx-auto md:mr-0 md:ml-auto">
                {t("description")}
              </p>
            </Reveal>
            <div className="flex mt-4 md:mt-0 md:justify-end gap-4 md:gap-4">
              <Reveal>
                <BtnCurriculum />
              </Reveal>
              <Reveal>
                <a href="#ContactPage" className="w-fit mx-auto md:mx-0">
                  <Button className="rounded-md bg-slate-600 hover:bg-slate-800 mt-0 md:mt-2 text-white">
                    <MdContacts />
                    {t("contact")}
                  </Button>
                </a>
              </Reveal>
            </div>
          </div>
          <div className="col mx-auto self-center mb-4 md:mb-0 md:min-w-80 md:flex md:justify-center">
            <Reveal>
              <figure>
                <Image
                  src="/avatar.webp"
                  alt="Profile pick"
                  width={220}
                  height={220}
                  className="rounded-full"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
