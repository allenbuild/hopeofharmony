import type { Metadata } from "next";
import { Cormorant_Garamond, Forum, Quicksand } from "next/font/google";
import "./globals.css";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hopeofharmony.org"),
  title: {
    default: "Hope of Harmony",
    template: "%s | Hope of Harmony",
  },
  description:
    "Our mission: to uplift the community through classical music & various enrichment activities.",
  icons: {
    icon: "/assets/harmony-monogram.png",
    shortcut: "/assets/harmony-monogram.png",
  },
  openGraph: {
    title: "Hope of Harmony",
    description: "Our mission: to uplift the community through classical music & various enrichment activities.",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "Hope of Harmony" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hope of Harmony",
    description: "Our mission: to uplift the community through classical music & various enrichment activities.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${forum.variable} ${quicksand.variable} ${cormorant.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
