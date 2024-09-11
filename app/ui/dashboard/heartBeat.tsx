"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function HeartBeat({ children }: PropsWithChildren) {
  return (
    <motion.div
      initial={{ scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" }} // Estado inicial
      animate={{
        scale: [1, 1.2, 1, 1.2, 1, 1, 1], // Escala para latido
        filter: [
          "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
          "drop-shadow(0px 0px 12px rgba(255, 0, 0, 0.8))",
          "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
          "drop-shadow(0px 0px 12px rgba(255, 0, 0, 0.8))",
          "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
          "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
          "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
        ], // Cambios en la sombra para el efecto de onda
      }}
      transition={{
        duration: 1.2, // Duración de la animación
        repeat: Infinity, // Repetir infinitamente
        ease: "easeInOut", // Animación suave
        times: [0, 0.2, 0.4, 0.55, 0.75, 0.95, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
