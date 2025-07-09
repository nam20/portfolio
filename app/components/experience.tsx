import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "테크랩스 (Techlabs)",
    position: "백엔드 개발자",
    period: "2020.12 ~ 2024.01 (3년 2개월)",
    description:
      "데이팅 서비스 '아만다', '너랑나랑'의 백엔드 시스템 개발 및 운영을 담당했습니다. 안정적인 서비스 제공과 비즈니스 성장을 위한 기술적 과제를 해결하는 데 집중했습니다.",
    note: "해당 경력으로 산업기능요원 대체 복무를 완료했습니다.",
    responsibilities: [
      {
        title: "백엔드 시스템 개발 및 운영",
        description:
          "Ruby on Rails 기반의 서비스 API를 개발하고, AWS 환경에서 서비스를 배포 및 운영했습니다. 신규 기능 추가와 레거시 코드 개선을 지속적으로 담당했습니다.",
      },
      {
        title: "데이터 처리 및 분석 지원",
        description:
          "PostgreSQL 기반의 데이터 웨어하우스(DW)를 관리하고, 비즈니스 지표 산출을 위한 데이터 집계 배치 프로그램을 개발 및 운영했습니다.",
      },
      {
        title: "운영 시스템 개발 및 효율화",
        description:
          "서비스 운영 및 CS 대응 효율화를 위한 관리자(CMS)의 페이지와 API를 개발하고, 반복적인 수동 업무를 자동화하는 기능을 구현하여 팀의 생산성을 높였습니다.",
      },
    ],
    skills: ["Ruby on Rails", "Node.js", "PHP", "AWS", "Docker", "PostgreSQL", "AngularJS"],
  },
  {
    company: "지그탑 (Zigtap)",
    position: "모바일 QA",
    period: "2017.08 ~ 2019.08 (2년 1개월)",
    description: "모바일 애플리케이션의 품질 보증(QA) 및 성능 벤치마크 업무를 담당했습니다.",
    responsibilities: [
      {
        title: "서비스 품질 보증(QA) 수행",
        description:
          "다양한 테스트 시나리오를 기반으로 기능 및 비기능(성능, 호환성) 테스트를 수행하여 서비스의 안정성과 완성도를 높이는 데 기여했습니다. 이 경험은 개발자로서 사용자 관점의 품질과 잠재적인 사이드 이펙트를 예측하는 역량을 기르는 데 중요한 초석이 되었습니다.",
      },
    ],
  },
]

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="relative">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle className="text-xl">{exp.position}</CardTitle>
                <p className="text-lg font-semibold text-primary">{exp.company}</p>
              </div>
              <Badge variant="outline" className="w-fit">
                {exp.period}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

            {exp.note && (
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-700 dark:text-blue-300">{exp.note}</p>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-3">주요 업무</h4>
              <div className="space-y-4">
                {exp.responsibilities.map((responsibility, i) => (
                  <div key={i} className="space-y-2">
                    <h5 className="font-medium text-sm">{responsibility.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-muted">
                      {responsibility.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {exp.skills && (
              <div>
                <h4 className="font-semibold mb-2">사용 기술</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
