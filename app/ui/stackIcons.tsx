import { Tooltip } from "@nextui-org/react";
import { FaAngular, FaReact } from "react-icons/fa";
import { IconType } from "react-icons/lib";
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
  SiPostgresql,
  SiPrimeng,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

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
      <div className="flex flex-col gap-3">
        <h3 className="text-xl text-gray-800 bold">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-8 self-center">
          {stackFront.map((item, index) => (
            <div
              className="flex flex-col flex-1 items-center justify-center"
              key={index}
            >
              <Tooltip content={item.name}>
                <span className="icon-span bg-gray-800 p-2 rounded-full">
                  <item.element className="icon-stack" color="white" />
                </span>
              </Tooltip>
              <span className="text-gray-800">{item.level}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl text-gray-800  mt-2">Backend</h3>
        <div className="flex flex-wrap justify-center gap-8 self-center">
          {stackBack.map((item, index) => (
            <div
              className="flex flex-col flex-1 items-center justify-center"
              key={index}
            >
              <Tooltip content={item.name}>
                <span className="icon-span bg-gray-800 p-2 rounded-full">
                  <item.element className="icon-stack" color="white" />
                </span>
              </Tooltip>
              <span className="text-gray-800">{item.level}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3  mt-2">
        <h3 className="text-xl text-gray-800">Utilities</h3>
        <div className="flex flex-wrap justify-center gap-8 self-center">
          {stackUtilities.map((item, index) => (
            <div
              className="flex flex-col flex-1 items-center justify-center"
              key={index}
            >
              <Tooltip content={item.name}>
                <span className="icon-span bg-gray-800 p-2 rounded-full">
                  <item.element className="icon-stack" color="white" />
                </span>
              </Tooltip>
              <span className="text-gray-800">{item.level}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackIcons;
