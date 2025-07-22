import { doctors } from './doctorsData.js'; // Import doctors data

document.addEventListener('DOMContentLoaded', () => {
    // --- Hero Section Typing Animation ---
    const typingTextElement = document.getElementById('typingText');
    const words = ["Fingertips", "Doorstep", "Convenience"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!typingTextElement) return; // Exit if element not found on this page

        const currentWord = words[wordIndex];
        const displayedText = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
        typingTextElement.textContent = displayedText;

        const typingSpeed = isDeleting ? 70 : 150; // Slower deleting, faster typing
        const delayAfterWord = 1500; // Delay after typing a word

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, typingSpeed);
        } else if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayAfterWord);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500); // Delay before typing next word
        }
    }
    if (typingTextElement) {
        typeEffect(); // Start the typing animation only if element exists
    }


    // --- Hero Section Stat Counter Animation ---
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCountUp = (entry) => {
        if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.dataset.count);
                let currentCount = 0;
                // Adjust duration dynamically or keep fixed. For smaller numbers, lower duration helps.
                const duration = 1500; // 1.5 seconds for counting up

                const counter = setInterval(() => {
                    // Calculate increment based on remaining value to ensure it hits target exactly
                    const remaining = target - currentCount;
                    const increment = Math.max(1, Math.ceil(remaining / (duration / 10))); // Ensure at least 1, and adjusts to reach target

                    currentCount += increment;
                    if (currentCount < target) {
                        stat.textContent = Math.ceil(currentCount);
                    } else {
                        stat.textContent = target; // Ensure it hits the exact target
                        clearInterval(counter);
                    }
                }, 10);
            });
            // Disconnect observer after animation to prevent re-triggering
            if (heroStatsObserver) heroStatsObserver.disconnect(); 
        }
    };

    const heroStatsSection = document.querySelector('.hero-stats');
    let heroStatsObserver; // Declare observer outside for access
    if (heroStatsSection) {
        heroStatsObserver = new IntersectionObserver(animateCountUp, {
            threshold: 0.5 // Trigger when 50% of the element is visible
        });
        heroStatsObserver.observe(heroStatsSection);
    }

    // --- Dynamic Specialist Cards for Homepage Showcase ---
    const specialistsGrid = document.getElementById('specialistsGrid');

    function createSpecialistCard(specialist) {
        const card = document.createElement('div');
        card.classList.add('specialist-card');

        // Use the correct property names from doctorsData.js (e.g., specialty, location)
        card.innerHTML = `
            <div class="avatar">
                <img src="${specialist.image}" alt="Dr. ${specialist.name}">
            </div>
            <h3>Dr. ${specialist.name}</h3>
            <p>${specialist.specialty}</p>
            <div class="info">
                <span><i class="fas fa-briefcase-medical"></i> ${specialist.experience} Years Exp.</span>
                <span><i class="fas fa-users"></i> ${specialist.satisfactionRate} Patients Satisfaction</span>
            </div>
            <div class="rating">
                <i class="fas fa-star"></i> ${specialist.rating}
            </div>
            <a href="appointments.html?doctorId=${specialist.id}" class="btn-book">Book Appointment</a>
        `;
        return card;
    }

    // Display a limited number of top-rated doctors on the homepage
    // You can sort them by rating or pick specific ones
    const topDoctors = doctors.sort((a, b) => b.rating - a.rating).slice(0, 4); // Example: show top 4 doctors

    if (specialistsGrid) { // Ensure the element exists on this page
        topDoctors.forEach(createSpecialistCard);
    }

    // --- Service Card Interactions ---
    // Removed the generic service-btn listener as service cards are now <a> tags with direct hrefs.
    // If you need specific JS interaction for these cards beyond navigation, you'll need to re-add targeted listeners.

    // Removed 'Watch Demo' button event listener as the button is removed from HTML.

    // --- Navbar Active State on Scroll for Homepage Sections ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Only consider sections that are part of this page (e.g., #home, #mission, #specialists, #services)
            if (['home', 'mission', 'specialists', 'services'].includes(section.getAttribute('id'))) {
                if (scrollY >= sectionTop - sectionHeight / 3) { // Adjust offset as needed
                    currentSectionId = section.getAttribute('id');
                }
            }
        });

        navLinks.forEach(link => {
            // Only update active state for links targeting sections on this page
            if (link.getAttribute('href').startsWith('#')) {
                link.classList.remove('active');
                if (link.dataset.section === currentSectionId) {
                    link.classList.add('active');
                }
            }
        });
    });
});