"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Reveal from "./reveal";

const links = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#AboutPage" },
  { name: "Skills", href: "#SkillsPage" },
  { name: "Projects", href: "#ProjectsPage" },
  { name: "Contact", href: "#ContactPage" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Reveal key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                "text-sky-100 flex h-[48px] m-0 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-slate-950 hover:font-extrabold	 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "font-extrabold	underline ": pathname === link.href,
                }
              )}
            >
              {link.name}
            </Link>
          </Reveal>
        );
      })}
    </>
  );
}
