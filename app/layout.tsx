import type React from "react"
import "./globals.css"
import { Inter, Sora, Orbitron } from "next/font/google"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import CustomCursor from "@/components/CustomCursor/CustomCursor"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Arslan Yaseen | MERN Stack & Laravel Developer",
  description: "MERN Stack and Laravel developer specializing in modern web applications, REST APIs, and scalable full-stack solutions. Expertise in React, Next.js, Node.js, Express, MongoDB, and Laravel.",
  keywords: ["MERN Stack", "Laravel Developer", "Full Stack Developer", "React", "Next.js", "Node.js", "Express", "MongoDB", "PHP", "Laravel", "Web Development", "REST APIs", "Frontend Developer", "Backend Developer"],
  authors: [{ name: "Arslan Yaseen" }],
  creator: "Arslan Yaseen",
  publisher: "Arslan Yaseen",
  generator: "Next.js",
  applicationName: "Arslan Yaseen Portfolio",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://arslanyaseen.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arslan Yaseen | MERN Stack & Laravel Developer",
    description: "Building scalable and modern web applications using MERN Stack and Laravel.",
    url: "https://arslanyaseen.me",
    siteName: "Arslan Yaseen Portfolio",
    images: [
      {
        url: "/image/MyPic.png",
        width: 1200,
        height: 630,
        alt: "Arslan Yaseen - MERN Stack & Laravel Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arslan Yaseen | MERN Stack & Laravel Developer",
    description: "MERN Stack and Laravel developer building modern full-stack web applications.",
    creator: "@arslanyaseen",
    images: ["/image/MyPic.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  verification: {
    google: "your-google-site-verification-code",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${orbitron.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
          themes={["light", "dark", "night"]}
        >
          {/* Only render CustomCursor on client-side */}
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}