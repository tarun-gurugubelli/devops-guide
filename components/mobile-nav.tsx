"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>DevAnswers</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          <Link href="/modules" className="text-sm font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Modules
          </Link>
          <Link href="/questions" className="text-sm font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Questions
          </Link>
          <Link href="/installations" className="text-sm font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Installations
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

