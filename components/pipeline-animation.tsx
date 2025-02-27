"use client"

import { useEffect, useState } from "react"
import { Code2, Search, Package, Box, Cloud } from "lucide-react"

export default function PipelineAnimation() {
  const [activeStage, setActiveStage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-3xl mx-auto my-8 px-4">
      <div className="relative">
        {/* Conveyor Belt */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-muted -translate-y-1/2">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/50"></div>
        </div>

        {/* Stages */}
        <div className="relative grid grid-cols-5 gap-4">
          {/* Development */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`relative z-10 size-16 rounded-full border-2 flex items-center justify-center bg-background transition-colors duration-500 ${
                activeStage === 0 ? "border-primary text-primary" : "border-muted-foreground/30"
              }`}
            >
              <Code2 className="size-8" />
              <div
                className={`absolute -bottom-2 left-1/2 size-4 rounded-full bg-primary transition-opacity duration-500 ${
                  activeStage === 0 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: "translateX(-50%) rotate(45deg)" }}
              ></div>
            </div>
            <span
              className={`text-sm font-medium transition-colors duration-500 ${
                activeStage === 0 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Develop
            </span>
          </div>

          {/* Code Scan */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`relative z-10 size-16 rounded-full border-2 flex items-center justify-center bg-background transition-colors duration-500 ${
                activeStage === 1 ? "border-primary text-primary" : "border-muted-foreground/30"
              }`}
            >
              <Search className="size-8" />
              <div
                className={`absolute -bottom-2 left-1/2 size-4 rounded-full bg-primary transition-opacity duration-500 ${
                  activeStage === 1 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: "translateX(-50%) rotate(45deg)" }}
              ></div>
            </div>
            <span
              className={`text-sm font-medium transition-colors duration-500 ${
                activeStage === 1 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Scan
            </span>
          </div>

          {/* Build */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`relative z-10 size-16 rounded-full border-2 flex items-center justify-center bg-background transition-colors duration-500 ${
                activeStage === 2 ? "border-primary text-primary" : "border-muted-foreground/30"
              }`}
            >
              <Package className="size-8" />
              <div
                className={`absolute -bottom-2 left-1/2 size-4 rounded-full bg-primary transition-opacity duration-500 ${
                  activeStage === 2 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: "translateX(-50%) rotate(45deg)" }}
              ></div>
            </div>
            <span
              className={`text-sm font-medium transition-colors duration-500 ${
                activeStage === 2 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Build
            </span>
          </div>

          {/* Containerize */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`relative z-10 size-16 rounded-full border-2 flex items-center justify-center bg-background transition-colors duration-500 ${
                activeStage === 3 ? "border-primary text-primary" : "border-muted-foreground/30"
              }`}
            >
              <Box className="size-8" />
              <div
                className={`absolute -bottom-2 left-1/2 size-4 rounded-full bg-primary transition-opacity duration-500 ${
                  activeStage === 3 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: "translateX(-50%) rotate(45deg)" }}
              ></div>
            </div>
            <span
              className={`text-sm font-medium transition-colors duration-500 ${
                activeStage === 3 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Containerize
            </span>
          </div>

          {/* Deploy */}
          <div className="flex flex-col items-center gap-2">
            <div
              className={`relative z-10 size-16 rounded-full border-2 flex items-center justify-center bg-background transition-colors duration-500 ${
                activeStage === 4 ? "border-primary text-primary" : "border-muted-foreground/30"
              }`}
            >
              <Cloud className="size-8" />
              <div
                className={`absolute -bottom-2 left-1/2 size-4 rounded-full bg-primary transition-opacity duration-500 ${
                  activeStage === 4 ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: "translateX(-50%) rotate(45deg)" }}
              ></div>
            </div>
            <span
              className={`text-sm font-medium transition-colors duration-500 ${
                activeStage === 4 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Deploy
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

