// --- js/contents_momcare_week3.js ---
// Momcare Week 3 Feedback Parts 1, 2, 3 Data & Rendering

// --- Momcare Week 3 Feedback Part 1 Data ---
const momcareWeek3FeedbackPart1Data = {
    meta: {
        week: "MOMCARE WEEK 3 - FEEDBACK 1",
        title: "기본기: 영상 기획은<br/>곧 메시지(Message)다",
        subtitle: "화려한 편집보다 강력한 것은 <span class='text-blue-400 font-bold'>명확한 메시지</span>와 <span class='text-white font-bold'>댓글 속의 정답</span>이다.",
        keywords: ["대본 루틴", "댓글 활용", "소제목 양념", "오버쿡 금지", "기본기"]
    },
    sections: [
        {
            id: "intro",
            title: "1. 콘텐츠 제작의 기본 원칙 (1~3강 복습)",
            subtitle: "(편집은 거들 뿐, 기획이 90%)",
            cards: [
                {
                    title: "Routine Check",
                    icon: "CheckCircle",
                    color: "green",
                    items: [
                        "기본기 집중: 차별화 전에 기본부터. 대본 작성 과정 익숙해지기.",
                        "<span class='text-green-400 font-bold'>댓글이 정답</span>: 고민하지 말고 댓글에서 아이디어 얻기. 기발한 단어/문장 차용.",
                        "자막 양념: 댓글 내용을 TTS/대본에 안 녹여도 자막으로 충분히 양념 가능.",
                        "기획의 힘: 재밌는 영상의 90%는 기획(시나리오, 스토리 몰이). 편집은 시청자가 보기 편할 정도면 충분."
                    ]
                },
                {
                    title: "Risk Management",
                    icon: "AlertTriangle",
                    color: "red",
                    items: [
                        "고위험군(SN) 분리: 공중파/해외 예능 등 위험 채널은 <span class='text-red-400 font-bold'>기기와 계정 완전 분리</span>.",
                        "관리: 2~3개씩 묶어 관리, 스트라이크 시 여분 SN으로 이동.",
                        "선 업로드 후 검수 절대 금지: 첫인상과 신뢰는 회복 불가. 비공개 업로드 검수 필수."
                    ]
                }
            ],
            routine_steps: [
                { label: "1. 와우 포인트", text: "가장 눈길 가는 장면 (울거나 웃는 장면, 1~3초). 현장음 살리기." },
                { label: "2. TTS 배치", text: "와우 포인트 **뒤에** 배치. 상황 인지될 정도로 툭툭 던지기 (장황 X)." },
                { label: "3. 소제목", text: "띠 배너 활용. 감동/궁금증 유발로 체류 시간 확보." },
                { label: "4. 길이/편집", text: "억지로 늘리지 말 것. 필요한 장면만 사용 (미니멀)." }
            ]
        },
        {
            id: "mindset",
            title: "2. 효율적 소재 선택 & 마인드셋",
            subtitle: "잘 아는 것에 배팅하라",
            cards: [
                {
                    title: "Selection Strategy",
                    icon: "MousePointer",
                    color: "blue",
                    items: [
                        "친숙함: 나에게 익숙한 분야 선택 (축구 vs 야구, 재미 vs 감동).",
                        "관심 모수: 유튜브는 소재 정하는 순간 모수가 정해짐 ('방구석 박사님'들의 심리 활용).",
                        "자신감: 내가 조금 더 자신 있는 것을 시작해야 변화가 생김."
                    ]
                },
                {
                    title: "System Routine",
                    icon: "Settings",
                    color: "purple",
                    items: [
                        "시간 단축: 소재 30분, 대본 1시간, 편집 1시간 -> 루틴화 필수.",
                        "물량 승부: 3시간 1개보다 <span class='text-purple-400 font-bold'>3시간 3개</span>가 확률 우위.",
                        "확장 전략: 국내에서 터진 건(A) 해외(B)에서도 터진다. 키워드 확장으로 해외 SN 결합."
                    ]
                }
            ]
        },
        {
            id: "cases_part1",
            title: "3. 실전 피드백 Case Study (Part 1)",
            subtitle: "영상 기획은 곧 메시지",
            cases: [
                {
                    title: "감동 (야시장 할아버지)",
                    icon: "Heart",
                    color: "pink",
                    before: "이틀 만든 곰돌이 인형 선물.",
                    student: {
                        good: "원작(34초)보다 짧게(29초) 잘 자름. BGM/구성 좋음.",
                        bad: "어미 반복('돼요, 돼요') 거슬림. 제목이 덜 감성적."
                    },
                    instructor: {
                        title: "감동의 결 맞추기",
                        points: [
                            "제목 피드백: '인형 하나가 가져다 준 기적', '작은 관심이 불러온 기적' (차분한 감동).",
                            "댓글 활용: '황금빛이다', '찡하다' 같은 감성 댓글 차용."
                        ]
                    }
                },
                {
                    title: "스포츠 (즐라탄/악마)",
                    icon: "Activity",
                    color: "orange",
                    before: "즐라탄의 자신만만한 모습.",
                    student: {
                        good: "야부리(스토리텔링) 훌륭. 몰입도 좋음.",
                        bad: "템포 너무 빠르고 편집 튐. 제목 단어 중복('악마의 도발'). 자막 줄바꿈 어색."
                    },
                    instructor: {
                        title: "시청자 편의성",
                        points: [
                            "제목 수정: '뛰는 악마 위에 나는 즐라탄', '즐라탄을 긁는 악마'.",
                            "자막: 한 문장은 한 줄에. 시청자가 보기 편한 편집이 최우선."
                        ]
                    }
                },
                {
                    title: "지식/유머 (금융 치료)",
                    icon: "Smile",
                    color: "yellow",
                    before: "병원 전시물 정보.",
                    student: {
                        good: "-",
                        bad: "메시지 불명확(개그? 차별?). 오버쿡(Overcook) 심함."
                    },
                    instructor: {
                        title: "오버쿡 금지 & 메시지",
                        points: [
                            "메시지: 기획은 '어떤 메시지를 줄 것인가'다. 댓글에 정답이 있음.",
                            "오버쿡 금지: 관점 비틀기(유머->시사) 금지. 원래 맛에 <span class='text-yellow-400 font-bold'>부사/형용사 양념</span>만 칠 것.",
                            "치킨 비유: 닭 튀기지 말고, 잘 튀겨진 후라이드(터진 영상)에 트러플(양념)만 얹어라."
                        ]
                    }
                },
                {
                    title: "국뽕 (아담 식당)",
                    icon: "ThumbsUp",
                    color: "blue",
                    before: "외국인 한식 뷔페 브이로그.",
                    student: {
                        good: "메시지 메이킹 완벽('친절함/서비스'). 졸업 수준. 자막/효과음 굿.",
                        bad: "없음."
                    },
                    instructor: {
                        title: "국뽕의 결",
                        points: [
                            "소제목: '한국인의 정', '낯선 외국에서 만난 엄마의 마음'.",
                            "7천원 풀코스 -> '한국에서만 맛볼 수 있는 7천원 풀코스' (국뽕 결 살리기)."
                        ]
                    }
                }
            ]
        }
    ]
};

// --- Momcare Week 3 Feedback Part 2 Data ---
const momcareWeek3FeedbackPart2Data = {
    meta: {
        week: "MOMCARE WEEK 3 - FEEDBACK 2",
        title: "쇼핑/라이프핵 &<br/>장르별 디테일",
        subtitle: "지식 카테고리의 넥스트 레벨: <span class='text-blue-400 font-bold'>쇼핑 접목</span>.<br/>감동, 팬튜브, 유머... 장르별 <span class='text-white font-bold'>양념 공식</span>.",
        keywords: ["라이프핵", "쇼핑 접목", "감동 후킹", "팬튜브", "유머 템포"]
    },
    sections: [
        {
            id: "part2_intro",
            title: "1. 라이프 핵 & 쇼핑 접목 전략",
            subtitle: "(허들을 넘어 수익으로)",
            cards: [
                {
                    title: "Shopping Integration",
                    icon: "ShoppingBag",
                    color: "pink",
                    items: [
                        "고점 확인: 지식/꿀팁 카테고리(청소, 다이소 등)는 생각보다 고점 높음.",
                        "수익 구조: 조회수 + <span class='text-pink-400 font-bold'>쇼핑(전환)</span>.",
                        "허들 파괴: 상품 판매는 설득의 허들이 높지만, '꿀팁'으로 문제 해결해주면 허들이 무너짐.",
                        "쿠팡 파트너스: 구독자 1만(랜덤) 시 태그 가능. 24시간 전체 구매액의 수수료(약 3~6.7%) 수익."
                    ]
                },
                {
                    title: "Source & Tips",
                    icon: "Layers",
                    color: "purple",
                    items: [
                        "소스 무한: 틱톡, 도인(Douyin), 인스타에 널림. 클립 교체 용이 -> 일치율 해결.",
                        "피드백: 단어 중복 피할 것(예: '히말라야', '한 캡' 반복 X)."
                    ]
                }
            ]
        },
        {
            id: "cases_part2",
            title: "2. 실전 피드백 Case Study (Part 2)",
            subtitle: "장르별 핀포인트 레슨",
            cases: [
                {
                    title: "감동 (은사님 재회)",
                    icon: "UserPlus",
                    color: "green",
                    before: "이한 선수와 은사님의 24년 만의 재회.",
                    student: {
                        good: "대본 작성 우수. 메시지 명확.",
                        bad: "도입부 후킹에 TTS 사용 (아쉬움)."
                    },
                    instructor: {
                        title: "시각적 후킹 & 집단지성",
                        points: [
                            "후킹: TTS 대신 <span class='text-white font-bold'>우는 장면(2초)</span> 먼저 배치.",
                            "댓글 활용: '인종차별 없이 품은 스승', '인생을 바꾼 어른' 등 집단지성 댓글을 제목/소제목에 반영."
                        ]
                    }
                },
                {
                    title: "유머/심리 (악어거북)",
                    icon: "Smile",
                    color: "yellow",
                    before: "악어거북 vs 물고기 심리전.",
                    student: {
                        good: "자막만으로 감성 잘 살림 (TTS X). 흐름 좋음.",
                        bad: "자막 위치가 메인 장면 가림/속도 빠름."
                    },
                    instructor: {
                        title: "직관성 확보",
                        points: [
                            "소제목: '심장 쫄깃한 밀당', '숨 막히는 눈치 게임'.",
                            "자막: 메인 화면 가리지 않게 하단 배치. 템포 조절."
                        ]
                    }
                },
                {
                    title: "비하인드 (가수 정인)",
                    icon: "Music",
                    color: "blue",
                    before: "원곡보다 잘 부른 노래 비하인드.",
                    student: {
                        good: "이적이 대신 부른 사연으로 각색 완벽. 힐링썰 형식.",
                        bad: "없음. (날먹 콘텐츠)."
                    },
                    instructor: {
                        title: "소재 확장성",
                        points: [
                            "날먹(Easy): 원작 스토리가 정답지. 단어만 바꾸면 됨.",
                            "소재: 리메이크 역주행 등 소재 무한. SNS에서 수집.",
                            "자신감: 내가 만들면 500만 뷰 찍는다는 마인드."
                        ]
                    }
                },
                {
                    title: "팬튜브 (르세라핌/사다리)",
                    icon: "Star",
                    color: "purple",
                    before: "크리스마스 의상 랜덤 뽑기.",
                    student: {
                        good: "원작보다 재밌음. 상황 설명으로 몰입도 UP. 대본 완벽.",
                        bad: "-"
                    },
                    instructor: {
                        title: "팬튜브 성공 공식",
                        points: [
                            "공식: 대중성 있는 연예인 + <span class='text-purple-400 font-bold'>와우 포인트(귀엽/웃김)</span>.",
                            "팁: 아이돌은 무조건 '귀염뽀짝'하게. 강아지 필터/자막 필수.",
                            "저작권: 공식 채널, 팬 영상은 비교적 안전. 데이터 믿고 우라까이."
                        ]
                    }
                },
                {
                    title: "유머 (당구)",
                    icon: "Target",
                    color: "red",
                    before: "당구 칠 때마다 실패/현타.",
                    student: {
                        good: "제목 완벽 ('사람 메달 테스트'). 필력 좋음.",
                        bad: "TTS 과다(실패 요인). 얼빡(확대) 너무 심해 흐름 안 보임."
                    },
                    instructor: {
                        title: "상황 설명의 간결함",
                        points: [
                            "유머 원칙: **직관성**. 한눈에 상황이 보여야 웃김.",
                            "TTS: 웃긴 영상일수록 TTS 빼라. 짧게 치고 자막으로만 툭툭."
                        ]
                    }
                },
                {
                    title: "사건/사고 (경찰 출동)",
                    icon: "Siren",
                    color: "gray",
                    before: "약물 사범 흉기 저항 -> 테이저건 제압.",
                    student: {
                        good: "임팩트 최고. 기승전결/와우 프레임 완벽. 제목 굿.",
                        bad: "-"
                    },
                    instructor: {
                        title: "힘 빼기의 기술",
                        points: [
                            "편집: 특별한 스킬 없이 힘 뺀 편집. 자막으로 직관성만 확보.",
                            "소재빨: 소재 잘 가져와서 가이드라인 순화 + 단어 변경 + 힘 뺀 편집 = 끝."
                        ]
                    }
                }
            ]
        }
    ]
};

// --- Momcare Week 3 Feedback Part 3 Data ---
const momcareWeek3FeedbackPart3Data = {
    meta: {
        week: "MOMCARE WEEK 3 - FEEDBACK 3",
        title: "실전 피드백 심화 &<br/>최종 루틴 정리",
        subtitle: "유머부터 지식, 감동까지.<br/>성공적인 쇼츠 제작을 위한 <span class='text-green-400 font-bold'>최종 점검</span>과 마인드셋.",
        keywords: ["일치율 삭제", "TTS 톤", "사족 제거", "족보 만들기", "시스템화"]
    },
    sections: [
        {
            id: "cases_part3",
            title: "1. 실전 피드백 Case Study (Part 3)",
            subtitle: "디테일이 차이를 만든다",
            cases: [
                {
                    title: "유머 (남친 어리광)",
                    icon: "Smile",
                    color: "yellow",
                    before: "남친 어리광 몰래 찍기.",
                    student: {
                        good: "정수리 냄새 멘트 등 완벽 재각색. 다른 클립 사용(일치율 해결). 첫 영상인데 훌륭.",
                        bad: "과도한 열정(사족) 주의."
                    },
                    instructor: {
                        title: "첫 영상의 기적",
                        points: [
                            "메시지: '몰카 반응'에 포커스.",
                            "채널 확장: 이 정도면 바로 채널 늘려도 됨.",
                            "조언: 보기에 편안한 것만 남기고 빼기."
                        ]
                    }
                },
                {
                    title: "영드자 (며느리 상처)",
                    icon: "Film",
                    color: "red",
                    before: "시어머니가 며느리 상처 발견.",
                    student: {
                        good: "구달(구간 나누기) 완벽. 격한 감정 장면 추가 재각색. 디테일 굿.",
                        bad: "창수 목소리가 딱딱함."
                    },
                    instructor: {
                        title: "소재의 희소성",
                        points: [
                            "창작: 남들이 안 쓰는 소재 빈틈 공략.",
                            "TTS: <span class='text-pink-400 font-bold'>귀염뽀짝 여자 목소리</span> 추천.",
                            "완벽한 표본: 연습용으로 다시 볼 것."
                        ]
                    }
                },
                {
                    title: "지식/호기심 (양초 얼음)",
                    icon: "HelpCircle",
                    color: "blue",
                    before: "위험한 양초 얼음 현상.",
                    student: {
                        good: "후킹/구성 좋음.",
                        bad: "길이가 아쉬움. 뒤에 사족(의견)이 붙음."
                    },
                    instructor: {
                        title: "사족 제거",
                        points: [
                            "끝맺음: 호기심 자극하고 딱 끝내야 함. 뒤에 의견 붙으면 훈화 말씀(이탈).",
                            "결: 호기심, 자연 현상 결로 맞추기."
                        ]
                    }
                },
                {
                    title: "연예/이슈 (빅뱅 대성)",
                    icon: "Mic",
                    color: "purple",
                    before: "일본 관객 비난에 한국어 대응.",
                    student: {
                        good: "길이(46초)/편집 좋음. 출처 표기 루틴(우등생).",
                        bad: "TTS가 너무 길고 진지함(다큐 톤)."
                    },
                    instructor: {
                        title: "TTS 톤 앤 매너",
                        points: [
                            "TTS: 재밌는 내용에 진지한 목소리 X. 창수/해리나 11랩스 사용.",
                            "툭툭 치기: TTS가 너무 길면 몰입 방해."
                        ]
                    }
                },
                {
                    title: "골프 (타이거 우즈)",
                    icon: "Activity",
                    color: "green",
                    before: "쌩크 후 파 세이브.",
                    student: {
                        good: "양념/임팩트 나쁘지 않음.",
                        bad: "템포가 너무 빠름. 자막 안 읽힘."
                    },
                    instructor: {
                        title: "시청자 배려",
                        points: [
                            "템포: 시청자가 자막 읽을 시간 줘야 함.",
                            "소제목: '신도 실수를 한다', '인간미' 등 메시지 기반 도출."
                        ]
                    }
                },
                {
                    title: "영드자 (루시퍼/폐암)",
                    icon: "Skull",
                    color: "gray",
                    before: "폐암 환자의 소원.",
                    student: {
                        good: "와우 포인트/대본 좋음.",
                        bad: "소재가 너무 많이 소비됨(사골)."
                    },
                    instructor: {
                        title: "관점의 확장",
                        points: [
                            "관점: '담배 회사 PPL' 등으로 비틀기.",
                            "습관: 소재 찾는 눈을 길러야 함. 어제 먹은 치킨은 맛없다."
                        ]
                    }
                },
                {
                    title: "해외 (모유 냉동고)",
                    icon: "Heart",
                    color: "pink",
                    before: "남편의 깜짝 선물.",
                    student: {
                        good: "제목/단어 변경 좋음.",
                        bad: "중기(54세) 톤 TTS 부적절. 자막 양념 부족."
                    },
                    instructor: {
                        title: "양념의 맛",
                        points: [
                            "TTS: 귀여운 여자 목소리 추천.",
                            "효과음: 원작 그대로 말고 유머러스하게 변경.",
                            "재각색: 이 정도만 바꿔도 조회수 나옴. 양념만 더 칠 것."
                        ]
                    }
                },
                {
                    title: "지식 (번식 노예)",
                    icon: "BookOpen",
                    color: "orange",
                    before: "타파스카의 피지컬.",
                    student: {
                        good: "짧게(28초) 잘 만듦. 메시지 집중.",
                        bad: "-"
                    },
                    instructor: {
                        title: "창작 채널 벤치마킹",
                        points: [
                            "벤치마킹: '시금치맨' 같은 창작 지식 채널 빨대 꽂기.",
                            "와우 포인트: 초반에 '250명 자녀' 언급으로 후킹."
                        ]
                    }
                },
                {
                    title: "명언 (이효리)",
                    icon: "Quote",
                    color: "purple",
                    before: "지친 이들에게 주는 명언.",
                    student: {
                        good: "인트로 삽입 좋음.",
                        bad: "창수(TTS) 명언집 됨. 영상 반복됨."
                    },
                    instructor: {
                        title: "일치율 회피 스킬",
                        points: [
                            "스위치: 춤, 연기, 예능 등 다른 장면 계속 교차 편집.",
                            "음성 변조: 살짝 넣어서 차별화.",
                            "TTS: 제발 짧게. 주인공은 이효리."
                        ]
                    }
                }
            ]
        },
        {
            id: "final_summary",
            title: "2. 최종 정리 & 마인드셋",
            subtitle: "결국은 루틴과 시스템",
            cards: [
                {
                    title: "Learning Routine",
                    icon: "Book",
                    color: "blue",
                    items: [
                        "조급함 버리기: 초심자는 느린 게 당연.",
                        "족보 만들기: 1~2강 반복 시청 -> 주말 요약 정리 -> <span class='text-blue-400 font-bold'>남만의 족보</span>.",
                        "시작: 족보 완성 후 컨셉 잡고 시작해도 안 늦음."
                    ]
                },
                {
                    title: "Core Formula",
                    icon: "Key",
                    color: "green",
                    items: [
                        "메시지: 벤치 영상보다 명확하고 맛있게.",
                        "댓글 = 정답: 댓글 기조로 제목/소제목/대본 작성.",
                        "오버쿡 금지: 관점 비틀지 말고, 있는 맛에 강조만.",
                        "스노우볼: 수익 재투자 -> 시스템화 -> 자산 증식."
                    ]
                }
            ]
        }
    ]
};

// --- Rendering Functions ---

window.Contents.momcare_week3_part1 = () => {
    const data = momcareWeek3FeedbackPart1Data;
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                            ${s.routine_steps.map(r => html`
                                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 text-center">
                                    <strong className="block text-blue-400 text-lg uppercase mb-2">${r.label}</strong>
                                    <p className="text-zinc-200 font-medium" dangerouslySetInnerHTML=${{ __html: r.text }}></p>
                                </div>
                            `)}
                        </div>
                    ` : ''}

                    ${s.cases ? html`
                        <div className="space-y-12 mt-12">
                            ${s.cases.map(c => renderCase(c))}
                        </div>
                    ` : ''}
                <//>
            `)}
        </div>
    `;
};

window.Contents.momcare_week3_part2 = () => {
    const data = momcareWeek3FeedbackPart2Data;
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
                        <div className="space-y-12 mt-12">
                            ${s.cases.map(c => renderCase(c))}
                        </div>
                    ` : ''}
                <//>
            `)}
        </div>
    `;
};

window.Contents.momcare_week3_part3 = () => {
    const data = momcareWeek3FeedbackPart3Data;
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
                <div className="p-6 rounded-3xl bg-purple-900/10 border border-purple-500/20">
                    <strong className="block text-purple-400 mb-4 text-xl flex items-center gap-2"><${LucideIcon} name="Zap" size=${20}/> Instructor Insight</strong>
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] -z-10"></div>
                <${Badge} color="purple">${data.meta.week}<//>
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
                        <div className="space-y-12 mt-12">
                            ${s.cases.map(c => renderCase(c))}
                        </div>
                    ` : ''}
                <//>
            `)}
        </div>
    `;
};
