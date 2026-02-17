class ProjectsCarousel extends HTMLElement {
    constructor() {
        super();
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
        this.projectCarousel = null;
        this.resizeHandler = null;
        this.slideHandler = null;
        
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
        // Clean up any existing instance first
        if (this.projectCarousel) {
            this.projectCarousel.dispose();
            this.projectCarousel = null;
        }

        this.shadowRoot.innerHTML = this.createTemplate();
        // Use requestAnimationFrame to ensure DOM is fully ready
        requestAnimationFrame(() => {
            this.initCarousel();
        });
    }

    disconnectedCallback() {
        // Clean up Bootstrap carousel instance
        if (this.projectCarousel) {
            this.projectCarousel.dispose();
            this.projectCarousel = null;
        }

        // Remove event listeners
        const carousel = this.shadowRoot?.getElementById('projectsCarousel');
        if (carousel && this.slideHandler) {
            carousel.removeEventListener('slid.bs.carousel', this.slideHandler);
        }

        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }

        this.slideHandler = null;
        this.resizeHandler = null;
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
                
                /* Base styles */
                * {
                    color: white;
                    font-family: 'Concert One', cursive;
                }
                
                h3, h4, p {
                    font-family: 'Concert One', cursive;
                    margin: 0.5em 0;
                }
                
                strong {
                    font-family: 'Concert One', cursive;
                    text-shadow: 2px 2px black;
                }
                
                /* Project container styles */
                .project-container {
                    background-color: black;
                    padding: 0.5em 0.5em;
                    text-decoration: none;
                    overflow: hidden;
                    color: white;
                }
                
                .project-title {
                    text-align: center;
                    padding: 0.25em;
                    background: #0067c5;
                    border: 0.1em solid #bbc3cc;
                    font-size: 1.875em;
                }
                
                .project-content {
                    text-align: left;
                    min-width: 8em;
                    font-size: 1.25em;
                }
                
                .project-name {
                    background-color: #1f3a93;
                }
                
                .project-role {
                    background-color: #3a539b;
                }
                
                .project-tools {
                    background-color: #4b77be;
                }
                
                .project-name, .project-role, .project-tools {
                    padding-left: 1em;
                    padding-right: 1em;
                    margin-top: 0.5em;
                    border: 0.1em solid #bbc3cc;
                    border-radius: 1em;
                    font-size: 1.25em;
                }
                
                /* Carousel-specific styles */
                #projectsCarousel {
                    background-color: #2980b9;
                    border-radius: 2em;
                    padding: 1em;
                }

                #projectsCarousel .carousel-inner {
                    background-color: #2980b9;
                    border-radius: 1em;
                }

                #projectsCarousel .carousel-item {
                    background-color: #2980b9;
                    min-height: 35em;
                    padding: 1em;
                }

                #projectsCarousel .project-img {
                    height: 15em;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                #projectsCarousel .project-img img {
                    max-width: 100%;
                    max-height: 15em;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                }

                #projectsCarousel .project-container-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                    cursor: pointer;
                }

                #projectsCarousel .project-container {
                    background-color: black;
                    overflow: hidden;
                }

                #projectsCarousel .project-container-link:hover .project-container {
                    transform: scale(1.02);
                    transition: transform 0.2s ease;
                }

                #projectsCarousel .carousel-indicators {
                    z-index: 15;
                }

                #projectsCarousel .carousel-indicators [data-bs-target] {
                    background-color: #2ecc71;
                    cursor: pointer;
                }

                #projectsCarousel .carousel-indicators [data-bs-target].active {
                    background-color: #2ecc71;
                    cursor: pointer;
                }

                #projectsCarousel .carousel-control-prev,
                #projectsCarousel .carousel-control-next {
                    width: 5%;
                    z-index: 10;
                }

                #projectsCarousel .carousel-control-prev-icon,
                #projectsCarousel .carousel-control-next-icon {
                    background-color: #2ecc71;
                    border-radius: 50%;
                    padding: 1.5em;
                }
            </style>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Concert+One|Libre+Baskerville|Permanent+Marker">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
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

        const carouselInner = this.shadowRoot.querySelector('.carousel-inner');
        
        // Convert pixels to em
        const pxToEm = (px) => {
            const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
            return px / baseFontSize;
        };

        // Set carousel height to match active slide
        const setCarouselHeight = () => {
            const activeItem = carousel.querySelector('.carousel-item.active');
            if (activeItem && carouselInner) {
                const heightInEm = pxToEm(activeItem.offsetHeight);
                carouselInner.style.minHeight = heightInEm + 'em';
            }
        };

        // Store handlers for cleanup
        this.slideHandler = setCarouselHeight;
        this.resizeHandler = setCarouselHeight;

        // Wait for images to load before initializing
        const images = carousel.querySelectorAll('img');
        let imagesLoaded = 0;

        const finalizeCarousel = () => {
            // Initialize Bootstrap carousel
            this.projectCarousel = new bootstrap.Carousel(carousel, {
                interval: 5000,
                pause: 'hover',
                ride: 'carousel'
            });

            // Manually set up carousel control buttons (they won't work via data-bs-target in Shadow DOM)
            const prevBtn = this.shadowRoot.querySelector('.carousel-control-prev');
            const nextBtn = this.shadowRoot.querySelector('.carousel-control-next');

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    this.projectCarousel.prev();
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    this.projectCarousel.next();
                });
            }

            // Manually set up carousel indicators (they won't work via data-bs-target in Shadow DOM)
            const indicators = this.shadowRoot.querySelectorAll('.carousel-indicators [data-bs-target]');
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    this.projectCarousel.to(index);
                });
            });

            // Update height after slide transition completes
            carousel.addEventListener('slid.bs.carousel', this.slideHandler);

            // Set initial height
            setCarouselHeight();

            // Recalculate on window resize
            window.addEventListener('resize', this.resizeHandler);
        };

        if (images.length === 0) {
            // No images, initialize immediately
            finalizeCarousel();
        } else {
            // Wait for all images to load
            images.forEach((img) => {
                if (img.complete) {
                    imagesLoaded++;
                } else {
                    img.addEventListener('load', () => {
                        imagesLoaded++;
                        if (imagesLoaded === images.length) {
                            finalizeCarousel();
                        }
                    });
                    img.addEventListener('error', () => {
                        imagesLoaded++;
                        if (imagesLoaded === images.length) {
                            finalizeCarousel();
                        }
                    });
                }
            });

            // Timeout fallback (2 seconds)
            setTimeout(() => {
                if (imagesLoaded < images.length) {
                    finalizeCarousel();
                }
            }, 2000);

            if (imagesLoaded === images.length) {
                finalizeCarousel();
            }
        }
    }
}

customElements.define('projects-carousel', ProjectsCarousel);
