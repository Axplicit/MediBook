document.addEventListener('DOMContentLoaded', () => {
    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would collect form data and send it to a backend.
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => (data[key] = value));

            console.log('Contact Form Data:', data);
            alert('Thank you for your message! We will get back to you soon.');
            
            contactForm.reset(); // Clear the form
        });
    }
});