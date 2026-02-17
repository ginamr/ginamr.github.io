document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer>
            <div id="email" class="project-img">
                <img src="Assets/email.png" alt="helloginarobinson at gmail dot com">
            </div>
            <p>toginarobinson at gmail dot com</p>
            <p><small class="copyright">&copy;2026 Gina Marie Robinson</small></p>
        </footer>
    `;
    const temp = document.createElement('div');
    temp.innerHTML = footerHTML;
    document.body.insertAdjacentElement('beforeend', temp.firstElementChild);
});
