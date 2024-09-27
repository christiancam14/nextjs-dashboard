"use client";

import React from "react";
import { FaPause, FaPlay, FaRegHeart } from "react-icons/fa";
import { LiaRandomSolid } from "react-icons/lia";
import { PiRepeatOnce } from "react-icons/pi";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { motion } from "framer-motion";
import { Project } from "@/interfaces/interfaces";
import { IconButton } from "./iconButton";
import { ProgressBarLine } from "./progressBarLine";
import { useProjectNavigator } from "@/hooks/useProjectNavigator";
import Reveal from "./reveal";
import { ProjectText } from "./projectText";
import { Tooltip } from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface Props {
  projects: Project[];
}

export function CardProject({ projects }: Props) {
  const t = useTranslations("ProjectsPage");

  const {
    currentProjectIndex,
    progress,
    isRepeating,
    isRandom,
    isLiked,
    direction,
    isPaused,
    nextProject,
    previousProject,
    setIsRepeating,
    setIsRandom,
    toggleLike,
    toggleProgress,
  } = useProjectNavigator(projects);

  const currentProject = projects[currentProjectIndex];
  const currentAdvance = (progress * currentProject.time2) / 100;

  if (currentAdvance >= currentProject.time2) {
    nextProject();
  }

  return (
    <div className="card-project max-w-sm w-80 bg-sky-100 rounded-lg shadow-md overflow-hidden p-3">
      <motion.div
        key={currentProject.id}
        initial={{ opacity: 0, x: direction === "right" ? "100%" : "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction === "right" ? "-100%" : "100%" }}
        transition={{ duration: 0.5 }}
        className="img-card-project"
      >
        <div
          style={{ width: 300, height: 300, overflow: "hidden" }}
          className="cont-img-project bg-gray-600 rounded-lg aspect-square flex justify-center align-middle items-center"
        >
          <ProjectText
            text={t(`projects.${currentProject.description}`)}
            isPaused={isPaused}
          />
        </div>
      </motion.div>

      <div className="py-4">
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-between w-full">
            <div className="relative">
              <Tooltip content={t("seeProject")}>
                <a
                  href={currentProject.url}
                  target="_blank"
                  className="tit-proj text-lg font-semibold text-gray-900"
                >
                  {currentProject.title}
                </a>
              </Tooltip>
            </div>
            <IconButton
              ariaLabel="like"
              icon={<FaRegHeart />}
              onClick={toggleLike}
              tooltipContent="Like"
              className={`text-gray-500 hover:text-red-500 ${
                isLiked ? "text-red-500" : ""
              }`}
            />
          </div>
          <div className="ellipsis-cont w-full text-start">
            <Reveal>
              <span className="ellipsis text-sm text-gray-600">
                {currentProject.stack}
              </span>
            </Reveal>
          </div>
        </div>

        <ProgressBarLine progress={progress} />

        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>
            0:0
            {String(Math.trunc(currentAdvance))}
          </span>
          <span>0:0{currentProject.time2}</span>
        </div>

        <div className="flex items-center justify-between mt-4 px-4">
          <IconButton
            ariaLabel="repeat"
            icon={<PiRepeatOnce />}
            onClick={() => setIsRepeating(!isRepeating)}
            tooltipContent={t("repeat")}
            className={isRepeating ? "text-gray-900" : "text-gray-500"}
          />

          <IconButton
            ariaLabel="previous"
            icon={<GiPreviousButton />}
            onClick={previousProject}
            tooltipContent={t("prev")}
            className="text-gray-500 hover:text-gray-900"
          />

          <IconButton
            ariaLabel="play/pause"
            icon={isPaused ? <FaPlay /> : <FaPause />}
            onClick={toggleProgress}
            tooltipContent={t("play_pause")}
            className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full"
          />

          <IconButton
            ariaLabel="next"
            icon={<GiNextButton />}
            onClick={nextProject}
            tooltipContent={t("next")}
            className="text-gray-500 hover:text-gray-900"
          />

          <IconButton
            ariaLabel="random"
            icon={<LiaRandomSolid />}
            onClick={() => setIsRandom(!isRandom)}
            tooltipContent={t("random")}
            className={isRandom ? "text-gray-900" : "text-gray-500"}
          />
        </div>
      </div>
    </div>
  );
}
