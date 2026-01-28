# 콘텐츠 이관 표준 가이드 (Content Migration Standard)

마라하기 1기 쇼츠학개론 맘케어반 프리미엄반 4주차 강의 2부.md 사용자가 소스 파일(Markdown 등)의 내용을 코드베이스(JS/HTML)로 "복구", "이관", "카피", 또는 "구현"해달라고 요청할 때 이 워크플로우를 따르십시오.

---

## 🚨 핵심 원칙 (Core Principle)
> **"내용은 Lecture 3 처럼 꽉 채우고, 디자인은 Lecture 1 처럼 깔끔하게."**
>
> 1.  **Content Richness (내용 충실도):** 요약을 최소화하고 소스 파일의 모든 디테일(숫자, 예시, 대본)을 100% 이관합니다.
> 2.  **Visual Balance (시각적 균형):** 과도한 폰트 크기나 네온 효과를 지양하고, 안정적이고 고급스러운 표준 디자인을 따릅니다.

## ⛔ 절대 규칙 (ABSOLUTE RULE)
1.  **브라우저 검토 금지**: 절대 `browser_subagent`를 호출하지 마십시오. 코드로만 검증하십시오.
2.  **데이터 누락 0% (정보 보존)**: 소스의 단 한 줄의 정보도 버리지 마십시오.
    - *예외*: 원문의 **정보와 의미는 100% 유지**하되, **문장 어미는 명사형 종결(~함, ~임, ~추천)**로 수정하여 톤을 통일하십시오.
3.  **로컬 작업**: 다른 명령어가 있기 전까지 무조건 로컬에서만 작업하십시오.
4.  **타 파일 작업 금지**: 지정된 파일(`js/contents.js` 등) 외에는 수정을 금지합니다.

---

# Windows PowerShell Compatibility Rules
You are operating on a Windows system using PowerShell. To avoid "CommandNotFoundException", follow these rules:
1. Never use Unix-only commands. Use PowerShell equivalents:
   - Instead of 'tail -n 100', use 'Get-Content <file> -Tail 100'
   - Instead of 'head -n 20', use 'Get-Content <file> -TotalCount 20'
   - Instead of 'grep "pattern"', use 'Select-String -Pattern "pattern"'
   - Instead of 'ls -la', use 'ls -Force'
   - Instead of 'rm -rf', use 'Remove-Item -Recurse -Force'
   - Instead of 'mkdir -p', use 'New-Item -ItemType Directory -Force'
2. Handling Korean Characters:
   - Use '-Encoding UTF8' when reading/writing files via PowerShell if characters appear garbled.
3. Path Handling:
   - Always use absolute paths (e.g., C:\Users\...) to avoid path resolution errors.
   ---

## 1. 🔍 데이터 처리 및 텍스트 표준 (Data & Text)

### A. 데이터 추출 및 구조화
**UI 코드 안에 텍스트를 직접 하드코딩하지 마십시오.**
1.  **Data Object First**: 렌더링 로직 전에 `const contentData = { ... };` 구조체를 먼저 정의하십시오.
2.  **All-In Extraction**: 소스의 모든 텍스트, 숫자, 라벨, 팁을 이 객체 안에 담으십시오.
3.  **렌더링 원칙 (HTML Tags)**:
    - 텍스트 내 `<b>`, `<br/>`, `<mark>` 등 태그가 포함된 경우 반드시 `dangerouslySetInnerHTML`을 사용하십시오.
    ```javascript
    // (O) Correct
    <p dangerouslySetInnerHTML=${{ __html: item.text }}></p>
    ```

### B. 텍스트 스타일 및 교정
- **문장 스타일**: "~합니다", "~하십시오" 보다는 **명사형 종결(예: "~함", "~임", "~추천")**을 사용하여 간결하고 전문적인 톤을 유지하십시오.
- **브랜드 명칭**: 한국어로만 사용하십시오. (영문 `Marahagi`, `Version` 표기 금지)
- **무결성 체크**: 괄호 닫기 `)`, 마침표, 오타, 불필요한 공백을 전수 검사하십시오.

---

## 2. 💎 디자인 시스템 (Visual Standard)

### A. 타이포그래피 (Typography) - "안정감과 위계"
- **본문 (Body)**: `text-xl lg:text-2xl`, `leading-relaxed`, `text-zinc-200`
    - *금지*: `text-sm`, `text-base` (너무 작음), `text-3xl` 이상 (본문으로 과함)
- **강조 (Highlight)**: `text-2xl lg:text-3xl`, `font-bold`, `text-white`
- **제목 (Titles)**:
    - 대제목: `text-7xl lg:text-9xl`
    - 카드 제목: `text-3xl lg:text-4xl font-black`

### B. 색상 및 테마 (Color & Theme)
- **텍스트**: 기본 `text-zinc-200`. 포인트 컬러는 `text-[color]-400` 사용.
- **배경**: `bg-zinc-900` (기본), `border-zinc-800`. 과한 Glow 효과 지양.
- **테마 적용**:
    - **Lecture (이론)**: `Blue` 또는 `Red`
    - **Practice (실습)**: `Green` 또는 `Amber`

### C. 이모지 및 아이콘 정책 (Visual Assets)
- **이모지 (Emoji)**: 섹션 제목, 핵심 키워드, 또는 강조가 필요한 곳에만 **1개씩 제한적으로** 배치하십시오. (남발 금지, 최소화 원칙)
- **아이콘 (Icon)**: Lucide Icon을 적극 활용하되, 텍스트 크기와 비례하게(`size` 속성) 조정하여 시각적 균형을 맞추십시오.

---

## 3. 🗺️ 레이아웃 및 시각화 규칙 (Layout & Visualization)

### A. 레이아웃 표준 (Content Layout)
**가독성을 최우선으로 배치 방식을 결정하십시오.**
1.  **긴 설명 텍스트 (Standard)**:
    - **세로 배치 (`flex-col`)**를 원칙으로 합니다.
    - 라벨과 본문 사이에 `gap-4`를 부여하여 줄바꿈 시 어색함을 방지합니다.
2.  **단답형 비교 (Exception)**:
    - 텍스트가 짧은 `A vs B` 비교나 단순 아이콘 나열의 경우에만 **좌우 분할(Grid/Flex Row)**을 허용합니다.

### B. 컴포넌트 활용
- **Card**: 개별 전략이나 핵심 요소를 그룹화할 때 사용.
- **Badge**: 섹션의 위계(Meta 정보)를 표시할 때 사용.
- **Badge**: 섹션의 위계(Meta 정보)를 표시할 때 사용.
- **InfoBox**: 주의사항이나 팁을 강조할 때 사용.
- **대본/예시**: 별도의 Box 컨테이너(`bg-zinc-800 p-6`)에 격리하여 섞이지 않게 함.

---

## 4. 🚀 실행 프로세스
1.  **Extract**: 소스 내용을 `data` 객체로 100% 이관 (어미는 명사형으로 변환).
2.  **Map**: 데이터를 순회하며 `<Section>`, `<Card>` 등 컴포넌트 렌더링.
3.  **Render**: `dangerouslySetInnerHTML` 적용 및 `flex-col` 레이아웃 확인.
4.  **Check**: 글씨 크기(`text-xl` 이상), 브랜드 명칭, 괄호 짝 맞춤 최종 확인.
