import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import Reveal from "./reveal";
import { principalFont } from "../fonts";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./changeLanguage";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="px-3 pt-5 py-4 md:px-4 fixed top-0 left-0	w-screen bg-gray-950/[.6] ">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl	mx-auto px-6 ">
        <div className="flex flex-row justify-between w-full md:w-auto gap-2">
          <span className="block opacity-0 md:hidden">
            <LanguageSwitcher />
          </span>
          <Reveal>
            <Link
              className={`${principalFont.className} flex items-end justify-start	text-sky-100 md:p-1 text-2xl sm:text-xl  lg:text-2xl`}
              href="/"
            >
              &lt;{t("portfolio")} / &gt;
            </Link>
          </Reveal>
          <span className="self-center">
            <LanguageSwitcher />
          </span>
        </div>
        <div className="hidden md:flex flex-row space-x-2 md:flex-row md:space-x-0 items-center gap-4">
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}
