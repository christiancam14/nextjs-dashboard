import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";

export default function Header() {
  return (
    <header className="px-3 py-4 md:px-4 fixed top-0 left-0	w-screen bg-gray-950/[.6] ">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl	mx-auto px-6 md:px-12">
        <Link
          className="flex items-end justify-start	text-sky-100 md:p-4 text-2xl"
          href="/"
        >
          &lt;Portfolio / &gt;
        </Link>
        <div className="hidden md:flex flex-row space-x-2 md:flex-row md:space-x-0 items-center gap-6">
          <NavLinks />
        </div>
      </nav>
    </header>
  );
}
