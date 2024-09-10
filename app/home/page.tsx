import { andika } from "../ui/fonts";
import styles from "@/app/ui/home.module.css";
import Image from "next/image";

export const HomePage = () => {
  return (
    <>
      <div
        id="Home"
        className="grid grid-flow-col h-20 shrink-0 items-end rounded-lg bg-gray-950/[.6] p-4 md:h-52"
      >
        <div className="col-6 text-right">
          <h2 className="text-3xl">Christian Camacho Galvis</h2>
          <span className="text-2xl">Frontend developer</span>
        </div>
        <div className="col">
          <Image src="/../../ui/assets/avatar.png" alt="Profile pick" width={50} height={50} />
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${andika.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the ,
            brought to you by Vercel.
          </p>

          <div className={styles.shape} />
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"></div>
      </div>
    </>
  );
};

export default HomePage;
