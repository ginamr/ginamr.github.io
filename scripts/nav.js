document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const isHome = path.endsWith('/') || path.endsWith('/index.html');
    const basePath = isHome ? '' : '../';
    const pagesPath = isHome ? 'pages/' : '';
    const assetsPath = isHome ? 'assets/' : '../assets/';
    const navHTML = `
        <nav>
            <div class="nav-shell">
                <ul>
                    <li id="logo">
                        <a href="${basePath}index.html">
                            <img class="icon" src="${assetsPath}gr.svg" alt="GR" style="float: right;">
                        </a>
                    </li>
                    <li class="nav-headshot">
                        <img src="${assetsPath}headshot.jpg" alt="Gina Marie Robinson headshot">
                    </li>
                    <li class="nav-social">
                        <a href="https://www.linkedin.com/in/robinsongina" target="_blank" rel="noopener noreferrer">
                            <img class="icon" src="${assetsPath}linkedin.png" alt="LinkedIn">
                        </a>
                    </li>
                    <li class="nav-social">
                        <a href="https://github.com/ginamr" target="_blank" rel="noopener noreferrer">
                            <img class="icon" src="${assetsPath}github.png" alt="Github">
                        </a>
                    </li>
                    <li class="nav-dropdown">
                        <span class="nav-dropdown-label" aria-haspopup="true" aria-expanded="false">Projects</span>
                        <ul class="dropdown-menu" aria-label="Projects">
                            <li><a href="${pagesPath}teams-ai.html">Teams AI</a></li>
                            <li><a href="${pagesPath}cosmos-db.html">Cosmos DB</a></li>
                            <li><a href="${pagesPath}MS2017.html">MS 2017</a></li>
                            <li><a href="${pagesPath}MS2016.html">MS 2016</a></li>
                            <li><a href="${pagesPath}fablix.html">Fablix</a></li>
                            <li><a href="${pagesPath}bailys-beads.html">Baily's Beads</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    `;
    const temp = document.createElement('div');
    temp.innerHTML = navHTML;
    document.body.insertAdjacentElement('afterbegin', temp.firstElementChild);
});