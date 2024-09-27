import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Importar motion de framer-motion

interface Props {
  text: string;
  wordsPerSegment?: number;
  maxLengthPerSegment?: number; // Nuevo parámetro para longitud máxima
  isPaused: boolean;
}

const splitTextIntoSegments = (
  text: string,
  wordsPerSegment: number,
  maxLengthPerSegment: number // Añadir parámetro a la función
) => {
  const words = text.split(" ");
  const segmentsArray: string[] = [];
  let currentSegment: string[] = [];
  let currentLength = 0;

  for (const word of words) {
    const wordLength = word.length + 1; // +1 para el espacio

    // Verifica si agregar la palabra excede la longitud máxima
    if (currentLength + wordLength > maxLengthPerSegment) {
      // Si excede, empuja el segmento actual y reinicia
      segmentsArray.push(currentSegment.join(" "));
      currentSegment = [word]; // Comienza un nuevo segmento con la palabra actual
      currentLength = wordLength; // Resetea la longitud al tamaño de la nueva palabra
    } else {
      currentSegment.push(word); // Agrega la palabra al segmento actual
      currentLength += wordLength; // Actualiza la longitud del segmento
    }
  }

  // Agrega el último segmento si existe
  if (currentSegment.length > 0) {
    segmentsArray.push(currentSegment.join(" "));
  }

  return segmentsArray;
};

export const ProjectText = ({
  text,
  wordsPerSegment = 4,
  maxLengthPerSegment = 32, // Longitud máxima por defecto
  isPaused,
}: Props) => {
  const [segments, setSegments] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const segmentsResult = splitTextIntoSegments(
      text,
      wordsPerSegment,
      maxLengthPerSegment
    );
    setSegments(segmentsResult);
  }, [text, wordsPerSegment, maxLengthPerSegment]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex < segments.length - 1 ? prevIndex + 1 : 0
        );
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [segments, isPaused]);

  return (
    <div className="cont-desc">
      {segments.map((segment, index) => (
        <motion.p
          key={index}
          className={`text-sm py-1 ${index === activeIndex ? "active" : ""}`}
          initial={{ opacity: 0, y: 20 }} // Inicializa la opacidad y la posición
          animate={{ opacity: 1, y: 0 }} // Anima a la opacidad y a la posición
          transition={{ duration: 0.5 }} // Duración de la animación
          whileHover={{
            scale: 1.05,
            color: "#3498db",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
          }} // Efecto al pasar el ratón
        >
          {segment}
        </motion.p>
      ))}
    </div>
  );
};
