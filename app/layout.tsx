import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  title: "Wazingwa Mugala",
  description: "Software Engineer from Zambia - Portfolio & Projects",
  generator: "v0.app",
  icons: {
    icon: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    shortcut: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    apple: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
