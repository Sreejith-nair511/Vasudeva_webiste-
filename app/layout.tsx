import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatbotWidget from "@/components/chatbot-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Parent App",
  description: "A comprehensive parent app for school/college",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ChatbotWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'