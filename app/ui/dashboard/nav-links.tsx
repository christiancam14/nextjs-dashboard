"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
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
        );
      })}
    </>
  );
}
