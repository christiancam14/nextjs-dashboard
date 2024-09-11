import { Metadata } from "next";
import { CardProject } from "../ui/dashboard/cardProject";
import Reveal from "../ui/dashboard/reveal";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12 text-center gap-10">
        <Reveal>
          <h3 className="text-2xl">Projects</h3>
        </Reveal>
        <div className="cont-card-project flex flex-wrap gap-8">
          <div className="flex-1 flex flex-col items-center gap-4">
            <Reveal>
              <h4 className="text-xl">Frontend</h4>
            </Reveal>
            <CardProject />
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <Reveal>
              <h4 className="text-xl">Backend</h4>
            </Reveal>
            <CardProject />
          </div>
        </div>
      </div>
    </section>
  );
}
