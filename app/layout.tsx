import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "In-Dev | Produits métier & expériences web",
  description:
    "In-Dev conçoit des ERP, CRM, plateformes web, sites et landing pages sur mesure depuis Alger.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
