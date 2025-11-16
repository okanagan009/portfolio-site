const toSwitchTabs = () => {
    // ----- Раскладка карточек по меткам -----
    const allGrid = document.querySelector('#panel-all .projects__grid');
    const webGrid = document.querySelector('#panel-web .projects__grid');
    const appsGrid = document.querySelector('#panel-apps .projects__grid');

    if (allGrid && webGrid && appsGrid) {
        const cards = Array.from(allGrid.querySelectorAll('.project-card'));

        // очищаем целевые панели перед наполнением
        webGrid.innerHTML = '';
        appsGrid.innerHTML = '';

        const parseCats = (el) =>
            (el.getAttribute('data-category') || '')
                .toLowerCase()
                .split(/[,\s]+/) // запятая или пробел
                .filter(Boolean);

        cards.forEach(card => {
            const cats = new Set(parseCats(card));
            if (cats.has('web')) webGrid.appendChild(card.cloneNode(true));
            if (cats.has('apps') || cats.has('app') || cats.has('application')) {
                appsGrid.appendChild(card.cloneNode(true));
            }
        });
    }

    // ----- Переключение вкладок через .is-active + aria-selected -----
    const triggers = Array.from(document.querySelectorAll('.projects .tabs__trigger'));
    const panels = Array.from(document.querySelectorAll('.projects .tabs__panel'));

    function activateTab(target) {
        triggers.forEach(btn => {
            const on = btn.dataset.tabTarget === target;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-selected', String(on));
        });
        panels.forEach(panel => {
            const on = panel.dataset.tab === target;
            panel.classList.toggle('is-active', on);
        });
    }

    triggers.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.dataset.tabTarget));
    });
};

export default toSwitchTabs;

