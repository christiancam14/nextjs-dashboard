"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPause, FaRegHeart } from "react-icons/fa";
import { LiaRandomSolid } from "react-icons/lia";
import { PiRepeatOnce } from "react-icons/pi";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import Reveal from "./reveal";
import HeartBeat from "./heartBeat";
import { useTranslations } from "next-intl";

interface Project {
  id: number;
  img: string;
  title: string;
  url: string;
  stack: string;
  time1: string;
  time2: string;
}

const projects: Project[] = [
  {
    id: 1,
    img: "/img/img1.jpeg",
    title: "Project One",
    url: "https://projectone.com",
    stack: "React, Node.js, MongoDB",
    time1: "1:24",
    time2: "4:53",
  },
  {
    id: 2,
    img: "/img/img2.jpeg",
    title: "Project Two",
    url: "https://projecttwo.com",
    stack: "Angular, Firebase",
    time1: "0:44",
    time2: "3:23",
  },
  {
    id: 3,
    img: "/img/img3.webp",
    title: "Project Three",
    url: "https://projectthree.com",
    stack: "Vue, Laravel",
    time1: "1:00",
    time2: "5:05",
  },
  {
    id: 4,
    img: "/img/img4.jpg",
    title: "Project Four",
    url: "https://projectfour.com",
    stack: "React Native, Expo",
    time1: "0:16",
    time2: "3:45",
  },
  {
    id: 5,
    img: "/img/img5.png",
    title: "Project Five",
    url: "https://projectfive.com",
    stack: "Next.js, TailwindCSS",
    time1: "0:45",
    time2: "3:02",
  },
];

export function CardProject() {
  const t = useTranslations("ProjectsPage");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(1);
  const [direction, setDirection] = useState("right");

  // Función para ir al siguiente proyecto
  const nextProject = () => {
    setDirection("right");
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para ir al proyecto anterior
  const previousProject = () => {
    setDirection("left");
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, 1000); // Simula el avance cada segundo

    return () => clearInterval(interval);
  }, []);

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
        <Reveal>
          <Image
            src={currentProject.img}
            alt="Album Cover"
            width={300}
            height={300}
            className="w-full object-cover h-auto rounded-lg aspect-square	img-card-project"
          />
        </Reveal>
      </motion.div>

      <div className="py-4">
        <div className="flex items-center justify-between">
          <div className="text-start">
            <Reveal>
              <h2 className="text-lg font-semibold text-gray-900">
                {currentProject.title}
              </h2>
            </Reveal>
            <Reveal>
              <span className="text-sm text-gray-600">
                {currentProject.stack}
              </span>
            </Reveal>
          </div>
          <div>
            <Tooltip content="Like">
              <button
                aria-label="like"
                className="text-gray-500 hover:text-red-500"
              >
                <HeartBeat>
                  <FaRegHeart />
                </HeartBeat>
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
              className="bg-gray-800 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>{currentProject.time1}</span>
            <span>{currentProject.time2}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 px-4">
          <Tooltip content={t("repeat")}>
            <button
              aria-label="shuffle"
              className="text-gray-500 hover:text-gray-900"
            >
              <PiRepeatOnce className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content={t("prev")}>
            <button
              aria-label="previous"
              className="text-gray-500 hover:text-gray-900"
              onClick={previousProject}
            >
              <GiPreviousButton className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content={t("seeProject")}>
            <a
              href="https://github.com/christiancam14/nextjs-dashboard"
              target="_blank"
            >
              <button
                aria-label="play/pause"
                className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full"
              >
                <FaPause className="icon-project" />
              </button>
            </a>
          </Tooltip>

          <Tooltip content={t("next")}>
            <button
              aria-label="next"
              className="text-gray-500 hover:text-gray-900"
              onClick={nextProject}
            >
              <GiNextButton className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content={t("random")}>
            <button
              aria-label="repeat"
              className="text-gray-500 hover:text-gray-900"
            >
              <LiaRandomSolid className="icon-project" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
