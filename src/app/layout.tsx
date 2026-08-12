import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { AppStateProvider } from "@/context/AppState";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gary Chunga — Full Stack Developer",
  description:
    "Portafolio de Gary Brigham Chunga Castillo, Full Stack Developer especializado en React, TypeScript, Node.js y desarrollo móvil.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { variable: geistSansVariable } = geistSans;
  const { variable: geistMonoVariable } = geistMono;
  return (
    <html
      lang="es"
      className={`${geistSansVariable} ${geistMonoVariable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AppStateProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}