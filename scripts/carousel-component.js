class ProjectsCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Create the shadow DOM structure with Bootstrap CSS scoped to it
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
            </style>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="css/carousel.css">
            <div id="projectsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="hover" data-bs-interval="5000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Teams AI"></button>
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="1" aria-label="Azure Cosmos DB"></button>
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="2" aria-label="Query Plan Analysis"></button>
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="3" aria-label="Data Analytics"></button>
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="4" aria-label="Fablix"></button>
                    <button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="5" aria-label="Baily's Beads"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="pages/teams-ai.html" class="project-container-link">
                            <div class="project-container">
                                <h3 class="project-title">Teams AI - Agentic AI Development @Microsoft</h3>
                                <div class="project-img">
                                    <img src="assets/Logos/copilot-logo-500.svg" alt="CoPilot Logo">
                                </div>
                                <div class="project-content">
                                    <div class="project-name">
                                        <h4>Project:</h4>
                                        <p>Teams Channel Agent & Personal CoPilot AI Experiences</p>
                                    </div>
                                    <div class="project-role">
                                        <h4>My Role:</h4>
                                        <p>Software Engineer II - AI Agent End to End Development (2024-Present)</p>
                                    </div>
                                    <div class="project-tools">
                                        <h4>Tools:</h4>
                                        <p>C# + TypeScript + KQL </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="carousel-item">
                        <a href="pages/cosmos-db.html" class="project-container-link">
                            <div class="project-container">
                                <h3 class="project-title">Azure Cosmos DB - Query Engine Development @Microsoft</h3>
                                <div class="project-img">
                                    <img src="assets/Logos/azure-cosmos-db.svg" alt="Azure Cosmos DB Logo">
                                </div>
                                <div class="project-content">
                                    <div class="project-name">
                                        <h4>Project:</h4>
                                        <p>Query Charge Model, System Functions, and Database Features</p>
                                    </div>
                                    <div class="project-role">
                                        <h4>My Role:</h4>
                                        <p>Software Engineer II - Database Query Engine Development (2018-2024)</p>
                                    </div>
                                    <div class="project-tools">
                                        <h4>Tools:</h4>
                                        <p>C# + C++ + KQL + SQL + JSON</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="carousel-item">
                        <a href="pages/MS2017.html" class="project-container-link">
                            <div class="project-container">
                                <h3 class="project-title">Dynamically Linked Library -  Automated Query Plan Analysis @Microsoft</h3>
                                <div class="project-img">
                                    <img src="assets/MS-ninjacat.png" alt="">
                                </div>
                                <div class="project-content">
                                    <div class="project-name">
                                        <h4>Project:</h4>
                                        <p>Automated Query Plan Analysis for Query Plan Troubleshooting</p>
                                    </div>
                                    <div class="project-role">
                                        <h4>My Role:</h4>
                                        <p>Developer University Internship Summer 2017</p>
                                    </div>
                                    <div class="project-tools">
                                        <h4>Tools:</h4>
                                        <p>C# + SQL Server Management Studio + CSHTML/ASP.NET </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="carousel-item">
                        <a href="pages/MS2016.html" class="project-container-link">
                            <div class="project-container">
                                <h3 class="project-title">Data Analytics @Microsoft</h3>
                                <div class="project-img">
                                    <img src="assets/MS-team2016.jpg" alt="">
                                </div>
                                <div class="project-content">
                                    <div class="project-name">
                                        <h4>Project:</h4>
                                        <p>Database Experimentation Assistant Graph Feature - Customer Query Workload Analysis</p>
                                    </div>
                                    <div class="project-role">
                                        <h4>My Role:</h4>
                                        <p>Developer/Program Manager Explorer Internship Summer 2016</p>
                                    </div>
                                    <div class="project-tools">
                                        <h4>Tools:</h4>
                                        <p>R Studio + C# + SQL + SQL Server</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="carousel-item">
                        <a href="pages/fablix.html" class="project-container-link">
                            <div class="project-container">
                                <h3 class="project-title">Full Stack ECommerce Web Site @UCI</h3>
                                <div class="project-img">
                                    <img src="assets/fablix.svg" alt="Fablix">
                                </div>
                                <div class="project-content">
                                    <div class="project-name">
                                        <h4>Project:</h4>
                                        <p>Fablix - A Full Stack ECommerce Website</p>
                                    </div>
                                    <div class="project-role">
                                        <h4>My Role:</h4>
                                        <p>Database Administrator (DBA), Website Developer, and Android App Developer</p>
                                    </div>
                                    <div class="project-tools">
                                        <h4>Tools:</h4>
                                        <p>MySQL Workbench + Command Line</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div class="carousel-item">
                        <a href="pages/bailys-beads.html" class="project-container-link">
                            <div class="project-container">
                                <h3 class="project-title">Video Game Vector Graphics @UCI</h3>
                                <div class="project-img">
                                    <img src="assets/BailysBeads/Baily's Beads Characters_whiteText.png" alt="Baily's Beads">
                                </div>
                                <div class="project-content">
                                    <div class="project-name">
                                        <h4>Project:</h4>
                                        <p>Baily's Beads - A Solar Eclipse 2D Video Game</p>
                                    </div>
                                    <div class="project-role">
                                        <h4>My Role:</h4>
                                        <p>Developer and Asset Creator</p>
                                    </div>
                                    <div class="project-tools">
                                        <h4>Tools:</h4>
                                        <p>Unity + Adobe (After Effects, Illustrator, and Premier Pro)</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        `;

        // Initialize Bootstrap carousel after shadow DOM is populated
        this.initCarousel();
    }

    initCarousel() {
        const carousel = this.shadowRoot.getElementById('projectsCarousel');
        if (!carousel) return;

        // Initialize Bootstrap carousel
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            pause: 'hover',
            ride: 'carousel'
        });

        // Custom carousel height adjustment code
        const carouselInner = this.shadowRoot.querySelector('.carousel-inner');

        // Convert pixels to em
        function pxToEm(px) {
            const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            return px / baseFontSize;
        }

        // Set carousel height to match active slide
        function setCarouselHeight() {
            const activeItem = carousel.querySelector('.carousel-item.active');
            if (activeItem) {
                const heightInEm = pxToEm(activeItem.offsetHeight);
                carouselInner.style.minHeight = heightInEm + 'em';
            }
        }

        // Update height after slide transition completes
        carousel.addEventListener('slid.bs.carousel', function() {
            setCarouselHeight();
        });

        // Set initial height
        setCarouselHeight();

        // Recalculate on window resize
        window.addEventListener('resize', setCarouselHeight);
    }
}

customElements.define('projects-carousel', ProjectsCarousel);
