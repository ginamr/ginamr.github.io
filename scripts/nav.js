document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    const isHome = path.endsWith('/') || path.endsWith('/index.html');
    const basePath = isHome ? '' : '../';
    const pagesPath = isHome ? 'pages/' : '';
    const assetsPath = isHome ? 'assets/' : '../assets/';
    const navHTML = `
        <nav role="navigation" aria-label="Main navigation">
            <ul>
                <li id="logo">
                    <a href="${basePath}index.html" aria-label="Home">
                        <img src="${assetsPath}gr.svg" alt="GR">
                    </a>
                </li>
                <li class="nav-headshot">
                    <a href="${basePath}index.html" aria-label="Gina Marie Robinson">
                        <img src="${assetsPath}headshot.jpg" alt="Gina Marie Robinson headshot">
                    </a>
                </li>
                <li class="nav-social">
                    <a href="https://www.linkedin.com/in/robinsongina" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                        <img src="${assetsPath}linkedin.png" alt="LinkedIn">
                    </a>
                </li>
                <li class="nav-social">
                    <a href="https://github.com/ginamr" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                        <img src="${assetsPath}github.png" alt="Github">
                    </a>
                </li>
                <li class="nav-dropdown" tabindex="0" role="button">
                    <span class="nav-dropdown-label" aria-haspopup="true" aria-expanded="false">Projects</span>
                    <ul class="dropdown-menu" role="menu" aria-label="Projects">
                        <li role="none"><a href="${pagesPath}teams-ai.html" role="menuitem" tabindex="-1">Teams AI</a></li>
                        <li role="none"><a href="${pagesPath}cosmos-db.html" role="menuitem" tabindex="-1">Cosmos DB</a></li>
                        <li role="none"><a href="${pagesPath}MS2017.html" role="menuitem" tabindex="-1">MS 2017</a></li>
                        <li role="none"><a href="${pagesPath}MS2016.html" role="menuitem" tabindex="-1">MS 2016</a></li>
                        <li role="none"><a href="${pagesPath}fablix.html" role="menuitem" tabindex="-1">Fablix</a></li>
                        <li role="none"><a href="${pagesPath}bailys-beads.html" role="menuitem" tabindex="-1">Baily's Beads</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    `;
    const temp = document.createElement('div');
    temp.innerHTML = navHTML;
    const nav = temp.firstElementChild;
    document.body.insertAdjacentElement('afterbegin', nav);

    // Setup dropdown functionality
    setupDropdown();
    
    // Highlight active page
    highlightActivePage();
});

function setupDropdown() {
    const dropdown = document.querySelector('.nav-dropdown');
    const dropdownLabel = document.querySelector('.nav-dropdown-label');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (!dropdown || !dropdownLabel || !dropdownMenu) return;

    // Toggle dropdown on click/touch
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // Keyboard navigation
    dropdown.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
            
            // Focus first menu item when opened
            if (dropdown.classList.contains('active')) {
                const firstLink = dropdownMenu.querySelector('a');
                if (firstLink) {
                    setTimeout(() => firstLink.focus(), 50);
                }
            }
        } else if (e.key === 'Escape') {
            closeDropdown();
            dropdown.focus();
        }
    });

    // Navigate within dropdown with arrow keys
    dropdownMenu.addEventListener('keydown', function(e) {
        const menuItems = Array.from(dropdownMenu.querySelectorAll('a'));
        const currentIndex = menuItems.indexOf(document.activeElement);
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % menuItems.length;
            menuItems[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1;
            menuItems[prevIndex].focus();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            closeDropdown();
            dropdown.focus();
        } else if (e.key === 'Tab' && !e.shiftKey && currentIndex === menuItems.length - 1) {
            // Close dropdown when tabbing out of last item
            closeDropdown();
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    // Close dropdown on blur (for better touch device support)
    dropdown.addEventListener('blur', function(e) {
        // Only close if focus is moving outside the dropdown
        setTimeout(() => {
            if (!dropdown.contains(document.activeElement)) {
                closeDropdown();
            }
        }, 100);
    });

    function toggleDropdown() {
        const isActive = dropdown.classList.toggle('active');
        dropdownLabel.setAttribute('aria-expanded', isActive);
        
        if (isActive) {
            // Make menu items focusable when open
            dropdownMenu.querySelectorAll('a').forEach(link => {
                link.setAttribute('tabindex', '0');
            });
        } else {
            // Make menu items not focusable when closed
            dropdownMenu.querySelectorAll('a').forEach(link => {
                link.setAttribute('tabindex', '-1');
            });
        }
    }

    function closeDropdown() {
        dropdown.classList.remove('active');
        dropdownLabel.setAttribute('aria-expanded', 'false');
        dropdownMenu.querySelectorAll('a').forEach(link => {
            link.setAttribute('tabindex', '-1');
        });
    }
}

function highlightActivePage() {
    const currentPath = window.location.pathname;
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    
    dropdownLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath.endsWith(linkPath.split('/').pop())) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}