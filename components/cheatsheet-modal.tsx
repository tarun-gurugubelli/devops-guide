"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Cheatsheet } from "@/types/cheatsheet"

interface CheatsheetModalProps {
  cheatsheet: Cheatsheet
}

export default function CheatsheetModal({ cheatsheet }: CheatsheetModalProps) {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCommand(text)
      setTimeout(() => setCopiedCommand(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          View Commands
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{cheatsheet.title} Cheatsheet</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={cheatsheet.categories[0].name} className="w-full">
          <TabsList className="w-full justify-start mb-4 flex-wrap">
            {cheatsheet.categories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {cheatsheet.categories.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <div className="rounded-md border">
                <div className="grid">
                  {category.commands.map((cmd, index) => (
                    <div
                      key={cmd.command}
                      className={`grid grid-cols-[1fr,auto] gap-4 p-4 items-center ${
                        index !== category.commands.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <div>
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{cmd.command}</code>
                        <p className="text-sm text-muted-foreground mt-1">{cmd.description}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => copyToClipboard(cmd.command)}
                      >
                        {copiedCommand === cmd.command ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        <span className="sr-only">Copy command</span>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

