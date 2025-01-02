import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TrackZone by HSK",
  description:
    "Web application that displays recent Counter-Strike 2 matches and performance stats. It tracks match history, key metrics, and progress over time with a sleek.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.className} antialiased`}>
        <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {children}
      </body>
    </html>
  );
}
