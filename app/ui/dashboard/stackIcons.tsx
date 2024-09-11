import { Tooltip } from "@nextui-org/react";
import { FaAngular, FaReact } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiPhp,
  SiPostgresql,
  SiPrimeng,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import Reveal from "./reveal";
import RevealItems from "./reveal-items";

interface stack {
  name: string;
  element: IconType;
  level: "Beg" | "Mid" | "Adv";
}

const stackFront: stack[] = [
  {
    name: "Angular",
    element: FaAngular,
    level: "Mid",
  },
  {
    name: "React / React Native",
    element: FaReact,
    level: "Beg",
  },
  {
    name: "NextJs",
    element: RiNextjsLine,
    level: "Beg",
  },
  {
    name: "Typescript",
    element: SiTypescript,
    level: "Mid",
  },
  {
    name: "Javascript",
    element: SiJavascript,
    level: "Mid",
  },
  {
    name: "HTML",
    element: SiHtml5,
    level: "Adv",
  },
  {
    name: "CSS",
    element: SiCss3,
    level: "Adv",
  },
  {
    name: "PrimeNg",
    element: SiPrimeng,
    level: "Mid",
  },
  {
    name: "Bootstrap",
    element: SiBootstrap,
    level: "Mid",
  },
  {
    name: "Tailwind",
    element: SiTailwindcss,
    level: "Beg",
  },
];

const stackBack: stack[] = [
  {
    name: "NestJs",
    element: SiNestjs,
    level: "Beg",
  },
  {
    name: "Express",
    element: SiExpress,
    level: "Beg",
  },
  {
    name: "Php",
    element: SiPhp,
    level: "Beg",
  },
  {
    name: "MySql",
    element: SiMysql,
    level: "Mid",
  },
  {
    name: "Postgresql",
    element: SiPostgresql,
    level: "Mid",
  },
];

const stackUtilities: stack[] = [
  {
    name: "Git",
    element: SiGit,
    level: "Mid",
  },
  {
    name: "Wordpress",
    element: SiWordpress,
    level: "Mid",
  },
  {
    name: "Photoshop",
    element: SiAdobephotoshop,
    level: "Adv",
  },
];

export const StackIcons = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-center gap-3">
        <Reveal>
          <h3 className="text-xl text-gray-800 bold">Frontend</h3>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-8 self-center">
          {stackFront.map((item, index) => (
            <RevealItems key={index} index={index}>
              <Reveal>
                <div className="flex flex-col flex-1 items-center justify-center">
                  <Tooltip content={item.name}>
                    <span className="icon-span bg-gray-800 p-2 rounded-full">
                      <item.element className="icon-stack" color="white" />
                    </span>
                  </Tooltip>
                  {/* <span className="text-gray-800">{item.level}</span> */}
                </div>
              </Reveal>
            </RevealItems>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Reveal>
          <h3 className="text-xl text-gray-800  mt-2">Backend</h3>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-8 self-center">
          {stackBack.map((item, index) => (
            <RevealItems key={index} index={index}>
              <Reveal>
                <div className="flex flex-col flex-1 items-center justify-center">
                  <Tooltip content={item.name}>
                    <span className="icon-span bg-gray-800 p-2 rounded-full">
                      <item.element className="icon-stack" color="white" />
                    </span>
                  </Tooltip>
                  {/* <span className="text-gray-800">{item.level}</span> */}
                </div>
              </Reveal>
            </RevealItems>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3  mt-2">
        <Reveal>
          <h3 className="text-xl text-gray-800">Utilities</h3>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-8 self-center">
          {stackUtilities.map((item, index) => (
            <RevealItems key={index} index={index}>
              <Reveal>
                <div className="flex flex-col flex-1 items-center justify-center">
                  <Tooltip content={item.name}>
                    <span className="icon-span bg-gray-800 p-2 rounded-full">
                      <item.element className="icon-stack" color="white" />
                    </span>
                  </Tooltip>
                  {/* <span className="text-gray-800">{item.level}</span> */}
                </div>
              </Reveal>
            </RevealItems>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackIcons;
