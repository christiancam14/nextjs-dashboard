"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  text: string;
}

export default function TypingText({ text }: Props) {
  const [displayedText, setDisplayedText] = useState(""); // Estado para ir mostrando el texto gradualmente

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
      if (currentIndex === text.length - 1) {
        clearInterval(interval);
      }
    }, 10); // Intervalo entre cada letra (puedes ajustarlo)
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0 }} // Comienza con opacidad cero
      animate={{ opacity: 1 }} // Aparece cuando se inicia la animación
      transition={{ duration: 1 }} // Transición suave
      style={{ textAlign: "center" }}
    >
      <span className="text-center">{displayedText}</span>
    </motion.div>
  );
}
