import "@/app/ui/global.css";
import { principalFont } from "../ui/fonts";
import { NextIntlClientProvider } from "next-intl";
import { Metadata } from "next";
import Header from "../ui/dashboard/header";
import Footer from "../ui/dashboard/footer";
import Progressbar from "../ui/dashboard/progressbar";
import { getLocale, getMessages } from "next-intl/server";
import { LocaleProvider } from "../../context/LocaleContext"; // Asegúrate de importar el contexto
import CursorEffect from "../ui/dashboard/cursorEffect";

export const metadata: Metadata = {
  title: {
    template: "%s | Chris",
    default: "Porfolio",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${principalFont.className} antialiased bg-gray-950 scroll-smoth max-w-fit overflow-x-hidden`}
      >
        <LocaleProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <CursorEffect />
            <div className="flex flex-col md:overflow-hidden mx-auto scroll-smoth">
              <div className="w-full flex-none z-50 px-6 md:px-12">
                <Progressbar />
                <Header />
              </div>
              <div className="flex-grow md:overflow-y-auto scrollbar-none text-sky-100 scroll-smoth scrollbar-none z-10">
                {children}
              </div>
              <div className="w-full flex-none mt-0 z-20">
                <Footer />
              </div>
            </div>
          </NextIntlClientProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
