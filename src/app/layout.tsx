import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Headerrr from "@/components/custom/Headerrr";

const manrope = Manrope({ subsets: ["latin"], variable: "---font-manrope" });

export const metadata: Metadata = {
  title: "Pizzario",
  description: "Have Delicious Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          manrope.variable
        )}>

        <Headerrr />
      
          <main>{children}</main>
        </body>
    </html>
  );
}
