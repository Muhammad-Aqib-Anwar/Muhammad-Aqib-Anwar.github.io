const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu(){
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
}

/* PUBLICATIONS — year rail
   The rail is built from the data-year on each .pub-card, so adding a
   publication to index.html is enough; the years and counts follow.
   Without JS every card stays visible, so the list degrades gracefully. */
const pubRail = document.querySelector('.pub-rail');
const pubPanel = document.querySelector('.pub-panel');

/* one ERG-like beat: flat baseline, a-wave dip, b-wave peak, return */
const wavePath = 'M0 30 H30 C36 30 38 39 44 39 C50 39 52 7 60 7 C68 7 70 34 77 31 C82 30 84 30 90 30 H120';

if (pubRail && pubPanel){
    buildYearRail();
}

function buildYearRail(){
    const cards = Array.from(pubPanel.querySelectorAll('.pub-card'));
    const years = Array.from(new Set(cards.map(card => card.dataset.year)))
        .sort((a, b) => Number(b) - Number(a));

    years.forEach(year => {
        const count = cards.filter(card => card.dataset.year === year).length;
        pubRail.appendChild(createYearButton(year, count));
    });

    pubPanel.classList.add('pub-filtered');
    showYear(years[0]);
}

function createYearButton(year, count){
    const btn = document.createElement('button');

    btn.type = 'button';
    btn.className = 'pub-year-btn';
    btn.dataset.year = year;
    btn.innerHTML =
        '<span class="pub-year-num">' + year + '</span>' +
        '<svg class="pub-wave" viewBox="0 0 120 44" preserveAspectRatio="none" aria-hidden="true">' +
            '<path class="pub-wave-path" vector-effect="non-scaling-stroke" d="' + wavePath + '"/>' +
            '<circle class="pub-wave-node" cx="60" cy="7" r="4.5" vector-effect="non-scaling-stroke"/>' +
        '</svg>' +
        '<span class="pub-year-count">' + count + (count === 1 ? ' paper' : ' papers') + '</span>';

    btn.addEventListener('click', () => showYear(year));

    return btn;
}

function showYear(year){
    pubRail.querySelectorAll('.pub-year-btn').forEach(btn => {
        const isActive = btn.dataset.year === year;

        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-pressed', isActive);
    });

    let shown = 0;

    pubPanel.querySelectorAll('.pub-card').forEach(card => {
        const isShown = card.dataset.year === year;

        card.classList.toggle('is-shown', isShown);

        if (isShown){
            card.style.animationDelay = (shown * 0.09) + 's';
            shown++;
        }
    });
}