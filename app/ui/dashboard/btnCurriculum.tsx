"use client"; // Asegura que este componente se renderiza en el cliente

import { Button } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";

export default function BtnCurriculum() {
  const { locale } = useParams<{ locale: string }>();

  const [isEnglish, setIsEnglish] = useState(locale === "en");

  useEffect(() => {
    setIsEnglish(locale === "en");
  }, [locale]);

  const baseUrl = `https://christiancamacho.vercel.app/pdf/`;

  return (
    <a
      href={`${baseUrl}${
        isEnglish
          ? "EN_ChristianCamachoGalvis_CV"
          : "ES_ChristianCamachoGalvis_CV"
      }`}
      className="w-fit mx-auto md:mx-0"
      download
    >
      <Button className="rounded-md bg-slate-600 hover:bg-slate-800 mt-0 md:mt-2 text-white">
        <FaRegFilePdf />
        CV
      </Button>
    </a>
  );
}

// https://christiancamacho.vercel.app/pdf/EN_ChristianCamachoGalvis_CV.pdf
