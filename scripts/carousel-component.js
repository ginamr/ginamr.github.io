class ProjectsCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        // Project data
        this.projects = [
            {
                title: 'Teams AI - Agentic AI Development @Microsoft',
                url: 'pages/teams-ai.html',
                image: 'assets/Logos/copilot-logo-500.svg',
                project: 'Teams Channel Agent & Personal CoPilot AI Experiences',
                role: 'Software Engineer II - AI Agent End to End Development (2024-Present)',
                tools: 'C# + TypeScript + KQL',
                label: 'Teams AI'
            },
            {
                title: 'Azure Cosmos DB - Query Engine Development @Microsoft',
                url: 'pages/cosmos-db.html',
                image: 'assets/Logos/azure-cosmos-db.svg',
                project: 'Query Charge Model, System Functions, and Database Features',
                role: 'Software Engineer II - Database Query Engine Development (2018-2024)',
                tools: 'C# + C++ + KQL + SQL + JSON',
                label: 'Azure Cosmos DB'
            },
            {
                title: 'Dynamically Linked Library - Automated Query Plan Analysis @Microsoft',
                url: 'pages/MS2017.html',
                image: 'assets/MS-ninjacat.png',
                project: 'Automated Query Plan Analysis for Query Plan Troubleshooting',
                role: 'Developer University Internship Summer 2017',
                tools: 'C# + SQL Server Management Studio + CSHTML/ASP.NET',
                label: 'Query Plan Analysis'
            },
            {
                title: 'Data Analytics @Microsoft',
                url: 'pages/MS2016.html',
                image: 'assets/MS-team2016.jpg',
                project: 'Database Experimentation Assistant Graph Feature - Customer Query Workload Analysis',
                role: 'Developer/Program Manager Explorer Internship Summer 2016',
                tools: 'R Studio + C# + SQL + SQL Server',
                label: 'Data Analytics'
            },
            {
                title: 'Full Stack ECommerce Web Site @UCI',
                url: 'pages/fablix.html',
                image: 'assets/fablix.svg',
                project: 'Fablix - A Full Stack ECommerce Website',
                role: 'Database Administrator (DBA), Website Developer, and Android App Developer',
                tools: 'MySQL Workbench + Command Line',
                label: 'Fablix'
            },
            {
                title: 'Video Game Vector Graphics @UCI',
                url: 'pages/bailys-beads.html',
                image: 'assets/BailysBeads/Baily\'s Beads Characters_whiteText.png',
                project: 'Baily\'s Beads - A Solar Eclipse 2D Video Game',
                role: 'Developer and Asset Creator',
                tools: 'Unity + Adobe (After Effects, Illustrator, and Premier Pro)',
                label: 'Baily\'s Beads'
            }
        ];
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = this.createTemplate();
        this.initCarousel();
    }

    createTemplate() {
        const indicators = this.projects.map((_, index) => 
            `<button type="button" data-bs-target="#projectsCarousel" data-bs-slide-to="${index}" 
                class="${index === 0 ? 'active' : ''}" 
                ${index === 0 ? 'aria-current="true"' : ''} 
                aria-label="${this.projects[index].label}"></button>`
        ).join('');

        const items = this.projects.map((project, index) => 
            `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                <a href="${project.url}" class="project-container-link">
                    <div class="project-container">
                        <h3 class="project-title">${project.title}</h3>
                        <div class="project-img">
                            <img src="${project.image}" alt="">
                        </div>
                        <div class="project-content">
                            <div class="project-name">
                                <h4>Project:</h4>
                                <p>${project.project}</p>
                            </div>
                            <div class="project-role">
                                <h4>My Role:</h4>
                                <p>${project.role}</p>
                            </div>
                            <div class="project-tools">
                                <h4>Tools:</h4>
                                <p>${project.tools}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>`
        ).join('');

        return `
            <style>
                :host {
                    display: block;
                }
            </style>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="css/carousel.css">
            <div id="projectsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="hover" data-bs-interval="5000">
                <div class="carousel-indicators">
                    ${indicators}
                </div>
                <div class="carousel-inner">
                    ${items}
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
