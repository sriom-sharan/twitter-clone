import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/SideBar";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-cols-9 gap-8 h-screen  w-screen relative px-52">
          <div className="col-span-2 justify-start py-4  flex flex-col">
            <SideBar />
          </div>
          <div className="col-span-5  border-x-[0.2px] h-screen overflow-scroll border-white/20 shadow-sm">
            {children}
          </div>
          <div className="col-span-2">Right</div>
        </div>
      </body>
    </html>
  );
}
