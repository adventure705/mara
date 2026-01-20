// --- js/layout.js ---
(function () {
   const getHtml = () => window.htm.bind(window.React.createElement);

   window.Layout = ({ children, currentId, onChange }) => {
      const html = getHtml();
      const { useState, useMemo, useRef, useEffect } = window.React;
      const LucideIcon = window.LucideIcon;
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      const [searchTerm, setSearchTerm] = useState('');
      const [expandedSections, setExpandedSections] = useState(['week1']); // 기본 펼침
      const [showTopBtn, setShowTopBtn] = useState(false);
      const mainRef = useRef(null);

      // 페이지 변경 시 스크롤 초기화
      useEffect(() => {
         if (mainRef.current) {
            mainRef.current.scrollTo(0, 0);
         }
      }, [currentId]);

      // 스크롤 감지
      const handleScroll = () => {
         if (mainRef.current && mainRef.current.scrollTop > 300) {
            setShowTopBtn(true);
         } else {
            setShowTopBtn(false);
         }
      };

      const scrollToTop = () => {
         if (mainRef.current) {
            mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
         }
      };

      // Deep Search Helper
      const searchContent = (data, term) => {
         if (!data) return false;
         if (typeof data === 'string') {
            return data.toLowerCase().includes(term);
         }
         if (Array.isArray(data)) {
            return data.some(item => searchContent(item, term));
         }
         if (typeof data === 'object') {
            return Object.values(data).some(value => searchContent(value, term));
         }
         return false;
      };

      // Full-Text Search Filtering
      const filteredResults = useMemo(() => {
         if (!searchTerm) return [];
         const results = [];
         const term = searchTerm.toLowerCase();

         window.seriesData.forEach(section => {
            section.items.forEach(item => {
               const matchTitle = item.title.toLowerCase().includes(term);
               const matchKeywords = item.keywords && item.keywords.toLowerCase().includes(term);

               // Search within the detailed content data if available
               const contentData = window.LectureData && window.LectureData[item.id];
               const matchContent = contentData ? searchContent(contentData, term) : false;

               if (matchTitle || matchKeywords || matchContent) {
                  results.push({
                     ...item,
                     sectionTitle: section.title,
                     matchType: matchContent ? 'content' : (matchTitle ? 'title' : 'keyword')
                  });
               }
            });
         });
         return results;
      }, [searchTerm]);

      return html`
    <div className="flex h-screen bg-black text-zinc-100 overflow-hidden font-sans">
      <!-- Mobile Header -->
      <header className="lg:hidden fixed top-0 w-full h-16 bg-zinc-900/90 flex items-center justify-between px-6 z-50 border-b border-zinc-800">
         <h1 className="font-black text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">마라하기 쇼츠학개론</h1>
         <button onClick=${() => setIsSidebarOpen(!isSidebarOpen)}><${LucideIcon} name="Menu" /></button>
      </header>

      <!-- Sidebar -->
      <aside className=${`fixed lg:relative z-[60] w-80 bg-zinc-900 border-r border-zinc-800 flex flex-col transition-transform duration-300 top-16 lg:top-0 left-0 bottom-0 lg:bottom-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
         <!-- Search Input -->
         <div className="p-6 border-b border-zinc-800 sticky top-0 bg-zinc-900 z-10">
            <h1 className="hidden lg:block font-black text-2xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight">마라하기<br/>쇼츠학개론 1기</h1>
            <div className="relative">
               <input type="text" placeholder="강의 내용 검색..." value=${searchTerm} onChange=${e => setSearchTerm(e.target.value)} 
                      className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder-zinc-600" />
               <${LucideIcon} name="Search" size=${16} className="absolute left-3 top-3.5 text-zinc-500" />
            </div>
         </div>

         <!-- Expand/Collapse All Buttons (Only show when NOT searching) -->
         ${!searchTerm && html`
            <div className="px-6 py-4 flex gap-2 border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-sm sticky top-[138px] z-10">
               <button 
                   onClick=${() => setExpandedSections(window.seriesData.map(s => s.id))}
                   className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-300 transition-colors flex items-center justify-center gap-1 border border-zinc-700 hover:border-zinc-600"
               >
                   <${LucideIcon} name="ChevronsDown" size=${12} />
                   모두 펼치기
               </button>
               <button 
                   onClick=${() => setExpandedSections([])}
                   className="flex-1 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-300 transition-colors flex items-center justify-center gap-1 border border-zinc-700 hover:border-zinc-600"
               >
                   <${LucideIcon} name="ChevronsUp" size=${12} />
                   모두 접기
               </button>
            </div>
         `}

         <!-- Navigation Tree / Search Results -->
         <nav className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
            ${searchTerm
            ? html`
                    <!-- Search Results -->
                     <ul className="space-y-2">
                         ${filteredResults.length === 0 ? html`
                            <li className="p-8 text-center text-zinc-500 text-sm">검색 결과가 없습니다.</li>
                         ` : filteredResults.map(item => html`
                            <li key=${item.id}>
                                <button onClick=${() => onChange(item.id)} className=${`w-full text-left p-4 rounded-xl text-sm transition-all border ${currentId === item.id ? 'bg-blue-500/10 border-blue-500/30' : 'bg-zinc-800/30 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700'}`}>
                                    <span className="block text-xs font-bold text-blue-400 mb-1 line-clamp-1">${item.sectionTitle}</span>
                                    <span className=${`block font-bold mb-1 ${currentId === item.id ? 'text-blue-100' : 'text-zinc-200'}`}>${item.title.split(': ')[1] || item.title}</span>
                                    ${item.keywords && html`
                                        <span className="text-xs text-zinc-500 block truncate">Reference: ${item.keywords}</span>
                                    `}
                                    ${item.matchType === 'content' && html`
                                        <span className="text-[10px] text-green-400 bg-green-900/30 px-2 py-0.5 rounded border border-green-500/30 inline-block mt-1">본문 포함</span>
                                    `}
                                </button>
                            </li>
                         `)}
                     </ul>
                  `
            : html`
                    <!-- Default Navigation Tree -->
                    ${Object.entries(window.seriesData.reduce((acc, item) => {
               const category = item.category || '기타';
               if (!acc[category]) acc[category] = [];
               acc[category].push(item);
               return acc;
            }, {})).map(([category, sections]) => html`
                        <div key=${category}>
                            <!-- Category Header -->
                            <h3 className="px-3 mb-2 text-xs font-black text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                ${category}
                            </h3>
                            
                            <div className="space-y-2">
                                ${sections.map(section => html`
                                   <div key=${section.id}>
                                      <button onClick=${() => setExpandedSections(prev => prev.includes(section.id) ? prev.filter(i => i !== section.id) : [...prev, section.id])} 
                                              className="w-full flex justify-between items-center p-3 rounded-xl hover:bg-zinc-800/50 transition-colors text-sm font-bold border border-transparent hover:border-zinc-700 group">
                                         <span className="flex items-center gap-3">
                                            <${LucideIcon} name="Folder" size=${16} className=${`text-blue-400 group-hover:text-blue-300 transition-colors shrink-0`} />
                                            <span className="text-zinc-300 group-hover:text-zinc-100 text-sm font-bold truncate">${section.title}</span>
                                         </span>
                                         <${LucideIcon} name="ChevronDown" size=${14} className=${`text-zinc-500 transition-transform duration-200 ${expandedSections.includes(section.id) ? 'rotate-180 text-zinc-300' : ''}`} />
                                      </button>
                                      ${expandedSections.includes(section.id) && html`
                                         <div className="ml-4 border-l border-zinc-800 pl-3 mt-1 space-y-1">
                                            ${section.items.map(item => html`
                                               <button onClick=${() => onChange(item.id)} className=${`w-full text-left p-2.5 rounded-lg text-sm flex items-center gap-3 transition-all ${currentId === item.id ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20 font-bold shadow-lg shadow-blue-900/20' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent'}`}>
                                                  <${LucideIcon} name=${item.icon || 'FileText'} size=${14} className=${currentId === item.id ? 'text-blue-400' : 'text-zinc-600'} />
                                                  <span className="truncate">${item.title.split(': ')[1] || item.title}</span>
                                               </button>
                                            `)}
                                         </div>
                                      `}
                                   </div>
                                `)}
                            </div>
                        </div>
                    `)}
                `
         }
         </nav>
         
         <div className="p-4 border-t border-zinc-800 text-center">
            <p className="text-xs text-zinc-500 font-medium">© 2026 Marahagi Shorts Class</p>
         </div>
      </aside>

      <!-- Main Content -->
      <main ref=${mainRef} onScroll=${handleScroll} className="flex-1 overflow-y-auto scroll-smooth relative bg-black pt-16 lg:pt-0">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 lg:py-20 animate-fade-in pb-32">
             ${children}
          </div>
          
          <!-- Scroll To Top Button -->
          <button 
              onClick=${scrollToTop}
              className=${`fixed bottom-10 right-10 w-16 h-16 bg-red-600 hover:bg-red-500 text-white rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center justify-center z-50 transition-all duration-500 hover:scale-110 active:scale-95 group ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
              aria-label="Scroll to top"
          >
              <${window.LucideIcon} name="ChevronUp" size=${40} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
      </main>
    </div>
    `;
   };
})();
