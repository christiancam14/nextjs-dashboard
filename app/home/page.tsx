"use client";

import Image from "next/image";
import { Button } from "@nextui-org/react";
import { MdContacts } from "react-icons/md";

import { FaRegFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "../ui/dashboard/reveal";

export default function HomePage() {
  return (
    <section className="w-screen pt-20 md:pt-32">
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 md:px-12">
        {/* <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        > */}
        <div className="flex flex-col-reverse md:flex-row shrink-0 items-end rounded-lg pt-6 pb-8 md:p-4  col md:row">
          <div className="flex flex-col flex-1 col-6 text-center items-center md:items-end md:text-right self-center gap-2">
            <Reveal>
              <h2 className="text-4xl font-extrabold	">
                Christian Camacho Galvis
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-2xl font-bold">Frontend developer</p>
            </Reveal>
            <Reveal>
              <p className="text-lg max-w-96 mx-auto md:mr-0 md:ml-auto">
                2+ Years of Experience
              </p>
            </Reveal>
            <Reveal>
              <p className="text-medium max-w-96 mx-auto md:mr-0 md:ml-auto">
                Passionate about creating engaging user interfaces andtransform
                ideas into responsive, high-performance websites.
              </p>
            </Reveal>
            <div className="flex mt-4 md:mt-0 md:justify-end gap-4 md:gap-4">
              <Reveal>
                <a
                  href="/pdf/EN_ChristianCamachoGalvis_CV.pdf"
                  className="w-fit mx-auto md:mx-0"
                  download={true}
                >
                  <Button className="rounded-md bg-slate-600 hover:bg-slate-800 mt-0 md:mt-2 text-white">
                    <FaRegFilePdf />
                    CV
                  </Button>
                </a>
              </Reveal>
              <Reveal>
                <a href="#ContactPage" className="w-fit mx-auto md:mx-0">
                  <Button className="rounded-md bg-slate-600 hover:bg-slate-800 mt-0 md:mt-2 text-white">
                    <MdContacts />
                    Contact
                  </Button>
                </a>
              </Reveal>
            </div>
          </div>
          <div className="col mx-auto self-center mb-4 md:mb-0 md:min-w-80 md:flex md:justify-center">
            <Reveal>
              <Image
                src="/avatar.png"
                alt="Profile pick"
                width={150}
                height={150}
                className="rounded-full"
              />
            </Reveal>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
}
