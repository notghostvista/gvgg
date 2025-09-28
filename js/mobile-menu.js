document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');
    const body = document.body;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    function toggleMenu() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        body.style.overflow = isExpanded ? '' : 'hidden';
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking on overlay
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });

    // Close menu when resizing to desktop
    function handleResize() {
        if (window.innerWidth > 768) {
            hamburger.setAttribute('aria-expanded', 'false');
            nav.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        }
    }

    window.addEventListener('resize', handleResize);
});
