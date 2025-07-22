document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to light
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        if (themeToggle) themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    } else {
        if (themeToggle) themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon'); // Ensure it's moon for light
    }

    if (themeToggle) { // Only add listener if the element exists
        themeToggle.addEventListener('click', () => {
            if (body.getAttribute('data-theme') === 'dark') {
                body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
            } else {
                body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
            }
        });
    }

    // --- Mobile Navigation Toggle ---
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle) { // Only add listener if the element exists
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('open'); // Optional: add a class for burger icon animation
        });
    }

    // Close mobile nav when a link is clicked (for both internal and external links)
    if (navMenu) { // Ensure navMenu exists
        document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (mobileToggle) mobileToggle.classList.remove('open');
                }
            });
        });
    }

    // Removed Floating Action Button JS logic as the element is removed from HTML
    /*
    const fabMain = document.getElementById('fabMain');
    const fabMenu = document.getElementById('fabMenu');

    if (fabMain) {
        fabMain.addEventListener('click', () => {
            fabMain.classList.toggle('active');
            fabMenu.classList.toggle('active');
        });
    }

    if (fabMenu) {
        document.querySelectorAll('.fab-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (item.tagName === 'A') {
                    return;
                }
                const action = item.dataset.action;
                alert(`FAB action: ${action}`);
                if (fabMain) fabMain.classList.remove('active');
                fabMenu.classList.remove('active');
            });
        });
    }
    */

    // --- Navbar Active State Logic ---
    const currentPath = window.location.pathname.split('/').pop(); // Get just the filename (e.g., "index.html")

    document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkFilename = linkHref.split('/').pop(); // Get filename from link

        // Remove active class from all links first for a clean slate
        link.classList.remove('active');

        // Logic for setting active class on full page links (like doctors.html, appointments.html, contact.html)
        if (linkFilename === currentPath || (currentPath === '' && linkFilename === 'index.html')) {
            link.classList.add('active');
        } 
        // Logic for internal anchor links on the homepage only
        // The scroll listener for homepage sections is in script.js now, but common.js needs to ignore them too.
        else if (linkHref.startsWith('#')) {
            // Do nothing here, as script.js handles this on the homepage based on scroll
        }
    });
});