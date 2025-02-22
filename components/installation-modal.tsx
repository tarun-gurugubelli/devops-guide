"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy } from "lucide-react"

interface InstallationStep {
  os: string
  commands: string[]
}

interface InstallationProps {
  installation: {
    title: string
    steps: InstallationStep[]
  }
}

export default function InstallationModal({ installation }: InstallationProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          View Installation Steps
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{installation.title} Installation Guide</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={installation.steps[0].os} className="w-full">
          <TabsList className="w-full justify-start">
            {installation.steps.map((step) => (
              <TabsTrigger key={step.os} value={step.os}>
                {step.os}
              </TabsTrigger>
            ))}
          </TabsList>
          {installation.steps.map((step) => (
            <TabsContent key={step.os} value={step.os}>
              <div className="rounded-md bg-muted p-4">
                <div className="relative">
                  <pre className="text-sm overflow-x-auto p-2 whitespace-pre-wrap">
                    {step.commands.map((command, index) => (
                      <div key={index} className="flex items-start">
                        <code className="flex-1 break-all">{command}</code>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-2"
                          onClick={() => copyToClipboard(command, index)}
                        >
                          {copiedIndex === index ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          <span className="sr-only">Copy</span>
                        </Button>
                      </div>
                    ))}
                  </pre>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}