document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <nav>
            <ul>
                <li id="logo">
                    <a href="index.html">
                        <img class="icon" src="Assets/gr.svg" alt="GR" style="float: right;">
                    </a>
                </li>
                <li><a href="teams-ai.html">Teams AI</a></li>
                <li><a href="cosmos-db.html">Cosmos DB</a></li>
                <li><a href="MS2017.html">MS 2017</a></li>
                <li><a href="MS2016.html">MS 2016</a></li>
                <li><a href="fablix.html">Fablix</a></li>
                <li><a href="bailys-beads.html">Baily's Beads</a></li>
            </ul>
        </nav>
    `;
    const temp = document.createElement('div');
    temp.innerHTML = navHTML;
    document.body.insertAdjacentElement('afterbegin', temp.firstElementChild);
});