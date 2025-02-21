import Link from "next/link"
import { Book, Contact2, HelpCircle, Library, MessageCircle, School, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ModulesPage() {
  const categories = [
    {
      title: "Docker",
      icon: <HelpCircle className="w-8 h-8" />,
      description: "Simplifies application deployment with containers.",
      href: "/questions#docker",
    },
    {
      title: "Kubernetes",
      icon: <Search className="w-8 h-8" />,
      description: "Automates container orchestration and management.",
      href: "/questions#kubernetes",
    },
    {
      title: "Linux",
      icon: <Users className="w-8 h-8" />,
      description: "Open-source OS powering servers and devices.",
      href: "/questions#linux",
    },
    {
      title: "Shell Scripting",
      icon: <Book className="w-8 h-8" />,
      description: "Automates tasks via command line scripts.",
      href: "/questions#shell-script",
    },
    {
      title: "CI/CD",
      icon: <Library className="w-8 h-8" />,
      description: "Streamlines code integration and deployment processes.",
      href: "/questions#ci-cd",
    },
    {
      title: "Git, GitHub & GitLab",
      icon: <HelpCircle className="w-8 h-8" />,
      description: "Version control for collaborative software development.",
      href: "/questions#git",
    },
    {
      title: "AWS",
      icon: <Search className="w-8 h-8" />,
      description: "Comprehensive cloud services for scalable applications.",
      href: "/questions#aws",
    },
    {
      title: "Ansible",
      icon: <Users className="w-8 h-8" />,
      description: "Automation tool for configuration management tasks. ",
      href: "/questions#linux",
    },
    {
      title: "Jenkins",
      icon: <Book className="w-8 h-8" />,
      description: "Automates CI/CD for efficient software delivery.",
      href: "/questions#jenkins",
    },
    {
      title: "Security & Monitoring",
      icon: <Library className="w-8 h-8" />,
      description: "Ensures system integrity and performance oversight.",
      href: "/questions#security-monitoring",
    },
    {
      title: "Managerial Questions",
      icon: <Library className="w-8 h-8" />,
      description: "Evaluates leadership skills and decision-making abilities.",
      href: "/questions#managerial",
    },
    {
      title: "Contact Support",
      icon: <Contact2 className="w-8 h-8" />,
      description: "Get in touch with our support team",
      href: "/contact",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Knowledge Modules</h1>
        <p className="text-lg text-muted-foreground">Explore our comprehensive collection of resources and guides</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.title} href={category.href}>
            <Card className="h-full transition-all hover:scale-105 hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/questions">
              <MessageCircle className="w-4 h-4 mr-2" />
              Browse All Questions
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <School className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

