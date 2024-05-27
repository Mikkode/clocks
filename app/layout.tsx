import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "@/components/ui/toaster";
// import { Suspense } from "react";
// import Loading from "./loading";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Clocks",
  description:
    "Clocks is a web application that allows users to compare time zones and view live weather updates from different locations around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          GeistSans.variable,
          AnekTelugu,
          "font-sans h-full bg-background text-foreground dark"
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
