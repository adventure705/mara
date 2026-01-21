---
description: [내용은 풍성하게(Lec3) + 디자인은 정제되게(Lec1)] 무결점 콘텐츠 이관 프로토콜
---

사용자가 소스 파일(Markdown 등)의 내용을 코드베이스(JS/HTML)로 "복구", "이관", "카피", 또는 "구현"해달라고 요청할 때 이 워크플로우를 따르십시오.

## 🚨 핵심 원칙 (Core Principle)
> **"내용은 Lecture 3 처럼 꽉 채우고, 디자인은 Lecture 1 처럼 깔끔하게."**
>
> 1.  **Content Richness (내용 충실도):** 요약을 최소화하고 소스 파일의 모든 디테일(숫자, 예시, 대본)을 100% 이관합니다. (Lecture 3 Part 3 수준)
> 2.  **Visual Balance (시각적 균형):** 과도한 폰트 크기나 네온 효과를 지양하고, 안정적이고 고급스러운 표준 디자인을 따릅니다. (Lecture 1 Part 1 수준)

## ⛔ 절대 규칙 (ABSOLUTE RULE)
- **브라우저 검토 금지**: 절대 `browser_subagent`를 호출하지 마십시오. 코드로만 검증하십시오.
- **데이터 누락 0%**: 소스의 단 한 줄의 정보도 버리지 마십시오.
- **로컬 작업**: 다른 명령어가 있기 까지 무조건 로컬에서만 작업하십시오
- ** 타 md 파일 작업 금지**: 상단에 언급된 md 파일 외에는 작업하지마세요.
---

## 1. 🔍 심층 소스 분석 & 데이터 분리 Strategy [CRITICAL]
**UI 코드 안에 텍스트를 직접 하드코딩하지 마십시오.**

1.  **Data Object Definition**: 렌더링 로직 전에 `const contentData = { ... };` 구조체를 먼저 정의하십시오.
2.  **All-In Extraction**: 소스 파일의 모든 텍스트, 숫자, 라벨, 팁, 대본을 이 객체 안에 "원문 그대로" 담으십시오.
    - *Tip*: 내용이 많아도 절대 요약하지 마십시오. 배열(`items[]`, `details[]`)을 활용해 리스트로 구조화하십시오.
3.  **Mapping Rendering**: `return html` 내부에서는 반드시 `contentData`를 순회(`map`)하여 렌더링하십시오.

## 2. 💎 디자인 시스템 (Visual Standard: Lec 1 Part 1)
Lecture 3의 과도함(초대형 폰트, 눈부신 색상)을 버리고, 아래의 정제된 기준을 따르십시오.

### A. 타이포그래피 (Typography) - "안정감과 위계"
- **본문 (Body)**: `text-xl lg:text-2xl`, `leading-relaxed`, `text-zinc-200`
    - *절대 금지*: `text-sm`, `text-base` (너무 작음), `text-3xl` 이상 (본문으로 쓰기에 너무 큼).
- **강조/데이터 (Highlight)**: `text-2xl lg:text-3xl`, `font-bold`, `text-white`
    - *주의*: 정말 중요한 메인 숫자만 제한적으로 더 키울 수 있음.
- **제목 (Titles)**:
    - 대제목 (H1/Hero): `text-7xl lg:text-9xl` (오버하지 않기, Lec 1 규격 준수)
    - 카드 제목 (H3): `text-3xl lg:text-4xl font-black`
- **라벨 (Label)**: `text-lg lg:text-xl font-bold uppercase text-zinc-400/500`

### B. 색상 밸런스 (Color Balance) - "눈이 편안한 프리미엄"
- **텍스트 베이스**: `text-white` 남발 금지. 기본은 **`text-zinc-200`**(약간 회색 섞인 흰색)을 사용하여 눈의 피로를 줄입니다.
- **포인트 컬러**: 주제별 색상(Blue, Red 등)을 사용하되, `text-[color]-400` 수준으로 명도를 조절합니다.
- **배경**: `bg-zinc-900` (기본), `border-zinc-700` (테두리). 과한 `glow` 효과나 복잡한 그라데이션 대신 깔끔한 `border` 위주로 처리합니다.

### C. 레이아웃 & 컴포넌트 (Layout Structure)
- **Card 중심**: 복잡한 지그재그/비대칭 그리드보다는 안정적인 `Grid` (`grid-cols-1 lg:grid-cols-2`) 시스템을 선호합니다.
- **리스트 스타일**: 본문의 긴 내용은 불릿(`●` 등)을 활용한 리스트나, 깔끔한 박스(`<div className="bg-black/30 p-4 rounded-xl ...">`)로 정리하여 가독성을 높입니다.

---

## 3. 🗺️ 콘텐츠 시각화 매핑 규칙
풍성한 내용(Lec 3)을 깔끔한 디자인(Lec 1)에 담는 방법:

1.  **긴 설명 텍스트**:
    - 통으로 쓰지 말고, 문단이나 의미 단위로 쪼개어 배열(`text[]`)에 담고 `map`으로 뿌립니다.
    - 예: `details: [{ label: "전략", value: "..." }, { label: "주의", value: "..." }]`
2.  **데이터/숫자**:
    - 별도의 강조 박스나 `Badge` 컴포넌트로 깔끔하게 감쌉니다.
3.  **대본/예시**:
    - 별도의 `Box` 컨테이너(`bg-zinc-800 p-6 rounded`)에 격리하여 보여줍니다.

## 4. 🚀 실행 프로세스
1.  소스의 내용을 `data` 객체로 전부 옮깁니다. (내용 누락 0%)
2.  `Lecture 1 Part 1` 스타일의 컴포넌트(`<Section>`, `<Card>`, `<Badge>`)를 사용하여 데이터를 렌더링합니다.
3.  최종 결과물이 **"정보량은 많지만, 보기에 깔끔한지"** 자가 점검합니다.
    - *Check*: 글씨가 너무 커서 산만하지 않은가? (`text-3xl` 본문 발견 시 즉시 `text-xl`로 축소)
    - *Check*: 내용이 생략된 부분은 없는가? (소스와 대조 확인)

"High-Fidelity Content, Refined Basics." 이 원칙으로 이관을 시작하십시오.