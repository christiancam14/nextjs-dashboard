import { Inter, Andika, Urbanist } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const andika = Andika({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const urbanist = Urbanist({
  weight: ["400", "700", "800", "900"],
  subsets: ["latin"],
});

export const principalFont = inter;
