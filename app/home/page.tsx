import Image from "next/image";
import { Button } from "@nextui-org/react";
import { MdContacts } from "react-icons/md";

import { FaRegFilePdf } from "react-icons/fa";

export const HomePage = () => {
  return (
    <section className="w-screen pt-20 md:pt-32">
      <div className="flex flex-col max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse shrink-0 items-end rounded-lg pt-6 pb-8 md:p-4  col md:row">
          <div className="flex flex-col col-6 text-center md:text-right self-center gap-2">
            <h2 className="text-4xl font-extrabold	">
              Christian Camacho Galvis
            </h2>
            <p className="text-2xl  font-bold">Frontend developer</p>
            <p className="text-medium max-w-96 mx-auto md:ml-auto">
              I am a web developer with over 2 years of experience in frontend
              development
            </p>
            <div className="flex mt-4 md:mt-0">
              <a
                href="/pdf/EN_ChristianCamachoGalvis_CV.pdf"
                className="w-fit mx-auto"
                download={true}
              >
                <Button className="rounded-md bg-slate-600 hover:bg-slate-800 mt-0 md:mt-2 text-white">
                  <FaRegFilePdf />
                  CV
                </Button>
              </a>
              <a href="#ContactPage" className="w-fit mx-auto">
                <Button className="rounded-md bg-slate-600 hover:bg-slate-800 mt-0 md:mt-2 text-white">
                  <MdContacts />
                  Contact
                </Button>
              </a>
            </div>
          </div>
          <div className="col mx-auto self-center mb-4 md:mb-0">
            <Image
              src="/avatar.png"
              alt="Profile pick"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
