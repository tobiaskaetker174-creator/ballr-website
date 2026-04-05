import type { Metadata } from "next";
import Image from "next/image";
import "../globals.css";

export const metadata: Metadata = {
  title: "BallR — Find Your Game. Build Your Rating.",
  description:
    "Die Pickup-Fussball-App fuer Bangkok & Bali. Finde Spiele, baue dein ELO-Rating auf und verpasse nie wieder ein Match.",
};

export default function StandaloneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-full py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="BallR Logo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-black tracking-tight">BallR</span>
          </a>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="py-8 text-center text-text-secondary text-xs">
        <p>&copy; {new Date().getFullYear()} BallR. Alle Rechte vorbehalten.</p>
      </footer>
    </>
  );
}
