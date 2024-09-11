import { Metadata } from "next";
import { motion } from "framer-motion";
import Reveal from "../ui/dashboard/reveal";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="w-screen ">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto px-6 md:px-12">
        <Reveal>
          <h3 className="text-2xl mb-12 text-center">About me</h3>
        </Reveal>
      </div>
    </section>
  );
}
