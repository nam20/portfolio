"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  period?: string
  achievements?: string[]
  onViewDetails?: () => void
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  period,
  achievements,
  onViewDetails,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="flex-none">
        <div className="space-y-2">
          <CardTitle className="text-xl leading-tight">{title}</CardTitle>
          {period && (
            <Badge variant="outline" className="w-fit text-xs">
              {period}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2">주요 성과</h4>
            <ul className="space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <h4 className="font-semibold text-sm mb-2">사용 기술</h4>
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-none pt-0">
        <Button variant="outline" size="sm" onClick={onViewDetails} className="w-full bg-transparent">
          <Eye className="h-4 w-4 mr-2" />
          상세보기
        </Button>
      </CardFooter>
    </Card>
  )
}
