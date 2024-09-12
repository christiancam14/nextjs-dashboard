"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useTranslations } from "next-intl";

const links = [
  { name: "home", href: "#Home" },
  { name: "about", href: "#AboutPage" },
  { name: "skills", href: "#SkillsPage" },
  { name: "projects", href: "#ProjectsPage" },
  { name: "contact", href: "#ContactPage" },
];

export default function NavFooterLinks() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-gray-800 flex h-[48px] ml-0 mr-0 mt-0 mb-0 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-slate-950 hover:font-extrabold	 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "font-extrabold	underline ": pathname === link.href,
              }
            )}
          >
            {t(link.name)}
          </Link>
        );
      })}
    </>
  );
}
