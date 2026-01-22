import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//! GLOBAL METADATA
//* THIS IS THE BARE MINIMUM - ALWAYS COMPLETE THIS
export const metadata = {
  title: "Rollercoasters Website",
  description:
    "A website to show most popular rollercoasters across the world. Amazing! Thrilling! Entertaining!",
  //* ????????? metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    //openGraph is an API that allows a preview to be shown when you share a link - the documentation is highly inaccessible
    title: "Rollercoasters Website",
    description:
      "A website to show most popular rollercoasters across the world. Amazing! Thrilling! Entertaining!",
    type: "website",
    url: "http://localhost:3000",
    images: ["imgurl"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
