// --- js/contents.js ---
(function () {
    const html = window.htm.bind(window.React.createElement);
    const LucideIcon = window.LucideIcon;

    // --- Common UI Components ---
    const Section = ({ title, subtitle, children }) => html`
        <section className="mb-32 animate-fade-in-up">
            <div className="mb-14 border-l-[6px] border-blue-500 pl-8 py-2">
                <h2 className="text-4xl lg:text-7xl font-black italic text-white mb-6 tracking-tight leading-tight uppercase font-sans">${title}</h2>
                ${subtitle && html`<p className="text-2xl lg:text-3xl text-zinc-200 font-bold tracking-wide">${subtitle}</p>`}
            </div>
            <div className="space-y-12">
                ${children}
            </div>
        </section>
    `;

    const Card = ({ title, icon, color = "blue", children, className = "" }) => {
        const borderColors = {
            blue: "hover:border-blue-500",
            purple: "hover:border-purple-500",
            red: "hover:border-red-500",
            green: "hover:border-green-500",
            yellow: "hover:border-yellow-500",
            orange: "hover:border-orange-500",
            pink: "hover:border-pink-500",
            zinc: "hover:border-zinc-500"
        };
        const iconColors = {
            blue: "text-blue-400",
            purple: "text-purple-400",
            red: "text-red-400",
            green: "text-green-400",
            yellow: "text-yellow-400",
            orange: "text-orange-400",
            pink: "text-pink-400",
            zinc: "text-zinc-400"
        };
        const bgColors = {
            blue: "bg-blue-900/10",
            purple: "bg-purple-900/10",
            red: "bg-red-900/10",
            green: "bg-green-900/10",
            yellow: "bg-yellow-900/10",
            orange: "bg-orange-900/10",
            pink: "bg-pink-900/10",
            zinc: "bg-zinc-900/40"
        }

        return html`
        <div className=${`p-8 lg:p-14 border border-zinc-800 rounded-[3rem] shadow-2xl relative overflow-hidden group transition-all duration-300 ${bgColors[color] || bgColors.zinc} ${borderColors[color] || borderColors.blue} ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
             ${title && html`
                <div className="flex items-center gap-6 mb-10">
                    ${icon && html`<div className="p-5 bg-black rounded-3xl border border-zinc-700 shadow-inner"><${LucideIcon} name=${icon} size=${40} className=${iconColors[color] || iconColors.blue} /></div>`}
                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">${title}</h3>
                </div>
            `}
            <div className="relative z-10 text-xl lg:text-2xl leading-relaxed text-zinc-100 space-y-6 font-medium">
                ${children}
            </div>
        </div>
        `;
    };

    const Badge = ({ children, color = "blue" }) => {
        const colors = {
            blue: "bg-blue-500/20 border-blue-400 text-blue-200",
            purple: "bg-purple-500/20 border-purple-400 text-purple-200",
            red: "bg-rose-500/20 border-rose-400 text-rose-200",
            green: "bg-emerald-500/20 border-emerald-400 text-emerald-200",
            orange: "bg-orange-500/20 border-orange-400 text-orange-200",
            yellow: "bg-yellow-500/20 border-yellow-400 text-yellow-200",
            pink: "bg-pink-500/20 border-pink-400 text-pink-200",
            zinc: "bg-zinc-500/20 border-zinc-400 text-zinc-200"
        };
        return html`<span className=${`inline-flex items-center px-6 py-3 rounded-full border mb-8 font-black text-lg lg:text-xl uppercase tracking-widest shadow-lg ${colors[color] || colors.blue}`}>${children}</span>`;
    };

    const InfoBox = ({ children, title }) => html`
        <div className="p-10 rounded-[2rem] bg-zinc-900 border border-zinc-700 flex flex-col gap-4 shadow-xl">
            ${title && html`<strong className="text-2xl text-white block mb-2 font-black flex items-center gap-3"><${LucideIcon} name="Info" size=${28} className="text-blue-400"/> ${title}</strong>`}
            <div className="text-zinc-100 text-xl lg:text-2xl font-medium leading-relaxed">${children}</div>
        </div>
    `;

    // Initialize Contents Object
    window.Contents = window.Contents || {};

    // --- Lecture 1 Part 1 Data ---
    const lecture1Part1Data = {
        meta: {
            week: "WEEK 1 - PART 1",
            title: "쇼츠 성공의<br/>근본적 사고방식",
            subtitle: "단순한 기술이 아닌, 성공하는 채널의 기획 안목과 한계선 이론으로<br/>월 1,000만 원에서 1억 원 수익 시스템을 구축합니다.",
            keywords: ["한계선 이론", "에셋 구축", "하모된다", "시스템화", "알고리즘 역이용", "모수(Population)"]
        },
        sections: [
            {
                id: "mindset",
                title: "1. 강의 운영 방향 및 마인드셋",
                subtitle: "하모된다 (하면 된다)",
                cards: [
                    {
                        title: "강의의 핵심 목표",
                        icon: "Target",
                        color: "blue",
                        items: [
                            { label: "비전 공개 수준:", text: "개인 비즈니스에 문제가 생길까 걱정될 정도로 모든 인사이트를 준비했습니다." },
                            { label: "수강 대상:", text: "월천에서 월억을 꿈꾸는 분부터, 아직 수익 창출이 없는 초보자까지 모두 포함됩니다." },
                            { label: "핵심 구호:", text: '"하모된다(하면 된다)" 스스로 쇼츠를 잘하는 사람이 될 것이라는 확신을 가지세요.' }
                        ]
                    },
                    {
                        title: "장기적 성공 마인드셋",
                        icon: "Cpu",
                        color: "purple",
                        items: [
                            { label: "시스템화:", text: "특정 카테고리/단일 채널은 수익 변동성이 큽니다. 다중 채널 운영으로 리스크를 분산해야 합니다." },
                            { label: "일상생활 보장:", text: "24시간 365일 노동하지 않고, 시스템을 통해 수익을 극대화하는 방법을 배웁니다." }
                        ]
                    },
                    {
                        title: "초보자를 위한 당부 (중요)",
                        icon: "AlertTriangle",
                        color: "yellow",
                        content: [
                            { title: "1. 왕초보 지원", text: "카페 '왕초보 꿀팁' 제공: 구글 계정 생성, 채널 생성, 애드센스 설정 등 기초부터 가이드합니다.", color: "text-yellow-400" },
                            { title: "2. 선 조치 후 징징 (금지)", text: '문제 해결 시도 없이 불만만 토로하지 마세요. "선 공유 후 조치"를 통해 더 나이스한 쇼츠를 만듭시다.', color: "text-red-400" }
                        ]
                    }
                ]
            },
            {
                id: "algorithm",
                title: "2. 좋은 영상과 알고리즘",
                subtitle: "알고리즘 = 시청자 반응",
                content: {
                    mainMessage: {
                        title: '"하루에 몇 개 올려요?"<br/>라는 질문은 틀렸습니다.',
                        highlight: "개수보다, 급하게 만들지 않은 좋은 영상이 먼저입니다."
                    },
                    mechanism: {
                        title: "알고리즘 작동 메커니즘",
                        steps: ["시청자의 긍정적 반응 (좋아요, 지속 시청)", "알고리즘의 노출 확대", "조회수 폭발 (떡상)"],
                        tip: '* "알고리즘이 나를 싫어해"라고 생각하지 마세요. <br/>"시청자가 아직 선택하지 않은 것"으로 치환해서 생각해야 발전이 있습니다.'
                    },
                    gpts: {
                        title: "가이드라인 검수용 GPTS 제공",
                        features: ["최신 유튜브 가이드라인 학습 완료", "위험한 단어 감지 및 대체어 제안", "맞춤법, 오타, 문맥 자연스럽게 수정"],
                        warning: "AI 검수 결과를 맹신하지 말고, 반드시 문맥이 자연스러운지 확인 후 사용하세요."
                    }
                }
            },
            {
                id: "limit_line",
                title: "3. 한계선 이론 (The Limit Line)",
                subtitle: "소재를 선정하는 순간, 채널의 운명(고점)이 결정된다",
                content: {
                    core: "내 영상을 좋아해 줄 시청자 모수(Population)가 곧 조회수의 한계선입니다.<br/>처음부터 한계선이 높은 소재를 골라야 합니다.",
                    examples: [
                        { label: "바둑 채널", value: "30만", desc: "낮은 한계선", color: "text-zinc-400", bg: "bg-zinc-950" },
                        { label: "게임 (로블록스)", value: "150~450만", desc: "초등학생 타겟, 등교시간 저조", color: "text-zinc-400", bg: "bg-zinc-950" },
                        { label: "국뽕/감동", value: "500~700만", desc: "준수한 대중성", color: "text-zinc-400", bg: "bg-zinc-950" },
                        { label: "연예/유머", value: "2,000만+", desc: "압도적 대중성", color: "text-red-100", bg: "bg-gradient-to-br from-red-600 to-purple-800" }
                    ],
                    caseStudy: {
                        success: { name: "'짤컷' 채널 (성공)", material: "상위 1% 꿀팁, 한국인 모르는 순위", target: "대한민국 5,000만 전체", limit: "2,000만+" },
                        fail: { name: "'살림의 신' 채널 (한계)", material: "다이소, 주부 꿀팁", target: "주부 (한정적 풀)", limit: "600만" }
                    },
                    failTip: {
                        title: "실패하기 쉬운 접근 (티맵 꿀팁)",
                        text: '"티맵 사용자 꿀팁"은 아무리 내용이 좋아도 <span class="underline">티맵 사용자</span>라는 좁은 모수에 갇힙니다.<br/>대중가요 1위처럼 <span class="text-white font-bold">누구나 공감할 수 있는 소재</span>여야 합니다.'
                    }
                }
            },
            {
                id: "asset_tools",
                title: "4. 에셋(Asset) 구축 & 도구 활용",
                subtitle: "카테고리를 버리고, 소재와 '결'로 접근하라",
                content: {
                    message: {
                        title: '"카테고리"라는 단어를 머리에서 지우세요.',
                        text: '유튜브 공식 분류(게임, 영화 등)가 아닌,<br/><span class="text-blue-400">"비슷한 느낌(결)"</span>을 가진 채널들을 모으는 것이 핵심입니다.',
                        examples: ["예: 한국인의 재미있는 일상", "예: 해외의 황당한 상황"]
                    },
                    process: [
                        { step: 1, title: "한계선 높은 소재 선정", desc: "대중성 있는 소재 발굴", color: "text-blue-500" },
                        { step: 2, title: "유사 채널 그룹핑", desc: "결이 같은 채널 수집", color: "text-purple-500" },
                        { step: 3, title: "에셋(Asset) 완성", desc: "모인 채널 = 내 자산(돈)", color: "text-yellow-500" }
                    ],
                    tools: [
                        { title: "트렌드 서치 프로그램 (해외 확장)", desc: "쇼츠는 검색 비중이 낮아 키워드 발굴이 어렵습니다. 이 툴은 롱폼 키워드를 쇼츠로 확장해줍니다.", items: ["키워드 입력 → 연관 채널 파도타기", "영어/일본어 키워드 자동 발굴 (무한 소재 수급)", "수강생 무료 배포 & 실시간 업데이트"] },
                        { title: "트렌드 파악 프로그램 (국내 집중)", desc: '한국 채널만을 대상으로, 카테고리별 <span class="text-green-400 font-bold">키워드 강도</span>와 <span class="text-green-400 font-bold">고조회수 영상</span>을 한눈에 보여줍니다.', items: ["국내 떡상 영상 큐레이션", "채널 수집 가속화 도구"] }
                    ],
                    result: '"12월 19일 첫 업로드 채널 → 하루 <span class="text-yellow-400">70만원, 100만원</span> 수익 달성"'
                }
            }
        ]
    };

    window.Contents.lecture1_part1 = () => {
        const data = lecture1Part1Data;
        const s1 = data.sections[0];
        const s2 = data.sections[1];
        const s3 = data.sections[2];
        const s4 = data.sections[3];

        return html`
            <div className="space-y-48 pb-60">
                <!-- Header -->
                <div className="text-center space-y-12 py-32 animate-fade-in">
                    <${Badge} color="blue">${data.meta.week}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title.replace('근본적 사고방식', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">근본적 사고방식</span>') }}>
                    </h1>
                    <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle.replace('성공하는 채널의 기획 안목', '<span class="text-blue-400">성공하는 채널의 기획 안목</span>').replace('한계선 이론', '<span class="text-purple-400">한계선 이론</span>').replace('1억 원 수익 시스템', '<span class="text-yellow-400 underline decoration-4 decoration-yellow-600/50">1억 원 수익 시스템</span>') }}>
                    </p>
                </div>

                <!-- Section 1 -->
                <${Section} title=${s1.title} subtitle=${s1.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        ${s1.cards.slice(0, 2).map(card => html`
                            <${Card} title=${card.title} icon=${card.icon} color=${card.color}>
                                <ul className="space-y-6 text-xl lg:text-2xl">
                                    ${card.items.map(item => html`
                                        <li className="flex items-start gap-4">
                                            <div className="mt-2 w-2 h-2 rounded-full bg-${card.color}-400 shrink-0"></div>
                                            <span><strong>${item.label}</strong> <span dangerouslySetInnerHTML=${{ __html: item.text.replace('"하모된다(하면 된다)"', '<span class="text-yellow-400 font-black">"하모된다(하면 된다)"</span>').replace('다중 채널 운영', '<span class="text-purple-300 font-black underline">다중 채널 운영</span>') }}></span></span>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                        `)}
                        <${Card} title=${s1.cards[2].title} icon=${s1.cards[2].icon} color=${s1.cards[2].color}>
                            <div className="space-y-8">
                                ${s1.cards[2].content.map(item => html`
                                    <div>
                                        <strong className=${`block text-2xl mb-2 ${item.color}`}>${item.title}</strong>
                                        <p className="text-zinc-100" dangerouslySetInnerHTML=${{ __html: item.text.replace('"선 공유 후 조치"', '<span class="text-white font-black bg-white/10 px-2 py-1 rounded">"선 공유 후 조치"</span>') }}></p>
                                    </div>
                                `)}
                            </div>
                        <//>
                    </div>
                <//>

                <!-- Section 2 -->
                <${Section} title=${s2.title} subtitle=${s2.subtitle}>
                    <${Card} className="bg-zinc-900 border-zinc-700">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">
                            <div className="flex-1 space-y-10">
                                <div className="space-y-4">
                                    <h3 className="text-5xl lg:text-6xl font-black text-white leading-tight" dangerouslySetInnerHTML=${{ __html: s2.content.mainMessage.title.replace('라는 질문은 틀렸습니다.', '<span class="text-zinc-400 text-4xl lg:text-5xl">라는 질문은 틀렸습니다.</span>') }}></h3>
                                    <p className="text-2xl lg:text-3xl text-zinc-100 font-bold border-l-4 border-blue-500 pl-6 py-2" dangerouslySetInnerHTML=${{ __html: s2.content.mainMessage.highlight.replace('좋은 영상', '<span class="text-blue-400 underline decoration-4 decoration-blue-500">좋은 영상</span>') }}></p>
                                </div>
                                
                                <${InfoBox} title=${s2.content.mechanism.title}>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-4"><span className="text-green-400 font-black">1.</span> ${s2.content.mechanism.steps[0]}</li>
                                        <li className="flex items-center gap-4"><span className="text-blue-400 font-black">2.</span> ${s2.content.mechanism.steps[1]}</li>
                                        <li className="flex items-center gap-4"><span className="text-red-400 font-black">3.</span> ${s2.content.mechanism.steps[2]}</li>
                                    </ul>
                                    <p className="mt-6 text-xl bg-black/30 p-4 rounded-xl text-zinc-300" dangerouslySetInnerHTML=${{ __html: s2.content.mechanism.tip.replace('"시청자가 아직 선택하지 않은 것"', '<strong>"시청자가 아직 선택하지 않은 것"</strong>') }}></p>
                                </${InfoBox}>
                            </div>
                            
                            <div className="flex-1 w-full space-y-8">
                                <div className="p-10 bg-black rounded-[2.5rem] border border-zinc-800 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-20"><${LucideIcon} name="Bot" size=${120} className="text-purple-500" /></div>
                                    <h4 className="text-3xl font-black text-white mb-6 relative z-10" dangerouslySetInnerHTML=${{ __html: s2.content.gpts.title.replace('GPTS', '<span class="text-purple-400">GPTS</span>') }}></h4>
                                    <ul className="space-y-4 text-xl text-zinc-200 relative z-10">
                                        ${s2.content.gpts.features.map(f => html`<li className="flex items-start gap-3"><${LucideIcon} name="Check" className="text-green-500 mt-1" /> <span>${f}</span></li>`)}
                                    </ul>
                                    <div className="mt-8 p-4 bg-red-900/30 border border-red-500/30 rounded-xl relative z-10">
                                        <strong className="text-red-300 block mb-1 flex items-center gap-2"><${LucideIcon} name="AlertCircle" size=${20}/> 주의사항</strong>
                                        <p className="text-lg text-zinc-300" dangerouslySetInnerHTML=${{ __html: s2.content.gpts.warning.replace('문맥이 자연스러운지 확인 후 사용', '<span class="text-white font-bold">문맥이 자연스러운지 확인 후 사용</span>') }}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <//>
                <//>

                <!-- Section 3 -->
                <${Section} title=${s3.title} subtitle=${s3.subtitle}>
                    <${Card} title=${s3.content.core.split('<br/>')[1]} icon="BarChart2" color="red">
                        <p className="text-2xl text-white font-bold mb-8" dangerouslySetInnerHTML=${{ __html: s3.content.core.replace('모수(Population)', '<span class="text-red-400">모수(Population)</span>') }}></p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            ${s3.content.examples.map(ex => html`
                                <div className=${`p-8 rounded-3xl text-center border border-zinc-800 ${ex.bg} hover:border-zinc-600 transition-colors ${ex.label.includes('연예') ? 'shadow-lg shadow-red-900/50 border-red-400/30 transform hover:scale-105 transition-transform' : ''}`}>
                                    <span className=${`block text-xl font-bold mb-3 ${ex.color.replace('zinc-400', 'zinc-400').replace('red-100', 'red-100')}`}>${ex.label}</span>
                                    <span className="text-5xl font-black text-white block mb-2">${ex.value}</span>
                                    <span className=${`${ex.label === '게임 (로블록스)' ? 'text-base space-y-1' : 'text-lg'} text-${ex.label === '연예/유머' ? 'red-200' : 'zinc-500'}`}>${ex.desc}</span>
                                </div>
                            `)}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
                             <div>
                                <strong className="text-2xl text-white block mb-4">Case Study: 대중성 vs 비대중성</strong>
                                <ul className="space-y-4 text-xl">
                                    <li class="p-4 bg-black rounded-xl border border-zinc-800">
                                        <span className="text-blue-400 font-black text-2xl block mb-1">${s3.content.caseStudy.success.name}</span>
                                        <span className="text-zinc-300">소재: ${s3.content.caseStudy.success.material}</span><br/>
                                        <span className="text-zinc-300">타겟: <strong className="text-white">${s3.content.caseStudy.success.target}</strong></span><br/>
                                        <span className="text-zinc-300">고점: <strong className="text-white text-2xl">${s3.content.caseStudy.success.limit}</strong></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-end">
                                <ul className="space-y-4 text-xl">
                                     <li class="p-4 bg-black rounded-xl border border-zinc-800">
                                        <span className="text-zinc-400 font-black text-2xl block mb-1">${s3.content.caseStudy.fail.name}</span>
                                        <span className="text-zinc-300">소재: ${s3.content.caseStudy.fail.material}</span><br/>
                                        <span className="text-zinc-300">타겟: <strong className="text-zinc-400">${s3.content.caseStudy.fail.target}</strong></span><br/>
                                        <span className="text-zinc-300">고점: <strong className="text-zinc-400 text-2xl">${s3.content.caseStudy.fail.limit}</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 p-6 bg-red-900/10 border border-red-500/20 rounded-2xl flex items-start gap-4">
                            <${LucideIcon} name="XCircle" className="text-red-500 shrink-0 mt-1" size=${32} />
                            <div>
                                <strong className="block text-xl text-red-200 mb-1">${s3.content.failTip.title}</strong>
                                <p className="text-lg text-red-200/80" dangerouslySetInnerHTML=${{ __html: s3.content.failTip.text }}></p>
                            </div>
                        </div>
                    <//>
                <//>

                <!-- Section 4 -->
                <${Section} title=${s4.title} subtitle=${s4.subtitle}>
                    <${Card} className="bg-blue-950/20 border-blue-500/30">
                        <div className="space-y-12">
                            <!-- 개념 전환 -->
                            <div className="text-center">
                                <h3 className="text-4xl lg:text-5xl font-black text-white mb-6">${s4.content.message.title}</h3>
                                <p className="text-2xl lg:text-3xl text-zinc-200 font-bold leading-relaxed mb-8" dangerouslySetInnerHTML=${{ __html: s4.content.message.text }}></p>
                                <div className="flex flex-wrap justify-center gap-4 text-xl text-zinc-300">
                                    ${s4.content.message.examples.map(ex => html`<span className="bg-black px-6 py-3 rounded-full border border-zinc-700">${ex}</span>`)}
                                </div>
                            </div>
                            
                            <!-- 에셋 구축 프로세스 -->
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                ${s4.content.process.map(step => html`
                                    <div className="p-8 bg-zinc-900 rounded-[2rem] border border-zinc-700">
                                        <div className=${`${step.color} font-black text-6xl mb-4`}>${step.step}</div>
                                        <strong className="block text-2xl text-white mb-2">${step.title}</strong>
                                        <p className="text-zinc-400 text-lg">${step.desc}</p>
                                    </div>
                                `)}
                            </div>

                            <!-- 도구 소개 -->
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <${InfoBox} title=${s4.content.tools[0].title}>
                                    <p className="mb-4">${s4.content.tools[0].desc}</p>
                                    <ul className="space-y-3 text-lg text-zinc-300">
                                        <li className="flex items-center gap-2"><${LucideIcon} name="Check" className="text-green-400" size=${20} /> ${s4.content.tools[0].items[0]}</li>
                                        <li className="flex items-center gap-2"><${LucideIcon} name="Globe" className="text-blue-400" size=${20} /> <span dangerouslySetInnerHTML=${{ __html: s4.content.tools[0].items[1].replace('영어/일본어 키워드 자동 발굴', '<strong>영어/일본어 키워드 자동 발굴</strong>') }}></span></li>
                                        <li className="flex items-center gap-2"><${LucideIcon} name="Gift" className="text-yellow-400" size=${20} /> <span className="text-white">${s4.content.tools[0].items[2].replace('수강생 무료 배포 & 실시간 업데이트', '수강생 무료 배포 & 실시간 업데이트')}</span></li>
                                    </ul>
                                </${InfoBox}>
                                <${InfoBox} title=${s4.content.tools[1].title}>
                                    <p className="mb-4" dangerouslySetInnerHTML=${{ __html: s4.content.tools[1].desc }}></p>
                                    <ul className="space-y-3 text-lg text-zinc-300">
                                        <li className="flex items-center gap-2"><${LucideIcon} name="Search" className="text-purple-400" size=${20} /> ${s4.content.tools[1].items[0]}</li>
                                        <li className="flex items-center gap-2"><${LucideIcon} name="Database" className="text-purple-400" size=${20} /> ${s4.content.tools[1].items[1]}</li>
                                    </ul>
                                </${InfoBox}>
                            </div>

                             <!-- 성과 인증 -->
                            <div className="p-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-3xl border border-green-500/30 text-center">
                                <strong className="block text-2xl text-green-300 mb-2">실제 성과 (루틴 적용 후)</strong>
                                <p className="text-3xl lg:text-4xl text-white font-black" dangerouslySetInnerHTML=${{ __html: s4.content.result }}></p>
                                <p className="text-xl text-green-200/70 mt-4">마라하기 공식대로 하면 누구나 가능합니다.</p>
                            </div>
                        </div>
                    <//>
                <//>
            </div>
        `;
    };

    // --- Lecture 1 Part 2 Data ---
    const lecture1Part2Data = {
        meta: {
            week: "WEEK 1 - PART 2",
            title: "알고리즘 역이용 &<br/>일치율 0%의 비밀",
            subtitle: "단순 복제가 아닌 <span class='text-purple-400'>재창작(Fair Use)</span>.<br/><span class='text-white'>키워드·사운드·픽셀</span> 3가지 비밀로 AI 감지를 피하고 수익을 창출합니다.",
            keywords: ["재각색", "Fair Use", "결(Texture)", "Timing", "일치율 0%", "키워드 우회", "사운드 우회", "픽셀 값 우회"]
        },
        sections: [
            {
                id: "routine",
                title: "1. 마라하기 공식 실행 루틴",
                subtitle: "기회(Timing)와 결(Texture)",
                cards: [
                    {
                        title: "1. 본질과 '결' 맞추기",
                        icon: "Layers",
                        color: "purple",
                        quote: '"쇼츠의 핵심은 <span class="text-purple-400 underline decoration-4 decoration-purple-600">100% 노력 없이도 성공하는 것</span>입니다."',
                        items: [
                            { label: "재각색(짜깁기):", text: "얼굴 노출 없이 원작 영상을 가공하여,<br/>수익 창출 조건을 충족시키는 기술입니다.", color: "purple" },
                            { label: "결(Texture):", text: "단순 카테고리가 아닌 <span class='text-white'>'비슷한 느낌'</span>을 모으는 것.<br/>예시: 감동적인 스토리만 모은 <span class='text-yellow-400 font-bold'>'감동결'</span>로<br/> <span class='text-white font-bold underline decoration-white/30'>2달 만에 4,500만 원</span>을 달성했습니다.", color: "purple" },
                            { label: "자산(Asset):", text: "이렇게 모아둔 채널 리스트가<br/>곧 당신의 자산이자 돈이 됩니다.", color: "purple" }
                        ]
                    },
                    {
                        title: "2. 최적의 타이밍 (Timing)",
                        icon: "Clock",
                        color: "green",
                        quote: '"지금 뜨는 영상은 이미 늦었습니다.<br/><span class="text-green-400">남들이 잊어버린 것</span>을 가져와야 합니다."',
                        items: [
                            { label: "트래픽 원리:", text: "현재 폭발하는 영상은 알고리즘이 밀어주는 중입니다.<br/>우리가 끼어들 틈이 없습니다.", color: "green" },
                            { label: "Target (Best Timing):", text: "<span class='text-green-400 font-black text-2xl px-1'>6개월 ~ 1년 지난 콘텐츠</span><br/>사람들의 기억 속에서 잊혀질 때가<br/>가장 완벽한 타이밍입니다.", color: "green" },
                            { label: "Tools:", text: "VidIQ, ViewStats, TubeBuddy 등으로<br/>데이터에 기반한 근거를 확보하세요.", color: "green" }
                        ]
                    }
                ]
            },
            {
                id: "secrets",
                title: "2. 일치율 0%를 만드는 3가지 비밀",
                subtitle: "AI 감지를 완벽하게 회피하는 기술",
                cards: [
                    {
                        title: "1. 키워드 우회",
                        icon: "Type",
                        color: "blue",
                        desc: 'AI는 제목, 설명, 대본, 음성(STT)을 <span class="text-red-400 font-bold">모두 읽습니다.</span>',
                        action: { title: "Action Plan:", text: '제목, 설명, 대본, 나레이션 등 <span class="text-white font-bold border-b-2 border-blue-500">모든 단어를 의역(Paraphrasing)</span>하고 영상 순서를 바꿉니다.' }
                    },
                    {
                        title: "2. 사운드 우회",
                        icon: "Volume2",
                        color: "pink",
                        desc: "주인공 목소리는 유지하되, 나머지는 바꿉니다.",
                        action: {
                            title: "Action Plan:",
                            list: ["<span class='text-white font-bold'>BGM 전면 교체.</span>", "영상 컷 순서를 바꿔 오디오 겹침 방지.", "이론적으론 음파 변형도 가능하나 순서 변경만으로도 충분함."]
                        }
                    },
                    {
                        title: "3. 픽셀 값 우회",
                        icon: "Aperture",
                        color: "green",
                        desc: '베일에 싸인 비밀. <span class="text-green-400 font-bold">인코딩</span>에 답이 있습니다.',
                        action: {
                            title: "Action Plan:",
                            text: '<span class="text-white font-bold">"캡컷 안에서 인코딩 할 때"</span> 밝기, 대비, 채도, 색온도, 감마, LUT 등 미세 조정.<br/><br/><span class="text-sm text-zinc-500">* 아직 패치 안 됨 (유효성 검증 완료). 대비책(Step 2, 3, 4)도 준비되어 있음.</span>'
                        }
                    }
                ]
            },
            {
                id: "case_study",
                title: "3. 재각색 실습 Case Study",
                subtitle: "실제 조회수와 수익 인증",
                son: {
                    title: "Case 1: 손흥민 콘텐츠",
                    before: {
                        list: ["• 벤치마킹 이유: 조회수가 살벌함.", "• 원본: <strong>796만 회</strong>", "• 제목: \"손흥민, 넌 싸인파리잖아\""]
                    },
                    after: {
                        list: [
                            "• <strong>성과:</strong> 조회수 <span class='text-5xl font-black text-yellow-400 align-middle'>1,350만 회</span><br/><span class='text-lg text-zinc-400 block mt-2'>(30분 작업, <span class='text-green-400 font-bold'>200만 원 수익</span>)</span>",
                            "• <strong>제목 변경:</strong> \"싸인파리에 참교육 날리는 손흥민\" (후킹↑)",
                            "• <strong>구성:</strong> '와우 포인트(마라 포인트)' 전진 배치.",
                            "• <strong>대본:</strong> '야부리'를 털어 상황을 더 극적으로 묘사."
                        ]
                    }
                },
                others: [
                    {
                        title: "Case 2: 국뽕 콘텐츠",
                        icon: "Flag",
                        color: "red",
                        stats: '<span class="text-zinc-400">원본 178만 회</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline mx-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> <span class="text-white font-bold">재각색 105만 회</span>',
                        desc: "영상이 길어 대본 수정 난해함. 그러나 시니어 타겟이라 <strong>RPM 및 시청 지속 시간 높음.</strong>",
                        strategy: "전략: '1+1' 같은 핵심 단어 제외하고 문장 전체 의역. BGM 교체 + 주요 장면 색깔 순서 변경."
                    },
                    {
                        title: "Case 3: 입양아 (감동)",
                        icon: "Heart",
                        color: "pink",
                        stats: '<span class="text-zinc-400">원본 1,059만 회 (이미 3번 재탕)</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline mx-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> <span class="text-white font-bold">재각색 713만, 210만 회</span>',
                        desc: "5번째 우려먹어도 터집니다.",
                        box: {
                            title: "필살기: GPT-S 대본 확장기",
                            text: "각 문장별 주요 단어의 동의어를 최소 3개 이상 자동 변환 -> 사용자가 가장 자연스러운 것 선택."
                        }
                    }
                ]
            },
            {
                id: "tools",
                title: "4. 편집/제작 툴 루틴 상세",
                subtitle: "Production Tools",
                boxes: [
                    {
                        title: "원본 영상 찾기 (10초 컷)",
                        list: [
                            { num: "1.", text: "틱톡/인스타 출처(예: '돌뱅이') 검색." },
                            { num: "2.", text: "수강생 전용 다운로드 툴 활용." },
                            { num: "3.", text: "<span class='text-blue-400 font-black text-2xl'>바이두(Baidu):</span> <span>비장의 무기. 캡처 이미지로 검색 시 모든 영상 찾아줌. (10초 컷)</span>" }
                        ]
                    },
                    {
                        title: "오디오/편집 설정",
                        list: [
                            { type: "bullet", label: "타입캐스트:", text: "박창수 캐릭터, 끊어 읽기 0초, <span class='text-green-400 font-bold'>속도 1.1배</span>." },
                            { type: "bullet", label: "캡컷(CapCut):", text: "자동 스냅 켜기(편의성)." },
                            { type: "bullet", label: "음량:", text: "목표 음량 <span class='text-green-400 font-bold'>-14 LUFS</span> (유튜브 최적화)." },
                            { type: "bullet", label: "", text: "현장음 영어 -> 텍스트 '자동 캡션'으로 이중 언어(한/영) 동시 출력." }
                        ]
                    }
                ]
            }
        ]
    };

    window.Contents.lecture1_part2 = () => {
        const data = lecture1Part2Data;
        const s1 = data.sections[0];
        const s2 = data.sections[1];
        const s3 = data.sections[2];
        const s4 = data.sections[3];

        return html`
            <div className="space-y-48 pb-60">
                <div className="text-center space-y-12 py-32 animate-fade-in">
                    <${Badge} color="purple">${data.meta.week}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title.replace('일치율 0%의 비밀', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">일치율 0%의 비밀</span>') }}>
                    </h1>
                    <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}>
                    </p>
                </div>

                <${Section} title=${s1.title} subtitle=${s1.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        ${s1.cards.map(card => html`
                            <${Card} title=${card.title} icon=${card.icon} color=${card.color}>
                                <p className="mb-8 text-2xl text-white font-bold leading-relaxed px-2" dangerouslySetInnerHTML=${{ __html: card.quote }}></p>
                                <ul className="space-y-8 text-xl lg:text-2xl text-zinc-100">
                                    ${card.items.map(item => html`
                                        <li class="flex items-start gap-4">
                                            <span class=${`text-${card.color}-500 font-bold mt-1`}>●</span>
                                            <div>
                                                <strong class=${`block mb-1 text-${card.color}-200`}>${item.label}</strong>
                                                <span class="text-zinc-300 text-lg lg:text-xl leading-relaxed" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                            </div>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                        `)}
                    </div>
                <//>

                <${Section} title=${s2.title} subtitle=${s2.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${s2.cards.map(card => html`
                            <${Card} title=${card.title} icon=${card.icon} color=${card.color}>
                                <p className="mb-8 text-2xl text-zinc-100" dangerouslySetInnerHTML=${{ __html: card.desc }}></p>
                                <div className="p-8 bg-black rounded-[2rem] border border-zinc-800 text-xl text-zinc-300 shadow-inner">
                                    <strong className=${`block text-${card.color === 'blue' ? 'blue' : card.color === 'pink' ? 'pink' : 'green'}-400 mb-4 text-2xl`}>${card.action.title}</strong>
                                    ${card.action.list ? html`
                                        <ul className="list-disc list-inside space-y-4 mt-2">
                                            ${card.action.list.map(li => html`<li dangerouslySetInnerHTML=${{ __html: li }}></li>`)}
                                        </ul>
                                    ` : html`<span dangerouslySetInnerHTML=${{ __html: card.action.text }}></span>`}
                                </div>
                            <//>
                        `)}
                    </div>
                <//>

                <${Section} title=${s3.title} subtitle=${s3.subtitle}>
                    <${Card} title=${s3.son.title} className="mb-12" color="yellow">
                        <div className="flex flex-col lg:flex-row gap-16">
                            <div className="flex-1 space-y-8">
                                <h4 className="text-3xl font-black text-white px-4 py-2 bg-zinc-800 rounded-lg inline-block">Before</h4>
                                <ul className="text-zinc-200 space-y-4 text-xl lg:text-2xl">
                                    ${s3.son.before.list.map(li => html`<li dangerouslySetInnerHTML=${{ __html: li }}></li>`)}
                                </ul>
                            </div>
                            <div className="hidden lg:block w-px bg-zinc-700 h-auto"></div>
                            <div className="flex-1 space-y-8">
                                <h4 className="text-3xl font-black text-blue-400 px-4 py-2 bg-blue-900/30 rounded-lg inline-block">After (재각색)</h4>
                                <ul className="text-zinc-100 space-y-6 text-xl lg:text-2xl">
                                    ${s3.son.after.list.map(li => html`<li dangerouslySetInnerHTML=${{ __html: li }}></li>`)}
                                </ul>
                            </div>
                        </div>
                    <//>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        ${s3.others.map(c => html`
                            <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                 <div className="space-y-6 text-xl lg:text-2xl">
                                    <p className="mb-2 text-xl" dangerouslySetInnerHTML=${{ __html: c.stats }}></p> 
                                    <p className="text-zinc-200 leading-relaxed" dangerouslySetInnerHTML=${{ __html: c.desc }}></p>
                                    ${c.strategy && html`
                                        <div className="p-6 bg-red-900/30 rounded-2xl border border-red-500/30 font-bold text-red-100">
                                            ${c.strategy}
                                        </div>
                                    `}
                                    ${c.box && html`
                                        <div className="p-6 bg-pink-900/30 rounded-2xl border border-pink-500/30">
                                            <strong className="block text-pink-300 mb-2 text-2xl">${c.box.title}</strong>
                                            <p className="text-xl text-zinc-200">${c.box.text}</p>
                                        </div>
                                    `}
                                </div>
                            <//>
                        `)}
                    </div>
                <//>

                <${Section} title=${s4.title} subtitle=${s4.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${s4.boxes.map(box => html`
                            <${InfoBox} title=${box.title}>
                                <ul className="space-y-5 text-xl lg:text-2xl text-zinc-200">
                                    ${box.list.map(li => html`
                                        <li class="flex gap-3">
                                            <span class=${`${li.type === 'bullet' ? 'text-green-400' : 'text-blue-400 font-bold'}`}>${li.type === 'bullet' ? '●' : li.num}</span>
                                            ${li.label && html`<strong>${li.label}</strong>`} 
                                            <span dangerouslySetInnerHTML=${{ __html: li.text }}></span>
                                        </li>
                                    `)}
                                </ul>
                            </${InfoBox}>
                        `)}
                    </div>
                <//>
            </div>
        `;
    };

    // --- Lecture 1 Part 3 Data ---
    const lecture1Part3Data = {
        meta: {
            week: "WEEK 1 - PART 3",
            title: "디테일한 편집 루틴 &<br/><span class='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500'>실전 리스크 관리</span>",
            subtitle: "<span class='text-white'>\"일치율 0%의 과학적 메커니즘.\"</span><br/>구간별 픽셀 값 조정으로 알고리즘을 완벽히 속이고, 롱런하는 시스템을 구축합니다."
        },
        sections: [
            {
                id: "pixel_adjustment",
                title: "1. 영상 품질 보정 및 픽셀 값 조정",
                subtitle: "알고리즘이 '다른 영상'으로 인식하게 만드는 법",
                cards: [
                    {
                        title: "구간별 픽셀 값 차별화 (핵심)",
                        icon: "Sliders",
                        color: "orange",
                        quote: "\"전체 영상을 똑같이 보정하면 패턴이 읽힙니다.<br/><span class='text-orange-400 underline decoration-4 decoration-orange-600'>3등분 이상 쪼개서</span> 구간마다 다른 값을 적용하세요.\"",
                        steps: [
                            { label: "구간 A (초반)", items: [{ k: "채도", v: "+50", c: "orange" }, { k: "선명도", v: "+30", c: "orange" }] },
                            { label: "구간 B (중반)", items: [{ k: "채도", v: "+60", c: "green" }, { k: "선명도", v: "+40", c: "green" }] },
                            { label: "구간 C (후반)", items: [{ k: "색온도", v: "-10", c: "blue" }, { k: "틴트", v: "+5", c: "pink" }] }
                        ],
                        tip: {
                            title: "Tip: 자동 조정 기능",
                            text: "세밀한 조정이 어렵다면 편집 툴의 <strong>'자동 조정'</strong> 기능을 베이스로 쓰되, 구간마다 수치를 조금씩 비틀어주세요."
                        }
                    }
                ],
                lists: {
                    quality: {
                        title: "품질 보정 루틴",
                        color: "blue",
                        items: [
                            { title: "화질 개선:", text: "편집 툴의 '품질 보정' 기능을 활용하여<br/>HD/UHD로 업스케일링합니다.", color: "blue" },
                            { title: "필수 주의사항:", text: "작업 딜레이가 심하므로 반드시<br/><span class='text-white font-bold bg-blue-600/30 px-2 rounded'>마지막 단계(인코딩 직전)</span>에 적용하세요.", color: "red" },
                            { title: "필터 적용:", text: "픽셀 값에 '옷'을 입히는 과정입니다.<br/>과하면 채도를 50~60%로 낮춰주세요.", color: "blue" }
                        ]
                    },
                    encoding: {
                        title: "최종 인코딩 가이드",
                        color: "zinc",
                        items: [
                            { title: "규격:", text: "1080p / 60fps / HEVC 또는 H.264" },
                            { title: "좌우 반전:", text: "벤치 영상과 구도가 같을 경우<br/>위치 값 변경용으로 적용합니다." },
                            { title: "스티커 활용:", text: "스티커 하나라도 붙이면<br/>이미지 픽셀 값이 전체적으로 변합니다." },
                            { title: "호환성:", text: "캡컷, 프리미어, 부류, 컵컷PC 등<br/>모든 툴에서 동일 메커니즘이 적용됩니다." }
                        ]
                    }
                }
            },
            {
                id: "subtitle_audio",
                title: "2. 자막 및 오디오 디테일",
                subtitle: "프로의 디테일은 가독성에서 나온다",
                col1: {
                    title: "자막 처리 전략",
                    items: [
                        { icon: "Type", color: "blue", text: "<span><strong>배경 필수:</strong> 현장 대화에는 반드시 검정/반투명 배경(Background)을 넣어 가독성 확보.</span>" },
                        { icon: "Palette", color: "pink", text: "<span><strong>인물별 색상 구분(Rule):</strong><br/><span class='text-green-400 font-bold ml-2'>- 엄마(형광)</span> <span class='text-yellow-400 font-bold ml-2'>- 아들(노랑)</span> <span class='text-orange-400 font-bold ml-2'>- 아빠(주황)</span></span>" },
                        { icon: "Layers", color: "zinc", text: "<span><strong>복사 붙여넣기:</strong> 준비된 대본을 구간별로 복사해서 사용 (오타 방지).</span>" },
                        { icon: "MousePointer", color: "purple", text: "<span><strong>폰트 설정:</strong> 주로 '도연체' 즐겨찾기.<br/><span class='text-zinc-400 text-lg'>스타일 550(Bold), <span class='text-white font-bold'>그림자(Shadow) 적용</span> 필수.</span></span>" }
                    ]
                },
                col2: {
                    title: "일치율 제거 3단계",
                    steps: [
                        { title: "1. 영상 구간 변경 (Shuffle)", color: "red", text: "\"원테이크 영상도 쪼개라.\"<br/>순서만 바꿔도 AI는 다른 영상으로 인식합니다." },
                        { title: "2. 대본 키워드 변경 (Paraphrasing)", color: "blue", text: "GPT 단어 확장기 활용. 기존 대본을 보면서 조사와 형용사를 즉석에서 변형하세요." },
                        { title: "3. 오디오 전면 교체", color: "green", text: "BGM(택배 송), 효과음, 나레이션 톤까지 싹 바꿉니다. (영상+대본+음악 3박자 교체)" }
                    ]
                }
            },
            {
                id: "qa_risk",
                title: "3. 운영 Q&A 및 리스크 관리",
                subtitle: "롱런을 위한 운영 노하우",
                cards: [
                    {
                        title: "채널 운영 & 계정 관리",
                        icon: "Settings",
                        color: "zinc",
                        items: [
                            { num: "1", title: "1구글 1채널 원칙:", text: "구글 계정 1개에 채널 1개만 생성하세요.<br/>(1계정 다채널은 스팸 위험이 큽니다.)" },
                            { num: "2", title: "쿠키 값(워밍업):", text: "<span class='text-zinc-500 line-through'>필요 없음</span>. 유사 채널 구독만 해두고<br/>바로 업로드해도 전혀 무관합니다." },
                            { num: "3", title: "깡통 채널 전략:", text: "조회수 1,000 이하면 과감히 삭제 후 재생성.<br/><span class='text-red-400 font-bold'>초반엔 미인증 깡통</span>으로 빠르게 테스트하세요.<br/>(핸드폰 인증 제한은 연 2회뿐입니다)" },
                            { num: "4", title: "관리자 모드:", text: "채널을 '브랜드 계정'으로 변환한 뒤,<br/>본 계정에 관리자 권한을 부여하세요.<br/>로그인 한 번으로 통합 관리가 가능합니다." }
                        ]
                    },
                    {
                        title: "저작권 & 리스크 대처",
                        icon: "ShieldAlert",
                        color: "red",
                        items: [
                            { title: "100% 안전지대는 없다:", text: "유튜브 AI는 피하지만,<br/>MCN 자체 적발 등은 감수해야 할 리스크입니다." },
                            { title: "High Risk, High Return:", text: "대중성 큰 카테고리(연예, 영화)의<br/>폭발력을 위해 리스크를 안고 가는 게임입니다." },
                            { title: "연좌제 방지:", text: "애드센스 분리, 기기(IP) 분리로<br/>한 채널이 터져도 나머지는 살려야 합니다." },
                            { title: "원본 자막 처리:", text: "글 박스(Text Box)로 원본 자막 위에<br/>덮어씌워서 가려주세요." }
                        ]
                    },
                    {
                        title: "해외 소재 활용 (Tip)",
                        icon: "Globe",
                        color: "blue",
                        quote: "\"확률 싸움입니다. 일단 가져와서 지표를 보세요.\"",
                        cases: [
                            { label: "Case 1:", desc: "해외에서 터짐 + 한국에 없음 -> <span class='text-blue-400 font-bold'>무조건 시도.</span>" },
                            { label: "Case 2:", desc: "한국 정서 불일치 (예: 치마 입고 춤추는 남자) -> <span class='text-red-400 font-bold'>실패 확률 높음.</span>" }
                        ],
                        footer: "* 맘케어반 특강: 자막 삭제 프로그램 및 20분 컷 비법 공유 예정."
                    },
                    {
                        title: "마무리 & 숙제 Check",
                        icon: "ClipboardCheck",
                        color: "yellow",
                        homework: {
                            title: "Next Week Homework",
                            list: ["1. 유사 채널 그룹핑 5개 조사.", "2. 내가 하고 싶은 카테고리 2개 선정.", "3. <span class='text-white font-black underline'>각 카테고리당 벤치마킹 채널 5개 이상</span> 발굴."]
                        },
                        footer: "\"강사는 11월 9천만 원, 12월 <span class='text-green-400 font-bold'>1억 원</span>을 달성했습니다.<br/>알기만 해선 의미 없습니다. <span class='text-white font-bold'>실행(숙제)</span>하세요.\""
                    }
                ]
            }
        ]
    };

    window.Contents.lecture1_part3 = () => {
        const data = lecture1Part3Data;
        const s1 = data.sections[0];
        const s2 = data.sections[1];
        const s3 = data.sections[2];

        return html`
            <div className="space-y-48 pb-60">
                <div className="text-center space-y-12 py-32 animate-fade-in">
                    <${Badge} color="red">${data.meta.week}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                <${Section} title=${s1.title} subtitle=${s1.subtitle}>
                    <div className="space-y-12">
                        <${Card} title=${s1.cards[0].title} icon=${s1.cards[0].icon} color=${s1.cards[0].color}>
                            <p className="text-2xl lg:text-3xl text-white mb-10 font-bold leading-relaxed" dangerouslySetInnerHTML=${{ __html: s1.cards[0].quote }}></p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-8">
                                ${s1.cards[0].steps.map(step => html`
                                    <div className="p-8 bg-black rounded-[2rem] border border-zinc-800 shadow-lg">
                                        <span className="block text-zinc-400 text-xl font-black mb-6 border-b border-zinc-800 pb-2">${step.label}</span>
                                        <div className="space-y-3 text-2xl text-zinc-200">
                                            ${step.items.map(item => html`
                                                <div className="flex justify-between"><span>${item.k}</span> <span class=${`text-${item.c}-400 font-bold`}>${item.v}</span></div>
                                            `)}
                                        </div>
                                    </div>
                                `)}
                            </div>
                            <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-700">
                                <strong className="text-orange-300 text-xl block mb-2"><${LucideIcon} name="Zap" size=${24} className="inline mr-2"/>${s1.cards[0].tip.title.replace('Tip: ', '')}</strong>
                                <p className="text-zinc-300 text-lg lg:text-xl" dangerouslySetInnerHTML=${{ __html: s1.cards[0].tip.text }}></p>
                            </div>
                        <//>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <${Card} title=${s1.lists.quality.title} icon="Maximize" color=${s1.lists.quality.color}>
                                <ul className="space-y-6 text-xl lg:text-2xl text-zinc-200">
                                    ${s1.lists.quality.items.map(item => html`
                                        <li class="flex items-start gap-4">
                                            <span class=${`text-${item.color === 'red' ? 'blue' : 'blue'}-500 font-black mt-1`}>●</span>
                                            <div>
                                                <strong class=${`block mb-1 text-${item.color === 'red' ? 'red-400' : 'blue-200'}`}>${item.title}</strong>
                                                <span class="text-zinc-300 text-lg lg:text-xl" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                            </div>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                            <${Card} title=${s1.lists.encoding.title} icon="Save" color=${s1.lists.encoding.color}>
                                <ul className="space-y-6 text-xl lg:text-2xl text-zinc-200">
                                    ${s1.lists.encoding.items.map(item => html`
                                        <li class="flex items-start gap-4">
                                            <span class="text-white font-black mt-1">●</span>
                                            <div>
                                                <strong class="block mb-1 text-zinc-200">${item.title}</strong>
                                                <span class="text-zinc-300 text-lg lg:text-xl" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                            </div>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                        </div>
                    </div>
                <//>

                <${Section} title=${s2.title} subtitle=${s2.subtitle}>
                    <${Card} className="bg-zinc-900/40">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div>
                                <h4 className="text-3xl font-black text-white mb-8 border-l-4 border-blue-500 pl-4">${s2.col1.title}</h4>
                                <ul className="space-y-8 text-xl lg:text-2xl text-zinc-200">
                                    ${s2.col1.items.map(item => html`
                                        <li className="flex items-start gap-4">
                                            <${LucideIcon} name=${item.icon} className=${`text-${item.color}-400 mt-1`} size=${28} />
                                            <span dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                        </li>
                                    `)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-3xl font-black text-white mb-8 border-l-4 border-red-500 pl-4">${s2.col2.title}</h4>
                                <div className="space-y-8">
                                    ${s2.col2.steps.map(step => html`
                                        <div className="p-6 bg-black rounded-2xl border border-zinc-800">
                                            <strong className=${`text-2xl text-${step.color}-400 block mb-2`}>${step.title}</strong>
                                            <p class="text-xl text-zinc-300" dangerouslySetInnerHTML=${{ __html: step.text }}></p>
                                        </div>
                                    `)}
                                </div>
                            </div>
                         </div>
                    <//>
                <//>

                <${Section} title=${s3.title} subtitle=${s3.subtitle}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <${Card} title=${s3.cards[0].title} icon=${s3.cards[0].icon} color=${s3.cards[0].color}>
                            <ul className="space-y-6 text-xl lg:text-2xl text-zinc-300">
                                ${s3.cards[0].items.map(item => html`
                                    <li class=${`flex items-start gap-4 ${item.num !== '4' ? 'border-b border-zinc-800 pb-4' : ''}`}>
                                        <span className="text-white font-black min-w-[20px] mt-1">${item.num}</span> 
                                        <div>
                                            <strong class="block mb-1 text-white">${item.title}</strong>
                                            <span class="text-zinc-300 text-lg lg:text-xl leading-relaxed" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                        </div>
                                    </li>
                                `)}
                            </ul>
                        <//>
                        <${Card} title=${s3.cards[1].title} icon=${s3.cards[1].icon} color=${s3.cards[1].color}>
                            <ul className="space-y-6 text-xl lg:text-2xl text-zinc-300">
                                ${s3.cards[1].items.map(item => html`
                                    <li class="flex items-start gap-4">
                                        <span class="text-red-500 font-bold mt-1">●</span> 
                                        <div>
                                            <strong class="block mb-1 text-red-200">${item.title}</strong>
                                            <span class="text-zinc-300 text-lg lg:text-xl leading-relaxed" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                        </div>
                                    </li>
                                `)}
                            </ul>
                        <//>
                        <${Card} title=${s3.cards[2].title} icon=${s3.cards[2].icon} color=${s3.cards[2].color}>
                            <p className="text-2xl text-white mb-6 font-bold">${s3.cards[2].quote.replace(/"/g, '')}</p>
                            <ul className="space-y-4 text-xl lg:text-2xl text-zinc-300">
                                ${s3.cards[2].cases.map(c => html`
                                    <li class="bg-blue-900/20 p-4 rounded-xl"><strong>${c.label}</strong> <span dangerouslySetInnerHTML=${{ __html: c.desc }}></span></li>
                                `)}
                                <li class="mt-4 text-lg text-zinc-400">${s3.cards[2].footer}</li>
                            </ul>
                        <//>
                         <${Card} title=${s3.cards[3].title} icon=${s3.cards[3].icon} color=${s3.cards[3].color}>
                            <div className="space-y-6 text-xl lg:text-2xl text-zinc-200">
                                <div className="border border-yellow-500/30 bg-yellow-900/10 p-6 rounded-2xl">
                                    <strong className="block text-yellow-400 mb-2 text-2xl">${s3.cards[3].homework.title}</strong>
                                    <ul className="space-y-2">
                                        ${s3.cards[3].homework.list.map(li => html`<li dangerouslySetInnerHTML=${{ __html: li }}></li>`)}
                                    </ul>
                                </div>
                                <p className="text-right text-zinc-400 text-lg" dangerouslySetInnerHTML=${{ __html: s3.cards[3].footer }}>
                                </p>
                            </div>
                        <//>
                     </div>
                <//>
            </div>
        `;
    };

    // --- Lecture 2 Part 1 Data ---
    const lecture2Part1Data = {
        meta: {
            week: "WEEK 2 - PART 1",
            title: "채널 기획과<br/><span class='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500'>대본의 80% 법칙</span>",
            subtitle: "<span class='text-white'>\"성패의 160%를 결정하는 루틴.\"</span><br/>채널 기획에서 80%, 영상 기획에서 80%가 결정됩니다.<br/>일치율 0%를 만드는 대본 작성의 3단계 비밀을 공개합니다."
        },
        sections: [
            {
                id: "feedback",
                title: "1. 1강 숙제 피드백 & 집단지성",
                subtitle: "우리가 모은 2,000개의 에셋",
                cards: [
                    {
                        title: "집단지성의 힘 (Asset)",
                        icon: "Users",
                        color: "indigo",
                        quote: "\"290명 중 200명이 마라하기 채널을 분석했습니다.<br/><span class='text-indigo-400'>이것은 경쟁이 아니라 동반 성장입니다.</span>\"",
                        items: [
                            { label: "데이터 확보:", text: "중복 제외 <span class='text-white font-bold'>2,000개 이상의 채널</span> 확보." },
                            { label: "카테고리 확장:", text: "20개 이상의 채널 소재 카테고리 분류 완료." },
                            { label: "동기 부여:", text: "\"돈 버는 채널이 이렇게 많다\"는 확신과 제작 두려움 해소." }
                        ]
                    },
                    {
                        title: "성공의 80% + 80% 법칙",
                        icon: "Percent",
                        color: "purple",
                        boxes: [
                            { title: "1. 채널 기획 (80%)", text: "\"어떤 한계선 높은 소재를 고르는가?\"<br/>여기서 조회수 수익의 80%가 이미 결정됩니다." },
                            { title: "2. 영상 기획 (80%)", text: "\"어떻게 구다리(구간)를 바꾸고 대본을 쓰는가?\"<br/>나머지 승패를 좌우하는 핵심 기술입니다." }
                        ]
                    }
                ]
            },
            {
                id: "script_routine",
                title: "2. 대본 작성 3단계 루틴",
                subtitle: "일치율 0%를 만드는 '야부리'의 기술",
                steps: [
                    { num: "STEP 1", title: "가이드라인 준수", color: "blue", text: "알고리즘의 보호막.<br/>시청자가 좋아하는 것보다 <span class='text-white font-bold'>가이드라인 준수</span>가 항상 선행되어야 노출 기회가 생깁니다." },
                    { num: "STEP 2", title: "단어 변경 (일치율)", color: "green", text: "<span class='text-white font-bold'>GPT 단어 확장기</span> 활용.<br/>제목, 설명란, 대본의 키워드를 전면 교체하여 AI 감지를 회피합니다." },
                    { num: "STEP 3", title: "야부리 (양념 치기)", color: "yellow", text: "감정을 건드리는 MSG.<br/>사실 확인 안 된 내용을 넣어라도 <span class='text-white font-bold'>재미와 감동</span>을 극대화합니다." }
                ],
                format: {
                    title: "편집 시간을 반으로 줄이는 '대본 포맷' 루틴",
                    quote: "\"약속된 기호가 작업 속도를 결정합니다.\"",
                    cols: [
                        {
                            items: [
                                { title: "일반 문장 (TTS)", color: "blue", text: "나레이션이 읽는 구간." },
                                { title: "\"큰 따옴표\" (인용)", color: "yellow", text: "영상 속 등장인물의 실제 대사." }
                            ]
                        },
                        {
                            items: [
                                { title: "(괄호) (지문)", color: "zinc", text: "소리 내지 않고 <span class='text-white'>자막으로만</span> 들어가는 상황/감정 설명.<br/>(예: \"뻘쭘하네\", \"눈치 봄\")" },
                                { title: "[대괄호] (시간/구간)", color: "green", text: "벤치마킹 영상의 특정 초수 표기.<br/>(예: \"[20초] 이 장면 사용\") -> <span class='text-white font-bold'>편집 40분 → 10분 단축 핵심.</span>" }
                            ]
                        }
                    ]
                }
            },
            {
                id: "benchmarking",
                title: "결(Kyeol)의 개념과 벤치마킹 기준",
                subtitle: "조회수가 낮은 영상도 벤치마킹하는 이유",
                kyeol: {
                    title: "낮은 조회수? 오히려 기회일 수 있습니다",
                    quote: "\"조회수가 낮다고 버리지 마세요.<br/><span class='text-purple-400'>소재와 결(Texture)</span>이 맞다면, <span class='underline decoration-wavy decoration-white/30'>내가 살릴 수 있습니다.</span>\"",
                    reasons: [
                        { title: "Reason 1. 타이밍 (Timing)", text: "원작자가 타이밍을 잘못 잡았을 수 있습니다. <span class='text-white font-bold'>지금 올리면 터질 수도 있습니다.</span>" },
                        { title: "Reason 2. 가이드라인 (Limit)", text: "원작자가 <span class='text-red-400 font-bold'>가이드라인/일치율</span>을 못 지켰을 수 있습니다. (우리는 해결 가능)" },
                        { title: "Reason 3. 노잼 (No Jam)", text: "소재는 좋은데 <span class='text-white font-bold'>영상 기획(양념)</span>이 부족했을 수 있습니다. (내가 더 재밌게 만들면 됨)" }
                    ],
                    def: {
                        icon: "Sparkles",
                        color: "yellow",
                        title: "결(Kyeol)이란?",
                        text: "단순히 장르(축구, 음식)가 같은 것이 아니라,<br/><span class='text-white font-bold'>\"어떤 감정선, 어떤 흐름(기승전결), 어떤 대본 스타일이 먹히는가?\"</span>에 대한 공통점입니다.<br/><span class='text-zinc-400 text-lg mt-2'>(예: 감동 채널에서 '할아버지-손자' 코드, '선물' 코드가 통하는 맥락)</span>"
                    }
                },
                cases: {
                    title: "Case Study: 원작 대비 조회수 뻥튀기 전략",
                    items: [
                        { label: "Case 1: 한국 편의점/택배", stats: "128만 -> 500만 (4배)", text: "\"처음 한국 온 외국인 부부, 시설에 입을 다물지 못합니다.\"<br/>→ 수저 찾는 장면 추가 + 화질 보정(픽셀 변경)." },
                        { label: "Case 2: 캠핑장 체험", stats: "102만 -> 312만 (3배)", text: "\"결국 2박 3일로 연장했다고 하네요.\" (MSG)<br/>→ 사장님의 환대, 바베큐 파티 강조로 감정선 자극." },
                        { label: "Case 3: 할아버지와 손자", stats: "68만 -> 270만 (4배)", text: "\"눈에서 꿀이 뚝뚝 떨어지는...\" (감정 극대화)<br/>→ 내가 손자가 되어 <span class='text-white font-bold'>감정 이입</span>한 대본 작성." },
                        { label: "Case 4: 외국 식당 (사랑합니다)", stats: "200만 View", text: "구간 변경 없이 <span class='text-white font-bold'>오직 단어 변경</span>만으로 성공.<br/>\"와우, 서울에서 9,000원이라니?\" (말장난/의역)" }
                    ]
                }
            },
            {
                id: "asset_expansion",
                title: "3. 효율적인 에셋 확장",
                subtitle: "1분 만에 수십 개 채널 찾기",
                cards: [
                    {
                        title: "도구 활용 (Tools)",
                        icon: "Tool",
                        color: "zinc",
                        items: [
                            { title: "VidIQ 필터링:", text: "키워드 검색 -> Shorts 탭 -> 필터: <span class='text-green-400 font-bold'>\"조회수 30만 이상\"</span><br/>'Load More'로 고조회수 채널 무한 채굴." },
                            { title: "GPT 키워드 추출:", text: "관심 채널 영상 제목을 긁어서 GPT에 입력.<br/>\"제목에서 공통 키워드 추출해줘\" -> 확장." }
                        ]
                    },
                    {
                        title: "플랫폼 확장 (SNS)",
                        icon: "Globe",
                        color: "blue",
                        items: [
                            { title: "해외 채널 발굴:", text: "추출한 키워드를 <span class='text-white font-bold'>외국어(영어/스페인어)</span>로 번역 검색.<br/>해외 감동 채널 대량 확보." },
                            { title: "틱톡/인스타그램 추천:", text: "특정 키워드 검색 -> 채널 팔로우/메시지 옆 <span class='text-white font-bold'>\"화살표(▼)\"</span> 클릭.<br/>유사 채널 수십 개가 즉시 추천됨." }
                        ]
                    }
                ]
            },
            {
                id: "summary",
                title: "4. 최종 요약 및 루틴 각인",
                subtitle: "우리는 이미 경쟁 우위에 서 있습니다",
                grid: {
                    routine: {
                        title: "쇼츠 제작 핵심 루틴 (3단계)",
                        items: [
                            { num: "1.", text: "<strong>가이드라인 검수:</strong> 기본 중의 기본." },
                            { num: "2.", text: "<strong>단어 변경:</strong> 일치율 회피 (AI 우회)." },
                            { num: "3.", text: "<strong>야부리(양념):</strong> 재미와 감동(몰입도) 부여." }
                        ]
                    },
                    kyeol: {
                        title: "결(Kyeol)의 힘",
                        items: [
                            "터진 영상은 이유가 있다. (공통점 발견)",
                            "결만 맞으면 <strong>해외 영상도 내 재료.</strong>",
                            "데이터 중심 사고로 <strong>트렌드 해커</strong>가 되라."
                        ]
                    }
                },
                footer: {
                    title: "마지막 당부: 경쟁이 아닌 독점",
                    quote: "\"우리는 이미 <span class='text-yellow-400'>2,000개의 검증된 에셋</span>을 가지고 시작합니다.<br/>남들이 맨땅에 헤딩할 때, 우리는 <span class='underline decoration-4 decoration-yellow-600'>결이 맞는 보물지도</span>를 보고 뜁니다.\"",
                    text: "이제, 시청자가 좋아하는 영상으로 <span class='text-white font-bold'>맛있게 조리(편집)</span>하면 끝입니다."
                }
            }
        ]
    };

    window.Contents.lecture2_part1 = () => {
        const data = lecture2Part1Data;
        const s1 = data.sections[0];
        const s2 = data.sections[1];
        const s3 = data.sections[2];
        const s4 = data.sections[3];
        const s5 = data.sections[4];

        return html`
            <div className="space-y-48 pb-60">
                <div className="text-center space-y-12 py-32 animate-fade-in">
                    <${Badge} color="indigo">${data.meta.week}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                <${Section} title=${s1.title} subtitle=${s1.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <${Card} title=${s1.cards[0].title} icon=${s1.cards[0].icon} color=${s1.cards[0].color}>
                            <p className="text-2xl text-white mb-6 font-bold" dangerouslySetInnerHTML=${{ __html: s1.cards[0].quote }}></p>
                            <ul className="space-y-6 text-xl lg:text-2xl text-zinc-200">
                                ${s1.cards[0].items.map(item => html`
                                    <li class="flex items-start gap-4">
                                        <span class=${`text-${s1.cards[0].color}-500 font-black mt-1`}>●</span>
                                        <div>
                                            <strong class="block mb-1 text-white">${item.label}</strong>
                                            <span class="text-zinc-300" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                        </div>
                                    </li>
                                `)}
                            </ul>
                        <//>
                        <${Card} title=${s1.cards[1].title} icon=${s1.cards[1].icon} color=${s1.cards[1].color}>
                            <div className="space-y-8">
                                ${s1.cards[1].boxes.map(box => html`
                                    <div className="p-6 bg-black rounded-2xl border border-zinc-800">
                                        <strong className="text-2xl text-purple-400 block mb-2">${box.title}</strong>
                                        <p class="text-xl text-zinc-300" dangerouslySetInnerHTML=${{ __html: box.text }}></p>
                                    </div>
                                `)}
                            </div>
                        <//>
                    </div>
                <//>

                <${Section} title=${s2.title} subtitle=${s2.subtitle}>
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            ${s2.steps.map(step => html`
                                <div className=${`p-8 bg-zinc-900/50 rounded-[2rem] border border-${step.color}-500/30`}>
                                    <strong className=${`text-${step.color}-400 text-3xl font-black mb-4 block`}>${step.num}</strong>
                                    <h3 className="text-2xl text-white font-bold mb-4">${step.title}</h3>
                                    <p className="text-xl text-zinc-300 leading-relaxed" dangerouslySetInnerHTML=${{ __html: step.text }}></p>
                                </div>
                            `)}
                        </div>

                        <${Card} title=${s2.format.title} icon="FileText" color="zinc" className="mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <p className="text-2xl text-white font-bold mb-4">${s2.format.quote.replace(/"/g, '')}</p>
                                    <ul className="space-y-4 text-xl text-zinc-300">
                                        ${s2.format.cols[0].items.map(item => html`
                                            <li class="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                                <span className=${`text-${item.color}-400 font-bold block mb-1`}>${item.title}</span>
                                                <span dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                            </li>
                                        `)}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <ul className="space-y-4 text-xl text-zinc-300">
                                        ${s2.format.cols[1].items.map(item => html`
                                            <li class="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                                <span className=${`text-${item.color}-400 font-bold block mb-1`}>${item.title}</span>
                                                <span dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                            </li>
                                        `)}
                                    </ul>
                                </div>
                            </div>
                        <//>
                    </div>
                <//>

                <${Section} title=${s3.title} subtitle=${s3.subtitle}>
                    <div className="space-y-8">
                        <${Card} title=${s3.kyeol.title} icon="EyeOff" color="purple">
                            <div className="mb-8 p-6 bg-purple-900/20 border border-purple-500/30 rounded-2xl">
                                <p className="text-2xl text-white font-bold leading-relaxed" dangerouslySetInnerHTML=${{ __html: s3.kyeol.quote }}></p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                ${s3.kyeol.reasons.map(reason => html`
                                    <div className="p-6 bg-black rounded-2xl border border-zinc-800">
                                        <strong className="text-xl text-zinc-400 block mb-3">${reason.title}</strong>
                                        <p class="text-lg text-zinc-200" dangerouslySetInnerHTML=${{ __html: reason.text }}></p>
                                    </div>
                                `)}
                            </div>
                            <div className="mt-8">
                                 <strong className="block text-2xl text-white mb-4 flex items-center gap-2"><${LucideIcon} name=${s3.kyeol.def.icon} className=${`text-${s3.kyeol.def.color}-400`} size=${28}/> ${s3.kyeol.def.title}</strong>
                                 <p className="text-xl text-zinc-300 leading-relaxed" dangerouslySetInnerHTML=${{ __html: s3.kyeol.def.text }}></p>
                            </div>
                        <//>
                        
                        <${Card} title=${s3.cases.title} icon="TrendingUp" color="red">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    ${s3.cases.items.slice(0, 2).map(c => html`
                                        <div className="p-6 bg-black rounded-2xl border border-zinc-800">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-zinc-400 text-lg">${c.label}</span>
                                                <span className="text-red-400 font-black text-2xl">${c.stats}</span>
                                            </div>
                                            <p class="text-xl text-zinc-200" dangerouslySetInnerHTML=${{ __html: c.text }}></p>
                                        </div>
                                    `)}
                                </div>
                                <div className="space-y-6">
                                    ${s3.cases.items.slice(2).map(c => html`
                                        <div className="p-6 bg-black rounded-2xl border border-zinc-800">
                                            <div className="flex justify-between items-end mb-2">
                                                <span className="text-zinc-400 text-lg">${c.label}</span>
                                                <span className="text-red-400 font-black text-2xl">${c.stats}</span>
                                            </div>
                                            <p class="text-xl text-zinc-200" dangerouslySetInnerHTML=${{ __html: c.text }}></p>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        <//>
                    </div>
                <//>

                <${Section} title=${s4.title} subtitle=${s4.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${s4.cards.map(card => html`
                            <${Card} title=${card.title} icon=${card.icon} color=${card.color}>
                                <ul className="space-y-6 text-xl lg:text-2xl text-zinc-200">
                                    ${card.items.map(item => html`
                                        <li class="flex items-start gap-4">
                                            <span class=${`text-${card.color === 'zinc' ? 'white' : 'blue'}-500 font-black mt-1`}>●</span>
                                            <div>
                                                <strong class=${`block mb-1 text-${card.color === 'zinc' ? 'white' : 'blue-200'}`}>${item.title}</strong>
                                                <span class="text-zinc-300" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                            </div>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                        `)}
                    </div>
                <//>

                <${Section} title=${s5.title} subtitle=${s5.subtitle}>
                    <div className="space-y-12">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="p-8 bg-black rounded-[2rem] border border-zinc-800">
                                <strong className="text-3xl text-white block mb-6">${s5.grid.routine.title}</strong>
                                <ul className="space-y-4 text-xl text-zinc-300">
                                    ${s5.grid.routine.items.map(item => html`
                                        <li class="flex items-center gap-3"><span className="text-indigo-500 font-bold text-2xl">${item.num}</span> <span dangerouslySetInnerHTML=${{ __html: item.text }}></span></li>
                                    `)}
                                </ul>
                            </div>
                            <div className="p-8 bg-black rounded-[2rem] border border-zinc-800">
                                <strong className="text-3xl text-white block mb-6">${s5.grid.kyeol.title}</strong>
                                <ul className="space-y-4 text-xl text-zinc-300">
                                    ${s5.grid.kyeol.items.map(item => html`
                                        <li class="flex items-center gap-3"><${LucideIcon} name="Check" className="text-green-500" size=${24} /> <span dangerouslySetInnerHTML=${{ __html: item }}></span></li>
                                    `)}
                                </ul>
                            </div>
                         </div>

                        <${Card} title=${s5.footer.title} icon="Crown" color="yellow">
                            <p className="text-2xl lg:text-3xl text-white font-bold leading-relaxed mb-6" dangerouslySetInnerHTML=${{ __html: s5.footer.quote }}></p>
                            <div className="p-6 bg-yellow-900/20 border border-yellow-500/20 rounded-2xl text-center">
                                <span className="text-xl text-zinc-200" dangerouslySetInnerHTML=${{ __html: s5.footer.text }}></span>
                            </div>
                        <//>
                    </div>
                <//>
            </div>
        `;
    };

    // --- Lecture 2 Part 2 ---
    // [Data Separation Strategy]
    // Defining the content data first to ensure 0% data loss and cleaner UI separation.
    const lecture2Part2Data = {
        meta: {
            badgeColor: "pink",
            badgeText: "WEEK 2 - PART 2",
            title: "해외 소재 발굴과 실전 편집 루틴",
            gradient: "from-pink-500 to-rose-500",
            description: [
                { text: "\"일치율(저작권) 벗기기의 정수.\"", highlight: "white" },
                { text: "해외 트렌드를 해킹하고, 드라마 클립을 재창조하는", highlight: "" },
                { text: "구체적인 편집 실습과 노하우", highlight: "pink-400" },
                { text: "를 전수합니다.", highlight: "" },
            ]
        },
        sections: [
            {
                id: "trend_benchmarking",
                title: "1. 해외 트렌드 벤치마킹",
                subtitle: "블루오션 소재를 선점하라",
                items: [
                    {
                        title: "도어캠 (Door Cam)",
                        icon: "Camera",
                        color: "zinc",
                        summary: "295만 ~ 800만  조회수",
                        details: [
                            { label: "Concept", value: "경찰 바디캠의 확장판. '새벽 2시의 공포'. 황당/무서움 자극." },
                            { label: "성과", value: "강사 채널 기록: 295만, 800만, 500만 조회수." },
                            { label: "전략", value: "해외 소재를 가져와 한국 정서에 맞게 가공." },
                            { label: "Trend Cycle", value: "6~7개월 지나면 다시 터지는 경향. (남들이 안 할 때 선점)" }
                        ]
                    },
                    {
                        title: "해외 드라마 & 클립",
                        icon: "Film",
                        color: "pink",
                        summary: "한 줄당 100만 뷰의 위력",
                        details: [
                            { label: "시장 규모", value: "조회수 3,400만 회 채널 다수. (월 수익 500~600만 원 추정)" },
                            { label: "편집 전략", value: "해외 클립 의역 + 맛깔난 양념(TTS/자막/대화함)." },
                            { label: "Tip", value: "틱톡은 영상 자체 자막보다 '띠 배너' 자막이 많아 자막 지우기(Overlay)가 매우 용이함." }
                        ]
                    }
                ]
            },
            {
                id: "niche_materials",
                title: "2. 틈새 소재 분석 (Niche)",
                subtitle: "알짜배기 고효율 카테고리",
                items: [
                    {
                        title: "감동 명언",
                        icon: "Heart",
                        color: "yellow",
                        summary: "2억 3천만 뷰",
                        details: [
                            { label: "타겟", value: "MZ세대 중심." },
                            { label: "성과", value: "영상 110개로 2억 3천만 뷰 달성. 고점 1,400만~6,000만 회." },
                            { label: "전략", value: "해외 채널(볼트 모티베이션 등) 벤치마킹. 키워드 확장기로 다국어 소재 발굴." }
                        ]
                    },
                    {
                        title: "랭킹 (Ranking)",
                        icon: "ListOrdered",
                        color: "blue",
                        summary: "5억 4천만 뷰",
                        details: [
                            { label: "성과", value: "한국 '쇼랭커' 영상 141개로 5억 4천만 뷰." },
                            { label: "Source", value: "틱톡에 원본 소재가 넘쳐남. (검색만 하면 다 나옴)" },
                            { label: "Tip", value: "어렵게 생각 말고 키워드 검색으로 원본 확보." }
                        ]
                    },
                    {
                        title: "스포츠/동물/게임",
                        icon: "Gamepad2",
                        color: "purple",
                        summary: "고RPM & 스테디셀러",
                        details: [
                            { label: "야구", value: "3초 컷 200만 뷰 가능." },
                            { label: "동물", value: "기본 천만 뷰. 재미있게 만드는 양념 능력이 핵심." },
                            { label: "게임(브롤)", value: "RPM 400원+ (고단가). 방학 시즌 떡상. (저점 높으나 고점 낮음)" }
                        ]
                    }
                ]
            },
            {
                id: "editing_practice",
                title: "3. 편집 실습: 드라마 클립 (거짓의 자백)",
                subtitle: "8분 대본, 35분 편집의 기적",
                items: [
                    {
                        title: "일치율 벗기기 루틴",
                        icon: "Scissors",
                        color: "red",
                        summary: "저작권 회피 기술",
                        details: [
                            { label: "1. 에셋 선택", value: "결에 맞는 영상을 가져온다. (기획 80%)" },
                            { label: "2. 대본 수정", value: "가이드라인 준수 + 단어 변경 + 양념 치기." },
                            { label: "3. 재배치", value: "와우 포인트(후킹)를 앞으로 배치. 순서 변경." },
                            { label: "4. 기술", value: "속도 조절, 클립 순서 변경, 나레이션 삽입으로 저작권 회피." },
                            { label: "5. 루프", value: "드라마 내용을 몰라도, 뒤 장면 자동 재생(궁금증 유발)으로 완성." }
                        ]
                    },
                    {
                        title: "실전 편집 Tip (Detail)",
                        icon: "Settings",
                        color: "zinc",
                        summary: "Typecast & CapCut",
                        details: [
                            { label: "TTS 설정", value: "박창수 캐릭터, 끊어 읽기 0초, 속도 1.1배." },
                            { label: "화면 비율", value: "9:16 변경 + 위아래 띠 배너(사진/짤) 배치. (얼빡샷/재단 용이)" },
                            { label: "음량/자막", value: "목표 음량 -14 LUFS 고정. 나레이션 자막 위로, 현장 대화 아래로 분리." },
                            { label: "품질 보정", value: "필터(채도 50~90) + 품질 보정 + 해상도 1080p / 60fps." }
                        ]
                    }
                ]
            },
            {
                id: "politics_strategy",
                title: "4. 정치/이슈 소재와 '반대 의견' 전략",
                subtitle: "High Risk, High Return의 정점",
                items: [
                    {
                        title: "청개구리 전법 (Reverse)",
                        icon: "RefreshCw",
                        color: "green",
                        summary: "트렌드 역이용 전략",
                        details: [
                            { label: "Benchmarking", value: "타 채널: '국격 떨어졌다' (비난 위주)." },
                            { label: "My Strategy", value: "뉴스/외신(BBC) 기반 '반대 의견(옹호/승리)' 제시." },
                            { label: "운영 원칙", value: "중도는 없다. 한쪽 진영만 확실하게 팔 것. (양쪽 다 건드리면 채널 삭제)" },
                            { label: "Risk", value: "신고/노란딱지 위험 높음. 필터 절대 금지." }
                        ]
                    }
                ]
            },
            {
                id: "qna_homework",
                title: "5. Q&A 및 2주차 과제",
                subtitle: "실행력만이 정답입니다",
                items: [
                    {
                        title: "핵심 Q&A",
                        icon: "HelpCircle",
                        color: "blue",
                        summary: "저작권 & 운영",
                        details: [
                            { label: "저작권", value: "1분 이내도 걸림. 한국 라이센스 없는 작품 추천. (공중파 절대 금지)" },
                            { label: "위험 단어", value: "'원조교제' 등 비상식적 단어 주의. 가이드라인 위반 아니면 사용 가능." },
                            { label: "0뷰(깡통)", value: "한두 번 0뷰 나오면 미련 없이 버리고 새로 팔 것." },
                            { label: "중복도", value: "확인할 시간에 영상 2개 더 만드는 게 이득. 플랫된 영상만 가져올 것." }
                        ]
                    },
                    {
                        title: "2주차 과제 (Mission)",
                        icon: "ClipboardList",
                        color: "yellow",
                        summary: "채널 발굴 & 영상 제작",
                        details: [
                            { label: "1. 카테고리", value: "1차와 다른 5개 카테고리 선정." },
                            { label: "2. 채널 찾기", value: "각 카테고리당 한국 채널 5개씩 발굴 (총 25개)." },
                            { label: "3. 영상 제작", value: "벤치 영상 2개 -> 대본 2개 -> 실제 영상 1개 제작 (필수)." },
                            { label: "제출 기한", value: "다음 주 금요일 17:00." }
                        ]
                    }
                ]
            }
        ]
    };

    window.Contents.lecture2_part2 = () => {
        const { meta, sections } = lecture2Part2Data;

        // Helper
        const getSection = (id) => sections.find(s => s.id === id);

        const trend = getSection('trend_benchmarking');
        const niche = getSection('niche_materials');
        const edit = getSection('editing_practice');
        const politics = getSection('politics_strategy');
        const qna = getSection('qna_homework');

        const iconTexts = {
            blue: "text-blue-400", purple: "text-purple-400", red: "text-red-400",
            green: "text-green-400", yellow: "text-yellow-400", orange: "text-orange-400",
            pink: "text-pink-400", zinc: "text-zinc-400", indigo: "text-indigo-400"
        };
        const bgStyles = {
            blue: "bg-blue-900/10 border-blue-500/20",
            purple: "bg-purple-900/10 border-purple-500/20",
            red: "bg-red-900/10 border-red-500/20",
            green: "bg-green-900/10 border-green-500/20",
            yellow: "bg-yellow-900/10 border-yellow-500/20",
            orange: "bg-orange-900/10 border-orange-500/20",
            pink: "bg-pink-900/10 border-pink-500/20",
            zinc: "bg-zinc-900/40 border-zinc-700",
            indigo: "bg-indigo-900/10 border-indigo-500/20"
        };

        return html`
            <div className="space-y-48 pb-60">
                 <!-- Hero Section -->
                 <div className="text-center space-y-12 py-32 animate-fade-in">
                    <${Badge} color=${meta.badgeColor}>${meta.badgeText}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl">
                        해외 소재 발굴과<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r ${meta.gradient}">실전 편집 루틴</span>
                    </h1>
                     <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold">
                        ${meta.description.map(desc => html`
                            <span className=${desc.highlight ? 'text-' + desc.highlight : 'text-zinc-200'}>${desc.text}</span>
                        `)}
                    </p>
                </div>

                <!-- 1. Trend Benchmarking -->
                <${Section} title=${trend.title} subtitle=${trend.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        ${trend.items.map(item => html`
                            <${Card} title=${item.title} icon=${item.icon} color=${item.color}>
                                <div className="space-y-6">
                                    <p className="text-2xl text-white font-bold border-l-4 border-${item.color}-500 pl-4">${item.summary}</p>
                                    <ul className="space-y-4">
                                        ${item.details.map(d => html`
                                            <li className="flex items-start gap-4">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full ${iconTexts[item.color]} shrink-0"></div>
                                                <span className="text-xl lg:text-2xl text-zinc-300">
                                                    <strong className="text-white">${d.label}:</strong> ${d.value}
                                                </span>
                                            </li>
                                        `)}
                                    </ul>
                                </div>
                            <//>
                        `)}
                    </div>
                <//>

                <!-- 2. Niche Materials (Grid) -->
                <${Section} title=${niche.title} subtitle=${niche.subtitle}>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${niche.items.map(item => html`
                            <div className=${`p-8 rounded-[2rem] border transition-colors hover:-translate-y-1 duration-300 ${bgStyles[item.color]}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <${LucideIcon} name=${item.icon} size=${32} className=${iconTexts[item.color]} />
                                    <strong className="text-2xl font-bold text-white">${item.title}</strong>
                                </div>
                                <p className="text-2xl text-white font-bold mb-6 pb-4 border-b border-white/10">${item.summary}</p>
                                <div className="space-y-3">
                                     ${item.details.map(d => html`
                                        <div className="bg-black/30 p-3 rounded-xl">
                                            <span className=${`block text-xl font-bold mb-1 ${iconTexts[item.color]}`}>${d.label}</span>
                                            <span className="text-xl lg:text-2xl text-zinc-300 leading-tight">${d.value}</span>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        `)}
                     </div>
                <//>

                <!-- 3. Editing Practice (Process) -->
                <${Section} title=${edit.title} subtitle=${edit.subtitle}>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        ${edit.items.map(item => html`
                            <div className="p-10 bg-zinc-900 rounded-[2.5rem] border border-zinc-700 relative overflow-hidden">
                                <div className="flex items-center gap-4 mb-8">
                                    <span class=${`p-3 rounded-xl bg-${item.color}-500/20 text-${item.color}-400`}>
                                        <${LucideIcon} name=${item.icon} size=${32} />
                                    </span>
                                    <h3 className="text-3xl font-black text-white">${item.title}</h3>
                                </div>
                                <ul className="space-y-6">
                                    ${item.details.map(d => html`
                                        <li className="flex gap-4">
                                            <span className=${`font-bold min-w-[24px] ${iconTexts[item.color]}`}>●</span>
                                            <div>
                                                <strong className="block text-zinc-400 text-xl mb-1">${d.label}</strong>
                                                <p className="text-xl lg:text-2xl text-zinc-200 font-medium leading-relaxed">${d.value}</p>
                                            </div>
                                        </li>
                                    `)}
                                </ul>
                            </div>
                        `)}
                     </div>
                <//>

                <!-- 4. Politics Strategy (Highlight) -->
                <${Section} title=${politics.title} subtitle=${politics.subtitle}>
                    <div className="p-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-[2.5rem]">
                        <div className="bg-black rounded-[2.4rem] p-10 h-full">
                             <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div className="flex-1">
                                    <div className="inline-flex p-4 rounded-full bg-green-500/20 text-green-400 mb-6">
                                        <${LucideIcon} name=${politics.items[0].icon} size=${48} />
                                    </div>
                                    <h3 className="text-4xl font-black text-white mb-4">${politics.items[0].title}</h3>
                                    <p className="text-2xl text-zinc-300 mb-8">${politics.items[0].summary}</p>
                                </div>
                                <div className="flex-1 w-full">
                                    <ul className="space-y-4">
                                        ${politics.items[0].details.map(d => html`
                                            <li className="bg-zinc-900/50 p-5 rounded-2xl border border-zinc-800 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                                <span className="text-green-400 text-xl font-bold">${d.label}</span>
                                                <span className="text-white text-xl lg:text-2xl text-right sm:max-w-[70%]">${d.value}</span>
                                            </li>
                                        `)}
                                    </ul>
                                </div>
                             </div>
                        </div>
                    </div>
                <//>

                <!-- 5. Q&A & Homework -->
                <${Section} title=${qna.title} subtitle=${qna.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${qna.items.map(item => html`
                            <${Card} title=${item.title} icon=${item.icon} color=${item.color}>
                                <ul className="space-y-6">
                                    ${item.details.map(d => html`
                                        <li className="flex items-start gap-4">
                                            <span class=${`text-2xl font-bold min-w-[24px] mt-1 ${iconTexts[item.color]}`}>Q.</span>
                                            <div>
                                                <strong class="text-white text-xl block mb-1">${d.label}</strong>
                                                <span class="text-zinc-300 text-xl lg:text-2xl">${d.value}</span>
                                            </div>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                        `)}
                    </div>
                <//>
            </div>
        `;
    };

    // --- Lecture 3 Part 1 ---
    // --- Lecture 3 Part 1 ---
    // [Data Separation Strategy]
    const lecture3Part1Data = {
        meta: {
            badgeColor: "indigo",
            badgeText: "WEEK 3 - PART 1",
            title: "3주 사이클 공식과<br/>우량주 발굴",
            gradient: "from-indigo-500 to-blue-500",
            description: [
                { text: "\"기본기가 없으면 1억도 없다.\"", highlight: "white" },
                { text: "손웅정 감독의 트래핑 훈련처럼,", highlight: "" },
                { text: "가단야(가이드라인, 단어, 야부리)", highlight: "indigo-400" },
                { text: "와 실전 루틴을 완성합니다.", highlight: "" }
            ]
        },
        sections: [
            {
                id: "orientation",
                title: "0. 오리엔테이션 & 마인드셋",
                subtitle: "돈을 벌러 나가는 실전화 단계",
                cards: [
                    {
                        title: "강의 목표 & 80%의 법칙",
                        icon: "Target",
                        color: "red",
                        items: [
                            { label: "1, 2강의 중요성:", text: "전체 성과의 <span className=\"text-white font-bold\">80%</span>는 기본기에서 나온다." },
                            { label: "두 달 만의 성과:", text: "강사는 2달 만에 일왕 채널 6개를 만들었다. (2개는 SN 이슈로 날아감)" },
                            { label: "연구하는 자세:", text: "시청자가 아닌 <span className=\"text-red-400 font-bold\">소믈리에/감별사</span> 모드로 접근하라.(\"나도 이렇게 해볼까?\" 사고 확장)" }
                        ]
                    },
                    {
                        title: "찜질방 & 에셋(Asset)",
                        icon: "Gift",
                        color: "yellow",
                        items: [
                            { label: "찜질방 (1:1 상담):", text: "대본/방향성 막히면 찾아와라. (속도가 빨라짐)" },
                            { label: "3,200개 에셋 방출:", text: "결이 잡힌 '돈통'. 맨땅에 헤딩하지 마라." },
                            { label: "숙제:", text: "제출용 아님. 혼자만의 고민 시간(방향성 정립)을 가질 것." }
                        ]
                    }
                ]
            },
            {
                id: "gadanya",
                title: "1. 핵심 이론: 가.단.야",
                subtitle: "일치율을 피하고 차별화를 만드는 유일한 길",
                coreMessage: "\"단어만 잘 바꿔도 분위기가 확 바뀐다.\"",
                items: [
                    { title: "가 (가이드라인)", desc: "위반하면 추억만 쌓고<br/>돈은 날린다. (필수 준수)" },
                    { title: "단 (단어 바꾸기)", desc: "시금치 -> <span className=\"text-yellow-400\">뽀빠이 야채</span><br/>딸 -> <span className=\"text-yellow-400\">딸내미</span> (세종대왕 만세)" },
                    { title: "야 (야부리 털기)", desc: "상황을 의역하여<br/>맛깔나게 양념 치기." }
                ]
            },
            {
                id: "script_routine",
                title: "2. 대본 기획 & 필승 루틴",
                subtitle: "선 기획 후 대본 금지 (대본이 곧 기획이다)",
                routine: {
                    title: "대본 작성 4단계 루틴",
                    icon: "Keyboard",
                    color: "green",
                    steps: [
                        { label: "1. 깍두기:", text: "벤치 영상의 초수(구간)를 정확히 표시." },
                        { label: "2. 타이핑:", text: "나레이션 들어갈 자리 TTS 구간 표시." },
                        { label: "3. 다운표(\"\"):", text: "영상 속 인물들의 대화 그대로 표시." },
                        { label: "4. 자막(양념):", text: "드립, 상황 설명 등으로 맛을 낸다." }
                    ]
                },
                fundamental: {
                    title: "기본기 강조 (Fundamental)",
                    icon: "Dumbbell",
                    color: "zinc",
                    items: [
                        { label: "손웅정 감독의 트래핑:", text: "기본기(1, 2강)가 안 되면 절대 돈 못 번다." },
                        { label: "시스템 전제:", text: "4강 시스템 구축을 위해서도 대본화(기획) 역량이 필수." },
                        { label: "80 vs 20:", text: "영상 기획(구간, TTS 양념)이 80%, 시각적 편집(폰트)은 20%." }
                    ]
                }
            },
            {
                id: "case_study",
                title: "3. 우수 사례 분석 (Case Study)",
                subtitle: "벤치마킹에서 차별화를 찾는 안목",
                items: [
                    {
                        title: "감동 (Rehab)", icon: "Heart", color: "pink",
                        desc: "엄마와 걷지 못하는 아이의 재활 등반.",
                        points: [
                            "* <span className=\"text-white\">직접 더빙</span>: 감정 전달, 몰입도 최상.",
                            "* 엔딩 나레이션: \"지금 넘어져 있는 당신에게...\" (후킹)"
                        ]
                    },
                    {
                        title: "예능 (Variety)", icon: "Smile", color: "yellow",
                        desc: "11살 연상 누나 vs 연하 남동생.",
                        points: [
                            "* 짧은 원본을 맛깔나게 살림.",
                            "* <span className=\"text-red-400 font-bold\">1일 1비 금지:</span> 1분마다 조회수 보지 말고 한 달 통계 봐라."
                        ]
                    },
                    {
                        title: "요리 (Cooking)", icon: "ChefHat", color: "orange",
                        desc: "미국 엄마의 대충 요리 (손 안 쓰고).",
                        points: [
                            "* 소제목 후킹: \"파스타 대충 하면 되는 거 아님?\"",
                            "* <span className=\"text-white\">키워드 중복 회피:</span> 버터/소스 등 단어 교체 필수."
                        ]
                    }
                ]
            },
            {
                id: "asset_selection",
                title: "4. 에셋 탐색 & 소재 선정",
                subtitle: "한계선을 뚫는 무기",
                tools: {
                    title: "4대 탐색 도구", icon: "Search", color: "blue",
                    items: ["1. <strong>로드몰</strong>", "2. <strong>틱톡 (모바일)</strong>", "3. <strong>인스타그램</strong>", "4. <strong>제공 프로그램</strong>"]
                },
                source: {
                    title: "돈통과 소스", icon: "Database", color: "purple",
                    items: [
                        { label: "에셋 = 돈통(쌀):", text: "곳간에 쌀이 많아야 밥을 짓는다. (결에 맞으면 조회수 낮아도 내 것)" },
                        { label: "영상 = 소스:", text: "쌀 속에 있는 양념. 차별화 포인트가 무기가 된다." },
                        { label: "한계선 돌파:", text: "<span className=\"text-white font-bold\">감정, 공감대</span>가 한계를 깬다." }
                    ]
                }
            },
            {
                id: "cycle_formula",
                title: "5. 신규 채널 안착을 위한 3주 사이클 공식",
                subtitle: "확률을 지배하는 루틴",
                step1: {
                    title: "STEP 1: 간 보기 (테스트)", icon: "FlaskConical", color: "zinc",
                    items: [
                        { label: "기간/수량:", text: "7일~10일 동안 <span className=\"text-white font-bold\">1일 1영상</span>." },
                        { label: "목적:", text: "알고리즘이 내 채널의 결(관심 모수)을 파악하는 시간." },
                        { label: "목표치:", text: "빠르면 3~4일, 늦어도 10일 내 <span className=\"text-indigo-400 font-bold\">10만~30만 뷰</span> 터짐." }
                    ]
                },
                step2: {
                    title: "STEP 2: 물량 집중 (Volume Strategy)", icon: "TrendingUp", color: "red",
                    items: [
                        { label: "기준점:", text: "10만 뷰 (최소 5만 뷰) 터지면 <span className=\"text-white font-bold\">우량주 확정</span>." },
                        { label: "1단계 (점수 단계):", text: "월~수 1개 / <span className=\"text-white font-bold\">목~일 2~3개</span> (주말 집중)", color: "text-red-400" },
                        { label: "2단계 (확장 단계):", text: "48시간 조회수 500만↑ 시 <span className=\"text-white font-bold\">월~수 2개 / 목~일 3~4개</span> 증량.", color: "text-red-400" },
                        { label: "", text: "* 평일에는 반응 없으면 절대 늘리지 말 것.", color: "text-zinc-400", isNote: true }
                    ]
                },
                traffic: {
                    weekdays: { label: "목, 금, 토, 일", desc: "유튜브 트래픽 피크 타임" },
                    holiday: { label: "공휴일 (빨간 날)", desc: "무조건 <span className=\"text-white font-bold\">1일 2영상</span> (트래픽 2배)" }
                }
            },
            {
                id: "view_analysis",
                title: "6. 조회수 지표별 행동 강령",
                subtitle: "미련 없이 버리고, 확실하게 키운다",
                levels: [
                    { views: "0 ~ 100 뷰", desc: "가이드라인 위반/채널 문제.<br/><span className=\"text-red-500 font-bold\">즉시 폐기 (5일 내).</span>", style: "bg-zinc-900 rounded-[2rem] border border-zinc-700 opacity-50", color: "text-zinc-400" },
                    { views: "100 ~ 1,000 뷰", desc: "알고리즘 선택 못 받음.<br/><span className=\"text-red-400 font-bold\">과감히 버린다.</span>", style: "bg-zinc-900 rounded-[2rem] border border-zinc-700 opacity-70", color: "text-zinc-400" },
                    { views: "1,000 ~ 3만 뷰", desc: "반응은 쏘쏘.<br/><span className=\"text-white\">소재 문제 or 일치율 미해결.</span><br/>(3개월 내 중복 소재 의심)", style: "bg-zinc-900 rounded-[2rem] border border-zinc-700", color: "text-yellow-500" },
                    { views: "3만 ~ 5만 뷰", desc: "<span className=\"text-white font-bold\">\"꽤 하는데?\"</span> 시그널.<br/>가능성 있음. (테스트 지속)", style: "bg-blue-900/40 rounded-[2rem] border border-blue-500/50", color: "text-blue-400" },
                    { views: "5만 ~ 10만 뷰 이상", desc: "<p className=\"text-2xl text-white font-bold mb-2\">\"너 아주 잘한다.\" (우량주 확정)</p><p className=\"text-xl text-zinc-300\">뒤도 돌아보지 말고 <span className=\"text-white underline\">물량 집중 (1일 2영상).</span></p>", style: "bg-red-900/40 rounded-[2rem] border border-red-500/50 lg:col-span-2", color: "text-red-400", isLarge: true }
                ]
            },
            {
                id: "mindset",
                title: "7. 핵심 운영 원칙 (Mindset)",
                subtitle: "데이터 중심의 냉정한 판단",
                principles: [
                    { title: "시청 지속 시간은 무시하라:", text: "유튜브 스튜디오의 지속 시간 통계는 오류가 많음 (평균 퍼센테이지). 오직 <span className=\"text-white font-bold\">조회수</span>만 믿고 간다." },
                    { title: "마라의 공식:", text: "1. 터진 건 또 터진다. 2. 1%만 만들면 된다. <span className=\"text-zinc-400\">(자신감을 가져라)</span>" },
                    { title: "깡통 채널(0뷰) 대처:", text: "한두 번 올려보고 0뷰(제로 펀치) 나오면 <span className=\"text-red-400 font-bold\">미련 없이 버리고 새로 판다.</span>" },
                    { title: "재미 검증법:", text: "5만 뷰가 안 나오면 지인(친구, 동네 김밥집 등)에게 보여주고 \"재밌냐?\"고 물어봐라. <span className=\"text-zinc-400\">(뼈 맞을 준비 필수)</span>" }
                ]
            }
        ]
    };

    window.Contents.lecture3_part1 = () => {
        const { meta, sections } = lecture3Part1Data;

        // Helpers for section access
        const getSection = (id) => sections.find(s => s.id === id);

        const orientation = getSection('orientation');
        const gadanya = getSection('gadanya');
        const script = getSection('script_routine');
        const cases = getSection('case_study');
        const asset = getSection('asset_selection');
        const cycle = getSection('cycle_formula');
        const views = getSection('view_analysis');
        const mindset = getSection('mindset');

        return html`
            <div className="space-y-48 pb-60">
                <div className="text-center space-y-12 py-32 animate-fade-in">
                    <${Badge} color=${meta.badgeColor}>${meta.badgeText}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: meta.title.replace('우량주 발굴', '<span class="text-transparent bg-clip-text bg-gradient-to-r ' + meta.gradient + '">우량주 발굴</span>') }}>
                    </h1>
                    <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold">
                        ${meta.description.map(d => html`
                            <span className=${d.highlight ? 'text-' + d.highlight : 'text-zinc-200'}>${d.text}</span><br/>
                        `)}
                    </p>
                </div>

                <${Section} title=${orientation.title} subtitle=${orientation.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                         ${orientation.cards.map(card => html`
                            <${Card} title=${card.title} icon=${card.icon} color=${card.color}>
                                <ul className="space-y-4 text-xl text-zinc-300">
                                    ${card.items.map(item => html`
                                        <li>• <strong>${item.label}</strong> <span dangerouslySetInnerHTML=${{ __html: item.text }}></span></li>
                                    `)}
                                </ul>
                            <//>
                         `)}
                    </div>
                <//>

                <${Section} title=${gadanya.title} subtitle=${gadanya.subtitle}>
                    <div className="p-8 bg-zinc-900/80 rounded-[2rem] border border-indigo-500/30 mb-8">
                        <strong className="block text-4xl text-indigo-400 mb-6 text-center">${gadanya.coreMessage}</strong>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            ${gadanya.items.map(item => html`
                                <div className="p-6 bg-black rounded-2xl border border-zinc-800">
                                    <strong className="block text-2xl text-white mb-2">${item.title}</strong>
                                    <span className="text-xl text-zinc-400" dangerouslySetInnerHTML=${{ __html: item.desc }}></span>
                                </div>
                            `)}
                        </div>
                    </div>
                <//>

                <${Section} title=${script.title} subtitle=${script.subtitle}>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                        <${Card} title=${script.routine.title} icon=${script.routine.icon} color=${script.routine.color}>
                            <ul className="space-y-4 text-xl text-zinc-300">
                                ${script.routine.steps.map(step => html`
                                    <li class="flex gap-3">
                                        <span class="text-green-400 font-bold">${step.label}</span>
                                        <span>${step.text}</span>
                                    </li>
                                `)}
                            </ul>
                        <//>
                        <${Card} title=${script.fundamental.title} icon=${script.fundamental.icon} color=${script.fundamental.color}>
                            <ul className="space-y-4 text-xl text-zinc-300">
                                ${script.fundamental.items.map(item => html`
                                    <li>• <strong>${item.label}</strong> ${item.text}</li>
                                `)}
                            </ul>
                        <//>
                    </div>
                <//>

                <${Section} title=${cases.title} subtitle=${cases.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${cases.items.map(item => html`
                            <${Card} title=${item.title} icon=${item.icon} color=${item.color}>
                                <p className="text-xl text-zinc-300 mb-4">${item.desc}</p>
                                <ul className="text-lg text-zinc-400 space-y-2">
                                    ${item.points.map(point => html`
                                        <li dangerouslySetInnerHTML=${{ __html: point }}></li>
                                    `)}
                                </ul>
                            <//>
                        `)}
                    </div>
                <//>

                <${Section} title=${asset.title} subtitle=${asset.subtitle}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <${Card} title=${asset.tools.title} icon=${asset.tools.icon} color=${asset.tools.color}>
                            <ul className="grid grid-cols-2 gap-4 text-xl text-zinc-300">
                                ${asset.tools.items.map(item => html`
                                    <li dangerouslySetInnerHTML=${{ __html: item }}></li>
                                `)}
                            </ul>
                        <//>
                        <${Card} title=${asset.source.title} icon=${asset.source.icon} color=${asset.source.color}>
                            <ul className="space-y-4 text-xl text-zinc-300">
                                ${asset.source.items.map(item => html`
                                    <li>• <strong>${item.label}</strong> <span dangerouslySetInnerHTML=${{ __html: item.text }}></span></li>
                                `)}
                            </ul>
                        <//>
                    </div>
                <//>
                
                <${Section} title=${cycle.title} subtitle=${cycle.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <${Card} title=${cycle.step1.title} icon=${cycle.step1.icon} color=${cycle.step1.color}>
                            <ul className="space-y-6 text-xl lg:text-2xl text-zinc-300">
                                ${cycle.step1.items.map(item => html`
                                    <li>• <strong>${item.label}</strong> <span dangerouslySetInnerHTML=${{ __html: item.text }}></span></li>
                                `)}
                            </ul>
                        <//>
                        <${Card} title=${cycle.step2.title} icon=${cycle.step2.icon} color=${cycle.step2.color}>
                            <ul className="space-y-4 text-xl text-zinc-300">
                                ${cycle.step2.items.map(item => html`
                                    ${item.isNote ? html`
                                        <li className="text-zinc-400 text-lg">${item.text}</li>
                                    ` : html`
                                        <li>
                                            <strong className=${"block mb-1 " + (item.color || "text-white")}>${item.label}</strong>
                                            <span dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                        </li>
                                    `}
                                `)}
                            </ul>
                        <//>
                    </div>
                    
                    <${Card} title="주말 물량 집중의 근거 (Traffic)" icon="BarChart3" color="blue" className="mt-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-around text-center">
                            <div>
                                <strong className="block text-3xl text-white mb-2">${cycle.traffic.weekdays.label}</strong>
                                <span className="text-xl text-zinc-400">${cycle.traffic.weekdays.desc}</span>
                            </div>
                             <${LucideIcon} name="ArrowRight" className="hidden md:block text-zinc-600" size=${32} />
                            <div>
                                <strong className="block text-3xl text-red-500 mb-2">${cycle.traffic.holiday.label}</strong>
                                <span className="text-xl text-zinc-400" dangerouslySetInnerHTML=${{ __html: cycle.traffic.holiday.desc }}></span>
                            </div>
                        </div>
                    <//>
                <//>

                <${Section} title=${views.title} subtitle=${views.subtitle}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${views.levels.map(level => html`
                            <div className=${"p-8 " + level.style}>
                                <strong className=${"block text-2xl mb-4 " + level.color}>${level.views}</strong>
                                ${level.isLarge ? html`
                                     <div dangerouslySetInnerHTML=${{ __html: level.desc }}></div>
                                ` : html`
                                     <p className="text-xl text-zinc-300" dangerouslySetInnerHTML=${{ __html: level.desc }}></p>
                                `}
                            </div>
                        `)}
                     </div>
                <//>

                <${Section} title=${mindset.title} subtitle=${mindset.subtitle}>
                    <ul className="space-y-6 text-xl lg:text-2xl text-zinc-300">
                        ${mindset.principles.map(p => html`
                            <li class="flex items-start gap-4">
                                 <${LucideIcon} name="CheckCircle2" className="text-green-500 mt-1" size=${28} />
                                 <div>
                                    <strong class="text-white">${p.title}</strong>
                                    <span class="block mt-1" dangerouslySetInnerHTML=${{ __html: p.text }}></span>
                                 </div>
                            </li>
                        `)}
                    </ul>
                <//>
            </div>
        `;
    };

    // --- Lecture 3 Part 2 ---
    // [Data Separation Strategy]
    // Defining the content data first to ensure 0% data loss and cleaner UI separation.
    const lecture3Part2Data = {
        meta: {
            badgeColor: "pink",
            badgeText: "WEEK 3 - PART 2",
            title: "차별화 전략과 틈새시장(Niche)",
            gradient: "from-pink-500 to-rose-500",
            description: [
                { text: "\"대중성 있는 소재를 해외에서 훔쳐와라.\"", highlight: "white" },
                { text: "남들과 똑같은 랭킹은 이제 그만.", highlight: "" },
                { text: "1인칭 시점, 음성 변조, 대중적 취미", highlight: "pink-400" },
                { text: "로 차별화를 완성합니다.", highlight: "" },
            ]
        },
        sections: [
            {
                id: "intro_strategy",
                title: "1. 차별화의 중요성 & 기본기 복습",
                subtitle: "고점을 찍는 전략",
                items: [
                    {
                        title: "핵심 전략 복습",
                        icon: "RefreshCw",
                        color: "zinc",
                        summary: "리스크 관리 & 80%의 법칙",
                        details: [
                            { label: "리스크 관리", value: "유튜브가 싫어하는 '손실 위험(Risk of Loss)' 콘셉트 회피." },
                            { label: "80%의 법칙", value: "1, 2강 기본기(가이드라인, 루틴)만 지켜도 우위 선점." },
                            { label: "차별화 이유", value: "피로도를 깰 수 있는 요소(소재, 기획력, 야부리)가 필수." },
                            { label: "소재 선정", value: "인기순뿐만 아니라 '날짜순'으로도 보며 나에게 맞는 결 찾기." }
                        ]
                    },
                    {
                        title: "소몰이 전략 (The Answer Sheet)",
                        icon: "MessageCircle",
                        color: "indigo",
                        summary: "정답지는 댓글에 있다",
                        details: [
                            { label: "정답지", value: "벤치마킹 영상의 베스트 댓글/공감 댓글이 곧 정답." },
                            { label: "소몰이", value: "시청자가 댓글을 쓰도록 유도하는 TTS 구성. (엔딩/흐름 유도)." },
                            { label: "효과", value: "이미 검증된 감정/반응을 활용하므로 터질 확률 UP." }
                        ]
                    }
                ]
            },
            {
                id: "case_studies",
                title: "2. 실전 차별화 사례 (Differentiation)",
                subtitle: "남들과 다르게 만드는 구체적 기술",
                items: [
                    {
                        title: "소재 창작: '랭킹 끝판왕'",
                        icon: "Trophy",
                        color: "yellow",
                        summary: "감정적 상황 창작 (1,600만 뷰)",
                        details: [
                            { label: "전략", value: "단순 퍼오기가 아닌 '감정적 상황' 창작 (아찔한 순간, 군조장)." },
                            { label: "성과", value: "'역대급 우참' 1,600만, '군조장' 1,500만 뷰." },
                            { label: "교훈", value: "편집 기술보다 '소재 조합(기획)'에 시간 투자하는 것이 고효율." },
                            { label: "Insight", value: "140개 영상으로 4.5억 뷰 달성." }
                        ]
                    },
                    {
                        title: "음성 변조 & 템플릿: '더이슈'",
                        icon: "Mic2",
                        color: "pink",
                        summary: "헬륨 가스 & 구간 변조 (8천만 뷰)",
                        details: [
                            { label: "전략", value: "헬륨 가스 효과, 남/녀 목소리 변조. '구간별 변곡점' 주기." },
                            { label: "효과", value: "일치율 하락(회피) 및 신선함 제공 (초반 훅킹)." },
                            { label: "Tip", value: "캡컷(CapCut) 등으로 티 안 나게 혹은 과감하게 변조." },
                            { label: "사례", value: "'받을까 말까' 채널 (귀여운 목소리 변조)." }
                        ]
                    },
                    {
                        title: "1인칭 시점: '영화 미슐랭'",
                        icon: "User",
                        color: "green",
                        summary: "주인공 1인칭 시점",
                        details: [
                            { label: "전략", value: "3인칭 요약이 아닌 '주인공 1인칭 시점' (\"내가 ~했는데\")." },
                            { label: "장점", value: "감정 이입이 쉬워 대본이 술술 나옴 (병맛 대본 최적화)." },
                            { label: "차별점", value: "시점(관점)만 바꿔도 남들과 완전히 다른 콘텐츠가 됨." }
                        ]
                    },
                    {
                        title: "더빙 & 짧은 길이: '기철 유머'",
                        icon: "Clock",
                        color: "blue",
                        summary: "더빙 + 20초 미만 (4천만 뷰)",
                        details: [
                            { label: "전략", value: "평범한 유머에 '더빙(Dubbing)' + 일상 드립(개드립) 추가." },
                            { label: "길이 제한", value: "20초 넘는 영상이 없음 (핵심)." },
                            { label: "성과", value: "고점 3~4천만 뷰. (3만원 마이크로 가능)." }
                        ]
                    },
                    {
                        title: "TTS 썰형 & 해외 예능: '틈새라면 학'",
                        icon: "Clapperboard", // Changed from Film to Clapperboard for better semantics if available, else Film/Video
                        color: "orange",
                        summary: "영화/예능의 썰형 변환 (확장)",
                        details: [
                            { label: "전략", value: "영화(예: 달마야 놀자) 장면을 '썰형'으로 재구성 + 전 대사 TTS 처리." },
                            { label: "확장", value: "해외 예능(고든 램지, 샤크 탱크, 전당포) 활용으로 사고 확장." },
                            { label: "효율", value: "품은 들지만 확실한 차별화 포인트. 차별성 아이디어로 매우 좋음." },
                            { label: "Mindset", value: "\"어렵다\"고 생각하는 순간, 누군가는 이 방식으로 돈을 벌고 있다." }
                        ]
                    }
                ]
            },
            {
                id: "niche",
                title: "3. 틈새라면 학 (Niche Market)",
                subtitle: "대중성 있는 취미를 공략하라 (날먹 전략)",
                description: "명동 틈새라면처럼, '대중성(아는 맛)'이 있는 소재를 해외에서 가져와 공략하는 전략.",
                items: [
                    {
                        title: "볼링 (Bowling)",
                        icon: "Circle",
                        color: "blue",
                        summary: "18만~23만 뷰",
                        details: [
                            { label: "시장", value: "동호인 多. 해외 아카이빙 영상 넘쳐남." },
                            { label: "Action", value: "교육적 자막 (올바른 스텝, 공 고르는 법) 추가." }
                        ]
                    },
                    {
                        title: "당구 (Billiards)",
                        icon: "Target",
                        color: "green",
                        summary: "소재 무한 / 고점 높음",
                        details: [
                            { label: "시장", value: "해외 묘기/대회 영상 활용." },
                            { label: "Action", value: "짧은 영상 + 스트로크/각도 꿀팁 자막." }
                        ]
                    },
                    {
                        title: "골프 (Golf)",
                        icon: "Flag",
                        color: "yellow",
                        summary: "타이거 우즈 200만 뷰",
                        details: [
                            { label: "시장", value: "퍼오기만 해도 터짐. 월급 가능." },
                            { label: "Action", value: "쇼핑 연계 수익화 가능." }
                        ]
                    },
                    {
                        title: "낚시 (Fishing)",
                        icon: "Anchor",
                        color: "cyan",
                        summary: "872만 뷰 (매니아층)",
                        details: [
                            { label: "시장", value: "동호인 파워 무시 금지." },
                            { label: "Action", value: "대어 낚는 장면 위주로 키워드 공략." }
                        ]
                    }
                ]
            },
            {
                id: "music_viral",
                title: "4. 음악 & 챌린지 (Music & Viral)",
                subtitle: "재사용 걱정 없는 접근법",
                items: [
                    {
                        title: "일반인 커버 (Cover)",
                        icon: "Music",
                        color: "purple",
                        summary: "1,700만 뷰 (저작권 회피)",
                        details: [
                            { label: "전략", value: "가수 원곡 X. 일반인 커버 모음 (저작권 리스크 ↓)." },
                            { label: "확장", value: "해외 'Cover' 검색 시 소재 무한." }
                        ]
                    },
                    {
                        title: "챌린지 (Challenge)",
                        icon: "TrendingUp",
                        color: "pink",
                        summary: "쇼츠/틱톡의 기원",
                        details: [
                            { label: "타겟", value: "10대, 20대 열광. 챌린지 랭킹/모음집." },
                            { label: "효과", value: "음원 자체가 힘이 좋음." }
                        ]
                    },
                    {
                        title: "악기 연주 (Piano)",
                        icon: "Mic", // Using Mic as generic music related if Piano not avail, or Music
                        color: "orange",
                        summary: "5~7초 초단영상 (1,800만 뷰)",
                        details: [
                            { label: "대중성", value: "피아노 학원 개체수 = 높은 한계선." },
                            { label: "길이", value: "5초, 7초 등 짧을수록 유리." }
                        ]
                    },
                    {
                        title: "EDM & 리액션",
                        icon: "Headphones",
                        color: "indigo",
                        summary: "6,000만 뷰 / 4.4억 뷰",
                        details: [
                            { label: "경쟁", value: "경쟁자 거의 없음. 조회수 살벌함." },
                            { label: "핵심 Tip", value: "본인 리액션(그린스크린/가면/AI마스크) 추가하여 재사용 회피." }
                        ]
                    },
                    {
                        title: "해외 인기 영상 (Funny)",
                        icon: "SmilePlus", // Using SmilePlus or Laugh
                        color: "cyan",
                        summary: "안목 + 댓글 창작",
                        details: [
                            { label: "전략", value: "해외 인기 영상 소싱 + 댓글(그림판/미리캔버스)로 창작 요소 추가." },
                            { label: "안목", value: "대중성 높고 재미있는 소재를 골라오는 '안목'이 핵심." },
                            { label: "수익", value: "영상 길이 단가 차이 없음. 잘 팔아 나르는 것이 능력." }
                        ]
                    }
                ]
            },
            {
                id: "outro",
                title: "5. 결론 (Outro)",
                subtitle: "월급 나오는 채널 만들기",
                items: [
                    {
                        title: "보너스 트랙",
                        icon: "CheckCircle2",
                        color: "zinc",
                        summary: "틈새 시장은 보너스다",
                        details: [
                            { label: "우선순위", value: "기본 채널(1, 2강)을 메인으로. 틈새 시장은 서브로 시도." },
                            { label: "위험", value: "이것만 밀면 재사용 위험 있음. 와우 포인트 빼고 TTS 넣기." }
                        ]
                    },
                    {
                        title: "안목 (Discernment)",
                        icon: "Eye",
                        color: "zinc",
                        summary: "신선함은 안목에서 온다",
                        details: [
                            { label: "문제 해결", value: "소재 찾기가 어렵다? = 신선함(트렌드)을 모르는 것." },
                            { label: "Action", value: "3,200개 에셋을 보며 '이건 잘했네, 아쉽네' 판단하며 안목 기르기." }
                        ]
                    }
                ]
            }
        ]
    };

    window.Contents.lecture3_part2 = () => {
        const { meta, sections } = lecture3Part2Data;

        // Helper
        const getSection = (id) => sections.find(s => s.id === id);

        const intro = getSection('intro_strategy');
        const cases = getSection('case_studies');
        const niche = getSection('niche');
        const music = getSection('music_viral');
        const outro = getSection('outro');

        const iconTexts = {
            blue: "text-blue-400", purple: "text-purple-400", red: "text-red-400",
            green: "text-green-400", yellow: "text-yellow-400", orange: "text-orange-400",
            pink: "text-pink-400", zinc: "text-zinc-400", indigo: "text-indigo-400",
            cyan: "text-cyan-400"
        };
        const bgStyles = {
            blue: "bg-blue-900/10 border-blue-500/20",
            purple: "bg-purple-900/10 border-purple-500/20",
            red: "bg-red-900/10 border-red-500/20",
            green: "bg-green-900/10 border-green-500/20",
            yellow: "bg-yellow-900/10 border-yellow-500/20",
            orange: "bg-orange-900/10 border-orange-500/20",
            pink: "bg-pink-900/10 border-pink-500/20",
            zinc: "bg-zinc-900/40 border-zinc-700",
            indigo: "bg-indigo-900/10 border-indigo-500/20",
            cyan: "bg-cyan-900/10 border-cyan-500/20"
        };

        // Glow Borders for Part 2
        const glowBorders = {
            blue: "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]",
            purple: "border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]",
            red: "border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]",
            green: "border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]",
            yellow: "border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.3)]",
            orange: "border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.3)]",
            pink: "border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]",
            zinc: "border-zinc-600 shadow-xl",
            indigo: "border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]",
            cyan: "border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
        };

        return html`
            <div className="space-y-60 pb-60">
                 <!-- Hero Section -->
                 <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-900/20 rounded-full blur-[120px] -z-10"></div>
                    <${Badge} color=${meta.badgeColor}>${meta.badgeText}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl">
                        차별화 전략과<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r ${meta.gradient}">${meta.title.split('과 ')[1]}</span>
                    </h1>
                     <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold">
                        ${meta.description.map(desc => html`
                            <span className=${desc.highlight ? 'text-' + desc.highlight + ' drop-shadow-lg' : 'text-zinc-200'}>${desc.text}</span>
                        `)}
                    </p>
                </div>

                <!-- 1. Intro & Strategy (Massive Cards) -->
                <${Section} title=${intro.title} subtitle=${intro.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        ${intro.items.map(item => html`
                             <div className=${`relative p-12 rounded-[3.5rem] bg-zinc-900 border-2 ${glowBorders[item.color]} overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                                <div className="absolute -right-12 -top-12 opacity-10 rotate-12 transition-opacity group-hover:opacity-20">
                                    <${LucideIcon} name=${item.icon} size=${200} className=${iconTexts[item.color]} />
                                </div>
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-6">
                                         <div className=${`p-5 rounded-3xl bg-${item.color}-500/20`}>
                                            <${LucideIcon} name=${item.icon} size=${40} className=${iconTexts[item.color]} />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">${item.title}</h3>
                                    </div>
                                    <p className=${`text-2xl font-bold p-6 rounded-2xl bg-${item.color}-900/30 border border-${item.color}-500/30 text-${item.color}-300`}>
                                        "${item.summary}"
                                    </p>
                                    <ul className="space-y-6">
                                        ${item.details.map(d => html`
                                            <li className="flex flex-col gap-2">
                                                <span className=${`text-lg font-bold uppercase tracking-wider ${iconTexts[item.color]}`}>${d.label}</span>
                                                <span className="text-xl lg:text-2xl text-zinc-100 font-medium pl-4 border-l-4 border-zinc-700">${d.value}</span>
                                            </li>
                                        `)}
                                    </ul>
                                </div>
                            </div>
                        `)}
                    </div>
                <//>

                <!-- 2. Case Studies (Zigzag / Offset Layout) -->
                <${Section} title=${cases.title} subtitle=${cases.subtitle}>
                     <div className="flex flex-col gap-16">
                        ${cases.items.map((item, i) => html`
                            <div className=${`flex flex-col lg:flex-row gap-12 p-12 rounded-[4rem] bg-zinc-900 border border-zinc-800 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} group hover:border-${item.color}-500/50 transition-colors duration-500`}>
                                <!-- Visual / Key Stat -->
                                <div className="flex-1 relative overflow-hidden rounded-[3rem] min-h-[300px] flex flex-col justify-center items-center text-center bg-black/50">
                                    <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-${item.color}-900 to-transparent"></div>
                                    <${LucideIcon} name=${item.icon} size=${120} className=${`relative z-10 ${iconTexts[item.color]} mb-8 drop-shadow-2xl`} />
                                    <div className="relative z-10">
                                        <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">${item.title}</h3>
                                        <span class=${`inline-block px-6 py-2 rounded-full border border-${item.color}-500/50 bg-${item.color}-900/30 text-${item.color}-300 text-xl font-bold`}>
                                            ${item.summary}
                                        </span>
                                    </div>
                                </div>

                                <!-- Content -->
                                <div className="flex-1 flex flex-col justify-center space-y-8 py-4">
                                     <div className="space-y-6">
                                        ${item.details.map(d => html`
                                            <div className="p-6 rounded-3xl bg-zinc-800/30 border border-zinc-700/50 hover:bg-zinc-800/80 transition-colors">
                                                 <strong className=${`block text-lg font-bold uppercase mb-2 ${iconTexts[item.color]}`}>${d.label}</strong>
                                                 <p className="text-xl lg:text-2xl text-zinc-200 font-medium leading-normal">${d.value}</p>
                                            </div>
                                        `)}
                                    </div>
                                </div>
                            </div>
                        `)}
                    </div>
                <//>

                <!-- 3. Niche Market (Grid with Big Titles) -->
                <${Section} title=${niche.title} subtitle=${niche.subtitle}>
                     <div className="p-10 bg-zinc-900/60 rounded-[3rem] border border-zinc-700 mb-16 text-center backdrop-blur-sm">
                        <p className="text-2xl lg:text-3xl text-zinc-100 font-bold leading-normal">"${niche.description}"</p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        ${niche.items.map(item => html`
                            <div className=${`p-8 rounded-[3rem] border transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col h-full bg-zinc-900 ${bgStyles[item.color]}`}>
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <${LucideIcon} name=${item.icon} size=${40} className=${iconTexts[item.color]} />
                                    </div>
                                    <strong className="text-3xl font-black text-white block mb-2 leading-tight">${item.title.split(' (')[0]}</strong>
                                    <p className=${`text-lg font-bold ${iconTexts[item.color]} min-h-[3rem] flex items-center`}>${item.summary}</p>
                                </div>
                                
                                <div className="space-y-4 mt-auto">
                                     ${item.details.map(d => html`
                                        <div className="bg-black/30 p-4 rounded-2xl">
                                            <span className=${`block text-sm font-bold mb-1 uppercase ${iconTexts[item.color]}`}>${d.label}</span>
                                            <span className="text-lg text-zinc-200 leading-snug block">${d.value}</span>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        `)}
                     </div>
                <//>

                <!-- 4. Music & Viral (Vertical Banners) -->
                <${Section} title=${music.title} subtitle=${music.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                         ${music.items.map(item => html`
                            <div className=${`flex flex-col p-12 rounded-[3.5rem] border-2 ${glowBorders[item.color]} bg-zinc-900 relative overflow-hidden`}>
                                <div className="absolute -right-10 -bottom-10 opacity-10">
                                    <${LucideIcon} name=${item.icon} size=${150} className=${iconTexts[item.color]} />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-6 mb-8">
                                         <div class=${`p-5 rounded-full bg-black shadow-lg border border-zinc-800`}>
                                            <${LucideIcon} name=${item.icon} size=${32} className=${iconTexts[item.color]} />
                                         </div>
                                         <h3 className="text-3xl lg:text-4xl font-black text-white leading-none">${item.title}</h3>
                                    </div>
                                    <p className="text-2xl text-white font-bold mb-10 pl-4 border-l-4 border-zinc-600">${item.summary}</p>
                                    <div className="space-y-6 mt-auto">
                                        ${item.details.map(d => html`
                                            <div className="flex flex-col gap-2">
                                                <span className="text-lg font-bold text-zinc-400 uppercase tracking-widest">${d.label}</span>
                                                <span className="text-xl lg:text-2xl text-zinc-200 leading-snug">${d.value}</span>
                                            </div>
                                        `)}
                                    </div>
                                </div>
                            </div>
                        `)}
                    </div>
                <//>
                
                <!-- 5. Outro (Featured Box) -->
                <${Section} title=${outro.title} subtitle=${outro.subtitle}>
                    <div className="bg-gradient-to-b from-zinc-900 to-black p-12 lg:p-14 rounded-[4rem] border border-zinc-700/50 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                            ${outro.items.map(item => html`
                                <div class="flex flex-col gap-8">
                                    <div class="flex items-center gap-6">
                                        <div class="p-4 rounded-2xl bg-zinc-800 border border-zinc-700">
                                            <${LucideIcon} name=${item.icon} className="text-green-400" size=${40} />
                                        </div>
                                        <div>
                                            <h3 class="text-3xl font-black text-white mb-2">${item.title}</h3>
                                            <p class="text-xl text-green-400 font-bold">${item.summary}</p>
                                        </div>
                                    </div>
                                    <div class="space-y-6 pl-4 border-l-2 border-zinc-800">
                                         ${item.details.map(d => html`
                                            <div>
                                                <span class="block text-zinc-500 text-base font-bold uppercase mb-2">${d.label}</span>
                                                <span class="block text-xl lg:text-2xl text-zinc-300 leading-relaxed">${d.value}</span>
                                            </div>
                                         `)}
                                    </div>
                                </div>
                            `)}
                        </div>
                    </div>
                <//>
            </div>
        `;
    };

    // --- Lecture 3 Part 3 ---
    // [Data Separation Strategy]
    // Defining the content data first to ensure 0% data loss and cleaner UI separation.
    const lecture3Part3Data = {
        meta: {
            badgeColor: "green",
            badgeText: "WEEK 3 - PART 3",
            title: "성공 사례 분석과 실전 도구(Tools)",
            gradient: "from-green-500 to-emerald-500",
            description: [
                { text: "\"29개 카테고리 씹어먹기.\"", highlight: "white" },
                { text: "도어캠부터 홀덤까지, ", highlight: "" },
                { text: "월급 이상 수익", highlight: "green-400" },
                { text: "을 내는 실전 카테고리 분석과 자막 삭제 기술을 공개합니다.", highlight: "" },
            ]
        },
        sections: [
            {
                id: "orientation",
                title: "0. 오리엔테이션 & 특강 선물",
                subtitle: "전쟁터 나가기 전 총알 장전",
                items: [
                    {
                        title: "특강 예고 (Bonus)",
                        icon: "Gift",
                        color: "yellow",
                        summary: "50개 대본 실시간 드로잉",
                        details: [
                            { label: "일정", value: "토요일 저녁 7시." },
                            { label: "내용", value: "강사가 직접 타이핑하며 잘된 점/개선점 분석." },
                            { label: "목표", value: "맘케어/사단반/정규반 모두 참여. 카테고리/대본 분석 노하우 전수." }
                        ]
                    },
                    {
                        title: "강의 목표 (Goal)",
                        icon: "Target",
                        color: "red",
                        summary: "강사가 수익 낸 29개 사례",
                        details: [
                            { label: "공개의 미학", value: "강사가 수익 낸 29가지 사례와 실전 노하우 공개." },
                            { label: "자신감", value: "\"할 수 있는 소재가 너무 많다.\" 월급 이상 수익 확신." }
                        ]
                    }
                ]
            },
            {
                id: "emotion_animals",
                title: "1. 실전 성공 사례: 감동 & 동물 (Emotion)",
                subtitle: "고점이 높은 스테디셀러",
                items: [
                    {
                        title: "도어캠/CCTV",
                        icon: "Video",
                        color: "zinc",
                        summary: "600~700만",
                        details: [
                            { label: "성과", value: "천만 뷰 기준 600~700만 뷰. (도어캠, CCTV 등)" },
                            { label: "전략", value: "'강아지 구출' 등 감동 서사. 미담 위주." },
                            { label: "핵심(Key)", value: "댓글 기반 소제목 (\"용감한 세 남자..\"). 시니어 타겟 반응 좋음." },
                            { label: "주의", value: "도난, 사고 등은 가이드라인 위반 요소 있으나 조회수는 잘 나옴." }
                        ]
                    },
                    {
                        title: "동기 부여",
                        icon: "Zap",
                        color: "yellow",
                        summary: "자막 지우기+명언",
                        details: [
                            { label: "기술", value: "해외 영상 자막 지우기(덧방) + 글로우 효과." },
                            { label: "소재", value: "정치인/기업인 명언 (댓글 싸움 유도). 1등 채널 피하기." },
                            { label: "Tip", value: "1등 채널(MG 등) 피해서 제3국(스페인/러시아 등) 소싱." },
                            { label: "고점", value: "2,800만 뷰. (소재 한계선 높음)." }
                        ]
                    },
                    {
                        title: "동물 (Animals)",
                        icon: "Dog",
                        color: "orange",
                        summary: "2,800만+",
                        details: [
                            { label: "성과", value: "2,800만 뷰 (개체수 Top 3)." },
                            { label: "가이드라인", value: "목줄 풀림, 학대, 뼈 앙상함 -> 블러 처리 필수." },
                            { label: "전략", value: "귀여운 효과음 + 구조 감동 스토리." },
                            { label: "확장성", value: "일왕이 자주 바뀌는 기회의 땅. 글로벌 확장 용이." }
                        ]
                    }
                ]
            },
            {
                id: "sports",
                title: "2. 실전 성공 사례: 스포츠 (Sports)",
                subtitle: "남자의 가슴을 뛰게 하라",
                items: [
                    {
                        title: "야구 (Baseball)",
                        icon: "CircleDot",
                        color: "blue",
                        summary: "월 340~400만원",
                        details: [
                            { label: "수익", value: "월 340~400만원 수익. (1일 1업로드, 48h 조회수 130만 유지)." },
                            { label: "저작권", value: "KBO 저작권 이슈 없음 (홍보 효과). 적발 사례 0건." },
                            { label: "시즌", value: "2월말 시범경기 시즌 물량 증대 시 500만원+ 예상." },
                            { label: "Tip", value: "전문 용어 없이 상황 설명만으로 가능. KBO 공홈 영상 활용." }
                        ]
                    },
                    {
                        title: "테니스 (Tennis)",
                        icon: "Activity",
                        color: "green",
                        summary: "청정 구역",
                        details: [
                            { label: "기회", value: "아직 채널 많지 않은 청정 구역 (블루오션)." },
                            { label: "소재", value: "US 오픈 등 이벤트 경기 활용. 소재 무궁무진." },
                            { label: "전략", value: "\"야! 야!\" 단순 TTS로도 수백만 뷰 달성. 소재 자체가 차별성." }
                        ]
                    },
                    {
                        title: "축구 (Soccer)",
                        icon: "Trophy",
                        color: "red",
                        summary: "600만 (국뽕)",
                        details: [
                            { label: "전략", value: "국뽕 태극전사 전략 (600만 뷰)." },
                            { label: "가이드", value: "중계 영상 3초 이하 (유튜브 오피셜 4초). 안전." },
                            { label: "Tip (직촬)", value: "구단 서포터즈 SNS 스토리 소싱 (24시간 뒤 삭제됨 -> 독점 가능)." },
                            { label: "빨대", value: "잘되는 채널 벤치마킹(빨대 꽂기) 시 기본 조회수 보장." }
                        ]
                    }
                ]
            },
            {
                id: "variety_game",
                title: "3. 실전 성공 사례: 예능 & 게임 (Deep Dive)",
                subtitle: "폭발적인 조회수와 RPM",
                items: [
                    {
                        title: "연예인/시상식 & 요리",
                        icon: "Award",
                        color: "purple",
                        summary: "시상식 1,000만+ / 요리 1,900만+",
                        details: [
                            { label: "시상식", value: "1,000만 뷰. MBC/SBS 주의. 백상 등 영화제는 안전. (어머니들 댓글 화력 Good)." },
                            { label: "요리 짜깁기", value: "1,900만 뷰 (월 7,000만 달성). 흑백요리사 등 레시피 황금기." },
                            { label: "저작권 Tip", value: "굴림체 이미지 확대로 저작권 회피. 클립 영상화." },
                            { label: "웹예능", value: "PPL 주류라 홍보 권장. 샤워 루틴 500만 뷰 (남성 공감 \"나도 나도\")." },
                            { label: "일상/공감", value: "\"학교 째기\" (아빠의 악마의 속삭임). 댓글 기반 소제목(\"째낄까?\")이 핵심." }
                        ]
                    },
                    {
                        title: "게임 (Game) - 고RPM",
                        icon: "Gamepad2",
                        color: "indigo",
                        summary: "로블록스 RPM 450원",
                        details: [
                            { label: "로블록스", value: "RPM 448~450원 (초고단가). 초딩 타겟 \"로블록스니까 본다\". 해외 트위치 번역 날먹." },
                            { label: "마인크래프트", value: "방학 시즌 극성수기. 설명 불필요." },
                            { label: "롤(LoL)", value: "편집자 고용해도 20~80만 뷰 꾸준. 가성비 Good." },
                            { label: "음악/POP", value: "자막/의역 활용. BGM은 트렌드 반영(챌린지 유행). 300만 뷰." }
                        ]
                    }
                ]
            },
            {
                id: "niche",
                title: "4. 틈새 & 지식 & 기타 (Niche)",
                subtitle: "매니아층과 지적 호기심",
                items: [
                    {
                        title: "지식/건축 & 영드",
                        icon: "BookOpen",
                        color: "blue",
                        summary: "35개로 4,400만 뷰",
                        details: [
                            { label: "지식", value: "영상 35개로 4,400만 뷰. (실리콘마감, 건축양식 등 결 맞추기)." },
                            { label: "영드 작가", value: "10분 컷 대본. 댓글 흐름 파악 후 TTS. 차별화(1인칭 등) 필수." }
                        ]
                    },
                    {
                        title: "홀덤 & 정치 & CCTV",
                        icon: "Club",
                        color: "zinc",
                        summary: "훈수 댓글 & 편향성",
                        details: [
                            { label: "홀덤", value: "20~100만 뷰. 해설 번역 날먹. 훈수 환영." },
                            { label: "정치", value: "GPT 활용 편향적 대본(중도 X). 청문회/TTS. 고점 높음." },
                            { label: "CCTV", value: "사건사고보다 미담/노인 타겟 (번호판 쫓는 형사) 추천." }
                        ]
                    },
                    {
                        title: "애니메이션 & 배구",
                        icon: "PenTool",
                        color: "green",
                        summary: "틈새라면 전략",
                        details: [
                            { label: "애니", value: "틱톡 원작 -> 구도/대본 변경. 퍼다 나르기 가능 (일치율 안 뜸)." },
                            { label: "배구", value: "\"틈새라면\" 전략. 해외 영상 소싱." }
                        ]
                    }
                ]
            },
            {
                id: "tech_homework",
                title: "5. 필살기 & 과제 (Final)",
                subtitle: "기술과 실행",
                items: [
                    {
                        title: "자막 지우기 (Tech)",
                        icon: "Eraser",
                        color: "pink",
                        summary: "비용 연 4~5만원 / 글로우 효과",
                        details: [
                            { label: "프로그램", value: "유료 툴 (연 4~5만원). 이미지 동영상 개체 제거기." },
                            { label: "방법", value: "박스 5개 제한. 가장 긴 문장 기준 영역 설정 -> 지우기." },
                            { label: "CapCut 후처리", value: "글로우(Glow) + 그림자 효과로 덧방 뭉개기 (필수)." },
                            { label: "효과", value: "원본 찾기를 포기하게 만듦. 티 거의 안 남." },
                            { label: "선정 이유", value: "강사가 수십 개 테스트 후 최적의 툴 선정 (CJ 편집팀보다 나음)." }
                        ]
                    },
                    {
                        title: "과제 (Homework)",
                        icon: "CheckCircle2",
                        color: "green",
                        summary: "채널 링크 제출 (무기한)",
                        details: [
                            { label: "과제", value: "채널 링크 제출 (55일 챌린지 기간 동안 순방/피드백)." },
                            { label: "보상", value: "에셋 3,200개 즉시 지급 (숙제 제출자 한정)." },
                            { label: "Q&A", value: "내일 특강 때 진행." },
                            { label: "Mindset", value: "강사는 여러분 채널만 볼 것입니다. \"하모 된다!\"" }
                        ]
                    }
                ]
            }
        ]
    };

    window.Contents.lecture3_part3 = () => {
        const { meta, sections } = lecture3Part3Data;

        // Helper to find section by ID
        const getSection = (id) => sections.find(s => s.id === id);

        // Sections
        const orientation = getSection('orientation');
        const emotion = getSection('emotion_animals');
        const sports = getSection('sports');
        const variety = getSection('variety_game');
        const niche = getSection('niche');
        const tech = getSection('tech_homework');

        // Color maps for dynamic styling matching Lec 1
        const iconTexts = {
            blue: "text-blue-400", purple: "text-purple-400", red: "text-red-400",
            green: "text-green-400", yellow: "text-yellow-400", orange: "text-orange-400",
            pink: "text-pink-400", zinc: "text-zinc-400", indigo: "text-indigo-400"
        };
        const bgStyles = {
            blue: "bg-blue-900/10 border-blue-500/20",
            purple: "bg-purple-900/10 border-purple-500/20",
            red: "bg-red-900/10 border-red-500/20",
            green: "bg-green-900/10 border-green-500/20",
            yellow: "bg-yellow-900/10 border-yellow-500/20",
            orange: "bg-orange-900/10 border-orange-500/20",
            pink: "bg-pink-900/10 border-pink-500/20",
            zinc: "bg-zinc-900/40 border-zinc-700",
            indigo: "bg-indigo-900/10 border-indigo-500/20"
        };

        // Define new border styles to replace thin borders with glow effects
        const glowBorders = {
            blue: "border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)]",
            purple: "border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]",
            red: "border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]",
            green: "border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]",
            yellow: "border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.3)]",
            orange: "border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.3)]",
            pink: "border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)]",
            zinc: "border-zinc-600 shadow-xl",
            indigo: "border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
        };

        return html`
            <div className="space-y-60 pb-60">
                 <!-- Hero Section -->
                 <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-900/20 rounded-full blur-[120px] -z-10"></div>
                    <${Badge} color=${meta.badgeColor}>${meta.badgeText}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl">
                        성공 사례 분석과<br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r ${meta.gradient}">실전 도구(Tools)</span>
                    </h1>
                     <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold">
                        ${meta.description.map(desc => html`
                            <span className=${desc.highlight ? 'text-' + desc.highlight + ' drop-shadow-lg' : 'text-zinc-200'}>${desc.text}</span>
                        `)}
                    </p>
                </div>

                <!-- 1. Orientation (Massive Cards) -->
                <${Section} title=${orientation.title} subtitle=${orientation.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        ${orientation.items.map(item => html`
                            <div className=${`relative p-12 rounded-[3.5rem] bg-zinc-900 border-2 ${glowBorders[item.color]} overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}>
                                <div className="absolute -right-12 -top-12 opacity-10 rotate-12 transition-opacity group-hover:opacity-20">
                                    <${LucideIcon} name=${item.icon} size=${200} className=${iconTexts[item.color]} />
                                </div>
                                <div className="relative z-10 space-y-8">
                                    <div className="flex items-center gap-6">
                                         <div className=${`p-5 rounded-3xl bg-${item.color}-500/20`}>
                                            <${LucideIcon} name=${item.icon} size=${40} className=${iconTexts[item.color]} />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">${item.title}</h3>
                                    </div>
                                    <p className=${`text-2xl font-bold p-6 rounded-2xl bg-${item.color}-900/30 border border-${item.color}-500/30 text-${item.color}-300`}>
                                        "${item.summary}"
                                    </p>
                                    <ul className="space-y-6">
                                        ${item.details.map(d => html`
                                            <li className="flex flex-col gap-2">
                                                <span className=${`text-lg font-bold uppercase tracking-wider ${iconTexts[item.color]}`}>${d.label}</span>
                                                <span className="text-xl lg:text-2xl text-zinc-100 font-medium pl-4 border-l-4 border-zinc-700">${d.value}</span>
                                            </li>
                                        `)}
                                    </ul>
                                </div>
                            </div>
                        `)}
                    </div>
                <//>

                <!-- 2. Emotion & Animals (Infographic Banners) -->
                <${Section} title=${emotion.title} subtitle=${emotion.subtitle}>
                    <div className="grid grid-cols-1 gap-10">
                        ${emotion.items.map(item => html`
                            <div className=${`relative p-10 lg:p-14 rounded-[3rem] bg-zinc-900/80 border ${bgStyles[item.color]} overflow-hidden`}>
                                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
                                    <!-- Icon & Title Title -->
                                    <div className="flex-1 min-w-[300px]">
                                        <div className="flex items-center gap-6 mb-6">
                                            <div className="p-4 rounded-2xl bg-black border border-zinc-700">
                                                <${LucideIcon} name=${item.icon} size=${40} className=${iconTexts[item.color]} />
                                            </div>
                                            <h3 className="text-3xl font-black text-white">${item.title}</h3>
                                        </div>
                                        <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4">
                                            ${item.summary}
                                        </div>
                                    </div>

                                    <!-- Details Box -->
                                    <div className="flex-[2] w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                                         ${item.details.map(d => html`
                                            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
                                                <div className=${`text-base font-bold mb-2 uppercase opacity-80 ${iconTexts[item.color]}`}>${d.label}</div>
                                                <div className="text-xl text-zinc-200 font-medium leading-normal">${d.value}</div>
                                            </div>
                                         `)}
                                    </div>
                                </div>
                            </div>
                        `)}
                    </div>
                <//>

                 <!-- 3. Sports (Vertical Powerful Cards) -->
                 <${Section} title=${sports.title} subtitle=${sports.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        ${sports.items.map((item, idx) => html`
                            <div className=${`group relative p-10 rounded-[3rem] bg-zinc-900 border ${idx === 1 ? 'border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.15)] scale-105 z-10' : 'border-zinc-800'} flex flex-col`}>
                                <div className="mb-10 text-center">
                                     <div className=${`inline-flex p-6 rounded-full bg-black mb-6 shadow-2xl`}>
                                        <${LucideIcon} name=${item.icon} size=${48} className=${iconTexts[item.color]} />
                                     </div>
                                     <h3 className="text-3xl font-black text-white mb-4">${item.title}</h3>
                                     <p className=${`text-2xl font-black ${iconTexts[item.color]}`}>${item.summary}</p>
                                </div>
                                <div className="space-y-4 mt-auto">
                                    ${item.details.map(d => html`
                                        <div className="bg-black/50 p-5 rounded-2xl border border-zinc-800/50">
                                            <span className=${`block text-base font-bold mb-2 ${iconTexts[item.color]} uppercase`}>${d.label}</span>
                                            <span className="text-xl text-zinc-200 block leading-snug">${d.value}</span>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        `)}
                    </div>
                 <//>

                <!-- 4. Variety & Game (Deep Dive - Offset Layout) -->
                <${Section} title=${variety.title} subtitle=${variety.subtitle}>
                     <div className="flex flex-col gap-12">
                        ${variety.items.map((item, i) => html`
                            <div className=${`flex flex-col lg:flex-row gap-12 p-12 rounded-[3.5rem] bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-zinc-700 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-center gap-6 mb-8">
                                        <span class=${`p-4 rounded-2xl bg-${item.color}-500/20 text-${item.color}-400`}>
                                            <${LucideIcon} name=${item.icon} size=${40} />
                                        </span>
                                        <h3 className="text-4xl font-black text-white leading-tight">${item.title}</h3>
                                    </div>
                                    <div className="bg-black/50 rounded-3xl p-8 mb-8 border-l-8 border-${item.color}-500">
                                        <strong className="block text-xl text-zinc-400 mb-3">Key Performance</strong>
                                        <p className="text-3xl lg:text-4xl font-black text-white leading-tight">${item.summary}</p>
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-1 gap-5">
                                    ${item.details.map(d => html`
                                        <div className="flex items-center gap-6 p-6 rounded-3xl bg-zinc-800/30 border border-zinc-700/50 hover:bg-zinc-800/80 transition-colors">
                                             <div class="h-2 w-2 rounded-full bg-${item.color}-500 shrink-0"></div>
                                             <div>
                                                 <strong className="block text-zinc-400 text-base mb-1">${d.label}</strong>
                                                 <p className="text-xl text-zinc-100 font-medium leading-snug">${d.value}</p>
                                             </div>
                                        </div>
                                    `)}
                                </div>
                            </div>
                        `)}
                     </div>
                <//>
                
                <!-- 5. Niche (Grid Cards - Big Text) -->
                <${Section} title=${niche.title} subtitle=${niche.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         ${niche.items.map(item => html`
                            <div className="bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-700 hover:border-zinc-500 transition-all hover:-translate-y-2 flex flex-col h-full">
                                <div className="mb-8 flex items-start justify-between">
                                    <div>
                                        <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">${item.title}</h3>
                                        <p className=${`text-xl font-bold ${iconTexts[item.color]}`}>${item.summary}</p>
                                    </div>
                                    <${LucideIcon} name=${item.icon} size=${40} className=${iconTexts[item.color]} />
                                </div>
                                <ul className="space-y-6 mt-auto">
                                    ${item.details.map(d => html`
                                        <li className="bg-black/30 p-5 rounded-xl">
                                            <span class="block text-base font-bold text-zinc-500 mb-2 uppercase">${d.label}</span>
                                            <span class="text-xl text-zinc-200 leading-snug block">${d.value}</span>
                                        </li>
                                    `)}
                                </ul>
                            </div>
                         `)}
                    </div>
                <//>

                <!-- 6. Tech & Homework (Featured Style - Ultimate) -->
                <${Section} title=${tech.title} subtitle=${tech.subtitle}>
                     <div className="flex flex-col lg:flex-row gap-10">
                        <!-- Tech / Tools -->
                        <div className="flex-[1.2]">
                             <div className="p-12 bg-black rounded-[3.5rem] border-2 border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.15)] relative overflow-hidden h-full">
                                <div className="absolute -right-20 -bottom-20 opacity-20">
                                    <${LucideIcon} name=${tech.items[0].icon} size=${300} className="text-pink-500" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-4xl lg:text-5xl font-black text-white mb-10 flex flex-col gap-2">
                                        <span class="text-pink-400 text-2xl lg:text-3xl">필살기 (Tech)</span> 
                                        <span>${tech.items[0].title}</span>
                                    </h3>
                                    <div className="space-y-8">
                                        ${tech.items[0].details.map(d => html`
                                            <div className="flex items-start gap-6">
                                                <div class="mt-2 p-2 bg-pink-500 rounded-full shrink-0 shadow-lg shadow-pink-500/40">
                                                    <${LucideIcon} name="Check" className="text-white" size=${24} />
                                                </div>
                                                <div>
                                                    <strong className="block text-pink-400 text-lg lg:text-xl font-bold mb-2 uppercase tracking-wide">${d.label}</strong>
                                                    <p className="text-2xl lg:text-3xl text-zinc-100 font-medium leading-relaxed">${d.value}</p>
                                                </div>
                                            </div>
                                        `)}
                                    </div>
                                    <div className="mt-12 p-8 bg-pink-900/20 border border-pink-500/50 rounded-3xl backdrop-blur-xl">
                                        <div className="flex items-center gap-4 mb-4">
                                            <${LucideIcon} name="Flame" className="text-pink-400 animate-pulse" size=${32} />
                                            <strong className="text-pink-300 text-xl lg:text-2xl font-black">PRO TIP</strong>
                                        </div>
                                        <p className="text-xl lg:text-2xl text-pink-100 leading-relaxed font-bold">"원본을 덧방하여 뭉개버리세요. <br/>유튜브도 못 찾아냅니다."</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Homework -->
                        <div className="flex-1">
                             <div className="p-12 bg-gradient-to-br from-green-900/30 to-zinc-900 rounded-[3.5rem] border border-green-500/30 h-full flex flex-col items-center text-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                <div className="relative z-10 w-full">
                                    <div className="inline-flex p-8 rounded-full bg-green-500/10 text-green-400 mb-8 ring-4 ring-green-500/20">
                                        <${LucideIcon} name=${tech.items[1].icon} size=${64} />
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-black text-white mb-4">${tech.items[1].title}</h3>
                                    <p className="text-2xl lg:text-3xl text-green-200 font-bold mb-12">${tech.items[1].summary}</p>
                                    
                                    <ul className="space-y-6 w-full text-left">
                                         ${tech.items[1].details.map(d => html`
                                            <li className="bg-black/60 p-6 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-sm">
                                                <span className="text-zinc-400 font-bold text-lg uppercase">${d.label}</span>
                                                <span className="text-white text-xl lg:text-2xl font-bold text-center md:text-right">${d.value}</span>
                                            </li>
                                        `)}
                                    </ul>
                                </div>
                             </div>
                        </div>
                     </div>
                <//>
            </div>
        `;
    };
    // End of Lecture 3 Part 3

    // --- Momcare Lecture 1 Part 1 Data ---
    // --- Momcare Lecture 1 Part 1 Data ---
    const momcareLecture1Part1Data = {
        meta: {
            week: "MOMCARE WEEK 1 - PART 1",
            title: "대본 작성과<br/>야부리의 기술",
            subtitle: "시청자의 감정을 건드리는 <span class='text-blue-400'>80%의 법칙</span>.<br/>데이터 기반의 '야부리'로 <span class='text-white underline decoration-blue-500'>일치율 0%</span>를 만듭니다.",
            keywords: ["야부리", "감정", "후킹", "대본 루틴", "일치율 0", "재각색"]
        },
        sections: [
            {
                id: "mindset",
                title: "1. 맘케어반 마인드셋 & 방향성",
                subtitle: "올바른 시작이 가장 빠른 길이다",
                cards: [
                    {
                        title: "1.1. 초기 어려움 & 마인드셋",
                        icon: "Mountain",
                        color: "red",
                        items: [
                            { label: "초기 어려움", text: "결 맞추기, 키워드 확장, 원본 찾기의 어려움은 당연한 과정입니다." },
                            { label: "해결책", text: "대본 구성을 <span class='text-white font-bold'>'야부리(자연스러운 말솜씨)'</span>로 풀면 쉽게 해결됩니다." },
                            { label: "일치율 개념", text: "대중적 소재일수록 중복이 많아 편집점을 2~3번 꼬아야 합니다. (맥락은 자연스럽게 유지)" },
                            { label: "조급함 금지", text: "'어렵다' 생각 금지. 내 페이스대로. 쇼츠 수익은 비선형(1->10단계)입니다." }
                        ]
                    },
                    {
                        title: "1.2. 집단지성 & 특별 케어",
                        icon: "HeartHandshake",
                        color: "pink",
                        items: [
                            { label: "집단지성", text: "수강생 150명이 모은 2천 개 이상의 에셋을 분류하여 2강에서 제공합니다." },
                            { label: "강사의 약속", text: "12월, 1월에 수강생과 똑같이 신규 채널을 시작하여 성과를 공유합니다." },
                            { label: "학훈 & 규칙", text: "<span class='text-pink-400 font-black'>\"된다 (하모 된다)\"</span>. 선조치 후진금지 (10분 헤매면 즉시 질문)." }
                        ]
                    },
                    {
                        title: "1.3. 채널 기획 80% 법칙",
                        icon: "PieChart",
                        color: "blue",
                        items: [
                            { label: "한계선(고점)", text: "압구정에서 고깃집을 하는 것과 같습니다. <span class='text-blue-300'>고점이 높은 소재</span>를 선택해야 합니다." },
                            { label: "에셋(Asset)", text: "비슷한 결의 채널을 모으는 것이 곧 자산이자 돈입니다. (신규 진입 용이)" },
                            { label: "전략", text: "내가 잘할 수 있고, 관심 있고, 전문 지식이 있는 분야를 판단해야 합니다." }
                        ]
                    }
                ]
            },
            {
                id: "script_principle",
                title: "2. 콘텐츠 재창작 핵심 원리",
                subtitle: "감정을 건드리는 것이 본질이다",
                cards: [
                    {
                        title: "2.1. 좋은 영상의 본질",
                        icon: "Smile",
                        color: "yellow",
                        items: [
                            { label: "정의", text: "조회수 높은 영상 = 가이드라인 위반 없음 + 시청자가 좋아함." },
                            { label: "핵심 요소", text: "재미, 감동, 신기함, 공감 등 모든 것은 <span class='text-yellow-400 font-bold'>감정</span>을 베이스로 합니다." },
                            { label: "지식 채널", text: "지식조차 \"신기하다\", \"하나 얻었네\"라는 감정을 건드려야 합니다." }
                        ]
                    },
                    {
                        title: "2.2. 야부리(Yaburi) 규칙",
                        icon: "MessageCircle",
                        color: "green",
                        items: [
                            { label: "Concept", text: "친구/가족에게 설명하듯 편안하게 푸는 것." },
                            { label: "No Subjectivity", text: "내 주관적 생각/경험 반영 금지. <span class='text-red-400'>철저히 데이터를 기반</span>으로 합니다." },
                            { label: "Data Source", text: "벤치마킹 영상의 <span class='text-white font-bold'>댓글(시청자 반응)</span>을 제목, 소제목, 나레이션에 녹입니다." },
                            { label: "기획 핵심", text: "키워드, 대본, 영상 배치 구조." }
                        ]
                    },
                    {
                        title: "2.3. 편집점 변경 & 후킹",
                        icon: "Scissors",
                        color: "purple",
                        items: [
                            { label: "Why?", text: "1. 일치율(알고리즘) 회피, 2. 시청자에게 신선함/새로움 제공." },
                            { label: "How?", text: "와우 포인트(하이라이트/감정 고조)를 <span class='text-purple-400 font-bold'>맨 앞으로 배치(후킹)</span> + TTS 구간 삽입." },
                            { label: "소제목", text: "썸네일 없는 쇼츠의 썸네일 역할. 1~2초 안에 시선을 잡아야 합니다. (예: 양념친 후킹 멘트)" }
                        ]
                    }
                ],
                routine_box: {
                    title: "2.4. 대본 작성 루틴 기호 (약속)",
                    list: [
                        { symbol: "[ ] 대괄호", desc: "벤치 영상의 구간(초) 표시. (편집 시간 단축 핵심)" },
                        { symbol: "\" \" 따옴표", desc: "영상 속 등장인물의 실제 대사." },
                        { symbol: "( ) 괄호", desc: "자막으로만 들어가는 상황/감정 설명. (TTS X)" },
                        { symbol: "일반 문장", desc: "TTS 나레이션 구간." }
                    ]
                }
            },
            {
                id: "practice_cases_1",
                title: "3. 대본 실습 피드백 (Part 1)",
                subtitle: "수강생 vs 강사: 디테일의 차이",
                cases: [
                    {
                        title: "Case 1: 아빠와 딸 (감동)",
                        icon: "Heart",
                        color: "pink",
                        original: "딸의 문제 행동 -> 엄마의 하소연 -> 아빠의 훈육(겉)과 다정함(속).",
                        student: {
                            good: ["와우 포인트(뒷부분) 후킹 배치 ('다시는 싸움하지 마').", "단어 야부리 변경 ('사고 쳤어' -> '말썽 일으켰어').", "불필요한 사족 제거."],
                            bad: ["문장 구조 전체가 원본과 유사함.", "폭력적 표현('발로 찼어요')은 가이드라인 위반 위험."]
                        },
                        instructor: {
                            title: "아빠와 딸의 은밀한 거래",
                            points: ["가격하는 표현 삭제 (가이드라인 준수).", "일상적이고 사랑스러운 어투로 의역.", "효과음/편집 최소화 (기본에 충실).", "제목/소제목으로 궁금증 유발."]
                        }
                    },
                    {
                        title: "Case 2: 아기 물범 (동물)",
                        icon: "Droplets",
                        color: "cyan",
                        original: "생후 21일 물범의 첫 수영 도전.",
                        student: {
                            good: ["순수 와우 포인트 활용.", "감정 표현 우수 ('겁에 잔뜩 질려있던 녀석..')."],
                            bad: ["루틴 미적용 (구간 [ ] 표시 누락).", "단어 중복 ('사육사')."]
                        },
                        instructor: {
                            title: "20일 된 물범의 첫 수영",
                            points: ["명확한 구간 표시([ ])로 편집 용이성 확보.", "'21일' -> '22일' 등 숫자 변경으로 일치율 회피.", "내용 순서 변경 (앞뒤 도치).", "'사육사' -> '아빠' 등으로 의역."]
                        }
                    },
                    {
                        title: "Case 3: 호날두 (국뽕/스포츠)",
                        icon: "Trophy",
                        color: "blue",
                        original: "호날두 시상식 폭탄 발언.",
                        student: {
                            good: ["후킹 포인트 우수 ('비니시우스였어야 합니다').", "차세대 선수 순서 변경 (일치율 회피).", "임팩트 있는 문장 사용."],
                            bad: ["구간 표시([ ]) 누락."]
                        },
                        instructor: {
                            title: "아무도 예상치 못한 호날두의 한마디",
                            points: ["영상 추가 삽입으로 길이 확보 (중국 바이두 등 소스 활용).", "제목/소제목으로 궁금증 유발."]
                        }
                    },
                    {
                        title: "Case 4: 잠수부 골든타임 (지식)",
                        icon: "Anchor",
                        color: "indigo",
                        original: "심해 잠수부 5분 내 장비 해제 (골든타임).",
                        student: {
                            good: ["뛰지 않는 이유(질소 기포) 후킹 우수."],
                            bad: ["필수 단어('심해', '질소') 변경의 어려움.", "전문성/풍부함 부족."]
                        },
                        instructor: {
                            title: "돌이킬 수 없는 상황 (단어 순화)",
                            points: ["'사망' -> '돌이킬 수 없는 상황' 순화.", "데드라인(5분) 정보 중간 배치로 긴박감 조성.", "물기, 땀 등 세밀한 상황 묘사 추가.", "인과관계(뛰지 않는 이유) 명확화."]
                        }
                    },
                    {
                        title: "Case 5: 아기 강아지 (감성)",
                        icon: "Dog",
                        color: "orange",
                        original: "입양 간택하는 검은 강아지.",
                        student: {
                            good: ["자막 활용 우수 ('우리는 운명이에요').", "후반부 영상 미사용 (일치율 회피).", "감정선 자극."],
                            bad: ["사족 존재."]
                        },
                        instructor: {
                            title: "집사가 간택되어 가는 과정",
                            points: ["'공주님과 한시도 떨어지기 싫은 오빠들' (사고의 확장).", "자막과 효과음만으로 감정 극대화.", "친근한 단어(댕댕이, 집사) 사용."]
                        }
                    }
                ]
            },
            {
                id: "practice_cases_2",
                title: "4. 대본 실습 피드백 (Part 2)",
                subtitle: "더 깊이 있는 '야부리'의 세계 (심화)",
                cases: [
                    {
                        title: "Case 6: 골키퍼의 기적 (스포츠)",
                        icon: "Activity",
                        color: "green",
                        original: "골키퍼 실수 위기 -> 선방 기적.",
                        student: {
                            good: ["극적 상황 후킹 배치.", "'골' -> '득점' 단어 변경.", "짧은 실수 장면 확장 설명."],
                            bad: ["-"]
                        },
                        instructor: {
                            title: "제목: '역사' -> '기적' (감정 극대화)",
                            points: ["불필요한 문장 삭제 (간결화).", "'모두가 골이라 생각' -> '모두가 포기했던 순간' (양념).", "'운명처럼' 등 극적인 단어 사용."]
                        }
                    },
                    {
                        title: "Case 7: 달걀 삶는 비법 (정보)",
                        icon: "Utensils",
                        color: "yellow",
                        original: "껍질 잘 벗겨지는 비법 재료.",
                        student: {
                            good: ["'놓치고 계십니다' 궁금증 유발 후킹.", "집에 있는 재료 강조 (친절함)."],
                            bad: ["-"]
                        },
                        instructor: {
                            title: "냉면 맛집이 감춰왔던 비법",
                            points: ["'달걀' -> '계란' (유희어).", "시니어 타겟팅: '화면 두 번 누르면 가족 건강...'.", "자세한 설명 선호 (말 빠르게, 내용 빼곡하게)."]
                        }
                    },
                    {
                        title: "Case 8: 여동생 바보 오빠 (감동)",
                        icon: "Users",
                        color: "red",
                        original: "군대 다녀온 오빠와 여동생의 재회.",
                        student: {
                            good: ["'펑펑 울어버리는 이유?' 후킹.", "감정선 묘사 우수 ('벅차오르는 눈물')."],
                            bad: ["-"]
                        },
                        instructor: {
                            title: "아빠보다 오빠를 좋아하는 여동생",

                            points: ["상황 재설정: 군대 -> '대학 입학 후 6개월 만의 귀가' (짜깁기).", "여운 주는 클로징 멘트.", "효과음(우우우~) 적극 활용."]
                        }
                    },
                    {
                        title: "Case 9: 한국의 AS (국뽕)",
                        icon: "Globe",
                        color: "blue",
                        original: "한국 vs 해외 AS 비교.",
                        student: {
                            good: ["결론(한국 AS) 후킹 배치.", "긴 원본 요약 우수."],
                            bad: ["내용 중첩 존재 (방향 전환 필요)."]
                        },
                        instructor: {
                            title: "외국인들이 한국을 못 떠나는 이유",
                            points: ["순서 스위칭: 유럽 -> 미국 -> 인도 (일치율 회피).", "내용 다르게 표현 (교환/환불 저렴 등).", "국뽕 + 감정 건드리는 클로징 ('돌아가고 싶다')."]
                        }
                    }
                ],
                tip_box: {
                    title: "지식 콘텐츠 및 대본 작성 솔루션",
                    items: [
                        { label: "단어 확장기", text: "필수 단어 변경이 어려울 때 사용." },
                        { label: "GPT 활용", text: "단어 변경 후 '맞춤법 교정 및 다른 표현' 요청 -> 문단 조합." },
                        { label: "순서 배치", text: "와우 포인트뿐만 아니라 전체 순서(커트)를 무조건 새로 배치." }
                    ]
                }
            },
            {
                id: "conclusion",
                title: "5. 결론 및 실천",
                subtitle: "조급함을 버리고 본질로",
                items: [
                    { label: "자료 제공", text: "강사 제작 영상, 대본, 원본 에셋 카페 제공. (직접 하나하나 뜯어보고 곱씹어 볼 것)" },
                    { label: "BGM 전략", text: "벤치 영상과 다른 BGM 사용 (유튜브 뮤직 등). 일치율 회피 및 감정선 조절." },
                    { label: "실전 연습", text: "바이두 원본 찾기 -> 컷 편집하며 놀아보기. 단어 확장기 돌리며 문형 바꾸기 연습." },
                    { label: "다음 강의", text: "8분 휴식 후 다음 대본 분석 이어짐. 감만 익히고 카페 자료로 공부할 것." }
                ]
            }
        ]
    };

    window.Contents.momcare_lecture1_part1 = () => {
        const data = momcareLecture1Part1Data;
        const s1 = data.sections[0];
        const s2 = data.sections[1];
        const s3 = data.sections[2];
        const s4 = data.sections[3];
        const s5 = data.sections[4];

        const renderCase = (c) => html`
            <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 hover:border-${c.color}-500/30 transition-colors">
                <div className="lg:w-1/3 flex flex-col justify-center items-center text-center p-6 bg-black rounded-3xl border border-zinc-800">
                    <${LucideIcon} name=${c.icon} size=${64} className=${`text-${c.color}-400 mb-6`} />
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">${c.title}</h3>
                    <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 w-full">
                        <span className="text-zinc-500 font-bold text-sm uppercase block mb-2">Original Context</span>
                        <p className="text-zinc-300 text-lg leading-snug">${c.original}</p>
                    </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-red-900/10 border border-red-500/20">
                        <strong className="block text-red-400 mb-6 text-xl flex items-center gap-2"><${LucideIcon} name="User" size=${24}/> 수강생 포인트</strong>
                        <div className="space-y-4 text-zinc-300">
                            <div>
                                <span className="text-green-400 font-bold block mb-1">Good:</span>
                                <ul className="list-disc list-inside space-y-1 text-lg">
                                    ${c.student.good.map(p => html`<li>${p}</li>`)}
                                </ul>
                            </div>
                            ${c.student.bad && c.student.bad.length > 0 && c.student.bad[0] !== '-' ? html`
                                <div>
                                    <span className="text-red-400 font-bold block mb-1">Bad/Fix:</span>
                                    <ul className="list-disc list-inside space-y-1 text-lg">
                                        ${c.student.bad.map(p => html`<li>${p}</li>`)}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-blue-900/10 border border-blue-500/20">
                        <strong className="block text-blue-400 mb-6 text-xl flex items-center gap-2"><${LucideIcon} name="Award" size=${24}/> 강사 솔루션</strong>
                        <p className="text-white font-bold text-xl mb-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">"${c.instructor.title}"</p>
                        <ul className="list-disc list-inside space-y-2 text-zinc-300 text-lg">
                            ${c.instructor.points.map(p => html`<li>${p}</li>`)}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        return html`
            <div className="space-y-48 pb-60">
                <!-- Header -->
                <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -z-10"></div>
                    <${Badge} color="blue">${data.meta.week}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                <!-- Section 1: Mindset -->
                <${Section} title=${s1.title} subtitle=${s1.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        ${s1.cards.map(card => html`
                            <${Card} title=${card.title} icon=${card.icon} color=${card.color} className="h-full">
                                <ul className="space-y-6">
                                    ${card.items.map(item => html`
                                        <li className="flex flex-col gap-2">
                                            <span className="text-zinc-500 font-bold uppercase text-lg tracking-wide">${item.label}</span>
                                            <span className="text-xl lg:text-2xl text-zinc-200 leading-relaxed" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                        `)}
                    </div>
                <//>

                <!-- Section 2: Script Principles -->
                <${Section} title=${s2.title} subtitle=${s2.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                         ${s2.cards.map(card => html`
                             <${Card} title=${card.title} icon=${card.icon} color=${card.color}>
                                <ul className="space-y-4">
                                    ${card.items.map(item => html`
                                        <li className="p-6 bg-black/40 rounded-2xl border border-white/5 hover:bg-black/60 transition-colors">
                                            <strong className=${`block text-${card.color}-400 mb-2 text-lg uppercase`}>${item.label}</strong>
                                            <span className="text-xl text-zinc-200 leading-relaxed font-medium" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                        </li>
                                    `)}
                                </ul>
                             <//>
                         `)}
                    </div>
                    <div className="p-10 lg:p-14 bg-zinc-900 rounded-[3.5rem] border border-zinc-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                        <strong className="text-3xl lg:text-4xl text-white block mb-10 flex items-center gap-4"><${LucideIcon} name="FileText" size=${48} className="text-blue-400"/> ${s2.routine_box.title}</strong>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                             ${s2.routine_box.list.map(l => html`
                                <div className="p-8 bg-black rounded-3xl border border-zinc-800 text-center flex flex-col items-center justify-center gap-4 hover:border-blue-500/30 transition-colors">
                                    <div className="text-3xl font-black text-blue-400">${l.symbol}</div>
                                    <div className="text-xl text-zinc-300 font-bold leading-snug">${l.desc}</div>
                                </div>
                             `)}
                        </div>
                    </div>
                <//>

                <!-- Section 3: Practice Cases Part 1 -->
                <${Section} title=${s3.title} subtitle=${s3.subtitle}>
                    <div className="space-y-12">
                        ${s3.cases.map(c => renderCase(c))}
                    </div>
                <//>

                <!-- Section 4: Practice Cases Part 2 -->
                <${Section} title=${s4.title} subtitle=${s4.subtitle}>
                    <div className="space-y-12 mb-16">
                        ${s4.cases.map(c => renderCase(c))}
                    </div>
                    <div className="p-10 bg-yellow-900/10 border border-yellow-500/20 rounded-[3rem]">
                        <strong className="text-3xl text-yellow-500 block mb-8 flex items-center gap-4"><${LucideIcon} name="Lightbulb" size=${40}/> ${s4.tip_box.title}</strong>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            ${s4.tip_box.items.map(item => html`
                                <div className="flex flex-col gap-3 p-6 bg-black/40 rounded-3xl border border-yellow-500/10">
                                    <span className="text-yellow-500 font-bold text-lg uppercase flex items-center gap-2"><${LucideIcon} name="Check" size=${20}/> ${item.label}</span>
                                    <span className="text-xl text-zinc-200 leading-relaxed">${item.text}</span>
                                </div>
                            `)}
                        </div>
                    </div>
                <//>

                <!-- Section 5: Conclusion -->
                <${Section} title=${s5.title} subtitle=${s5.subtitle}>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        ${s5.items.map(item => html`
                            <div className="p-8 bg-zinc-900 rounded-[2.5rem] border border-zinc-700 text-center hover:bg-zinc-800 transition-colors">
                                <strong className="block text-xl text-white mb-4 font-bold uppercase tracking-wide text-blue-400">${item.label}</strong>
                                <p className="text-xl text-zinc-300 leading-relaxed font-medium">${item.text}</p>
                            </div>
                        `)}
                     </div>
                <//>
            </div>
        `;
    };

    // --- Momcare Lecture 1 Part 2 Data ---
    // --- Momcare Lecture 1 Part 2 Data ---
    const momcareLecture1Part2Data = {
        meta: {
            week: "MOMCARE WEEK 1 - PART 2",
            title: "영드자 기법과<br/>실전 편집 루틴",
            subtitle: "드라마처럼 짜깁기하여 <span class='text-pink-400'>알고리즘을 속이다</span>.<br/>저작권 위험을 관리하며 수익을 극대화하는 <span class='text-white font-bold'>하이리스크 전략</span>.",
            keywords: ["영드자", "구간 변경", "TTS", "의역", "하이리스크", "일치율"]
        },
        sections: [
            {
                id: "concept",
                title: "1. 영드자 기법의 핵심",
                subtitle: "(영상을 드라마처럼 짜깁기)",
                cards: [
                    {
                        title: "1.1. Why Drama?",
                        icon: "Film",
                        color: "red",
                        desc: "한계선 높음, 대중성 높음, 이미 완성된 몰입도.",
                        items: [
                            { label: "장점", text: "드라마는 대중성이 높아 한계선이 높습니다 (무조건 유리)." },
                            { label: "단점", text: "경쟁이 매우 치열한 포화 시장입니다." },
                            { label: "기회", text: "원본이 너무 완벽해서 사람들이 그대로 씁니다. <span class='text-white font-bold'>최대한 다르게 바꾸면</span> 기회가 됩니다." }
                        ]
                    },
                    {
                        title: "1.2. How to? (구간 바꾸기)",
                        icon: "Shuffle",
                        color: "blue",
                        desc: "구간(구달) 바꾸기 & TTS 연결",
                        items: [
                            { label: "핵심 원리", text: "1분짜리 영상은 순서를 대충 꼬아도 말이 됩니다." },
                            { label: "작업 방식", text: "원본을 일일이 발라내지 않고, **벤치 영상 내에서 순서만 변경**합니다." },
                            { label: "효과", text: "일치율(저작권 중복) 0%. 시청자는 **신선하고 새로운 전개**로 인식합니다." }
                        ]
                    }
                ]
            },
            {
                id: "practice_instructor",
                title: "2. 강사 실전 적용 사례",
                subtitle: "순서를 완벽하게 꼬아버리는 법 (회사 빌런)",
                steps: [
                    { step: "Step 1. 제목 설정", desc: "\"회사에서 함부로 적을 만들면 안 되는 이유\" (공감대 자극)" },
                    { step: "Step 2. 후킹 배치", desc: "45초 구간('헉! 어떻게 알았어?')을 <span class='text-green-400 font-bold'>맨 앞으로</span> 이동하여 궁금증 유발." },
                    { step: "Step 3. 중간 배치", desc: "29초 구간('발버둥 쳤다') 배치 -> 주인공이 행동할 수밖에 없는 당위성 부여." },
                    { step: "Step 4. 복귀 & 꼬기", desc: "원본 처음('항문') -> 다른 장면('지영아', 전혀 다른 맥락) -> 다시 '고마워' 장면 연결." },
                    { step: "Step 5. 결과", desc: "순서가 뒤죽박죽이지만 <span class='text-white font-bold'>대본(야부리)으로 연결</span>되어 자연스러움. (빌지 얹어주는 결말 창조)" }
                ],
                stats: {
                    title: "영드자의 위력 (Efficiency)",
                    items: [
                        { label: "조회수", value: "300만~400만 View (기대치)" },
                        { label: "소요 시간", value: "20~30분 (대본+순서)" },
                        { label: "일치율", value: "0% (완벽한 새 영상 인식)" }
                    ]
                }
            },
            {
                id: "script_technique",
                title: "3. 대본 작성 구체적 기술",
                subtitle: "의역과 감정 이입의 힘",
                cards: [
                    {
                        title: "3.1. 의역 (Paraphrasing)",
                        icon: "Edit3",
                        color: "green",
                        quote: "\"스스로를 속일 수 있을 만큼 의역하라.\"",
                        items: [
                            "자막 변경 불가(한계) -> <span class='text-green-400'>자막을 무시하고 내가 말하듯 의역</span>.",
                            "예시: \"냄새가 나\" -> \"아, 냄새가 나는데? 알려줄까?\"",
                            "목표: 똑같은 표현 회피. 내가 쓴 대본을 내가 봐도 몰라볼 정도여야 함."
                        ]
                    },
                    {
                        title: "3.2. 감정 이입 (Empathy)",
                        icon: "SmilePlus",
                        color: "yellow",
                        quote: "\"내가 애국자, 내가 아빠가 되어라.\"",
                        items: [
                            "국뽕: \"와! 대한민국 미쳤어!\" (빙의 수준).",
                            "피해자 구도: 가해자보다 <span class='text-yellow-400'>피해자가 더 불쌍해 보이게</span> 묘사 (가이드라인 회피 꿀팁)."
                        ]
                    }
                ],
                gukppong_case: {
                    title: "실전 대본 재구성: 국뽕 영상 (외국인)",
                    student: {
                        good: "후킹(뒷부분 한국 칭찬) 전진 배치, 전체 순서 변경 양호.",
                        bad: "단어가 원본과 너무 겹침."
                    },
                    instructor: {
                        title: "한국에 오자마자 국적을 바꾸고 싶어졌다는 외국인",
                        points: [
                            "후킹: 29초 웃는 장면 배치 -> \"한국 오자마자 국적 바꾸고 싶어 함\"(나레이션 입힘).",
                            "감정 극대화: \"와, 이러니 한국을 사랑할 수밖에 없죠. 이 나라와 사랑에 빠졌어.\"",
                            "완벽한 의역: \"밤이 무서웠지만..\" -> \"밤거리를 걷는 이 순간이 믿기지 않아요\"."
                        ]
                    }
                }
            },
            {
                id: "advanced_cases",
                title: "4. 감정 & 지식 극대화 실습 (심화)",
                subtitle: "디테일이 명품을 만든다",
                cases: [
                    {
                        title: "분노 유발 (목줄 없는 개)",
                        icon: "Flame",
                        color: "red",
                        before: "단순 상황 묘사는 임팩트가 약함. '두 견주 모두 잘못'이라는 양비론은 몰입 방해.",
                        after: [
                            "제목: '무책임한 견주의 어이없는 태도' (분노 자극)",
                            "<span class='text-yellow-400'>피해자 몰입 구도</span>: 우리 측을 '사랑스러운 반려견과 함께하는 남성'으로 긍정 묘사.",
                            "가해자 묘사: '느긋하게 사라지는 태도' 강조로 분노 극대화."
                        ]
                    },
                    {
                        title: "지식/정보 (자물쇠 따기)",
                        icon: "Unlock",
                        color: "blue",
                        before: "뻔한 설명은 지루함. 원본과 똑같은 단어 사용 시 중복 위험.",
                        after: [
                            "제목: '자물쇠 비번 잊었을 때 종이 한 장이면 끝'",
                            "<span class='text-blue-400'>완벽한 의역</span>: '펜으로 표시한 종이' -> '선 한 줄이 표시된 종이', '막대기' -> '이쑤시개'.",
                            "후킹: '이거 하나만 알면 고민 끝.' (뻔하지만 통하는 공식)"
                        ]
                    }
                ]
            },
            {
                id: "category_analysis",
                title: "5. 카테고리별 심층 분석 (Insight)",
                subtitle: "어디에 기회가 있는가? (7.1 ~ 7.5 분석)",
                categories: [
                    {
                        title: "동물 (Animals)",
                        icon: "Cat",
                        color: "orange",
                        status: "Red Ocean (과포화)",
                        channels: [
                            { name: "주월드", stats: "구독 8만 / 2.4억 뷰", note: "쏘쏘함. 벤치마킹 많아 트렌드 하락세." },
                            { name: "1분월드", stats: "영상 2400개 / 5억 뷰", note: "중복도 높음." }
                        ],
                        insight: "가이드라인이 편해 개체수 폭증. 중복도 스트레스 심함. 나만의 확실한 차별화 없으면 비추천."
                    },
                    {
                        title: "지식/정보 (Knowledge)",
                        icon: "BookOpen",
                        color: "blue",
                        status: "Blue Ocean (기회)",
                        channels: [
                            { name: "그거 알아?", stats: "영상 400개 / 1.2억 뷰", note: "고점 높음(1000만). 현재 빠져나가는 추세." },
                            { name: "쓱딱 (튜토리얼)", stats: "고점 1000만", note: "나무류 튜토리얼 방식 추천." }
                        ],
                        insight: "고점이 매우 높음. CCTV/범죄는 가이드라인 위험, '미담'이나 '생활 꿀팁' 중심으로 접근할 것."
                    },
                    {
                        title: "감동/국뽕 (Emotion)",
                        icon: "Flag",
                        color: "red",
                        status: "High Return (강추)",
                        channels: [
                            { name: "울림톡톡", stats: "3.7억 뷰 (고점 2800만)", note: "지하철 방송 같은 여운/감동." },
                            { name: "국뽕주의", stats: "1500만 뷰", note: "스포츠 등 다양한 포맷 확장." }
                        ],
                        insight: "감정의 힘은 강력함. '눈물 쏙 뺀다'는 마인드. 국뽕은 '국가대표처럼' 찬양하라."
                    },
                    {
                        title: "음악/드라마 (Story)",
                        icon: "Music",
                        color: "purple",
                        status: "Steady Seller",
                        channels: [
                            { name: "쇼꾸마", stats: "1억 뷰 (고점 1200만)", note: "아이(Child) + 감동 결합." },
                            { name: "쇼잉", stats: "14억 뷰 (초대형)", note: "재미있는 인물 상황. 1000만 뷰가 끊이지 않음." }
                        ],
                        insight: "음악은 '추억'을 자극. 해외 커버곡(저작권 안전) 활용. 드라마는 '다 이루어질 지니' 같은 인기 키워드 검색 필수."
                    }
                ]
            },
            {
                id: "risk_strategy",
                title: "6. 리스크 관리 & 마무리",
                subtitle: "High Risk, High Return",
                risk_box: {
                    title: "위험 관리 전략",
                    items: [
                        { label: "수익 차이", text: "안전빵(250만원) vs 리스크(2,500만원). 10배 차이." },
                        { label: "계정 분리", text: "채널 폭파 대비 <span class='text-white font-bold'>애드센스/기기 분리</span> 필수. (채널 날아가도 10개월 시간 버는 셈)" },
                        { label: "저작권 소스", text: "OTT(넷플릭스 등) 활용. 방영 중 홍보 효과 노리기." }
                    ]
                },
                footer: {
                    title: "최종 학습 지침",
                    text: "<span class='text-white underline'>1.5배속 반복 시청</span> (이해할 때까지).<br/>1주차 루틴(에셋-대본-편집) 무한 반복. <span class='text-green-400 font-bold'>완벽한 이해가 속도보다 중요합니다.</span>"
                }
            }
        ]
    };

    window.Contents.momcare_lecture1_part2 = () => {
        const data = momcareLecture1Part2Data;
        const s1 = data.sections[0];
        const s2 = data.sections[1];
        const s3 = data.sections[2];
        const s4 = data.sections[3];
        const s5 = data.sections[4];
        const s6 = data.sections[5];

        const renderCase = (c) => html`
            <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 hover:border-${c.color}-500/30 transition-colors">
                <div className="lg:w-1/3 flex flex-col justify-center items-center text-center p-6 bg-black rounded-3xl border border-zinc-800">
                    <${LucideIcon} name=${c.icon} size=${64} className=${`text-${c.color}-400 mb-6`} />
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">${c.title}</h3>
                    <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 w-full">
                        <span className="text-zinc-500 font-bold text-sm uppercase block mb-2">Before Context</span>
                        <p className="text-zinc-300 text-lg leading-snug">${c.before}</p>
                    </div>
                </div>
                <div className="lg:w-2/3 p-8 rounded-3xl bg-blue-900/10 border border-blue-500/20">
                    <strong className="block text-blue-400 mb-6 text-xl flex items-center gap-2"><${LucideIcon} name="Award" size=${24}/> 강사 솔루션 / After</strong>
                    <ul className="space-y-4 text-zinc-300 text-lg">
                        ${c.after.map(p => html`
                            <li className="flex gap-3">
                                <span className="text-blue-500 mt-1">●</span>
                                <span dangerouslySetInnerHTML=${{ __html: p }}></span>
                            </li>
                        `)}
                    </ul>
                </div>
            </div>
        `;

        return html`
            <div className="space-y-48 pb-60">
                 <!-- Header -->
                <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-900/20 rounded-full blur-[100px] -z-10"></div>
                    <${Badge} color="pink">${data.meta.week}<//>
                    <h1 className="text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-3xl lg:text-4xl text-zinc-200 max-w-6xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                <!-- Section 1: Concept -->
                <${Section} title=${s1.title} subtitle=${s1.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        ${s1.cards.map(c => html`
                            <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                <div className="space-y-6">
                                    ${c.desc && html`<p className="text-2xl text-white font-bold pb-4 border-b border-white/10">${c.desc}</p>`}
                                    <ul className="space-y-4">
                                        ${c.items.map(i => html`
                                            <li className="flex flex-col gap-1">
                                                <span className="text-zinc-500 font-bold uppercase text-sm">${i.label}</span>
                                                <span className="text-xl text-zinc-300" dangerouslySetInnerHTML=${{ __html: i.text }}></span>
                                            </li>
                                        `)}
                                    </ul>
                                </div>
                            <//>
                        `)}
                    </div>
                <//>

                <!-- Section 2: Instructor Practice -->
                <${Section} title=${s2.title} subtitle=${s2.subtitle}>
                    <div className="flex flex-col gap-12">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                            ${s2.steps.map((st, i) => html`
                                <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-700 relative overflow-hidden group hover:-translate-y-2 transition-transform">
                                    <span className="absolute -right-4 -bottom-4 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors">${i + 1}</span>
                                    <strong className="block text-green-400 mb-3 text-lg border-b border-white/5 pb-2">${st.step}</strong>
                                    <p className="text-zinc-200 text-lg font-medium z-10 relative" dangerouslySetInnerHTML=${{ __html: st.desc }}></p>
                                </div>
                            `)}
                         </div>

                         <div className="p-10 bg-gradient-to-r from-zinc-900 to-black rounded-[3rem] border border-zinc-700 mx-auto max-w-4xl w-full text-center">
                            <h3 className="text-3xl text-white font-black mb-8"><${LucideIcon} name="Zap" className="inline mr-2 text-yellow-400"/> ${s2.stats.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-700">
                                ${s2.stats.items.map(it => html`
                                    <div className="pt-4 md:pt-0">
                                        <div className="text-zinc-400 text-lg uppercase font-bold mb-2">${it.label}</div>
                                        <div className="text-2xl lg:text-3xl text-white font-black">${it.value}</div>
                                    </div>
                                `)}
                            </div>
                         </div>
                    </div>
                <//>

                <!-- Section 3: Script Technique -->
                <${Section} title=${s3.title} subtitle=${s3.subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                        ${s3.cards.map(c => html`
                            <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                <div className="bg-black/40 p-6 rounded-2xl border border-white/5 mb-6">
                                    <p className="text-2xl text-white font-bold italic text-center" dangerouslySetInnerHTML=${{ __html: c.quote }}></p>
                                </div>
                                <ul className="space-y-4 text-xl text-zinc-300">
                                    ${c.items.map(i => html`<li class="flex gap-3"><span class="text-${c.color}-500">●</span> <span dangerouslySetInnerHTML=${{ __html: i }}></span></li>`)}
                                </ul>
                            <//>
                        `)}
                    </div>
                    <div className="p-8 lg:p-12 bg-red-900/10 border border-red-500/20 rounded-[3rem]">
                         <strong className="text-3xl text-red-500 block mb-8 flex items-center gap-4"><${LucideIcon} name="Youtube" size=${40}/> ${s3.gukppong_case.title}</strong>
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-black/40 p-6 rounded-3xl border border-red-500/10">
                                <span className="text-zinc-500 font-bold uppercase mb-2 block">Student Analysis</span>
                                <p className="text-zinc-300 text-lg mb-2"><span class="text-green-400">Good:</span> ${s3.gukppong_case.student.good}</p>
                                <p className="text-zinc-300 text-lg"><span class="text-red-400">Bad:</span> ${s3.gukppong_case.student.bad}</p>
                            </div>
                            <div className="bg-blue-900/20 p-6 rounded-3xl border border-blue-500/20">
                                <span className="text-blue-400 font-bold uppercase mb-2 block">Instructor's Re-write</span>
                                <h4 className="text-white font-bold text-xl mb-3">"${s3.gukppong_case.instructor.title}"</h4>
                                <ul className="list-disc list-inside space-y-2 text-zinc-200">
                                    ${s3.gukppong_case.instructor.points.map(p => html`<li>${p}</li>`)}
                                </ul>
                            </div>
                         </div>
                    </div>
                <//>

                <!-- Section 4: Advanced Cases -->
                <${Section} title=${s4.title} subtitle=${s4.subtitle}>
                    <div className="space-y-8">
                        ${s4.cases.map(c => renderCase(c))}
                    </div>
                <//>

                <!-- Section 5: Category Analysis -->
                <${Section} title=${s5.title} subtitle=${s5.subtitle}>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        ${s5.categories.map(cat => html`
                            <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-700 hover:border-${cat.color}-500/50 transition-colors flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className=${`p-4 rounded-2xl bg-${cat.color}-900/20 text-${cat.color}-400`}>
                                            <${LucideIcon} name=${cat.icon} size=${36} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-white leading-none mb-1">${cat.title}</h3>
                                            <span className=${`text-sm font-bold text-${cat.color}-400 uppercase tracking-wider`}>${cat.status}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-6 flex-grow">
                                    ${cat.channels.map(ch => html`
                                        <div className="p-4 bg-black/50 rounded-xl border border-zinc-800 flex justify-between items-center">
                                            <div>
                                                <strong className="text-white block text-lg">${ch.name}</strong>
                                                <span className="text-zinc-500 text-sm">${ch.note}</span>
                                            </div>
                                            <span className="text-zinc-300 font-bold text-sm bg-zinc-800 px-2 py-1 rounded">${ch.stats}</span>
                                        </div>
                                    `)}
                                </div>
                                <div className="mt-auto p-4 bg-zinc-800/50 rounded-xl border-l-4 border-${cat.color}-500">
                                    <p className="text-zinc-300 text-lg leading-relaxed"><span class="text-white font-bold">Insight:</span> ${cat.insight}</p>
                                </div>
                            </div>
                        `)}
                     </div>
                <//>

                <!-- Section 6: Risk & Conclusion -->
                <${Section} title=${s6.title} subtitle=${s6.subtitle}>
                    <div className="space-y-12">
                         <div className="bg-red-900/10 border border-red-500/20 p-8 rounded-[2.5rem]">
                            <strong className="block text-2xl text-red-400 mb-6 flex items-center gap-3"><${LucideIcon} name="AlertTriangle" size=${32}/> ${s6.risk_box.title}</strong>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                ${s6.risk_box.items.map(item => html`
                                    <div className="bg-black/50 p-6 rounded-2xl border border-red-500/10 hover:border-red-500/40 transition-colors">
                                        <span className="block text-zinc-500 text-sm font-bold uppercase mb-2">${item.label}</span>
                                        <span className="text-white text-xl font-medium leading-relaxed" dangerouslySetInnerHTML=${{ __html: item.text }}></span>
                                    </div>
                                `)}
                            </div>
                         </div>
                         <div className="text-center p-12 bg-black rounded-[3rem] border border-zinc-800">
                            <h3 className="text-3xl lg:text-4xl text-white font-black mb-6">${s6.footer.title}</h3>
                            <p className="text-xl lg:text-2xl text-zinc-300 leading-relaxed" dangerouslySetInnerHTML=${{ __html: s6.footer.text }}></p>
                         </div>
                    </div>
                <//>
            </div>
        `;
    };

    // --- Momcare Week 2 Feedback Part 1 Data ---
    const momcareWeek2FeedbackPart1Data = {
        meta: {
            week: "MOMCARE WEEK 2 - FEEDBACK 1",
            title: "대본의 80% 법칙과<br/>댓글 심리 활용",
            subtitle: "콘텐츠 성공의 <span class='text-blue-400'>본질(80%)</span>을 뚫는 실전 피드백.<br/>벤치 영상의 <span class='text-white font-bold'>댓글</span>이 곧 대본의 정답지다.",
            keywords: ["대본 루틴", "댓글 분석", "소몰이 기법", "깍두기 공식", "차별화"]
        },
        sections: [
            {
                id: "intro",
                title: "1. 2주차 핵심 피드백 & 마인드셋",
                subtitle: "(본질의 80%를 채워라)",
                cards: [
                    {
                        title: "System & Revenue",
                        icon: "BarChart2",
                        color: "green",
                        items: [
                            "강사 수익 인증: 12월 강의 준비로 바빴음에도 <span class='text-white font-bold'>1억 200만 원</span> 달성.",
                            "시스템의 힘: 메인 채널 2개가 날아갔으나(3천만/4천만 뷰), 남은 채널로 5,800만 원 수익.",
                            "교훈: 채널이 날아가는 것은 '신의 계시'. 다시 시작하면 된다.",
                            "숙제 피드백: 모든 제출자 대본 검토. <span class='text-green-400'>잘한 점/아쉬운 점/개선점</span> 꼼꼼히 피드백."
                        ]
                    },
                    {
                        title: "Zero Punch Risk",
                        icon: "AlertTriangle",
                        color: "red",
                        items: [
                            "신규/깡통 채널 위험성: 신뢰도가 없어 <span class='text-red-400'>'제로 펀치'</span>(노출 0) 발생 가능성 높음.",
                            "알고리즘: 초반에 신고(싫어요/차단) 여부와 영상 질을 깐깐하게 검증.",
                            "전략: 첫인상이 중요. 가이드라인 준수하여 '우등생'으로 시작해야 함."
                        ]
                    }
                ]
            },
            {
                id: "success_formula",
                title: "2. 콘텐츠 성공의 본질적 공식",
                subtitle: "이것만 알면 상위 20%",
                cards: [
                    {
                        title: "Essentials (80%)",
                        icon: "Target",
                        color: "blue",
                        items: [
                            "에셋(Asset): 비슷한 결의 소재를 모아 채널 그룹화.",
                            "한계선(Limit): <span class='text-blue-400 font-bold'>한계선이 높은 소재</span> 선정 (이미 모수가 정해져 있음).",
                            "시청자 선호: 가이드라인/대본은 기본 옵션, 결국 '시청자가 좋아하는 영상'을 만드는 것이 핵심."
                        ]
                    },
                    {
                        title: "Differentiation (20%)",
                        icon: "Sparkles",
                        color: "yellow",
                        items: [
                            "차별화: 80% 기본기 위에 얹는 '한 끗'. 조회수 10만 -> 100만 견인.",
                            "강사의 무기: <span class='text-yellow-400'>대본과 감정 이입</span>. 댓글을 통해 시청자의 감정을 유도.",
                            "3강 예고: 수익 냈던 채널 컨셉 49개 중 중첩 제외 <span class='text-yellow-400 font-bold'>29개 영상 포메이션</span>(기획의도, 카테고리, 결과치) 공개."
                        ]
                    }
                ]
            },
            {
                id: "script_routine",
                title: "3. 대본 작성 루틴 (깍두기 공식)",
                subtitle: "효율과 퀄리티를 동시에",
                cards: [
                    {
                        title: "Source Finding",
                        icon: "Search",
                        color: "purple",
                        items: [
                            "로드몰(Road Mall) 방법: 2강 내용 활용. 많은 채널 수집.",
                            "틱톡/인스타: 스포츠, 드라마, 애니 등 키워드 추출 -> 해외 결에 맞는 영상 발굴 및 내 것으로 만들기.",
                            "소재 선정: 70~80% 이해도 필요. 시작하는 순간 되돌릴 수 없음."
                        ]
                    },
                    {
                        title: "Title Power",
                        icon: "Type",
                        color: "pink",
                        items: [
                            "소제목의 힘: 피드 넘길 때 제목은 안 보여도 <span class='text-pink-400 font-bold'>소제목(썸네일 텍스트)</span>은 보임.",
                            "가장 강력한 후킹 요소. 생활화 필요."
                        ]
                    }
                ],
                routine_steps: [
                    { label: "1. 깍두기", text: "벤치마킹 영상 속 **구간 시점** (영상 그대로)." },
                    { label: "2. 일반 문장", text: "설명용 **나레이션 (TTS)**." },
                    { label: "3. 따옴표", text: "영상 속 인물의 **대화**." },
                    { label: "4. 괄호", text: "**자막** (상황 설명)." }
                ],
                process_steps: [
                    { step: "Step 1", desc: "가이드라인 준수 여부 확인." },
                    { step: "Step 2", desc: "단어 변경 (벤치 영상 단어를 내 영상에 맞게)." },
                    { step: "Step 3", desc: "인물 대사 자연스럽게 의역." },
                    { step: "Step 4", desc: "구간(구다리) 바꾸기 연습." },
                    { step: "Step 5", desc: "<span class='text-red-400 font-bold'>후킹 총력전</span>: 와우포인트에 TTS 녹이거나 감정 유도." }
                ]
            },
            {
                id: "cases",
                title: "4. 실전 피드백 Case Study",
                subtitle: "Original vs Student vs Instructor",
                cases: [
                    {
                        title: "드라마 (치매 엄마)",
                        icon: "Film",
                        color: "purple",
                        before: "원본: '매일 아침 눈 치운 치매 엄마'.",
                        student: {
                            good: "제목: '아들은 평생 모를 뻔한...'(후킹 굿). 순서 변경 및 자막 양념 우수.",
                            bad: "없음 (매우 잘함)."
                        },
                        instructor: {
                            title: "차별화 전략: TTS 감정 유도",
                            points: [
                                "<span class='text-yellow-400 font-bold'>댓글이 정답지</span>: '더 글로리' 예시. '개 안 키우던데' 댓글 반응 캐치.",
                                "소몰이: 해당 장면 앞으로 빼고, '재준이 살기를 끌어올리고' TTS로 감정 유도."
                            ]
                        }
                    },
                    {
                        title: "사회 실험 (시각장애인)",
                        icon: "Users",
                        color: "orange",
                        before: "편집 요소(음표, 자막) 좋으나 차별화 필요.",
                        student: {
                            good: "교차 편집 우수. 자막을 원본과 다른 의미로 바꿔 재미 요소 추가.",
                            bad: "-"
                        },
                        instructor: {
                            title: "감정 몰입 극대화",
                            points: [
                                "제목: '깨닫는 순간 죄책감이 드는 사회 실험' (죄책감 키워드).",
                                "구성: 가장 극적인 장면(밀치는 장면) 후킹 배치 -> TTS로 감정 몰입 유도."
                            ]
                        }
                    },
                    {
                        title: "인물/국뽕 (화장품)",
                        icon: "Smile",
                        color: "pink",
                        before: "흑인 여성에게 맞는 파데가 없어 한국 브랜드가 샘플 보냄.",
                        student: {
                            good: "제목: '뻔뻔하게 화장품 달라는 흑인 여성' (반전 유도). 이펙트 활용 굿.",
                            bad: "-"
                        },
                        instructor: {
                            title: "소재 발굴: 꼬리 타기",
                            points: [
                                "꼬리 타기: 원작자 해시태그 타고 들어가 관련 영상 파도타기.",
                                "역발상: 인기순 고집 X. 최근 경쟁 채널이 안 쓴 소재가 블루오션."
                            ]
                        }
                    },
                    {
                        title: "양산형 (크루즈)",
                        icon: "Copy",
                        color: "gray",
                        before: "100일 크루즈 놓친 남자 -> 사실 다른 배 예약.",
                        student: {
                            good: "대본 재미있음 ('놓친 건 배가 아니라 사람들의 심장').",
                            bad: "숫자('100일')를 그대로 씀. <span class='text-red-400'>150일, 3개월</span> 등으로 디테일 변경 필요."
                        },
                        instructor: {
                            title: "TTS 소몰이 & 선빵",
                            points: [
                                "TTS를 '소몰이꾼'으로 사용.",
                                "댓글 반응을 미리 알고, 그 감정을 느끼도록 TTS로 '선빵' 침."
                            ]
                        }
                    }
                ]
            }
        ]
    };

    // --- Momcare Week 2 Feedback Part 2 Data ---
    const momcareWeek2FeedbackPart2Data = {
        meta: {
            week: "MOMCARE WEEK 2 - FEEDBACK 2",
            title: "카테고리별 실전 피드백<br/>& 월급 채널 전략",
            subtitle: "스포츠, 동물, 국뽕, 팬튜브... <span class='text-green-400'>월급 나오는 채널</span>의 비밀.<br/><span class='text-white font-bold'>역발상 소스 발굴</span>과 디테일 한 끗 차이.",
            keywords: ["월급 채널", "스포츠 직캠", "팬튜브", "역발상", "소몰이"]
        },
        sections: [
            {
                id: "source_strategy",
                title: "1. 소스 발굴 & 역발상 전략",
                subtitle: "(인기순의 함정을 피하라)",
                cards: [
                    {
                        title: "Original Source",
                        icon: "Search",
                        color: "blue",
                        items: [
                            "원본 찾기: 어렵지만 필수 (흐름 제어 가능). 못 찾으면 '자막 지우개' 사용.",
                            "역발상: 인기순 정렬만 보면 다 똑같음. <span class='text-blue-400 font-bold'>조회수 낮은 영상</span>도 내가 살리면 됨.",
                            "날짜순: 신선한 소재는 날짜순 정렬이 유리."
                        ]
                    },
                    {
                        title: "Differentiation",
                        icon: "GitMerge",
                        color: "purple",
                        items: [
                            "하리하리: High Risk, High Return. 소재가 깡패.",
                            "연예인: 대중성/성장 빠름. 리스크 감수하고 기기 분리로 도전.",
                            "양산형: '재미'가 베이스."
                        ]
                    }
                ]
            },
            {
                id: "cases",
                title: "2. 카테고리별 심층 Case Study",
                subtitle: "디테일이 명품을 만든다",
                cases: [
                    {
                        title: "AI 영상 (트램펄린)",
                        icon: "Cpu",
                        color: "indigo",
                        before: "토끼/캥거루가 트램펄린 뛰다 박살남.",
                        student: {
                            good: "제목 재미있음. 소스 변경 노력.",
                            bad: "후킹(2-3초)이 너무 짧음(1초 미만). 이목을 끌 시간 부족."
                        },
                        instructor: {
                            title: "소몰이 스토리텔링",
                            points: [
                                "후킹: '이 집 팡팡은 캥거루 아지트인 거 아무도 몰랐음' (대사)",
                                "흐름: 아빠 설치 -> 밤마다 핫플 -> 결국 박살."
                            ]
                        }
                    },
                    {
                        title: "감동 (입양/재활)",
                        icon: "Heart",
                        color: "pink",
                        before: "입양 아들 재활 성공 마라톤 완주.",
                        student: {
                            good: "클로징 멘트 전율 ('지금 넘어져 있는 당신에게...'). <span class='text-pink-400 font-bold'>직접 더빙</span> 시도 굿.",
                            bad: "-"
                        },
                        instructor: {
                            title: "구간 변경의 정석",
                            points: [
                                "후킹 변경: 입양 사실보다 <span class='text-white font-bold'>의족 보여주는 장면</span>을 앞으로.",
                                "순서: 몸 불편(후킹) -> 어머니 교육 -> 입양 사실(반전) -> 마라톤 완주."
                            ]
                        }
                    },
                    {
                        title: "해외 레시피 (미국 가정식)",
                        icon: "Utensils",
                        color: "orange",
                        before: "현실적인 미국 요리.",
                        student: {
                            good: "구다리 변경, 와우포인트, 더빙 좋음.",
                            bad: "TTS(타입캐스트) 급발진/끊김 주의."

                        },
                        instructor: {
                            title: "문화 차이 강조",
                            points: [
                                "주제 확장: 단순 요리가 아니라 <span class='text-orange-400'>'미국의 놀라운 문화 차이'</span>로 접근.",
                                "흐름: 햄 한 통 다 붓기, 소스 들이붓기 등 '충격' 요소 강조."
                            ]
                        }
                    },
                    {
                        title: "스포츠 (테니스/나달)",
                        icon: "Activity",
                        color: "green",
                        before: "테니스 재미있는 상황.",
                        student: {
                            good: "자막 양념 대본력 우수.",
                            bad: "확대를 너무 당겨서 <span class='text-red-400'>전체 뷰가 안 보임</span>. 상황 이해 방해."
                        },
                        instructor: {
                            title: "월급 채널 (월클은 월급이다)",
                            points: [
                                "손흥민, 오타니 등 레전드는 꾸준함.",
                                "저작권 꿀팁: 방송 중계 X. <span class='text-green-400 font-bold'>직수 캠(직촬)</span>만 골라라 (서포터즈 좋아요 추적).",
                                "도파민 효과: 조회수 나오고 입금되는 순간 <span class='text-green-400 font-bold'>도파민</span> 폭발. 24시간 수익 창출."
                            ]
                        }
                    },
                    {
                        title: "감동 2 (오래된 차)",
                        icon: "Car",
                        color: "blue",
                        before: "아빠가 딸에게 똥차 선물 -> 딸 기뻐함.",
                        student: {
                            good: "제목(댓글 인용). <span class='text-blue-400 font-bold'>내용 추가</span>: 1년 뒤 더 좋은 차 받았다는 내용 찾아냄(완벽 차별화).",
                            bad: "-"
                        },
                        instructor: {
                            title: "추억 프레임",
                            points: [
                                "세차 장면 활용: '평생 추억의 나무를 첫 세차로 함께 했다'."
                            ]
                        }
                    },
                    {
                        title: "동물 2 (고양이)",
                        icon: "Cat",
                        color: "yellow",
                        before: "물 젖은 줄 모르다 화려한 회전.",
                        student: {
                            good: "올 TTS 시도.",
                            bad: "후킹 불일치(대사는 '스피드'인데 화면은 평범). 폰트(궁서체)가 재미 반감."
                        },
                        instructor: {
                            title: "빙의 & 폰트 깔맞춤",
                            points: [
                                "후킹: 돌고 있는 장면 바로 투입.",
                                "재미있는 영상엔 재미있는 폰트/효과음 필수.",
                                "빙의: 고양이에 빙의, 개그맨에 빙의."
                            ]
                        }
                    },
                    {
                        title: "팬튜브 (손흥민/테일러)",
                        icon: "Star",
                        color: "purple",
                        before: "팬심 자극 영상.",
                        student: {
                            good: "삐 처리로 궁금증 유발. 영어 대사 의역.",
                            bad: "영상 길이 <span class='text-red-400'>1분 2초</span> (너무 김). 25초로 압축했어야."
                        },
                        instructor: {
                            title: "따박따박 월급",
                            points: [
                                "팬튜브는 저작권 비교적 자유로움 (홍보 효과).",
                                "아이유, BTS 등 메이저 공략.",
                                "주의사항: 임영웅 등 팬덤이 <span class='text-red-400 font-bold'>불펌/양산형 싫어하는</span> 가수는 피할 것 (수익 안 가서 안 봄)."
                            ]
                        }
                    }
                ]
            },
            {
                id: "final_summary",
                title: "3. 최종 요약 & Next Step",
                subtitle: "결국 대본이다",
                cards: [
                    {
                        title: "Script is Everything",
                        icon: "PenTool",
                        color: "red",
                        items: [
                            "기획의 80%는 대본.",
                            "댓글 = 감정선/공감대 정답지.",
                            "TTS = 대본을 몰고 가는 힘 (소몰이).",
                            "프리랜서 활용: 원본 못 찾아도 대본만 잘 쓰면 해결 가능 (비용 아끼지 말 것)."
                        ]
                    },
                    {
                        title: "Action Plan",
                        icon: "ChevronsRight",
                        color: "green",
                        items: [
                            "소스 못 찾으면 프리랜서 써서라도 대본에 집중.",
                            "월급 채널 10개 = 월 2~3천. (스포츠, 팬튜브, 국뽕)",

                            "3강 예고: 대놓고 떠먹여주는 29개 카테고리 공개.",
                            "자신감: 채널 날아가도 다시 키우면 그만. <span class='text-white font-bold'>무조건 할 수 있다</span>는 마인드."
                        ]
                    }
                ]
            }
        ]
    };

    window.Contents.momcare_week2_part1 = () => {
        const data = momcareWeek2FeedbackPart1Data;

        const renderCase = (c) => html`
            <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 hover:border-${c.color}-500/30 transition-colors">
                <div className="lg:w-1/3 flex flex-col justify-center items-center text-center p-6 bg-black rounded-3xl border border-zinc-800">
                    <${LucideIcon} name=${c.icon} size=${64} className=${`text-${c.color}-400 mb-6`} />
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">${c.title}</h3>
                    <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 w-full">
                        <span className="text-zinc-500 font-bold text-sm uppercase block mb-2">Before / Original</span>
                        <p className="text-zinc-300 text-lg leading-snug">${c.before}</p>
                    </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-zinc-800/50 border border-zinc-700">
                        <strong className="block text-zinc-400 mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="User" size=${20}/> Student Feedback</strong>
                        <div className="space-y-4">
                            <div>
                                <span className="text-green-400 font-bold block mb-1">Good:</span>
                                <p className="text-zinc-300 leading-snug" dangerouslySetInnerHTML=${{ __html: c.student.good }}></p>
                            </div>
                            ${c.student.bad && c.student.bad !== "-" ? html`
                                <div>
                                    <span className="text-red-400 font-bold block mb-1">Bad / Fix:</span>
                                    <p className="text-zinc-300 leading-snug" dangerouslySetInnerHTML=${{ __html: c.student.bad }}></p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-blue-900/10 border border-blue-500/20">
                        <strong className="block text-blue-400 mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="Award" size=${20}/> Instructor Insight</strong>
                         <h4 className="text-white font-bold text-lg mb-3">${c.instructor.title}</h4>
                        <ul className="list-disc list-inside space-y-2 text-zinc-300">
                            ${c.instructor.points.map(p => html`<li dangerouslySetInnerHTML=${{ __html: p }}></li>`)}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        return html`
            <div className="space-y-48 pb-60">
                <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>
                    <${Badge} color="blue">${data.meta.week}<//>
                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-2xl lg:text-3xl text-zinc-200 max-w-5xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                ${data.sections.map(s => html`
                    <${Section} title=${s.title} subtitle=${s.subtitle}>
                        ${s.cards ? html`
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                ${s.cards.map(c => html`
                                    <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                        <ul className="space-y-4 list-disc list-inside text-xl text-zinc-300">
                                            ${c.items.map(i => html`<li dangerouslySetInnerHTML=${{ __html: i }}></li>`)}
                                        </ul>
                                    <//>
                                `)}
                            </div>
                        ` : ''}

                        ${s.routine_steps ? html`
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                ${s.routine_steps.map(r => html`
                                    <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
                                        <strong className="block text-blue-400 text-lg uppercase mb-2">${r.label}</strong>
                                        <p className="text-zinc-200 font-medium" dangerouslySetInnerHTML=${{ __html: r.text }}></p>
                                    </div>
                                `)}
                            </div>
                            <div className="space-y-4 bg-black/40 p-8 rounded-3xl border border-zinc-800">
                                <strong className="text-2xl text-white block mb-6">Step-by-Step Process</strong>
                                ${s.process_steps.map(p => html`
                                    <div className="flex items-start gap-4">
                                        <span className="text-zinc-500 font-bold w-20 shrink-0">${p.step}</span>
                                        <span className="text-xl text-zinc-300" dangerouslySetInnerHTML=${{ __html: p.desc }}></span>
                                    </div>
                                `)}
                            </div>
                        ` : ''}

                        ${s.cases ? html`
                            <div className="space-y-12">
                                ${s.cases.map(c => renderCase(c))}
                            </div>
                        ` : ''}
                    <//>
                `)}
            </div>
        `;
    };

    window.Contents.momcare_week2_part2 = () => {
        const data = momcareWeek2FeedbackPart2Data;
        const renderCase = (c) => html`
            <div className="flex flex-col lg:flex-row gap-8 p-8 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 hover:border-${c.color}-500/30 transition-colors">
                <div className="lg:w-1/3 flex flex-col justify-center items-center text-center p-6 bg-black rounded-3xl border border-zinc-800">
                    <${LucideIcon} name=${c.icon} size=${64} className=${`text-${c.color}-400 mb-6`} />
                    <h3 className="text-3xl font-black text-white mb-4 leading-tight">${c.title}</h3>
                    <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 w-full">
                        <span className="text-zinc-500 font-bold text-sm uppercase block mb-2">Before / Original</span>
                        <p className="text-zinc-300 text-lg leading-snug">${c.before}</p>
                    </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-zinc-800/50 border border-zinc-700">
                        <strong className="block text-zinc-400 mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="User" size=${20}/> Student Feedback</strong>
                        <div className="space-y-4">
                            <div>
                                <span className="text-green-400 font-bold block mb-1">Good:</span>
                                <p className="text-zinc-300 leading-snug" dangerouslySetInnerHTML=${{ __html: c.student.good }}></p>
                            </div>
                            ${c.student.bad && c.student.bad !== "-" ? html`
                                <div>
                                    <span className="text-red-400 font-bold block mb-1">Bad / Fix:</span>
                                    <p className="text-zinc-300 leading-snug" dangerouslySetInnerHTML=${{ __html: c.student.bad }}></p>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-green-900/10 border border-green-500/20">
                        <strong className="block text-green-400 mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="Zap" size=${20}/> Instructor Insight</strong>
                         <h4 className="text-white font-bold text-lg mb-3">${c.instructor.title}</h4>
                        <ul className="list-disc list-inside space-y-2 text-zinc-300">
                            ${c.instructor.points.map(p => html`<li dangerouslySetInnerHTML=${{ __html: p }}></li>`)}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        return html`
             <div className="space-y-48 pb-60">
                <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[100px] -z-10"></div>
                    <${Badge} color="green">${data.meta.week}<//>
                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-2xl lg:text-3xl text-zinc-200 max-w-5xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                ${data.sections.map(s => html`
                    <${Section} title=${s.title} subtitle=${s.subtitle}>
                        ${s.cards ? html`
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                ${s.cards.map(c => html`
                                    <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                        <ul className="space-y-4 list-disc list-inside text-xl text-zinc-300">
                                            ${c.items.map(i => html`<li dangerouslySetInnerHTML=${{ __html: i }}></li>`)}
                                        </ul>
                                    <//>
                                `)}
                            </div>
                        ` : ''}

                         ${s.cases ? html`
                            <div className="space-y-12">
                                ${s.cases.map(c => renderCase(c))}
                            </div>
                        ` : ''}
                    <//>
                `)}
            </div>
        `;
    };

    // --- Momcare Week 3 Feedback Part 1 Data ---
    const momcareWeek3FeedbackPart1Data = {
        meta: {
            week: "MOMCARE WEEK 3 - FEEDBACK 1",
            title: "영상 기획은 곧 메시지다",
            subtitle: "시청자의 공감대와 감정을 움직이는 <span class='text-blue-400'>기획 루틴</span>과 <span class='text-white'>메시지 메이킹</span>의 정석.",
            keywords: ["메시지 기획", "대본 루틴", "댓글 활용", "와우 포인트", "오버쿡 금지"]
        },
        sections: [
            {
                id: "principles",
                title: "1. 콘텐츠 제작의 기본 원칙 & 루틴",
                subtitle: "(1강~3강 기본기 점검)",
                cards: [
                    {
                        title: "대본 & 기획 루틴 점검",
                        icon: "ClipboardCheck",
                        color: "blue",
                        items: [
                            "기본 집중: 1~3강의 핵심 토대 위에서 소재를 뽑고 대본을 작성해야 합니다.",
                            "스토리 지표 = 댓글: 고민하지 말고 <span class='text-blue-400 font-bold'>댓글</span>에서 아이디어와 워딩을 가져오는 것이 가장 빠릅니다.",
                            "80% 법칙: 시청자가 보기에 재밌는 영상의 <span class='text-white font-bold'>80~90%는 기획(시나리오)</span>에 달려있습니다.",
                            "자막 양념: 댓글 내용을 TTS에 녹이지 않더라도 자막으로 충분히 맛을 낼 수 있습니다."
                        ]
                    },
                    {
                        title: "운영 전략 & 마인드셋",
                        icon: "Brain",
                        color: "purple",
                        items: [
                            "편집 오해: 50초를 꽉 채울 필요 없음. 기승전결에 맞춰 <span class='text-purple-400 font-bold'>필요한 장면만</span> 사용하세요.",
                            "선 업로드 후 검수 금지: 비공개 상태에서 충분히 검수하세요. 한 번 박힌 첫인상은 회복하기 어렵습니다.",
                            "우월감: 기본적인 것만 지켜도 남들보다 우월해질 수 있다는 자신감을 가지세요."
                        ]
                    },
                    {
                        title: "고위험 채널 관리 (에센)",
                        icon: "ShieldAlert",
                        color: "red",
                        items: [
                            "에센 분리: 공중파, 예능 등 위험도 높은 소재는 <span class='text-red-400 font-bold'>기기와 계정을 완전히 분리</span>해야 합니다.",
                            "관리자 격리: 메인 채널과 섞이지 않도록 철저히 관리하세요 (웹예능, 해외드라마 등)."
                        ]
                    },
                    {
                        title: "와우 포인트 & TTS 공식",
                        icon: "Zap",
                        color: "yellow",
                        items: [
                            "배치 구조: [와우 포인트(1~3초)] -> [TTS 설명] 순서가 가장 편한 배치입니다.",
                            "현장음 필수: 와우 포인트 구간(쳐다보기, 웃음 등)은 원본 사운드를 살려 몰입도를 유지하세요.",
                            "TTS 양념: 상황이 인지될 정도로만 <span class='text-yellow-400 font-bold'>툭툭 던지듯</span> 짧게 넣으세요 (장황한 설명 금지).",
                            "배너 활용: 띠 배너의 소제목으로 시청자의 눈길을 한 번 더 붙잡아야 합니다."
                        ]
                    }
                ]
            },
            {
                id: "market_strategy",
                title: "2. 소재 선택과 시장 전략",
                subtitle: "효율적인 루틴과 확장",
                cards: [
                    {
                        title: "소재 선정 기준",
                        icon: "MousePointer",
                        color: "green",
                        items: [
                            "친숙함이 무기: 내가 잘 알고 친숙한 분야를 선택해야 <span class='text-green-400 font-bold'>방구석 전문가(관심모수)</span>들을 상대할 수 있습니다.",
                            "감정의 결: 재미보다 감동, 축구보다 야구. 내가 잘 풀어낼 수 있는 '결'을 선택하세요.",
                            "자신감: 알고 있다면 내가 조금 더 자신 있는 것을 시작해야 변화가 생깁니다."
                        ]
                    },
                    {
                        title: "시스템 효율화 전략",
                        icon: "Layers",
                        color: "zinc",
                        items: [
                            "시간 단축: 소재 30분, 대본 1시간, 편집 3시간 -> 1~3강 기본기를 지키면 절반 이하로 줄어듭니다.",
                            "물량 승부: 3시간 걸려 영상 1개를 만드는 것보다, 루틴화된 공식으로 <span class='text-white font-bold'>3시간에 3개</span>를 만드는 것이 확률적으로 우위입니다.",
                            "채널 운영: 채널 1개보다 5개 운영하는 사람이 수익이 더 클 확률이 높습니다."
                        ]
                    },
                    {
                        title: "채널 확장 전략",
                        icon: "Globe",
                        color: "pink",
                        items: [
                            "터진 건 또 터진다: 국내에서 터진 영상(A)과 결이 같은 <span class='text-pink-400 font-bold'>해외 영상(B)</span>은 무조건 터집니다.",
                            "물량 공세: 평일보다 주말/연휴(추석, 설날)에 물량을 집중하세요. (48시간 볼륨업)",
                            "해외 확장: 포화도가 높을 땐 키워드로 확장하여 해외 에센을 만들어 결합하세요."
                        ]
                    },
                    {
                        title: "수익 & 멘탈 관리",
                        icon: "DollarSign",
                        color: "blue",
                        items: [
                            "월급 개념: 유튜브 수익은 월급입니다. 1분마다 조회수를 확인하며 일희일비하지 마세요.",
                            "타이밍: 모든 영상이 100만 뷰가 나올 수는 없습니다. 원작자도 타이밍을 놓치곤 합니다.",
                            "여유: 채널이 날아가도 다시 시작할 수 있다는 마음가짐이 중요합니다."
                        ]
                    }
                ],
                script_routine: {
                    title: "실전 대본 작성 4단계 루틴",
                    desc: "이 틀만 지켜도 작업 속도가 3배 빨라집니다. 소재 선정은 10분 이내로!",
                    steps: [
                        { label: "1. 깍두기 []", text: "벤치마킹 영상의 **구간 표시** (편집점)" },
                        { label: "2. 일반 문장", text: "**나레이션 (TTS)**: 상황 설명 및 감정 유도" },
                        { label: "3. 따옴표 \"\"", text: "영상 속 인물의 **대화 내용**" },
                        { label: "4. 괄호 ()", text: "**자막 양념**: 시각적 설명이나 강조 멘트" }
                    ]
                }
            },
            {
                id: "case_study_1",
                title: "3. 실전 Case Study: 감동 & 스포츠",
                subtitle: "야시장 할아버지 / 즐라탄 / 반려견",
                cases: [
                    {
                        title: "감동: 야시장 할아버지",
                        icon: "Heart",
                        color: "red",
                        context: "이틀 밤새 만든 곰돌이 인형을 건네는 할아버지 (원작 34초).",
                        feedback: [
                            { type: "good", text: "원작보다 짧고 간결한 편집(29초). BGM 선정이 매우 좋음." },
                            { type: "fix", text: "제목/소제목은 <span class='text-red-400'>차분한 감동 결</span>로. (예: '작은 인형이 가져다준 기적')" },
                            { type: "fix", text: "문장 끝 어미 반복('~돼요') 지양. 변형을 주어 지루함 탈피." }
                        ],
                        insight: "댓글('찡하다', '황금빛이다')을 그대로 소제목으로 쓰세요."
                    },
                    {
                        title: "스포츠: 즐라탄의 도발",
                        icon: "Activity",
                        color: "orange",
                        context: "즐라탄의 자신만만한 캐릭터성과 도발.",
                        feedback: [
                            { type: "good", text: "대본의 흐름과 야부리(스토리텔링) 흡입력이 훌륭함." },
                            { type: "fix", text: "<span class='text-orange-400 font-bold'>템포 조절 실패</span>. 너무 빠르고 튐. 즐라탄의 여유를 살릴 수 있도록 느긋하게 편집할 것." },
                            { type: "fix", text: "제목 단어 중복('악마', '악마') 교정. 자막 줄바꿈(중앙 정렬) 디테일 신경 쓸 것." }
                        ],
                        insight: "화려한 이펙트보다 '보기 편한 편집'이 우선입니다."
                    },
                    {
                        title: "감동: 용감한 반려견",
                        icon: "Dog",
                        color: "yellow",
                        context: "도둑을 막아선 강아지 -> 귀가 중인 주인을 침입자로 오인(반전).",
                        feedback: [
                            { type: "good", text: "<span class='text-yellow-400 font-bold'>완벽함(Perfect).</span> 감히 나무랄 데가 없음. 더빙 목소리의 차별화가 압권." },
                            { type: "fix", text: "소제목은 유머체 금지. 메시지 힘을 주는 직관적 문구로. (예: '상 받아야 하는 댕댕이', '낯선 외국에서 만난 엄마의 마음')" }
                        ],
                        insight: "더빙 목소리 자체가 강력한 차별화 포인트입니다."
                    }
                ]
            },
            {
                id: "case_study_2",
                title: "4. 실전 Case Study: 지식 & 국뽕",
                subtitle: "금융치료 / 한국의 서비스 / 인종차별",
                cases: [
                    {
                        title: "지식/유머: 금융 치료",
                        icon: "Brain",
                        color: "purple",
                        context: "병원의 소름 끼치는 전시물 -> 금융 치료(유머)로 메시지 전환 시도.",
                        feedback: [
                            { type: "fix", text: "<span class='text-purple-400 font-bold'>메시지 불명확</span>. 유머인지 차별인지 모호함. 기획 = 명확한 메시지." },
                            { type: "fix", text: "오버쿡(Overcook) 금지. 관점을 너무 비틀면 산으로 감. 원래 맛에 양념만 살짝 칠 것." }
                        ],
                        insight: "닭을 다시 튀기지 마세요. 잘 튀겨진 후라이드(테이블)에 양념만 얹으세요."
                    },
                    {
                        title: "국뽕: 한국의 서비스",
                        icon: "ThumbsUp",
                        color: "blue",
                        context: "한식 뷔페 브이로그 -> '친절함과 서비스'로 메시지 메이킹.",
                        feedback: [
                            { type: "good", text: "<span class='text-blue-400 font-bold'>졸업 수준.</span> 기획부터 자막, 효과음까지 국뽕의 감동을 완벽하게 살림." },
                            { type: "good", text: "소제목('7천 원짜리 풀코스')에도 국뽕 감성을 잘 녹여냄. (예: '따뜻한 마음', '한국인의 정')" }
                        ],
                        insight: "영상 기획은 곧 메시지입니다. 댓글에 정답이 있습니다."
                    },
                    {
                        title: "영드자: 인종차별 영화",
                        icon: "Film",
                        color: "zinc",
                        context: "인종차별 소재 영화 리뷰.",
                        feedback: [
                            { type: "fix", text: "메시지가 '인종차별'에서 '직업(검사)'로 흐려짐. 차별의 계기점을 명확히 보여줘야 함." },
                            { type: "tip", text: "보물찾기 전략: 어제 먹은 치킨은 오늘 맛없습니다. 경쟁자가 덜한 <span class='text-white font-bold'>타이밍</span>을 노리세요." }
                        ],
                        insight: "비슷한 영상이 많을 땐 '타이밍'이 생명입니다. (올드보이 군만두 전략)"
                    }
                ]
            }
        ]
    };

    window.Contents.momcare_week3_part1 = () => {
        const data = momcareWeek3FeedbackPart1Data;

        const renderCaseCard = (c) => html`
            <div className="p-8 rounded-[2rem] bg-zinc-900 border border-zinc-800 hover:border-${c.color}-500/50 transition-colors flex flex-col h-full shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                    <div className=${`p-4 rounded-2xl bg-${c.color}-400/10 text-${c.color}-400`}>
                        <${LucideIcon} name=${c.icon} size=${32} />
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight">${c.title}</h3>
                </div>
                
                <div className="mb-6 p-4 bg-black rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 font-bold text-xs uppercase block mb-1">Context</span>
                    <p className="text-zinc-300 text-lg leading-snug">${c.context}</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                    ${c.feedback.map(f => html`
                        <div className="flex items-start gap-3">
                            <span className=${`shrink-0 px-2 py-1 rounded text-xs font-black uppercase mt-1 ${f.type === 'good' ? 'bg-green-900/50 text-green-400 border border-green-500/30' : f.type === 'tip' ? 'bg-blue-900/50 text-blue-400 border border-blue-500/30' : 'bg-red-900/50 text-red-400 border border-red-500/30'}`}>${f.type === 'fix' ? 'Fix' : f.type.toUpperCase()}</span>
                            <p className="text-zinc-200 text-lg leading-relaxed" dangerouslySetInnerHTML=${{ __html: f.text }}></p>
                        </div>
                    `)}
                </div>

                <div className=${`mt-auto pt-4 border-t border-${c.color}-500/20`}>
                    <p className=${`text-${c.color}-300 font-medium italic text-lg`}>
                        <span className="not-italic mr-2">💡</span> ${c.insight}
                    </p>
                </div>
            </div>
        `;

        return html`
            <div className="space-y-48 pb-60">
                <!-- Header -->
                <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>
                    <${Badge} color="blue">${data.meta.week}<//>
                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-2xl lg:text-3xl text-zinc-200 max-w-5xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                 <!-- Section 1 -->
                <${Section} title=${data.sections[0].title} subtitle=${data.sections[0].subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        ${data.sections[0].cards.map(c => html`
                            <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                <ul className="space-y-4 text-xl text-zinc-300">
                                    ${c.items.map(item => html`
                                        <li className="flex items-start gap-3">
                                            <span className=${`text-${c.color}-400 mt-1.5 shrink-0`}>●</span>
                                            <span dangerouslySetInnerHTML=${{ __html: item }}></span>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                        `)}
                    </div>
                <//>

                <!-- Section 2 -->
                <${Section} title=${data.sections[1].title} subtitle=${data.sections[1].subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        ${data.sections[1].cards.map(c => html`
                            <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                <ul className="space-y-4 text-xl text-zinc-300">
                                    ${c.items.map(item => html`
                                        <li className="flex items-start gap-3">
                                            <span className=${`text-${c.color}-400 mt-1.5 shrink-0`}>●</span>
                                            <span dangerouslySetInnerHTML=${{ __html: item }}></span>
                                        </li>
                                    `)}
                                </ul>
                            <//>
                        `)}
                    </div>
                    
                    <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-2xl">
                         <div className="text-center mb-10">
                            <h3 className="text-3xl font-black text-white mb-3" dangerouslySetInnerHTML=${{ __html: data.sections[1].script_routine.title }}></h3>
                            <p className="text-xl text-zinc-400">${data.sections[1].script_routine.desc}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            ${data.sections[1].script_routine.steps.map(step => html`
                                <div className="p-6 bg-zinc-800/50 rounded-2xl border border-zinc-700 hover:bg-zinc-800 transition-colors">
                                    <strong className="block text-blue-400 text-lg uppercase mb-3 border-b border-zinc-700 pb-2">${step.label}</strong>
                                    <p className="text-white text-lg font-medium" dangerouslySetInnerHTML=${{ __html: step.text }}></p>
                                </div>
                            `)}
                        </div>
                    </div>
                <//>

                <!-- Section 3: Case Studies 1 -->
                <${Section} title=${data.sections[2].title} subtitle=${data.sections[2].subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        ${data.sections[2].cases.map(c => renderCaseCard(c))}
                    </div>
                <//>

                <!-- Section 4: Case Studies 2 -->
                <${Section} title=${data.sections[3].title} subtitle=${data.sections[3].subtitle}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        ${data.sections[3].cases.map(c => renderCaseCard(c))}
                    </div>
                <//>
            </div>
        `;
    };

    // --- Momcare Week 3 Feedback Part 2 Data ---
    const momcareWeek3FeedbackPart2Data = {
        meta: {
            week: "MOMCARE WEEK 3 - FEEDBACK 2",
            title: "피드백의 정석: 실전 하이엔드",
            subtitle: "라이프핵, 감동, 유머까지. <span class='text-blue-400'>메시지</span> 하나로 조회수와 수익(쇼핑)을 동시에 잡는 법.",
            keywords: ["쇼핑 태그", "시각적 후킹", "자막 템포", "팬튜브 공식", "날먹 콘텐츠"]
        },
        sections: [
            {
                id: "lifehack_shopping",
                title: "1. 라이프핵 & 쇼핑 수익화",
                subtitle: "(조회수 + 수익모델 접목)",
                cards: [
                    {
                        title: "쇼핑 태그 전략 (수익화)",
                        icon: "ShoppingBag",
                        color: "green",
                        items: [
                            "허들 파괴: 일반 조회수는 '시청' 허들이 있지만, 꿀팁 콘텐츠는 문제 해결을 통해 '구매' 허들까지 무너뜨립니다.",
                            "쿠팡 태그: 구독자 1만(랜덤 3천) 달성 시 <span class='text-green-400 font-bold'>쇼핑 태그</span> 활성화. (내가 태그한 제품 구매 시 수수료 6.7%)",
                            "전환율: 지식/정보성 카테고리에 쇼핑을 붙이면 수익 전환율이 압도적입니다.",
                            "일치율 관리: 클립 소스(틱톡, 도인 등)가 넘쳐나므로, 장면을 교체해 일치율을 낮추기 쉽습니다."
                        ]
                    },
                    {
                        title: "피드백: 휴지 방향제 꿀팁",
                        icon: "Scissors",
                        color: "zinc",
                        feedback: [
                            { type: "good", text: "메시지가 명확하고 와우 포인트(Wow Point)를 잘 뽑아냄." },
                            { type: "fix", text: "단어 중복(히말라야, 한 캡 등) 과다. <span class='text-red-400'>동의어 교체</span>로 피로도 줄일 것." }
                        ],
                        insight: "라이프 핵은 쇼핑 수익 창출을 위한 최고의 '빌드업' 소재입니다."
                    }
                ]
            },
            {
                id: "touching_story",
                title: "2. 감동 스토리 & 시각적 후킹",
                subtitle: "TTS보다 강력한 '한 장면'",
                cards: [
                    {
                        title: "시각적 후킹 전략",
                        icon: "Eye",
                        color: "blue",
                        items: [
                            "TTS의 한계: 구구절절한 설명(TTS)보다 <span class='text-blue-400 font-bold'>우는 장면 2초</span>가 훨씬 강력한 후킹입니다.",
                            "배치 순서: [시각적 충격 장면(2초)] -> [TTS 설명] 순서가 국룰.",
                            "집단지성(댓글): '30년 전엔 폰도 없었다...', '인종 상관없이...' 같은 베스트 댓글이 곧 <span class='text-white font-bold'>메시지이자 대본</span>입니다."
                        ]
                    },
                    {
                        title: "피드백: 감동 재회",
                        icon: "Users",
                        color: "indigo",
                        feedback: [
                            { type: "good", text: "대본의 몰입도가 좋고 '감동 재회' 메시지가 명확함." },
                            { type: "fix", text: "도입부 TTS 제거. 이한 선수가 <span class='text-indigo-400 font-bold'>우는 장면</span>을 맨 앞으로 배치할 것." }
                        ],
                        insight: "쇼츠는 미니멀(1분 미만)이 원칙입니다. 1분 7초는 너무 깁니다."
                    }
                ]
            },
            {
                id: "humor_behind",
                title: "3. 유머 & 비하인드 스토리",
                subtitle: "자막 연출과 '날먹' 전략",
                cards: [
                    {
                        title: "자막 디테일 (유머)",
                        icon: "Type",
                        color: "yellow",
                        items: [
                            "위치 선정: 자막이 핵심 장면(얼굴 표정 등)을 가리면 안 됨. <span class='text-yellow-400 font-bold'>눈 높이(뇌 쪽)</span>나 하단으로 이동.",
                            "템포 조절: 웃긴 포인트에서 글자가 너무 빨리 지나가면 재미가 반감됨.",
                            "얼빡 주의: 과도한 얼굴 확대(얼빡)는 전체 흐름을 방해함. 상황이 한눈에 보이게 편집할 것."
                        ]
                    },
                    {
                        title: "비하인드 썰 (날먹)",
                        icon: "Music",
                        color: "purple",
                        items: [
                            "날먹(Easy) 콘텐츠: 비하인드 썰(정인, 이적 등)은 영상 소스가 주제와 상관없어도 됨. (제작 난이도 하)",
                            "소재 확장: '원곡보다 잘 부른 커버', '리메이크 역주행' 등 SNS에 소재 무궁무진함.",
                            "힐링썰 형식: 주제와 무관한 배경(드라이브 등) 깔고 스토리에만 집중시키는 방식."
                        ]
                    }
                ]
            },
            {
                id: "fantube_incident",
                title: "4. 팬튜브 & 사건사고",
                subtitle: "성공 공식과 힘 빼기",
                cards: [
                    {
                        title: "팬튜브 성공 공식",
                        icon: "Star",
                        color: "pink",
                        items: [
                            "와우 포인트 공식: 예쁘고 잘생긴 연예인의 <span class='text-pink-400 font-bold'>귀엽거나 웃긴 장면</span>은 팬이 아니어도 봅니다.",
                            "재가공의 힘: 원작이 4.6만 뷰라도, 구간 편집(구다리 변경) 잘하면 1,000만 뷰 가능.",
                            "아이돌 팁: 무조건 <span class='text-white font-bold'>'귀염뽀짝'</span>하게. (자막, 필터, 효과음 무장)"
                        ]
                    },
                    {
                        title: "사건사고 & 쇼핑 경합",
                        icon: "Siren",
                        color: "red",
                        items: [
                            "힘 빼기의 미학: 화려한 편집 불필요. <span class='text-red-400 font-bold'>메시지(직관성)</span>만 보이면 됨. (예: 경찰 전기충격기)",
                            "쇼핑 경합: '쇼핑 일왕'들의 경쟁(틴트 등)이 치열함. 레드오션(최신)보다 <span class='text-white font-bold'>잊혀진 고점 콘텐츠</span>(블루오션)를 노리는 전략 추천."
                        ]
                    }
                ]
            }
        ]
    };

    window.Contents.momcare_week3_part2 = () => {
        const data = momcareWeek3FeedbackPart2Data;

        return html`
            <div className="space-y-48 pb-60">
                 <!-- Header -->
                <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>
                     <${Badge} color="purple">${data.meta.week}<//>
                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-2xl lg:text-3xl text-zinc-200 max-w-5xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                ${data.sections.map(s => html`
                    <${Section} title=${s.title} subtitle=${s.subtitle}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            ${s.cards.map(c => html`
                                <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                    ${c.items ? html`
                                        <ul className="space-y-4 text-xl text-zinc-300">
                                            ${c.items.map(item => html`
                                                <li className="flex items-start gap-3">
                                                    <span className=${`text-${c.color}-400 mt-1.5 shrink-0`}>●</span>
                                                    <span dangerouslySetInnerHTML=${{ __html: item }}></span>
                                                </li>
                                            `)}
                                        </ul>
                                    ` : ''}
                                    ${c.feedback ? html`
                                        <div className="space-y-4">
                                            ${c.feedback.map(f => html`
                                                <div className="flex items-start gap-3">
                                                    <span className=${`shrink-0 px-2 py-1 rounded text-xs font-black uppercase mt-1 ${f.type === 'good' ? 'bg-green-900/50 text-green-400 border border-green-500/30' : 'bg-red-900/50 text-red-400 border border-red-500/30'}`}>${f.type.toUpperCase()}</span>
                                                    <p className="text-zinc-200 text-lg leading-relaxed" dangerouslySetInnerHTML=${{ __html: f.text }}></p>
                                                </div>
                                            `)}
                                        </div>
                                    ` : ''}
                                <//>
                            `)}
                        </div>
                    <//>
                `)}
            </div>
        `;
    };

    // --- Momcare Week 3 Feedback Part 3 Data ---
    const momcareWeek3FeedbackPart3Data = {
        meta: {
            week: "MOMCARE WEEK 3 - FEEDBACK 3",
            title: "성공하는 채널의 1% 디테일",
            subtitle: "양념(재가공)과 <span class='text-green-400'>시스템화</span>의 완성.<br/>사족을 빼고 <span class='text-white font-bold'>메시지</span>로 승부하라.",
            keywords: ["시스템화", "사족 제거", "양념 공식", "영드자", "지식형 후킹"]
        },
        sections: [
            {
                id: "drama_movie",
                title: "1. 드라마/유머 & 영드자",
                subtitle: "(몰입도와 재각색의 정석)",
                cards: [
                    {
                        title: "유머: 남친의 어리광",
                        icon: "Smile",
                        color: "yellow",
                        feedback: [
                            { type: "good", text: "정수리 냄새, 헬스장 이모티콘 등 멘트와 디테일을 원작보다 더 재미있게 양념함." },
                            { type: "good", text: "원작 소스 외에 다른 클립(축구공, 아령 등)을 섞어 일치율을 낮추고 재미를 극대화." },
                            { type: "insight", text: "첫 영상에서의 '과도한 열정(사족)'은 독입니다. 시청자가 보기 편안한 것만 남기세요." }
                        ]
                    },
                    {
                        title: "영드자: 며느리의 상처",
                        icon: "Film",
                        color: "purple",
                        feedback: [
                            { type: "good", text: "<span class='text-purple-400 font-bold'>구달(구간 나누기)이 완벽함.</span> 시어머니의 감정선을 위해 '며느리의 폭로' 장면을 추가한 재각색이 압권." },
                            { type: "insight", text: "라마 채널처럼 남들이 안 쓰는 소재(빈틈)를 공략하세요. 어제 먹은 치킨은 오늘 맛없습니다." }
                        ]
                    },
                    {
                        title: "영드자: 추격자 (대결)",
                        icon: "Video",
                        color: "zinc",
                        feedback: [
                            { type: "fix", text: "템포가 루즈함. 긴박한 대결 상황은 <span class='text-white font-bold'>템포를 올려야</span> 몰입됨." },
                            { type: "fix", text: "인트로의 사투리 비하 멘트('김일성이네') 등 부적절한 드립 절대 금지." },
                            { type: "fix", text: "TTS가 완전한 문장으로 다 나오면 몰입도가 깨짐. 중간중간 툭툭 칠 것." }
                        ]
                    }
                ]
            },
            {
                id: "knowledge_curiosity",
                title: "2. 지식 & 호기심 (Curiosity)",
                subtitle: "(사족을 빼고 간결하게)",
                cards: [
                    {
                        title: "지식: 양초 얼음",
                        icon: "Thermometer",
                        color: "blue",
                        feedback: [
                            { type: "good", text: "후킹 포인트와 제목 흐름이 좋음. 위기감 조성 탁월." },
                            { type: "fix", text: "영상이 끝나고 의견(사족)을 붙이지 말 것. <span class='text-red-400'>교장 선생님 훈화 말씀</span>처럼 느껴져 이탈 발생." }
                        ]
                    },
                    {
                        title: "지식: 드릴 사탕 실험",
                        icon: "Zap",
                        color: "orange",
                        feedback: [
                            { type: "good", text: "제목('문과생이 울어버린 이유')으로 관점을 기가 막히게 바꿈." },
                            { type: "fix", text: "어려운 용어('캐러멜화', '원심력')를 '실리콘처럼', '젤라틴처럼' 등 <span class='text-orange-400 font-bold'>직관적 단어</span>로 바꿀 것." }
                        ]
                    },
                    {
                        title: "시사: 번식 노예 타파스카",
                        icon: "Anchor",
                        color: "red",
                        feedback: [
                            { type: "good", text: "자녀 수(250명) 내용을 빼고 '비극적 삶(메시지)'에 집중. 28초 미니멀 편집 훌륭." },
                            { type: "insight", text: "시사/지식은 <span class='text-white font-bold'>템포가 너무 빠르면 안 됨</span>. 메시지를 음미할 시간을 줘야 함." }
                        ]
                    }
                ]
            },
            {
                id: "celeb_sports",
                title: "3. 연예인 & 스포츠 & 예능",
                subtitle: "(TTS 톤과 템포 조절)",
                cards: [
                    {
                        title: "연예인: 빅뱅 대성",
                        icon: "Mic",
                        color: "pink",
                        feedback: [
                            { type: "fix", text: "재밌고 찰진 내용에 진지한(다큐) 아나운서 톤 TTS는 최악. <span class='text-pink-400 font-bold'>창수/해리</span> 같은 캐릭터 목소리 쓸 것." },
                            { type: "good", text: "출처 표기 루틴(우등생 스멜) 훌륭함." }
                        ]
                    },
                    {
                        title: "스포츠: 타이거 우즈",
                        icon: "Activity",
                        color: "green",
                        feedback: [
                            { type: "fix", text: "<span class='text-red-400 font-bold'>템포 조절 실패.</span> 자막이 너무 빨라 시청자가 읽을 수가 없음." },
                            { type: "insight", text: "소제목 제안: '폼은 일시적이나 클래스는 영원하다', '신도 실수를 한다' 등 명언 활용." }
                        ]
                    },
                    {
                        title: "예능: 정승재 강사",
                        icon: "Smile",
                        color: "teal",
                        feedback: [
                            { type: "good", text: "소제목에 '큰 한 개(크)'를 붙여 차별화 시도." },
                            { type: "fix", text: "인트로 할머니 TTS가 너무 김. <span class='text-teal-400'>1.2배속</span>으로 짧고 강하게 쳐야 함." }
                        ]
                    },
                    {
                        title: "명언: 이효리",
                        icon: "Star",
                        color: "indigo",
                        feedback: [
                            { type: "fix", text: "이효리 명언집인가, <span class='text-indigo-400 font-bold'>창수(TTS) 명언집</span>인가? TTS 멘트를 제발 줄일 것." },
                            { type: "insight", text: "명언만 나열하지 말고, 춤/예능 장면을 교차 편집(스위치)하여 지루함 탈피." }
                        ]
                    }
                ]
            },
            {
                id: "final_system",
                title: "4. 시스템화 & 마인드셋",
                subtitle: "(Next Level)",
                cards: [
                    {
                        title: "학습 루틴 (족보 만들기)",
                        icon: "BookOpen",
                        color: "blue",
                        items: [
                            "복습 및 요약: 평일에는 1~2강 반복 시청, 주말에는 반드시 <span class='text-blue-400 font-bold'>나만의 족보(요약본)</span>를 만드세요.",
                            "조급함 금지: 초심자가 첫 술에 배부를 수 없습니다. 속도가 느린 것은 당연합니다.",
                            "채널 1개 금지: 채널 한 개에 목매지 말고, 각자의 페이스에 맞춰 계속 전진하세요."
                        ]
                    },
                    {
                        title: "시스템화 & 스노우볼",
                        icon: "Layers",
                        color: "green",
                        items: [
                            "단계별 로드맵: [에셋 확보] -> [대본 루틴] -> [시스템(위임/확장)].",
                            "스노우볼 효과: 기존 채널 수익을 재투자하면 수익이 순식간에 불어납니다.",
                            "성공 공식: <span class='text-white font-bold'>메시지(댓글) + 양념(대본) - 사족(욕심) = 고조회수.</span>"
                        ]
                    }
                ]
            }
        ]
    };

    window.Contents.momcare_week3_part3 = () => {
        const data = momcareWeek3FeedbackPart3Data;

        return html`
            <div className="space-y-48 pb-60">
                 <!-- Header -->
                <div className="text-center space-y-12 py-32 animate-fade-in relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[100px] -z-10"></div>
                     <${Badge} color="red">${data.meta.week}<//>
                    <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-none text-white mb-8 drop-shadow-2xl" dangerouslySetInnerHTML=${{ __html: data.meta.title }}></h1>
                    <p className="text-2xl lg:text-3xl text-zinc-200 max-w-5xl mx-auto leading-normal font-bold" dangerouslySetInnerHTML=${{ __html: data.meta.subtitle }}></p>
                </div>

                ${data.sections.map(s => html`
                    <${Section} title=${s.title} subtitle=${s.subtitle}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            ${s.cards.map(c => html`
                                <${Card} title=${c.title} icon=${c.icon} color=${c.color}>
                                    ${c.items ? html`
                                        <ul className="space-y-4 text-xl text-zinc-300">
                                            ${c.items.map(item => html`
                                                <li className="flex items-start gap-3">
                                                    <span className=${`text-${c.color}-400 mt-1.5 shrink-0`}>●</span>
                                                    <span dangerouslySetInnerHTML=${{ __html: item }}></span>
                                                </li>
                                            `)}
                                        </ul>
                                    ` : ''}
                                    ${c.feedback ? html`
                                        <div className="space-y-4">
                                            ${c.feedback.map(f => html`
                                                <div className="flex items-start gap-3">
                                                    <span className=${`shrink-0 px-2 py-1 rounded text-xs font-black uppercase mt-1 ${f.type === 'good' ? 'bg-green-900/50 text-green-400 border border-green-500/30' : f.type === 'insight' ? 'bg-blue-900/50 text-blue-400 border border-blue-500/30' : 'bg-red-900/50 text-red-400 border border-red-500/30'}`}>${f.type.toUpperCase()}</span>
                                                    <p className="text-zinc-200 text-lg leading-relaxed" dangerouslySetInnerHTML=${{ __html: f.text }}></p>
                                                </div>
                                            `)}
                                        </div>
                                    ` : ''}
                                <//>
                            `)}
                        </div>
                    <//>
                `)}
            </div>
        `;
    };

    // Expose Data for Search (Full-Text Search Support)
    window.LectureData = {
        lecture1_part1: lecture1Part1Data, // Week 1 Part 1
        lecture1_part2: lecture1Part2Data, // Week 1 Part 2
        lecture1_part3: lecture1Part3Data, // Week 1 Part 3
        lecture2_part1: lecture2Part1Data, // Week 2 Part 1
        lecture2_part2: lecture2Part2Data, // Week 2 Part 2
        lecture3_part1: lecture3Part1Data, // Week 3 Part 1
        lecture3_part2: lecture3Part2Data, // Week 3 Part 2
        lecture3_part3: lecture3Part3Data,  // Week 3 Part 3
        momcare_lecture1_part1: momcareLecture1Part1Data,
        momcare_lecture1_part2: momcareLecture1Part2Data,
        momcare_week2_part1: momcareWeek2FeedbackPart1Data,
        momcare_week2_part2: momcareWeek2FeedbackPart2Data,
        momcare_week3_part1: momcareWeek3FeedbackPart1Data,
        momcare_week3_part2: momcareWeek3FeedbackPart2Data,
        momcare_week3_part3: momcareWeek3FeedbackPart3Data
    };
})();
