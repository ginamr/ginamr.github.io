document.addEventListener('DOMContentLoaded', function() {
    const homeNavHTML = `
        <nav>
            <ul>
                <li id="logo">
                    <a href="index.html">
                        <img class="icon" src="../assets/gr.svg" alt="GR" style="float: right;">
                    </a>
                </li>
                <li><a href="pages/teams-ai.html">Teams AI</a></li>
                <li><a href="pages/cosmos-db.html">Cosmos DB</a></li>
                <li><a href="pages/MS2017.html">MS 2017</a></li>
                <li><a href="pages/MS2016.html">MS 2016</a></li>
                <li><a href="pages/fablix.html">Fablix</a></li>
                <li><a href="pages/bailys-beads.html">Baily's Beads</a></li>
            </ul>
        </nav>
    `;
    const temp = document.createElement('div');
    temp.innerHTML = homeNavHTML;
    document.body.insertAdjacentElement('afterbegin', temp.firstElementChild);
});