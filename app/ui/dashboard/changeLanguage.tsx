"use client"; // Asegura que este componente se renderiza en el cliente

import { useLocale } from "@/context/LocaleContext";
import { Switch } from "@nextui-org/react";
import clsx from "clsx";
import { IoLanguage } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const { setLocale } = useLocale();
  const { push } = useRouter();
  const { locale } = useParams<{ locale: string }>();

  const [isEnglish, setIsEnglish] = useState(locale === "en");

  useEffect(() => {
    // Actualiza el estado del switch si el locale cambia
    setIsEnglish(locale === "en");
  }, [locale]);

  const toggleLanguage = () => {
    // Cambia el estado del switch y el idioma
    const newLanguage = isEnglish ? "es" : "en";
    setIsEnglish(!isEnglish);
    setLocale(newLanguage);
    push(`/${newLanguage}`);
  };

  return (
    <button className="hover-cursor bg-transparent">
      <Switch
        size="lg"
        isSelected={isEnglish}
        startContent={<IoLanguage className="text-gray-800" />}
        endContent={<IoLanguage className="text-gray-800" />}
        className={clsx({
          "en-switch": isEnglish,
          "es-switch": !isEnglish,
        })}
        onValueChange={toggleLanguage}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <span className={className}>En</span>
          ) : (
            <span className={className}>Es</span>
          )
        }
      />
    </button>
  );
}
