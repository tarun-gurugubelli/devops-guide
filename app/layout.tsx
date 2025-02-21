import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevAnswers - Knowledge Base",
  description: "Your comprehensive resource for development questions and answers",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <div className="container mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">
              DevOps Knowledge Board
            </Link>
            <nav className="flex gap-6">
              <Link href="/modules" className="text-sm font-medium hover:text-primary">
                Modules
              </Link>
              <Link href="/questions" className="text-sm font-medium hover:text-primary">
                Browse All Questions
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} DevOpsKnowledgeBoard. All rights not reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'