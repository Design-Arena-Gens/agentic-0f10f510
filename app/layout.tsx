import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Comprendre les Cellules Cancéreuses",
  description:
    "Présentation éducative interactive expliquant la biologie des cellules cancéreuses et les approches de prévention et de traitement."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} font-sans bg-slate-950`}>
        {children}
      </body>
    </html>
  );
}
