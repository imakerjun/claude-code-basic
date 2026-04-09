# 90분 커리큘럼

## 학습 목적

Claude Code로 바이브 코딩을 넘어 **에이전틱 코딩·하네스 엔지니어링으로 가는 첫 걸음**을 직접 체험한다.

## 개념 프레임 (출처 기반 2-모드)

| 모드 | 이름 | 한 줄 | 1차 출처 |
|---|---|---|---|
| 1 | Vibe coding | 자연어 한 방 프롬프트 | — |
| 2 | **Agentic coding + Harness engineering** | 자율 실행 루프 + 그 루프가 도는 환경·규칙의 설계 | Anthropic · LangChain · Martin Fowler |

- **Agentic coding** — Anthropic, [Claude Code Best Practices](https://code.claude.com/docs/en/best-practices): *"Claude Code is an agentic coding environment… can read your files, run commands, make changes, and autonomously work through problems."*
- **Harness engineering** — LangChain, [The Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/) (**Agent = Model + Harness**) · Martin Fowler / Böckeler, [Harness Engineering](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html) (**Guides/Sensors** 설계 실천)

## 설계 근거

| 이론 | 적용 |
|---|---|
| Andragogy (Knowles) | 첫 5분에 relevance 선언 |
| Cognitive Load (Sweller) | worked example 위주, 실습은 1회 짧게 |
| TAM (Davis) | perceived usefulness가 수강자 본인에게 형성되도록 설계 |
| Executive Ed | 체험 → 성찰 → 적용 계획 사이클 |

## 타임테이블

| 시간 | 섹션 | 분 | 모드 | 방식 |
|---|---|---|---|---|
| 0~10 | Opening · 2-모드 프레임 | 10 | 전체 | 강의 + 녹화 데모 |
| 10~25 | 바이브 대비 + 에이전틱 첫 체감 (L1~L2) | 15 | Vibe → Agentic | Worked Example |
| 25~40 | 에이전틱 루프 심화 (L3~L5) | 15 | Agentic | Worked Example |
| 40~55 | 실습 — 본인 노트북에서 재현 | 15 | Agentic | 핸즈온 |
| 55~75 | **하네스 엔지니어링** | 20 | Harness | 강의 + 라이브 데모 |
| 75~90 | 도입 시 고려사항 | 15 | 조직 | 강의 |

## 섹션 상세

### 0~10분 · Opening

1. (2분) **녹화 데모 재생**: 가벼운 웹앱 한 방 생성 (vibe coding 예시)
2. (1분) 재프레이밍: 방금 본 것이 Vibe coding. 오늘은 그 이후의 층위를 다룬다.
3. (7분) 2-모드 프레임 설명 (Vibe / Agentic + Harness, 출처 인용 포함)

### 10~25분 · 바이브 대비 + 에이전틱 첫 체감 (L1~L2)

대상: [`sample-team/`](../sample-team/) 가상 팀 문서 폴더

- **L1**: "`sample-team/회의록/2026-03-15-주간회의.md` 뭐라고 써있어?" — 단일 파일 요약
- **L2**: "`sample-team/` 폴더 전체를 보고 이 팀이 뭐 하는 팀인지 설명해줘" — 자율 탐색

L2에서 Claude Code가 Glob·Read 도구를 스스로 호출하는 장면이 Anthropic의 *"agentic coding environment"* 정의를 눈앞에 보여주는 첫 증거다.

### 25~40분 · 에이전틱 루프 심화 (L3~L5)

- **L3**: "최근 회의록 3개를 읽고 아직 처리 안 된 액션 아이템만 담당자별로 정리해줘"
- **L4**: "다음 주 회의 아젠다를 계획으로 만들어줘. 근거 문서 링크 포함"
- **L5**: "그 계획대로 `sample-team/회의록/2026-04-12-회의-아젠다.md` 파일을 실제로 만들어줘"

읽기만 하던 루프가 **상태를 바꾸는 루프**(Write 발생)로 넘어가는 지점이 L5다.

### 40~55분 · 실습

- 각자 노트북에서 `sample-team/` 폴더에 질문 1개 던지기
- 성공 보장 프롬프트 제공
- 실습 직후 30초 페어 회고: "방금 무엇이 놀라웠나요?"

**성공 보장 프롬프트**:
> sample-team 폴더 전체를 훑어보고 이 팀의 Q2 주요 과제 3개를 우선순위와 함께 알려줘.

### 55~75분 · 하네스 엔지니어링

**핵심 메시지**: agentic 루프가 어떤 환경·규칙 안에서 돌지를 설계한다. **Agent = Model + Harness.**

1. **(10분) CLAUDE.md 라이브 데모**
   - 빈 CLAUDE.md 상태에서 "다음 주 회의 아젠다를 만들어줘" 요청 → 결과 관찰
   - CLAUDE.md에 "모든 응답은 존댓말로 작성한다", "회의 아젠다는 최대 5개 항목까지만 쓴다" 두 줄 추가
   - 동일 요청 반복 → 행동 변화를 실시간으로 관찰

2. **(5분) Skills 라이브 데모**
   - 반복되는 워크플로우를 이름으로 부른다는 개념
   - 이 교육 자료 제작에 쓴 `expert-panel` skill 호출 장면을 재생

3. **(3분) Agents 언급만**
   - "역할 기반 위임" 개념만 소개 (예: 코드 리뷰어, 보안 검토자)

4. **(2분) Hooks 언급만**
   - "정책의 자동 집행" 개념만 소개 (예: 커밋 전 정책 검증)

### 75~90분 · 도입 시 고려사항

- **보안**: 민감 데이터 경계, 사내 리포지터리 취급
- **품질**: 검증 없이 AI 결과 수용 금지, 사람의 리뷰 루프
- **팀 온보딩**: CLAUDE.md를 팀 문서의 일부로 관리
- **거버넌스**: 라이선스, 감사 추적
