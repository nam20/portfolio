import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

const educations = [
  {
    school: "한국방송통신대학교",
    degree: "컴퓨터과학과",
    period: "졸업: 2025.02",
    gpa: "4.0/4.5",
    description: "컴퓨터 과학 기초 이론과 소프트웨어 개발 실무 학습",
    courses: ["자료구조 및 알고리즘", "데이터베이스 시스템", "소프트웨어 공학", "웹 프로그래밍", "운영체제"],
  },
]

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {educations.map((edu, index) => (
        <Card key={index} className="relative">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{edu.school}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <Badge variant="outline">{edu.period}</Badge>
                    {edu.gpa && <span className="text-sm text-muted-foreground">학점: {edu.gpa}</span>}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{edu.description}</p>

            <div>
              <h4 className="font-semibold mb-2">주요 과목</h4>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course) => (
                  <Badge key={course} variant="secondary" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
