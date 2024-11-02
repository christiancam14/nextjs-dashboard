"use client";

import { Project } from "@/interfaces/interfaces";
import { useState, useEffect, useRef } from "react";

export interface ProjectNavigator {
  currentProjectIndex: number;
  progress: number;
  isRepeating: boolean;
  isRandom: boolean;
  isLiked: boolean;
  direction: "left" | "right";
  isPaused: boolean;
  nextProject: () => void;
  previousProject: () => void;
  setIsRepeating: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRandom: React.Dispatch<React.SetStateAction<boolean>>;
  toggleLike: () => void;
  toggleRepeat: () => void;
  toggleRandom: () => void;
  toggleProgress: () => void;
}

export function useProjectNavigator(projects: Project[]) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false); // Estado para manejar pausa/reanudación

  const intervalRef = useRef<NodeJS.Timeout | null>(null); // useRef para almacenar el intervalo
  const currentProject = projects[currentProjectIndex];

  // Reset progress to 0
  const resetProgress = () => setProgress(0);

  // Calculate increment step for progress based on project time
  const progressIncrement = 100 / (currentProject?.time || 100); // Asume un valor por defecto en caso de que `time` no esté definido

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

  // Función para pausar el progreso
  const toggleProgress = () => {
    setIsPaused((prev) => !prev); // Cambia el estado de pausa
  };

  // Manejo de progreso usando useEffect
  useEffect(() => {
    if (!isPaused) {
      // Si no está en pausa, crea el intervalo
      intervalRef.current = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + progressIncrement : 0));
      }, 1000);
    } else if (intervalRef.current) {
      // Si está en pausa, limpiar el intervalo
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      // Limpiar el intervalo al desmontar
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, progressIncrement, currentProjectIndex]);

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
    isPaused, // Retornar el estado de pausa
    nextProject,
    previousProject,
    setIsRepeating,
    setIsRandom,
    toggleLike,
    toggleRepeat,
    toggleRandom,
    toggleProgress, // Retornar la función de pausa/reanudación
  };
}
