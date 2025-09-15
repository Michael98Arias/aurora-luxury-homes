import type { Metadata } from "next";
import { ReactNode } from "react";
import Header from "../components/Header/Header";
import "../globals.scss"; 
import I18nProvider from "./providers/I18nProvider";

export const metadata: Metadata = {
  title: "Aurora Luxury Homes",
  description: "Illuminating the path to your dream home.",
  icons: {
    icon: [
      { url: "/images/real-estate.png", sizes: "32x32", type: "image/png" },
      { url: "/images/real-estate.png", sizes: "64x64", type: "image/png" },
      { url: "/images/real-estate.png", sizes: "128x128", type: "image/png" },
      { url: "/images/real-estate.png", sizes: "256x256", type: "image/png" },
    ],
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <Header />
          <main>{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
