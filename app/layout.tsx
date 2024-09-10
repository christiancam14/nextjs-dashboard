import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

import { Metadata } from "next";
import Header from "./ui/dashboard/header";

export const metadata: Metadata = {
  title: {
    template: "%s | Chris",
    default: "Porfolio",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bd-gen`}>
        <div className="flex h-screen flex-col  md:overflow-hidden bd-gen max-w-screen-xl	mx-auto	">
          <div className="w-full flex-none z-10 px-6 md_px-12">
            <Header />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:px-12 scrollbar-none text-sky-100 py-28">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
