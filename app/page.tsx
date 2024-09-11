import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";
import ProjectsPage from "./projects/page";
import HomePage from "./home/page";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col scrollbar-none">
      <div id="Home">
        <HomePage />
      </div>
      <div id="AboutPage" className="pt-28">
        <AboutPage />
      </div>
      <div id="SkillsPage" className="pt-28">
        <SkillsPage />
      </div>
      <div id="ProjectsPage" className="pt-28">
        <ProjectsPage />
      </div>
      <div id="ContactPage" className="pt-28">
        <ContactPage />
      </div>
    </main>
  );
}
