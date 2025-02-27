export interface Command {
    command: string
    description: string
  }
  
  export interface Category {
    name: string
    commands: Command[]
  }
  
  export interface Cheatsheet {
    title: string
    icon: string
    description: string
    categories: Category[]
  }
  
  export interface CheatsheetData {
    cheatsheets: Cheatsheet[]
  }
  
  