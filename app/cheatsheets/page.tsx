import { DockIcon as Docker, GitBranch, Database, Cloud, Terminal, Box } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CheatsheetModal from "@/components/cheatsheet-modal"
import { promises as fs } from "fs"
import path from "path"
import type { CheatsheetData } from "@/types/cheatsheet"

// Icon mapping
const IconMap = {
  docker: Docker,
  git: GitBranch,
  kubernetes: Cloud,
  linux: Terminal,
  jenkins: Box,
  postgresql: Database,
} as const

async function getCheatsheets() {
  const filePath = path.join(process.cwd(), "public/data/cheatsheets.json")
  const fileContent = await fs.readFile(filePath, "utf8")
  const data: CheatsheetData = JSON.parse(fileContent)
  return data.cheatsheets
}

export default async function CheatsheetsPage() {
  const cheatsheets = await getCheatsheets()

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Command Cheatsheets</h1>
        <p className="text-lg text-muted-foreground">
          Quick reference guides for common development tools and platforms
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cheatsheets.map((cheatsheet) => {
          const Icon = IconMap[cheatsheet.icon as keyof typeof IconMap]
          return (
            <Card key={cheatsheet.title} className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {Icon && <Icon className="h-8 w-8" />}
                  {cheatsheet.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{cheatsheet.description}</p>
                <CheatsheetModal cheatsheet={cheatsheet} />
              </CardContent>
            </Card>
          )
        })}
      </div>
    </main>
  )
}

