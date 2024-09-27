import { Metadata } from "next";
import { CardProject } from "@/app/ui/dashboard/cardProject";
import Reveal from "@/app/ui/dashboard/reveal";
import { useTranslations } from "next-intl";
import { Project } from "@/interfaces/interfaces";
import BtnInstruction from "@/app/ui/dashboard/projectInstruction";

export const metadata: Metadata = {
  title: "Projects",
};

const frontProjects: Project[] = [
  {
    id: 1,
    img: "/img/img1.jpeg",
    title: "Psycho Project",
    url: "https://github.com/christiancam14/psycho-project-uis",
    stack: "Angular, Typescript, Bootstrap",
    time2: 4,
  },
  {
    id: 2,
    img: "/img/img2.jpeg",
    title: "MoviesApp",
    url: "https://github.com/christiancam14/06-MoviesApp/tree/main",
    stack: "React Native, Typescript, Jest, Css",
    time2: 6,
  },
  {
    id: 3,
    img: "/img/img3.webp",
    title: "Gif Expert",
    url: "https://github.com/christiancam14/gifExpertApp",
    stack: "React, Vite, Redux, Typescript, Jest, css",
    time2: 5,
  },
  {
    id: 4,
    img: "/img/img4.jpg",
    title: "MapsApp",
    url: "https://github.com/christiancam14/MapsApp",
    stack: "React Native, Redux, Typescript, Jest, Css",
    time2: 3,
  },
  {
    id: 5,
    img: "/img/img5.png",
    title: "MyPortfolio",
    url: "https://github.com/christiancam14/nextjs-dashboard",
    stack: "Next.js, Typescript, TailwindCSS, Framer",
    time2: 4,
  },
  {
    id: 6,
    img: "/img/img5.png",
    title: "React Template",
    url: "https://github.com/christiancam14/react-adv",
    stack: "React, Typescript, ReactRouterDom, Jest",
    time2: 6,
  },
];

const backProjects: Project[] = [
  {
    id: 1,
    img: "/img/img1.jpeg",
    title: "Backend template",
    url: "https://github.com/christiancam14/linea-base-back",
    stack: "Node.Js, NestJs, Typescript, MySql, Jwt",
    time2: 3,
  },
  {
    id: 2,
    img: "/img/img3.webp",
    title: "Virtual Shop",
    url: "https://github.com/christiancam14/teslo-shop",
    stack: "Node.Js, NestJs, Typescript, MongoDb, WebSocket, Jwt",
    time2: 4,
  },
  {
    id: 3,
    img: "/img/img2.jpeg",
    title: "Psycho Project",
    url: "https://github.com/christiancam14/backend-psycho",
    stack: "Node.Js, NestJs, Typescript, MongoDb, Jwt, Prisma",
    time2: 6,
  },
  {
    id: 4,
    img: "/img/img3.webp",
    title: "Admin pro",
    url: "https://github.com/christiancam14/adminpro-backend",
    stack: "Node.Js, Express, Typescript, MongoDb, Jwt",
    time2: 5,
  },
];

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");

  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12 text-center gap-10">
        <Reveal>
          <h3 className="text-2xl">{t("title")}</h3>
        </Reveal>
        <BtnInstruction />
        <div className="cont-card-project flex flex-wrap gap-8">
          <div className="flex-1 flex flex-col items-center gap-4">
            <Reveal>
              <h4 className="text-xl">Frontend</h4>
            </Reveal>
            <CardProject projects={frontProjects} />
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <Reveal>
              <h4 className="text-xl">Backend</h4>
            </Reveal>
            <CardProject projects={backProjects} />
          </div>
        </div>
      </div>
    </section>
  );
}
