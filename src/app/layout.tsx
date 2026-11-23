import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { AppStateProvider } from "@/context/AppState";
import { Navbar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

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
    "Portafolio de Gary Brigham Chunga Castillo, Full Stack Developer con experiencia en Java, Spring Boot, Angular, React, Node.js, Flutter y sistemas de escritorio.",
  // El sitio ya es oscuro: evita que extensiones como Dark Reader reescriban
  // el HTML antes de la hidratación (provocaba errores de hydration mismatch).
  other: {
    "darkreader-lock": "true",
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
      suppressHydrationWarning
      className={`${geistSansVariable} ${geistMonoVariable} h-full antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col bg-background text-foreground">
        <AppStateProvider>
          <LanguageProvider>
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </LanguageProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}