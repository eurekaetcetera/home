import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Eureka, Etcetera",
  description: "Applied research and operations in proof verification, modular verifier design, and Ethereum-anchored trust models",
  keywords: ["Ethereum", "ENS", "proof verification", "identity resolution", "blockchain", "trust models"],
  authors: [{ name: "Eureka, Etcetera" }],
  openGraph: {
    title: "Eureka, Etcetera",
    description: "Applied research and operations in proof verification, modular verifier design, and Ethereum-anchored trust models",
    url: "https://www.eketc.co",
    siteName: "Eureka, Etcetera",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eureka, Etcetera",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eureka, Etcetera",
    description: "Applied research and operations in proof verification, modular verifier design, and Ethereum-anchored trust models",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
