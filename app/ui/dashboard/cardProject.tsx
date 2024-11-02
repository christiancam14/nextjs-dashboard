"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Project } from "@/interfaces/interfaces";
import {
  ProjectNavigator,
  useProjectNavigator,
} from "@/hooks/useProjectNavigator";
import { ProjectText } from "./projectText";
import { useTranslations } from "next-intl";
import { CardDescription } from "./cardDescription";

interface Props {
  projects: Project[];
}

export function CardProject({ projects }: Props) {
  const t = useTranslations("ProjectsPage");

  const [isHover, setIsHover] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null); // Create a ref for the card

  const projectNavigator: ProjectNavigator = useProjectNavigator(projects);

  const { currentProjectIndex, progress, direction, isPaused, nextProject } =
    projectNavigator;

  const currentProject = projects[currentProjectIndex];
  const currentAdvance = (progress * currentProject.time) / 100;

  if (currentAdvance >= currentProject.time) {
    nextProject();
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect(); // Get the card's position and size
      const x = e.clientX - rect.left + 50; // Calculate x relative to the card
      const y = e.clientY - rect.top + 20; // Calculate y relative to the card
      setCursorPos({ x, y });
    }
  };

  return (
    <div className="relative">
      <motion.div
        ref={cardRef} // Attach the ref to the card
        onMouseMove={handleMouseMove}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        className="card-project max-w-sm w-80 bg-sky-100 rounded-lg shadow-md overflow-hidden p-3"
        style={{
          position: "relative",
          transition: "transform 0.1s", // Smooth movement
        }}
      >
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

        <CardDescription
          projectNavigator={projectNavigator}
          project={currentProject}
          currentAdvance={currentAdvance}
        />
      </motion.div>

      {/* Floating div for description */}
      {(isHover && false) && (
        <div
          className="background-gif absolute border rounded shadow-lg p-4"
          style={{
            top: cursorPos.y + 10, // Adjust position as desired
            left: cursorPos.x + 10,
            zIndex: 1000,
          }}
        >
          <h3 className="text-lg font-semibold">{currentProject.title}</h3>
        </div>
      )}
    </div>
  );
}
