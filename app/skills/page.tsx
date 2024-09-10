import { Metadata } from "next";
import { andika } from "../ui/fonts";
import StackIcons from "../ui/stackIcons";

export const metadata: Metadata = {
  title: "Skills",
};

export const SkillsPage = () => {
  return (
    <section className="w-screen pt-20 md:pt-32">
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row justify-center">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-8 md:px-20 text-center md:w-3/4 w-full	">
            <p
              className={`${andika.className} text-2xl text-gray-800 md:text-3xl md:leading-normal`}
            >
              <strong>Stack technologies</strong>
            </p>
            <div className="flex flex-wrap max-w-96 justify-center self-center">
              <StackIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
