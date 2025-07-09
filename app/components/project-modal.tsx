"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Calendar, Target, User, Trophy } from "lucide-react"
import Link from "next/link"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    period: string
    summary: string
    problem: string
    role: string[]
    results: string[]
    techStack: string[]
    link?: string
  }
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {project.period}
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* 성과 요약 */}
          <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg">성과 요약</h3>
            </div>
            <p className="text-sm leading-relaxed">{project.summary}</p>
          </div>

          {/* 문제 정의 */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              문제 정의 (Problem)
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed pl-8">{project.problem}</p>
          </div>

          {/* 나의 역할 및 기여 */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              나의 역할 및 기여 (My Role & Contribution)
            </h3>
            <div className="pl-8 space-y-3">
              {project.role.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <User className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 성과 */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              성과 (Result)
            </h3>
            <div className="pl-8 space-y-3">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Trophy className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 사용 기술 */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              사용한 기술 (Tech Stack)
            </h3>
            <div className="pl-8">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* 액션 버튼 */}
          {project.link && project.link !== "#" && (
            <div className="flex justify-center pt-4">
              <Link href={project.link} target="_blank">
                <Button className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  프로젝트 보기
                </Button>
              </Link>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
