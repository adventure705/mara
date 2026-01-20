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
                        { label: "에셋 = 돈통(쌀):", text: "곶간에 쌀이 많아야 밥을 짓는다. (결에 맞으면 조회수 낮아도 내 것)" },
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

    // Expose Data for Search (Full-Text Search Support)
    window.LectureData = {
        lecture1_part1: lecture1Part1Data, // Week 1 Part 1
        lecture1_part2: lecture1Part2Data, // Week 1 Part 2
        lecture1_part3: lecture1Part3Data, // Week 1 Part 3
        lecture2_part1: lecture2Part1Data, // Week 2 Part 1
        lecture2_part2: lecture2Part2Data, // Week 2 Part 2
        lecture3_part1: lecture3Part1Data, // Week 3 Part 1
        lecture3_part2: lecture3Part2Data, // Week 3 Part 2
        lecture3_part3: lecture3Part3Data  // Week 3 Part 3
    };
})();

