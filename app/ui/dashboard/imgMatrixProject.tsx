import React, { useEffect, useRef } from "react";

export const ImgMatrixEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null); // ref inicializado como null

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Verificación para asegurarse de que el canvas existe

    const ctx = canvas.getContext("2d");

    // Ajustamos el tamaño del canvas
    const setCanvasSize = () => {
      canvas.width = document.body.offsetWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize(); // Set size initially
    window.addEventListener("resize", setCanvasSize); // Adjust on resize

    const w = canvas.width;
    const h = canvas.height;
    const cols = Math.floor(w / 20) + 1;
    const position_y = Array(cols).fill(0);

    // Función para ejecutar la animación Matrix
    const matrix = () => {
      ctx!.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fondo semi-transparente
      ctx!.fillRect(0, 0, w, h); // Limpiar con efecto de desvanecimiento
      ctx!.fillStyle = "rgba(0, 255, 0, 0.8)"; // Color verde como en Matrix
      ctx!.font = "15pt monospace";

      position_y.forEach((y, ind) => {
        const text = String.fromCharCode(0x30a0 + Math.random() * 96);
        const x = ind * 20;
        ctx!.fillText(text, x, y);

        // Reiniciar posición Y aleatoriamente
        if (y > h + Math.random() * 10000) {
          position_y[ind] = 0;
        } else {
          position_y[ind] = y + 20;
        }
      });
    };

    const interval = setInterval(matrix, 50); // Corre la animación en intervalos

    // Cleanup al desmontar el componente
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{ display: "block", background: "#030711" }} />
  );
};
