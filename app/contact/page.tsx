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
}

const stackContact: stack[] = [
  {
    name: "Telegram",
    element: SiTelegram,
    url: "https://telegram.me/christiancamachogalvis",
    level: "Telegram",
  },
  {
    name: "Whatsapp",
    element: SiWhatsapp,
    url: "https://api.whatsapp.com/send?phone=573186898839",
    level: "Whatsapp",
  },
  {
    name: "Email",
    element: SiGmail,
    url: "mailto:chriscamacho1045@gmail.com",
    level: "Gmail",
  },
  {
    name: "LinkedIn",
    element: SiLinkedin,
    url: "https://www.linkedin.com/in/christian-camacho-galvis/",
    level: "LinkedIn",
  },
];

export const ContactPage = () => {
  return (
    <section className="w-screen pt-20 md:pt-32">
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <h3 className="text-2xl">Contact</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-4 self-center">
            {stackContact.map((item, index) => (
              <div
                className="flex flex-col flex-1 items-center justify-center"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
