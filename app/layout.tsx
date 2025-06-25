import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Abiola Jimoh | Fintech Consultant & Business Advisor",
    template: "%s | Abiola Jimoh",
  },
  description:
    "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
  keywords: [
    "fintech consultant",
    "business advisor",
    "regulatory compliance",
    "business growth",
    "strategic partnerships",
    "risk evaluation",
    "legal advisory",
  ],
  authors: [{ name: "Abiola Jimoh" }],
  creator: "Abiola Jimoh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samueljohnson.com",
    title: "Abiola Jimoh | Fintech Consultant & Business Advisor",
    description:
      "Abiola Jimoh is a seasoned fintech consultant with over a decade of experience in regulatory compliance, business growth, and strategic partnerships.",
    siteName: "Abiola Jimoh",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://samueljohnson.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abiola Jimoh",
              url: "https://samueljohnson.com",
              jobTitle: "Fintech Consultant & Business Advisor",
              sameAs: [
                "https://twitter.com/samueljohnson",
                "https://linkedin.com/in/samueljohnson",
                "https://github.com/samueljohnson",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
