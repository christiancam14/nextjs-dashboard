import Link from "next/link";
import NavFooterLinks from "./nav-footer-links";

export default function Footer() {
  return (
    <footer className="mt-28 px-3 pb-16 py-4 min-h-72 md:px-4 w-screen bg-sky-100 ">
      <nav className="flex flex-col justify-between items-center max-w-screen-xl	mx-auto px-6 md:px-12">
        <Link
          className="flex items-end justify-start	text-gray-800 p-4 text-3xl"
          href="#Home"
        >
          &lt;Portfolio / &gt;
        </Link>
        <div className="flex flex-col space-x-2 md:space-x-0 items-center gap-2">
          <NavFooterLinks />
        </div>
      </nav>
    </footer>
  );
}