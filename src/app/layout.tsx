import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"], weight: ["300", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Aprenda programação mesmo se for iniciante",
  description: "Curso de programação, aprenda programação sem dificuldades. Javascript, React, Node e mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} h-full bg-deepDark text-light`}>
        {children}
      </body>
    </html>
  );
}
