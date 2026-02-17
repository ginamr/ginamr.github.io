document.addEventListener('DOMContentLoaded', function() {
    // Detect if we're in the pages folder or at root
    const isInPagesFolder = window.location.pathname.includes('/pages/');
    const pathPrefix = isInPagesFolder ? '../' : '';
    
    const navHTML = `
        <nav>
            <ul>
                <li id="logo">
                    <a href="${pathPrefix}index.html">
                        <img class="icon" src="${pathPrefix}assets/gr.svg" alt="GR" style="float: right;">
                    </a>
                </li>
                <li><a href="${pathPrefix}${isInPagesFolder ? '' : 'pages/'}teams-ai.html">Teams AI</a></li>
                <li><a href="${pathPrefix}${isInPagesFolder ? '' : 'pages/'}cosmos-db.html">Cosmos DB</a></li>
                <li><a href="${pathPrefix}${isInPagesFolder ? '' : 'pages/'}MS2017.html">MS 2017</a></li>
                <li><a href="${pathPrefix}${isInPagesFolder ? '' : 'pages/'}MS2016.html">MS 2016</a></li>
                <li><a href="${pathPrefix}${isInPagesFolder ? '' : 'pages/'}fablix.html">Fablix</a></li>
                <li><a href="${pathPrefix}${isInPagesFolder ? '' : 'pages/'}bailys-beads.html">Baily's Beads</a></li>
            </ul>
        </nav>
    `;
    const temp = document.createElement('div');
    temp.innerHTML = navHTML;
    document.body.insertAdjacentElement('afterbegin', temp.firstElementChild);
});