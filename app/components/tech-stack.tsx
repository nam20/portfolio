import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Backend",
    skills: [
      { name: "Ruby", type: "language" },
      { name: "Node.js", type: "language" },
      { name: "Java", type: "language" },
      { name: "PHP", type: "language" },
      { name: "Ruby on Rails", type: "framework" },
      { name: "Express.js", type: "framework" },
      { name: "Spring Boot", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "MySQL", type: "database" },
      { name: "Redis", type: "cache" },
      { name: "Sidekiq", type: "queue" },
      { name: "RESTful API", type: "api" },
      { name: "WebSocket", type: "api" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", type: "cloud" },
      { name: "Docker", type: "container" },
      { name: "Linux", type: "server" },
      { name: "Nginx", type: "server" },
      { name: "Jenkins", type: "cicd" },
      { name: "GitHub Actions", type: "cicd" },
      { name: "Prometheus", type: "monitoring" },
      { name: "Grafana", type: "monitoring" },
      { name: "New Relic", type: "monitoring" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "AngularJS", type: "framework" },
      { name: "Vue.js", type: "framework" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", type: "version" },
      { name: "GitHub", type: "version" },
      { name: "Postman", type: "api" },
      { name: "Apache Zeppelin", type: "data" },
      { name: "Figma", type: "design" },
    ],
  },
]

const getSkillColor = (type: string) => {
  const colors = {
    language: "bg-blue-100 text-blue-800 ring-blue-600/20 dark:bg-blue-900/20 dark:text-blue-300",
    framework: "bg-green-100 text-green-800 ring-green-600/20 dark:bg-green-900/20 dark:text-green-300",
    database: "bg-purple-100 text-purple-800 ring-purple-600/20 dark:bg-purple-900/20 dark:text-purple-300",
    cache: "bg-orange-100 text-orange-800 ring-orange-600/20 dark:bg-orange-900/20 dark:text-orange-300",
    queue: "bg-orange-100 text-orange-800 ring-orange-600/20 dark:bg-orange-900/20 dark:text-orange-300",
    api: "bg-indigo-100 text-indigo-800 ring-indigo-600/20 dark:bg-indigo-900/20 dark:text-indigo-300",
    cloud: "bg-yellow-100 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-900/20 dark:text-yellow-300",
    container: "bg-cyan-100 text-cyan-800 ring-cyan-600/20 dark:bg-cyan-900/20 dark:text-cyan-300",
    monitoring: "bg-red-100 text-red-800 ring-red-600/20 dark:bg-red-900/20 dark:text-red-300",
    server: "bg-gray-100 text-gray-800 ring-gray-600/20 dark:bg-gray-800/20 dark:text-gray-300",
    cicd: "bg-pink-100 text-pink-800 ring-pink-600/20 dark:bg-pink-900/20 dark:text-pink-300",
    version: "bg-slate-100 text-slate-800 ring-slate-600/20 dark:bg-slate-800/20 dark:text-slate-300",
    data: "bg-emerald-100 text-emerald-800 ring-emerald-600/20 dark:bg-emerald-900/20 dark:text-emerald-300",
    design: "bg-violet-100 text-violet-800 ring-violet-600/20 dark:bg-violet-900/20 dark:text-violet-300",
    default: "bg-primary/10 text-primary ring-primary/20",
  }
  return colors[type as keyof typeof colors] || colors.default
}

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill.name}
                className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset ${getSkillColor(skill.type)}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}
