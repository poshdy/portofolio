import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin", "devanagari", "latin-ext"],
  weight: ['300',"400", "600","500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Posh.dev",
  description: "Posh personal Portofolio",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background dark text-primary antialiased",
          poppins.className
        )}
      >
        <NavBar />
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
