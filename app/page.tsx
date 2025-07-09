"use client"

import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./components/project-card"
import ProjectModal from "./components/project-modal"
import TechStack from "./components/tech-stack"
import Experience from "./components/experience"
import Education from "./components/education"
import Certifications from "./components/certifications"
import { useState } from "react"
import { Mail, Phone } from "lucide-react"

// 수정된 projects 배열
const projects = [
  {
    id: 1,
    title: "AWS에서 IDC로의 인프라 이전",
    description:
      "서비스 규모 대비 과도한 AWS 클라우드 운영 비용을 60% 이상 절감하고 기술 내재화를 달성한 대규모 인프라 이전 프로젝트",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["AWS", "PostgreSQL", "Linux", "Ruby on Rails", "Docker", "Prometheus", "Grafana"],
    period: "2023.02 ~ 2023.06 (5개월)",
    achievements: [
      "월 고정 클라우드 비용 60% 이상 절감 (기존 대비 약 1/3 수준)",
      "자체 모니터링 시스템 구축으로 추가 라이선스 비용 제거",
      "인프라 운영 기술 팀 내부 내재화",
    ],
    details: {
      title: "AWS에서 IDC로의 인프라 이전 및 운영 비용 최적화",
      period: "2023.02 ~ 2023.06 (5개월)",
      summary: "월 고정 지출되던 클라우드 운영 비용 60% 이상 절감 및 기술 내재화 달성",
      problem:
        "서비스 규모 대비 과도한 AWS 클라우드 운영 비용이 비즈니스에 부담으로 작용하여, 비용 구조의 근본적인 개선이 시급한 과제였습니다. 목표는 서비스 안정성을 유지하면서 운영 비용을 획기적으로 절감하는 것이었습니다.",
      role: [
        "안정적인 데이터 마이그레이션 주도: 서비스 중단을 최소화하며 AWS RDS의 PostgreSQL DB 데이터를 성공적으로 신규 IDC 서버로 이전했습니다.",
        "애플리케이션 이전 및 신규 환경 테스트: Ruby on Rails로 개발된 '아만다' 운영 서버와 CMS 애플리케이션, 그리고 Docker 기반의 매출 집계 배치 프로그램 등 모든 애플리케이션을 IDC 서버로 이전하고 정상 동작을 검증했습니다.",
        "비용 효율적인 자체 모니터링 시스템 구축: 기존에 사용하던 상용 APM 솔루션(New Relic)을 대체하기 위해, 오픈소스인 Prometheus와 Grafana를 도입하여 IDC 환경에 최적화된 모니터링 시스템을 직접 구축했습니다.",
        "기존 AWS 리소스 정리: 이전 완료 후, 더 이상 불필요해진 모든 AWS 리소스를 안전하게 백업하고 완벽하게 제거하여 불필요한 비용이 발생하지 않도록 마무리했습니다.",
      ],
      results: [
        "클라우드 운영 비용 60% 이상 절감: 인프라 이전을 성공적으로 완료하여, 매월 고정 지출되던 클라우드 비용을 기존 대비 약 1/3 수준으로 대폭 절감했습니다. 이를 통해 회사의 재무 건전성 및 이익률 개선에 직접적으로 기여했습니다.",
        "운영 기술 내재화 및 추가 비용 제거: 자체 모니터링 시스템을 구축함으로써 고가의 상용 솔루션에 대한 의존도를 없애고, 인프라 운영 기술을 팀 내부에 성공적으로 내재화했습니다.",
      ],
      techStack: [
        "AWS (EC2, RDS, S3, Route53, CloudFront)",
        "PostgreSQL",
        "Linux",
        "Ruby on Rails",
        "Docker",
        "Prometheus",
        "Grafana",
      ],
      link: "#",
    },
  },
  {
    id: 2,
    title: "웹소켓 도입을 통한 익명 커뮤니티 실시간성 확보",
    description:
      "반복적인 API 호출을 제거하여 관련 서버 부하 80% 이상 감소 및 실시간(Real-time) 사용자 경험을 제공한 웹소켓 서버 구축 프로젝트",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Node.js", "Express.js", "Socket.IO", "Ruby on Rails"],
    period: "2023.09 (1개월)",
    achievements: [
      "서버 부하 80% 이상 감소 (HTTP Polling 제거)",
      "실시간 사용자 경험 제공 (1초 미만 지연시간)",
      "향후 실시간 기능 확장을 위한 기술적 토대 구축",
    ],
    details: {
      title: "웹소켓 도입을 통한 익명 커뮤니티 실시간성 확보 및 성능 최적화",
      period: "2023.09 (1개월)",
      summary: "반복적인 API 호출을 제거하여 관련 서버 부하 80% 이상 감소 및 실시간(Real-time) 사용자 경험 제공",
      problem:
        "익명 커뮤니티 서비스가 활성화되면서, 새로운 게시글과 댓글을 확인하기 위한 HTTP Polling 방식의 조회 API에 트래픽이 과도하게 집중되었습니다. 이로 인해 불필요한 API 호출이 서버에 막대한 부하를 주어 전체 서비스의 응답 속도에 악영향을 미쳤고, 사용자는 새로운 콘텐츠를 즉시 확인할 수 없어 실시간 소통이라는 커뮤니티의 핵심 가치가 훼손되었습니다.",
      role: [
        "Node.js 기반 웹소켓 서버 설계 및 구축: Node.js와 Socket.IO 라이브러리를 사용하여 다수의 사용자가 동시에 접속하고 실시간으로 이벤트를 주고받을 수 있는 신규 웹소켓 서버를 설계하고 구축했습니다.",
        "기존 시스템과의 유연한 연동: 사용자가 기존 Ruby on Rails 서버에 게시글/댓글을 작성하면, 해당 이벤트가 실시간으로 웹소켓 서버에 전달(emit)되어 연결된 모든 클라이언트에게 즉시 전파되도록 백엔드 시스템 간 연동 로직을 개발했습니다.",
        "통신 아키텍처 전환: 클라이언트(앱)가 커뮤니티 진입 시, 기존의 비효율적인 Polling API 호출 로직을 완전히 제거하고 웹소켓 서버에 연결하여 이벤트를 수신하는 방식으로 통신 구조를 전면 개편했습니다.",
      ],
      results: [
        "서버 부하 80% 이상 감소: 반복적인 조회 API 호출을 원천적으로 제거함으로써, 모니터링 시스템(Grafana)에서 유의미한 수준의 CPU 및 네트워크 사용량 감소를 즉각적으로 확인할 수 있었습니다. 이를 통해 서버 리소스를 확보하고 전체 서비스의 안정성을 크게 높였습니다.",
        "사용자 경험(UX)의 혁신적인 개선: 사용자는 더 이상 화면을 새로고침하거나 폴링 주기를 기다릴 필요 없이 새로운 게시글과 댓글을 1초 미만의 지연 시간으로 확인할 수 있게 되었습니다. 이는 커뮤니티의 활성도를 높이는 데 직접적으로 기여했습니다.",
        "향후 확장성 확보: 실시간 통신 기반을 마련함으로써, 향후 '실시간 알림', '동시 접속자 수 표시' 등 다양한 양방향 인터랙션 기능을 최소한의 비용으로 확장할 수 있는 기술적 토대를 구축했습니다.",
      ],
      techStack: ["Node.js", "Express.js", "Socket.IO", "Ruby on Rails"],
      link: "#",
    },
  },
  {
    id: 3,
    title: "회원가입 퍼널 개선을 통한 신규 사용자 이탈률 감소",
    description:
      "신규 사용자 회원가입 과정 이탈률 20% 감소 및 가입 전환율(CVR) 개선을 통해 마케팅 효율성을 높인 UX 개선 프로젝트",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Ruby on Rails", "PostgreSQL", "AngularJS"],
    period: "2023.01 ~ 2023.02 (2개월)",
    achievements: [
      "가입 이탈률 20% 감소",
      "신규 사용자 확보 증대 및 마케팅 효율성 향상",
      "양질의 사용자 데이터 확보로 개인화 매칭 기반 마련",
    ],
    details: {
      title: "회원가입 퍼널(Funnel) 개선을 통한 신규 사용자 이탈률 감소",
      period: "2023.01 ~ 2023.02 (2개월)",
      summary: "신규 사용자 회원가입 과정 이탈률 20% 감소 및 가입 전환율(CVR) 개선",
      problem:
        "기존 회원가입 프로세스는 한 페이지에서 과도하게 많은 정보를 요구하여 사용자에게 높은 피로감을 주었습니다. 이로 인해 많은 잠재 사용자가 프로필 작성을 완료하지 않고 중간에 이탈하는 문제가 발생했으며, 이는 신규 사용자 확보에 큰 걸림돌이었습니다.",
      role: [
        "단계별 데이터 처리를 위한 API 재설계: 기존의 단일 회원가입 API를 여러 단계로 분리되는 개선된 UX 흐름에 맞춰 세분화했습니다. 각 단계에서 입력된 정보를 저장하고, 최종 단계에서 회원가입을 완료하는 로직을 안정적으로 구현했습니다.",
        "신규 프로필 정보 저장을 위한 DB 스키마 확장: 개편 과정에서 새롭게 추가된 다수의 사용자 프로필 정보를 저장하기 위해, PostgreSQL DB 스키마 변경 작업을 수행했습니다. 기존 데이터와의 호환성을 유지하며 안전하게 마이그레이션을 완료했습니다.",
        "운영 지원을 위한 CMS 기능 개발: 운영팀이 개편된 프로세스를 통해 가입한 사용자의 상세 프로필 정보를 효율적으로 조회하고 관리할 수 있도록, 관리자(CMS) 페이지에 관련 조회 및 수정 기능을 신규로 개발하여 운영 편의성을 높였습니다.",
      ],
      results: [
        "가입 이탈률 20% 감소: 가입 프로세스의 허들을 낮춘 결과, 회원가입 완료율이 증가했으며, 개편 전후 지표 비교를 통해 가입 중도 이탈률이 이전 대비 약 20% 감소하는 것을 확인했습니다.",
        "신규 사용자 확보 증대: 가입 전환율이 향상됨에 따라 마케팅 비용 대비 더 많은 신규 사용자를 확보할 수 있게 되어, 서비스의 전반적인 성장세에 직접적으로 기여했습니다.",
        "양질의 사용자 데이터 확보: 가입 프로세스를 완주하는 사용자가 늘어남에 따라, 더 풍부하고 정확한 사용자 프로필 데이터를 확보하여 향후 개인화 매칭 및 서비스 고도화의 기반을 마련했습니다.",
      ],
      techStack: ["Ruby on Rails", "PostgreSQL", "AngularJS"],
      link: "#",
    },
  },
  {
    id: 4,
    title: "아만다 서비스 전면 개편 대응",
    description: "앱 전면 개편 프로젝트의 성공적인 백엔드 지원, 신규 기능의 안정적 런칭 및 사용자 경험(UX) 향상에 기여",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Ruby on Rails", "PostgreSQL", "AngularJS"],
    period: "2023.04 ~ 2023.07 (4개월)",
    achievements: [
      "대규모 개편 프로젝트의 안정적인 런칭 성공",
      "사용자 만족도 및 리텐션 지표 유의미한 향상",
      "운영팀 심사 처리 시간 단축 및 업무 효율성 증대",
    ],
    details: {
      title: "아만다 서비스 전면 개편 대응",
      period: "2023.04 ~ 2023.07 (4개월)",
      summary: "앱 전면 개편 프로젝트의 성공적인 백엔드 지원, 신규 기능의 안정적 런칭 및 사용자 경험(UX) 향상에 기여",
      problem:
        "'아만다' 서비스의 프론트엔드 기술 스택 변경 및 기능 대규모 개편 프로젝트가 결정되었습니다. 이는 기존의 UI/UX를 개선하고 새로운 기능을 도입하기 위함이었으나, 백엔드 입장에서는 대대적인 페이지 구조 변경과 핵심 로직(회원 심사, 매칭) 변화에 안정적으로 대응해야 하는 큰 기술적 과제였습니다.",
      role: [
        "개편된 페이지 구조에 맞춘 API 최적화: 앱의 페이지 구조가 대폭 변경됨에 따라, 기존 조회 API들을 새로운 화면 구성에 맞게 수정하고 최적화했습니다. 불필요한 데이터를 줄이고 응답 속도를 개선하여, 개편된 앱의 사용자 경험을 극대화했습니다.",
        "핵심 비즈니스 로직 수정 및 안정화: 서비스의 핵심인 '회원 심사'와 '사용자 매칭' 로직 변경에 대응했습니다. 특히, 운영자가 변경된 심사 기준에 따라 효율적으로 업무를 수행할 수 있도록 관리자(CMS)의 심사/관리 페이지와 관련 API를 전면 수정했습니다. 변경된 매칭 로직을 주기적으로 실행하는 배치 프로그램을 수정하고, 수차례의 테스트를 통해 데이터 정합성과 안정성을 확보했습니다.",
        "신규 기능 API 개발: 앱 개편과 함께 추가된 신규 기능(예: 신규 매칭 기능)의 요구사항을 분석하고, 확장성을 고려하여 백엔드 API를 설계하고 개발했습니다.",
      ],
      results: [
        "대규모 개편 프로젝트의 안정적인 런칭 성공: 백엔드 시스템의 선제적인 대응과 안정적인 지원을 통해, '아만다' 서비스의 전면 개편 프로젝트를 정해진 일정 내에 심각한 장애 없이 성공적으로 런칭하는 데 기여했습니다.",
        "사용자 경험(UX) 및 만족도 향상: 개선된 UI/UX와 안정적인 백엔드 시스템이 시너지를 일으켜, 사용자 만족도 및 리텐션 지표가 유의미하게 향상되었습니다.",
        "운영 효율성 증대: 변경된 심사 로직에 최적화된 CMS 기능을 제공함으로써, 운영팀의 심사 처리 시간을 단축하고 업무 효율을 높이는 데 기여했습니다.",
      ],
      techStack: ["Ruby on Rails", "PostgreSQL", "AngularJS"],
      link: "#",
    },
  },
  {
    id: 5,
    title: "신규 서비스 '시크릿 스퀘어' 런칭 및 운영 시스템 구축",
    description:
      "신규 서비스 런칭으로 DAU 30% 증가, 서비스 전체 매출 40% 이상 증대에 기여한 커뮤니티 서비스 개발 프로젝트",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Ruby on Rails", "PostgreSQL", "AngularJS", "Sidekiq"],
    period: "2021.09 ~ 2021.12 (4개월)",
    achievements: [
      "서비스 전체 매출 40% 이상 증대",
      "일일 활성 사용자(DAU) 30% 증가",
      "안정적인 서비스 운영 기반 마련",
    ],
    details: {
      title: "신규 서비스 '시크릿 스퀘어' 런칭 및 운영 시스템 구축",
      period: "2021.09 ~ 2021.12 (4개월)",
      summary: "신규 서비스 런칭으로 DAU 30% 증가, 서비스 전체 매출 40% 이상 증대에 기여",
      problem:
        "기존의 1:1 매칭 중심이었던 '아만다' 서비스는 사용자들이 앱에 머무르는 시간이 짧다는 한계가 있었습니다. 이를 극복하고 사용자 리텐션과 신규 수익 모델을 창출하기 위해, 익명 커뮤니티 서비스 '시크릿 스퀘어'를 신규 개발하는 프로젝트가 시작되었습니다.",
      role: [
        "커뮤니티 콘텐츠 관리 시스템 구축: 운영자가 사용자들이 작성한 수많은 게시글과 댓글을 실시간으로 모니터링하고 관리할 수 있는 CMS 페이지와 API를 개발했습니다. 이를 통해 서비스 정책에 위배되는 콘텐츠에 신속하게 대응할 수 있는 기반을 마련했습니다.",
        "사용자 제재 및 어뷰징 방지 기능 개발: 건전한 커뮤니티 환경 조성을 위해, 신고된 불량 사용자를 조회하고 커뮤니티 이용을 제한하는 제재 기능을 개발했습니다. 이를 통해 서비스 안정성을 높이고 대다수 선량한 사용자의 경험을 보호했습니다.",
        "마케팅 자동화를 통한 사용자 재방문 유도: 운영자가 직접 인기 게시글을 선정하여 다수의 사용자에게 앱 푸시(Push)를 예약 발송할 수 있는 기능을 개발했습니다. 이는 수동 작업 없이도 사용자의 재방문을 효과적으로 유도하는 강력한 마케팅 도구가 되었습니다.",
      ],
      results: [
        "서비스 전체 매출 40% 이상 증대: '시크릿 스퀘어' 내 신규 재화 소모 모델이 큰 호응을 얻어, 서비스 런칭 후 '아만다' 전체 매출이 40~50% 급증하는 데 결정적인 역할을 했습니다.",
        "일일 활성 사용자(DAU) 30% 증가: 새로운 즐길 거리를 제공함으로써 사용자들이 앱에 더 오래 머무르게 되었고, 그 결과 핵심 지표인 DAU가 30% 이상 유의미하게 상승했습니다.",
        "안정적인 서비스 운영 기반 마련: CMS 구축을 통해 운영팀의 커뮤니티 관리 효율을 높이는 데 기여했습니다. 특히 사용자가 급증하는 시기에도 안정적인 운영이 가능하도록 지원하여 서비스의 장기적인 성공에 이바지했습니다.",
      ],
      techStack: ["Ruby on Rails", "PostgreSQL", "AngularJS", "Sidekiq"],
      link: "#",
    },
  },
]

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 mx-auto">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">남희준</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                연락처
              </Link>
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                소개
              </Link>
              <Link href="#tech-stack" className="transition-colors hover:text-foreground/80">
                기술스택
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                경력
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                프로젝트
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                학력
              </Link>
              <Link href="#certifications" className="transition-colors hover:text-foreground/80">
                자격증
              </Link>
            </nav>
          </div>
          <Link href="/resume.pdf" download="남희준_이력서.pdf" className="ml-auto">
            <Button variant="outline" className="bg-transparent">
              이력서 보기
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 md:px-6">
        {/* 1. 연락처 및 링크 */}
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  안녕하세요, 백엔드 개발자 남희준입니다
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  비즈니스를 이해하고 함께 성장하는 백엔드 개발자입니다
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                  <Link
                    href="https://github.com/nam20"
                    target="_blank"
                    className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <div className="text-left flex-1">
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium hover:text-primary transition-colors">github.com/nam20</p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div className="text-left flex-1">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">skagmlwns123@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div className="text-left flex-1">
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">010-5501-9916</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 자기소개 */}
        <section id="about" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">자기소개</h2>
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                안녕하세요. 비즈니스를 이해하고 함께 성장하는 백엔드 개발자 남희준입니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                3년 2개월간 데이팅 서비스 '아만다'의 백엔드 시스템을 책임지는 테크랩스에서 근무하며 산업기능요원으로
                병역 의무를 이행했습니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                저는 대규모 트래픽 환경에서 서버 성능 최적화, 클라우드 비용 효율화, 안정적인 인프라 운영과 같은 기술적
                과제를 해결하는 데 집중했습니다. 또한, 사용자 경험 개선과 비즈니스 성장을 위한 신규 기능 개발을 주도하며
                서비스의 성공에 직접 기여한 경험이 있습니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                이러한 경험을 바탕으로 귀사의 비즈니스에 실질적인 가치를 더하고 싶습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 3. 기술 스택 */}
        <section id="tech-stack" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">기술 스택</h2>
            <TechStack />
          </div>
        </section>

        {/* 4. 경력 */}
        <section id="experience" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">경력</h2>
            <Experience />
          </div>
        </section>

        {/* 5. 프로젝트 */}
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">프로젝트</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  tags={project.tags}
                  period={project.period}
                  achievements={project.achievements}
                  onViewDetails={() => handleViewDetails(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 6. 학력 */}
        <section id="education" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">학력</h2>
            <Education />
          </div>
        </section>

        {/* 7. 자격증 및 기타 */}
        <section id="certifications" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              자격증 및 기타
            </h2>
            <Certifications />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 mx-auto">
          
        </div>
      </footer>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject.details} />
      )}
    </div>
  )
}
