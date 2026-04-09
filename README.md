# Claude Code Basic — 입문 교육

Claude Code 90분 입문 교육 자료 저장소.

## 핵심 프레임

출처 기반 2-모드 프레임으로 Claude Code를 소개합니다.

1. **Vibe coding** — 한 번의 자연어 지시로 만들어내는 즉흥 모드
2. **Agentic coding + Harness engineering** — 모델이 자율적으로 돌리는 실행 루프와, 그 루프가 돌아가는 환경·규칙을 설계하는 층위

> 근거:
> - Anthropic, [Claude Code Best Practices](https://code.claude.com/docs/en/best-practices) — *agentic coding environment* 정의
> - LangChain, [The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/) — **Agent = Model + Harness**
> - Martin Fowler, [Harness Engineering](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html) — Guides/Sensors 설계 실천

## 구성

- [site/](site/) — Nextra 기반 교육 사이트 (세션 콘텐츠 + 참고 자료)
- [docs/](docs/) — 커리큘럼, 퍼실리테이션 가이드, 데모 스크립트
- [sample-team/](sample-team/) — 실습·데모용 가상 팀 문서 데이터셋
- [CLAUDE.md](CLAUDE.md) — 저장소 작업 원칙이자 하네스 라이브 데모 소재

## 교육 개요

| 항목 | 내용 |
|---|---|
| 대상 | Claude Code 첫 경험자 |
| 시간 | 90분 단일 세션 |
| 도착점 | 바이브 코딩을 넘어 에이전틱 코딩·하네스 엔지니어링으로 가는 첫 걸음을 직접 체험 |

## 빠르게 시작

```bash
cd site
npm install
npm run dev
```

## 설계 문서

- [커리큘럼 90분 구성](docs/curriculum.md)
- [퍼실리테이션 가이드](docs/facilitation-guide.md)
- [데모 스크립트](docs/demo-scripts/)
