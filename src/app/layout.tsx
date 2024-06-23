import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin", "latin-ext"], weight: ["300", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "DeveProgramar | Aprenda programação",
  description: "Curso de programação, aprenda programação sem dificuldades. Javascript, React, Node e mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} bg-deepDark  text-light`}>
        {children}
      </body>
    </html>
  );
}
