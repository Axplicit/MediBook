import { doctors } from './doctorsData.js'; // Correct import from the centralized data file

document.addEventListener('DOMContentLoaded', () => {
    const specialistsGrid = document.getElementById('specialistsGrid');
    const filterSpecialty = document.getElementById('filterSpecialty');
    const filterLocation = document.getElementById('filterLocation');
    const sortOrder = document.getElementById('sortOrder');
    const resetFiltersBtn = document.getElementById('resetFilters');
    const noDoctorsMessage = document.getElementById('noDoctorsMessage');

    // Function to create a specialist card HTML
    function createSpecialistCard(specialist) {
        const card = document.createElement('div');
        card.classList.add('specialist-card');

        // Use the correct property names from doctorsData.js (e.g., specialty, location)
        card.innerHTML = `
            <div class="avatar">
                <img src="${specialist.image}" alt="Dr. ${specialist.name}">
            </div>
            <h3>${specialist.name}</h3>
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

    // Function to render doctors based on filters and sort order
    function renderDoctors() {
        let filteredDoctors = [...doctors]; // Use the imported 'doctors' array

        // Apply Specialty Filter
        const selectedSpecialty = filterSpecialty.value;
        if (selectedSpecialty !== 'all') {
            filteredDoctors = filteredDoctors.filter(doctor => doctor.specialty === selectedSpecialty);
        }

        // Apply Location Filter
        const locationQuery = filterLocation.value.toLowerCase().trim();
        if (locationQuery) {
            filteredDoctors = filteredDoctors.filter(doctor => 
                doctor.location.toLowerCase().includes(locationQuery)
            );
        }

        // Apply Sorting
        const selectedSortOrder = sortOrder.value;
        if (selectedSortOrder === 'rating-desc') {
            filteredDoctors.sort((a, b) => b.rating - a.rating);
        } else if (selectedSortOrder === 'experience-desc') {
            filteredDoctors.sort((a, b) => b.experience - a.experience);
        } else if (selectedSortOrder === 'name-asc') {
            filteredDoctors.sort((a, b) => a.name.localeCompare(b.name));
        }

        specialistsGrid.innerHTML = ''; // Clear existing cards

        if (filteredDoctors.length > 0) {
            filteredDoctors.forEach(doctor => {
                specialistsGrid.appendChild(createSpecialistCard(doctor));
            });
            noDoctorsMessage.classList.add('hidden');
        } else {
            noDoctorsMessage.classList.remove('hidden');
        }
    }

    // Event Listeners for filters and sort
    if (filterSpecialty) filterSpecialty.addEventListener('change', renderDoctors);
    if (filterLocation) filterLocation.addEventListener('input', renderDoctors);
    if (sortOrder) sortOrder.addEventListener('change', renderDoctors);
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            if (filterSpecialty) filterSpecialty.value = 'all';
            if (filterLocation) filterLocation.value = '';
            if (sortOrder) sortOrder.value = 'default';
            renderDoctors(); // Re-render after resetting
        });
    }

    // Handle initial filters from URL parameters (e.g., from homepage search)
    function applyUrlFilters() {
        const urlParams = new URLSearchParams(window.location.search);
        const specialtyParam = urlParams.get('specialty');
        const locationParam = urlParams.get('location');

        if (filterSpecialty && specialtyParam) {
            filterSpecialty.value = specialtyParam;
        }
        if (filterLocation && locationParam) {
            filterLocation.value = locationParam;
        }
        renderDoctors(); // Render doctors with applied URL filters
    }

    // Call applyUrlFilters or renderDoctors directly when the DOM is ready
    applyUrlFilters(); // This will also call renderDoctors internally
});