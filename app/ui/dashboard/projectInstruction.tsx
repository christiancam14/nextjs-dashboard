"use client";

import { useTranslations } from "next-intl";
import { IconButton } from "./iconButton";
import { FaPause } from "react-icons/fa";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";

export default function BtnInstruction() {
  const t = useTranslations("ProjectsPage");

  return (
    <div>
      <div className="flex gap-6 md:gap-0 w-full flex-wrap">
        <div className="flex-1 flex flex-row md:flex-col justify-center align-middle items-center gap-4 md:gap-0 px-6 min-w-60">
          <IconButton
            ariaLabel="previous"
            icon={<GiPreviousButton />}
            onClick={() => {}}
            tooltipContent="Previous"
            className="normal-cursor bg-sky-100 text-gray-900 p-3 rounded-full md:mb-2"
          />
          <p className="text-sm self-center">{t("inst_prev")}</p>
        </div>

        <div className="flex-1 flex flex-row md:flex-col justify-center align-middle items-center gap-4 md:gap-0 px-6 min-w-60">
          <IconButton
            ariaLabel="play/pause"
            icon={<FaPause />}
            onClick={() => {}}
            tooltipContent="Play / Pause"
            className="normal-cursor bg-sky-100 text-gray-900 p-3 rounded-full md:mb-2"
          />
          <p className="text-sm self-center">{t("inst_play")}</p>
        </div>

        <div className="flex-1 flex flex-row md:flex-col justify-center align-middle items-center gap-4 md:gap-0 px-6 min-w-60">
          <IconButton
            ariaLabel="next"
            icon={<GiNextButton />}
            onClick={() => {}}
            tooltipContent="Next"
            className="normal-cursor bg-sky-100 text-gray-900 p-3 rounded-full md:mb-2"
          />
          <p className="text-sm self-center">{t("inst_next")}</p>
        </div>
      </div>
    </div>
  );
}
