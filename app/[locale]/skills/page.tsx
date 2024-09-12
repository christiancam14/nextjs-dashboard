"use client";

import Reveal from "@/app//ui/dashboard/reveal";
import { principalFont } from "@/app//ui/fonts";
import StackIcons from "@/app//ui/dashboard/stackIcons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function SkillsPage() {
  const t = useTranslations("SkillsPage");
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Elemento comienza oculto
        animate={{ opacity: 1, y: 0 }} // Elemento se revela y se mueve a su posición original
        transition={{
          duration: 0.8, // Duración de la animación
          ease: "easeOut", // Tipo de suavizado
        }}
      >
        <section className="w-screen ">
          <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12">
            <Reveal>
              <h3
                className={`${principalFont.className} text-2xl mb-4 text-center`}
              >
                {t("title")}
              </h3>
            </Reveal>
            <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center">
              <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-gray-50 px-6 py-8 md:px-20 text-center  w-full	">
                <Reveal>
                  <p
                    className={`${principalFont.className} text-2xl text-gray-800 md:text-3xl md:leading-normal`}
                  >
                    <strong>{t("subtitle")}</strong>
                  </p>
                </Reveal>
                <div className="flex flex-wrap max-w-96 justify-center self-center">
                  <StackIcons />
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}
