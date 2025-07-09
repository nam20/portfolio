import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    name: "정보처리기능사",
    issuer: "한국산업인력공단",
    date: "2017.09",
    type: "certification",
    description: "정보시스템 개발 및 관리 국가 기술 자격증",
  },
]

export default function Certifications() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 자격증 섹션 */}
      <div>
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                    <Badge variant="outline" className="mt-2 w-fit">
                      {cert.date}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
