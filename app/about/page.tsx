import { Metadata } from "next";
import Reveal from "../ui/dashboard/reveal";
import TimeLine from "../ui/dashboard/timeLine";
import { principalFont } from "../ui/fonts";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12">
        <Reveal>
          <h3
            className={`${principalFont.className} text-2xl mb-12 text-center`}
          >
            About me
          </h3>
        </Reveal>
        <Reveal>
          <p className={`${principalFont.className} text-center text-sky-100`}>
            With 2+ years of expertise in frontend development and UI/UX design,
            I specialize in building seamless user experiences. Proficient in
            Angular, I create dynamic interfaces, consume microservices, and
            implement secure authentication. I&apos;ve developed custom WordPress
            plugins using PHP and JavaScript, and built scalable RESTful APIs
            with NestJs and TypeOrm. Experienced with Git for version control on
            GitHub and GitLab, I thrive in Scrum environments, showcasing
            leadership, teamwork, and project management skills.
          </p>
        </Reveal>
        <div className="my-12 w-full">
          <TimeLine />
        </div>
      </div>
    </section>
  );
}
