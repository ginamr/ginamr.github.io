document.addEventListener('DOMContentLoaded', function() {
    // Detect if we're in the pages folder or at root
    const isInPagesFolder = window.location.pathname.includes('/pages/');
    const pathPrefix = isInPagesFolder ? '../' : '';
    
    const footerHTML = `
        <footer>
            <div id="email">
                <img src="${pathPrefix}assets/email.png" alt="helloginarobinson at gmail dot com">
            </div>
            <p>toginarobinson at gmail dot com</p>
            <p><small class="copyright">&copy;2026 Gina Marie Robinson</small></p>
        </footer>
    `;
    const temp = document.createElement('div');
    temp.innerHTML = footerHTML;
    document.body.insertAdjacentElement('beforeend', temp.firstElementChild);
});
