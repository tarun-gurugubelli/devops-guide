import { DockIcon as Docker, GitBranch, Database, Cloud, Box, Terminal } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import InstallationModal from "@/components/installation-modal"

const installations = [
  {
    title: "Docker",
    icon: <Docker className="h-8 w-8" />,
    description: "Container platform for building, shipping, and running applications",
    steps: [
      {
        os: "Ubuntu",
        commands: [
          "sudo apt update",
          "sudo apt install docker.io",
          "sudo systemctl start docker",
          "sudo systemctl enable docker",
        ],
      },
      {
        os: "MacOS",
        commands: ["brew install docker", "open /Applications/Docker.app"],
      },
      {
        os: "Windows",
        commands: [
          "# Download Docker Desktop from:",
          "https://www.docker.com/products/docker-desktop",
          "# Run the installer",
          "# Start Docker Desktop",
        ],
      },
    ],
  },
  {
    title: "Jenkins",
    icon: <Box className="h-8 w-8" />,
    description: "Open source automation server for building, testing, and deploying",
    steps: [
      {
        os: "Ubuntu",
        commands: [
          "sudo apt update",
          "sudo apt install openjdk-11-jdk",
          "wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -",
          "sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'",
          "sudo apt update",
          "sudo apt install jenkins",
          "sudo systemctl start jenkins",
        ],
      },
      {
        os: "Docker",
        commands: ["docker run -d -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts"],
      },
    ],
  },
  {
    title: "Git",
    icon: <GitBranch className="h-8 w-8" />,
    description: "Distributed version control system for tracking changes in source code",
    steps: [
      {
        os: "Ubuntu",
        commands: ["sudo apt update", "sudo apt install git"],
      },
      {
        os: "MacOS",
        commands: ["brew install git"],
      },
      {
        os: "Windows",
        commands: ["# Download Git from:", "https://git-scm.com/download/win", "# Run the installer"],
      },
    ],
  },
  {
    title: "Node.js",
    icon: <Terminal className="h-8 w-8" />,
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    steps: [
      {
        os: "Ubuntu",
        commands: ["curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -", "sudo apt install -y nodejs"],
      },
      {
        os: "MacOS",
        commands: ["brew install node"],
      },
      {
        os: "Windows",
        commands: ["# Download Node.js from:", "https://nodejs.org/", "# Run the installer"],
      },
    ],
  },
  {
    title: "PostgreSQL",
    icon: <Database className="h-8 w-8" />,
    description: "Advanced open source relational database",
    steps: [
      {
        os: "Ubuntu",
        commands: [
          "sudo apt update",
          "sudo apt install postgresql postgresql-contrib",
          "sudo systemctl start postgresql",
          "sudo systemctl enable postgresql",
        ],
      },
      {
        os: "MacOS",
        commands: ["brew install postgresql", "brew services start postgresql"],
      },
      {
        os: "Windows",
        commands: [
          "# Download PostgreSQL from:",
          "https://www.postgresql.org/download/windows/",
          "# Run the installer",
        ],
      },
    ],
  },
  {
    title: "Kubernetes",
    icon: <Cloud className="h-8 w-8" />,
    description: "Container orchestration platform for automating deployment and scaling",
    steps: [
      {
        os: "Ubuntu",
        commands: [
          "sudo apt update",
          "sudo apt install -y apt-transport-https ca-certificates curl",
          "curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -",
          "echo 'deb https://apt.kubernetes.io/ kubernetes-xenial main' | sudo tee /etc/apt/sources.list.d/kubernetes.list",
          "sudo apt update",
          "sudo apt install -y kubelet kubeadm kubectl",
          "sudo apt-mark hold kubelet kubeadm kubectl",
        ],
      },
      {
        os: "MacOS",
        commands: ["brew install kubectl", "brew install minikube"],
      },
    ],
  },
]

export default function InstallationsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Installation Guides</h1>
        <p className="text-lg text-muted-foreground">
          Step-by-step installation instructions for popular development tools and platforms
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {installations.map((installation) => (
          <Card key={installation.title} className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {installation.icon}
                {installation.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{installation.description}</p>
              <InstallationModal installation={installation} />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}

