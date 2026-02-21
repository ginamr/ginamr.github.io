document.addEventListener('DOMContentLoaded', function() {
    const homeNavHTML = `
        <nav>
            <ul>
                <li id="logo">
                    <a href="index.html">
                        <img class="icon" src="../assets/gr.svg" alt="GR" style="float: right;">
                    </a>
                </li>
                <li class="nav-headshot">
                    <img src="assets/headshot.jpg" alt="Gina Marie Robinson headshot">
                </li>
                <li class="nav-social">
                    <a href="https://www.linkedin.com/in/robinsongina" target="_blank" rel="noopener noreferrer">
                        <img class="icon" src="assets/linkedin.png" alt="LinkedIn">
                    </a>
                </li>
                <li class="nav-social">
                    <a href="https://github.com/ginamr" target="_blank" rel="noopener noreferrer">
                        <img class="icon" src="assets/github.png" alt="Github">
                    </a>
                </li>
                <li class="nav-dropdown">
                    <span class="nav-dropdown-label" aria-haspopup="true" aria-expanded="false">Projects</span>
                    <ul class="dropdown-menu" aria-label="Projects">
                        <li><a href="pages/teams-ai.html">Teams AI</a></li>
                        <li><a href="pages/cosmos-db.html">Cosmos DB</a></li>
                        <li><a href="pages/MS2017.html">MS 2017</a></li>
                        <li><a href="pages/MS2016.html">MS 2016</a></li>
                        <li><a href="pages/fablix.html">Fablix</a></li>
                        <li><a href="pages/bailys-beads.html">Baily's Beads</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    `;
    const temp = document.createElement('div');
    temp.innerHTML = homeNavHTML;
    document.body.insertAdjacentElement('afterbegin', temp.firstElementChild);
});