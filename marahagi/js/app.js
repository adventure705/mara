// --- js/app.js ---
document.addEventListener('DOMContentLoaded', () => {
    const html = window.htm.bind(window.React.createElement);
    const { useState, useEffect } = window.React;

    const App = () => {
        const [currentSectionId, setCurrentSectionId] = useState('lecture1_part1');

        // 컴포넌트 매핑 (js/contents.js에 정의됨)
        const ContentComponent = window.Contents[currentSectionId] || window.Contents['lecture1_part1'];

        const handleSectionChange = (id) => {
            setCurrentSectionId(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return html`
            <${window.Layout} currentId=${currentSectionId} onChange=${handleSectionChange}>
                <${ContentComponent} />
            <//>
        `;
    };

    const root = window.ReactDOM.createRoot(document.getElementById('root'));
    root.render(html`<${App} />`);
});
