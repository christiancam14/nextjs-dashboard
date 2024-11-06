import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import ProjectsPage from "./projects/page";
import HomePage from "./home/page";
import CertificationsPage from "./certifications/page";
import ExperiencePage from "./experience/page";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col scrollbar-none">
      <div id="Home">
        <HomePage />
      </div>
      <div id="AboutPage" className="pt-24">
        <AboutPage />
      </div>
      <div id="SkillsPage" className="pt-24">
        <SkillsPage />
      </div>
      <div id="SkillsPage" className="pt-24">
        <ExperiencePage />
      </div>
      <div id="ProjectsPage" className="pt-24">
        <ProjectsPage />
      </div>
      <div className="pt-16">
        <CertificationsPage />
      </div>
    </main>
  );
}
