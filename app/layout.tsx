'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from './Components/Navber/Navber'
import Sidebar from './Components/Sidebar/Sidebar'
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <Navber onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />

          <div className="flex">
            <div className={sidebarOpen ? 'sidebar-enter' : 'sidebar-exit'}>
              {sidebarOpen && <Sidebar onLinkClick={() => setSidebarOpen(false)}/>}
            </div>
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}
