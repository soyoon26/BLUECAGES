import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "./components/Menu";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BLUECAGES",
  description: "배우 홍경의 모든 것",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="../favicon.png" />
      </Head>
      <body
        className={`${geistSans.variable} w-screen ${geistMono.variable} antialiased flex justify-center items-center flex-col min-h-screen`}
      >
        <Menu />
        <div className="border mt-4 mb-10 border-white w-5/6 p-2 rounded-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
