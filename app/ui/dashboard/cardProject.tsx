"use client";

import Image from "next/image";
import React from "react";
import { FaPause, FaRegHeart } from "react-icons/fa";
import { LiaRandomSolid } from "react-icons/lia";
import { PiRepeatOnce } from "react-icons/pi";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { motion } from "framer-motion";
import { Project } from "@/interfaces/interfaces";
import { IconButton } from "./iconButton";
import { ProgressBarLine } from "./progressBarLine";
import { useProjectNavigator } from "@/hooks/useProjectNavigator";
import Reveal from "./reveal";

interface Props {
  projects: Project[];
}

export function CardProject({ projects }: Props) {
  const {
    currentProjectIndex,
    progress,
    isRepeating,
    isRandom,
    isLiked,
    direction,
    nextProject,
    previousProject,
    setIsRepeating,
    setIsRandom,
    toggleLike,
  } = useProjectNavigator(projects);

  const currentProject = projects[currentProjectIndex];
  const currentAdvance = (progress * currentProject.time2) / 100;

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
        <Image
          src={currentProject.img}
          alt="Project Image"
          width={300}
          height={300}
          className="w-full object-cover h-auto rounded-lg aspect-square img-card-project"
        />
      </motion.div>

      <div className="py-4">
        <div className="flex flex-col items-center justify-between">
          <div className="flex justify-between w-full">
            <h2 className="text-lg font-semibold text-gray-900">
              {currentProject.title}
            </h2>
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
            tooltipContent="Repeat"
            className={isRepeating ? "text-gray-900" : "text-gray-500"}
          />

          <IconButton
            ariaLabel="previous"
            icon={<GiPreviousButton />}
            onClick={previousProject}
            tooltipContent="Previous"
            className="text-gray-500 hover:text-gray-900"
          />

          <a href={currentProject.url} target="_blank">
            <IconButton
              ariaLabel="play/pause"
              icon={<FaPause />}
              onClick={() => {}}
              tooltipContent="See Project"
              className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full"
            />
          </a>

          <IconButton
            ariaLabel="next"
            icon={<GiNextButton />}
            onClick={nextProject}
            tooltipContent="Next"
            className="text-gray-500 hover:text-gray-900"
          />

          <IconButton
            ariaLabel="random"
            icon={<LiaRandomSolid />}
            onClick={() => setIsRandom(!isRandom)}
            tooltipContent="Random"
            className={isRandom ? "text-gray-900" : "text-gray-500"}
          />
        </div>
      </div>
    </div>
  );
}
