import { Metadata } from "next";
import TimeLine from "@/app//ui/dashboard/timeLine";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="my-12 w-full">
          <TimeLine />
        </div>
      </div>
    </section>
  );
}
