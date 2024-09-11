import { Tooltip } from "@nextui-org/react";
import { Metadata } from "next";
import { IconType } from "react-icons/lib";
import { SiGmail, SiLinkedin, SiTelegram, SiWhatsapp } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact",
};

interface stack {
  name: string;
  element: IconType;
  url: string;
  level: string;
  info: string;
}

const stackContact: stack[] = [
  {
    name: "Telegram",
    element: SiTelegram,
    url: "https://telegram.me/christiancamachogalvis",
    level: "Telegram",
    info: "+57 3186898839",
  },
  {
    name: "Whatsapp",
    element: SiWhatsapp,
    url: "https://api.whatsapp.com/send?phone=573186898839",
    level: "Whatsapp",
    info: "+57 3186898839",
  },
  {
    name: "Gmail",
    element: SiGmail,
    url: "mailto:chriscamacho1045@gmail.com",
    level: "Gmail",
    info: "chriscamacho1045@gmail.com",
  },
  {
    name: "LinkedIn",
    element: SiLinkedin,
    url: "https://www.linkedin.com/in/christian-camacho-galvis/",
    level: "LinkedIn",
    info: "/in/christian-camacho-galvis/",
  },
];

export default function ContactPage() {
  return (
    <section className="w-screen">
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <h3 className="text-2xl mb-12">Contact</h3>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-y-8 mt-4 self-center">
            {stackContact.map((item, index) => (
              <div
                className="flex flex-col flex-mid items-center justify-center"
                key={index}
              >
                <a
                  className="flex flex-col justify- items-center"
                  href={item.url}
                  target="_blank"
                >
                  <Tooltip content={item.name}>
                    <span className="icon-span bg-sky-100 p-2 rounded-full">
                      <item.element className="icon-stack-light text-sky-100" />
                    </span>
                  </Tooltip>
                  <span className="text-white mt-2">{item.level}</span>
                </a>
                <span className="text-white mt-2">{item.info}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
