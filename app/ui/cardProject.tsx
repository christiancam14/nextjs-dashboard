"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaPause, FaRegHeart } from "react-icons/fa";
import { LiaRandomSolid } from "react-icons/lia";
import { PiRepeatOnce } from "react-icons/pi";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  img: string;
  title: string;
  url: string;
  stack: string;
}

const projects: Project[] = [
  {
    id: 1,
    img: "/img/img1.jpeg",
    title: "Project One",
    url: "https://projectone.com",
    stack: "React, Node.js, MongoDB",
  },
  {
    id: 2,
    img: "/img/img2.jpeg",
    title: "Project Two",
    url: "https://projecttwo.com",
    stack: "Angular, Firebase",
  },
  {
    id: 3,
    img: "/img/img3.webp",
    title: "Project Three",
    url: "https://projectthree.com",
    stack: "Vue, Laravel",
  },
  {
    id: 4,
    img: "/img/img4.jpg",
    title: "Project Four",
    url: "https://projectfour.com",
    stack: "React Native, Expo",
  },
  {
    id: 5,
    img: "/img/img5.png",
    title: "Project Five",
    url: "https://projectfive.com",
    stack: "Next.js, TailwindCSS",
  },
];

export function CardProject() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(1);

  // Función para ir al siguiente proyecto
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para ir al proyecto anterior
  const previousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="card-project max-w-sm w-80 bg-sky-100 rounded-lg shadow-md overflow-hidden p-3">
      <motion.div
        key={currentProject.id}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={currentProject.img}
          alt="Album Cover"
          width={300}
          height={300}
          className="w-full object-cover h-auto rounded-lg aspect-square	"
        />
      </motion.div>

      <div className="py-4">
        <div className="flex items-center justify-between">
          <div className="text-start">
            <h2 className="text-lg font-semibold text-gray-900">
              {currentProject.title}
            </h2>
            <span className="text-sm text-gray-600">
              {currentProject.stack}
            </span>
          </div>
          <div>
            <Tooltip content="Like">
              <button
                aria-label="like"
                className="text-gray-500 hover:text-red-500"
              >
                <FaRegHeart />
              </button>
            </Tooltip>
          </div>
        </div>

        <div className="mt-4">
          <div className="w-full bg-gray-300 rounded-full h-2.5"></div>
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>1:24</span>
            <span>3:45</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 px-4">
          <Tooltip content="Repeat">
            <button
              aria-label="shuffle"
              className="text-gray-500 hover:text-gray-900"
            >
              <PiRepeatOnce className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content="Prev project">
            <button
              aria-label="previous"
              className="text-gray-500 hover:text-gray-900"
              onClick={previousProject}
            >
              <GiPreviousButton className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content="See project">
            <button
              aria-label="play/pause"
              className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full"
            >
              <FaPause className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content="Next project">
            <button
              aria-label="next"
              className="text-gray-500 hover:text-gray-900"
              onClick={nextProject}
            >
              <GiNextButton className="icon-project" />
            </button>
          </Tooltip>

          <Tooltip content="Random project">
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
