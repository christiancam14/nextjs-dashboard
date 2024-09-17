"use client";

import { Project } from "@/interfaces/interfaces";
import { useState, useEffect } from "react";

export function useProjectNavigator(projects: Project[]) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(1);
  const [progress, setProgress] = useState(0);
  //   const [counter, setCounter] = useState(0);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const currentProject = projects[currentProjectIndex];

  // Reset progress to 0
  const resetProgress = () => setProgress(0);

  // Calculate increment step for progress based on project time2
  const progressIncrement = 100 / (currentProject?.time2 || 100); // Asume un valor por defecto en caso de que `time2` no esté definido

  const getRandomProjectIndex = () => {
    let randomIndex = Math.floor(Math.random() * projects.length);
    while (randomIndex === currentProjectIndex) {
      randomIndex = Math.floor(Math.random() * projects.length);
    }
    return randomIndex;
  };

  const nextProject = () => {
    if (isRepeating) {
      resetProgress();
    } else if (isRandom) {
      setDirection("right");
      setCurrentProjectIndex(getRandomProjectIndex());
      resetProgress();
    } else {
      setDirection("right");
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
      resetProgress();
    }
  };

  const previousProject = () => {
    if (isRepeating) {
      resetProgress();
    } else if (isRandom) {
      setDirection("left");
      setCurrentProjectIndex(getRandomProjectIndex());
      resetProgress();
    } else {
      setDirection("left");
      setCurrentProjectIndex((prevIndex) =>
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      resetProgress();
    }
  };

  // Effect to handle progress and restart it when the project changes
  useEffect(() => {
    resetProgress(); // Reset progress when project changes
    const interval = setInterval(() => {
      return setProgress((prev) => (prev < 100 ? prev + progressIncrement : 0));
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentProjectIndex, progressIncrement]);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  const toggleRepeat = () => {
    setIsRepeating((prev) => !prev);
  };

  const toggleRandom = () => {
    setIsRandom((prev) => !prev);
  };

  return {
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
    toggleRepeat,
    toggleRandom,
  };
}
