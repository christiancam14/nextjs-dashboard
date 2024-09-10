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
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} antialiased bg-gray-950  scroll-smoth max-w-fit overflow-x-hidden	`}
      >
        <div className="flex flex-col  md:overflow-hidden mx-auto	scroll-smoth">
          <div className="w-full flex-none z-10 px-6 md:px-12">
            <Header />
          </div>
          <div className="flex-grow md:overflow-y-auto scrollbar-none text-sky-100  scroll-smoth scrollbar-none">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
