import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";
import ProjectsPage from "./projects/page";
import HomePage from "./home/page";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col scrollbar-none">
      <div id="Home" style={{ minHeight: "80vh" }}>
        <HomePage />
      </div>
      <div id="AboutPage" className="pt-32" style={{ minHeight: "80vh" }}>
        <AboutPage />
      </div>
      <div id="SkillsPage" className="pt-32" style={{ minHeight: "80vh" }}>
        <SkillsPage />
      </div>
      <div id="ProjectsPage" className="pt-32" style={{ minHeight: "80vh" }}>
        <ProjectsPage />
      </div>
      <div id="ContactPage" className="pt-32" style={{ minHeight: "80vh" }}>
        <ContactPage />
      </div>
    </main>
  );
}
