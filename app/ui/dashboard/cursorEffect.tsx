"use client";

import React, { useEffect, useRef } from "react";

const CursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const params = {
    pointsNumber: 40,
    widthFactor: 0.3,
    mouseThreshold: 0.6,
    spring: 0.4,
    friction: 0.5,
  };

  const trail = new Array(params.pointsNumber).fill(null).map(() => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    dx: 0,
    dy: 0,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Asegúrate de que el canvas esté disponible
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Asegúrate de que el contexto esté disponible
    let mouseMoved = false;
    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const updateMousePosition = (eX: number, eY: number) => {
      pointer.x = eX;
      pointer.y = eY;
    };

    const update = (t: number) => {
      if (!mouseMoved) {
        pointer.x =
          (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
          window.innerWidth;
        pointer.y =
          (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.01 * t)) *
          window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(232, 255, 0, 0.025)";

      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();

      window.requestAnimationFrame(update);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseMoved = true;
      updateMousePosition(e.clientX, e.clientY); // Cambiar pageX/pageY por clientX/clientY
    };

    const handleMouseClick = (e: MouseEvent) => {
      updateMousePosition(e.clientX, e.clientY); // Cambiar pageX/pageY por clientX/clientY
    };

    // Manejador de eventos táctiles
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseMoved = true;
        const touch = e.touches[0];
        updateMousePosition(touch.clientX, touch.clientY); // Cambiar pageX/pageY por clientX/clientY
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        updateMousePosition(touch.clientX, touch.clientY); // Cambiar pageX/pageY por clientX/clientY
      }
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("click", handleMouseClick);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("resize", handleResize);
    setupCanvas();
    update(0);

    return () => {
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", handleResize);
    };
  }, [
    params.friction,
    params.pointsNumber,
    params.spring,
    params.widthFactor,
    trail,
  ]);

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  };

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />;
};

export default CursorEffect;
