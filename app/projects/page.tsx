import { Metadata } from "next";
import { CardProject } from "../ui/cardProject";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <section className="w-screen ">
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 md:px-12 text-center gap-10">
        <h3 className="text-2xl">Projects</h3>
        <div className="cont-card-project flex flex-wrap gap-8">
          <div className="flex-1 flex flex-col items-center gap-4">
            <h4 className="text-xl">Frontend</h4>
            <CardProject />
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <h4 className="text-xl">Backend</h4>
            <CardProject />
          </div>
        </div>
      </div>
    </section>
  );
}
