// Main Application Logic - app.js

// Configuration flag - set to true to use mock data
const USE_MOCK_DATA = true;

// API Configuration (when not using mock data)
const API_BASE_URL = 'https://your-api-endpoint.com/api';
const API_ENDPOINTS = {
    doctors: '/doctors',
    availability: '/doctors/{id}/availability',
    appointments: '/appointments'
};

// Global variables
let doctorsData = [];
let filteredDoctors = [];
let currentPage = 1;
const itemsPerPage = 5;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    // Load doctors data
    loadDoctorsData();
    
    // Initialize components based on current page
    const currentPath = window.location.pathname;
    
    if (currentPath.includes('search.html') || currentPath.includes('index.html') || currentPath === '/') {
        initializeSearch();
    }
    
    if (currentPath.includes('profile.html')) {
        initializeProfile();
    }
    
    if (currentPath.includes('booking.html')) {
        initializeBooking();
    }
    
    // Initialize common components
    initializeNavbar();
    initializeBackToTop();
    initializeFadeAnimations();
}

// Modified loadDoctorsData function with API integration
async function loadDoctorsData() {
    try {
        showLoadingState();
        
        if (USE_MOCK_DATA) {
            // Simulate API delay for realistic experience
            await new Promise(resolve => setTimeout(resolve, 800));
            
            // Use local mock data
            if (typeof window.doctorsData !== 'undefined') {
                doctorsData = window.doctorsData;
                filteredDoctors = [...doctorsData];
                hideLoadingState();
                
                // Refresh UI if on search page
                if (document.getElementById('doctors-container')) {
                    displayDoctors();
                    populateFilterOptions();
                }
                return;
            } else {
                throw new Error('Mock data not found');
            }
        } else {
            // Original API call code
            const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.doctors}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getAuthToken()}`
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            doctorsData = data.doctors || data;
            filteredDoctors = [...doctorsData];
            hideLoadingState();
            
            if (document.getElementById('doctors-container')) {
                displayDoctors();
                populateFilterOptions();
            }
        }
    } catch (error) {
        console.error('Error loading doctors data:', error);
        hideLoadingState();
        showErrorMessage('Failed to load doctors data. Please try again later.');
        
        // Fallback to local data if API fails
        if (typeof window.doctorsData !== 'undefined') {
            doctorsData = window.doctorsData;
            filteredDoctors = [...doctorsData];
            
            if (document.getElementById('doctors-container')) {
                displayDoctors();
                populateFilterOptions();
            }
        }
    }
}

// Modified getDoctorById function
async function getDoctorById(doctorId) {
    try {
        if (USE_MOCK_DATA) {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Find doctor in mock data
            const doctor = window.doctorsData?.find(d => d.id === doctorId);
            if (!doctor) {
                throw new Error('Doctor not found');
            }
            return doctor;
        } else {
            // Original API call
            const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.doctors}/${doctorId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getAuthToken()}`
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        }
    } catch (error) {
        console.error('Error fetching doctor:', error);
        // Fallback to local data
        return window.doctorsData?.find(d => d.id === doctorId) || null;
    }
}

// Modified getDoctorAvailability function
async function getDoctorAvailability(doctorId) {
    try {
        if (USE_MOCK_DATA) {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 600));
            
            // Find doctor and return availability
            const doctor = window.doctorsData?.find(d => d.id === doctorId);
            if (!doctor) {
                throw new Error('Doctor not found');
            }
            
            // You can also simulate dynamic availability based on date
            const today = new Date();
            const dayOfWeek = today.getDay();
            
            // Example: Different availability for different days
            let availability = doctor.availability || [];
            
            // Remove some slots randomly to simulate booked appointments
            availability = availability.filter(() => Math.random() > 0.3);
            
            return availability;
        } else {
            // Original API call
            const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.availability.replace('{id}', doctorId)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getAuthToken()}`
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data.availability || data.timeSlots || [];
        }
    } catch (error) {
        console.error('Error fetching availability:', error);
        // Fallback to doctor's static availability
        const doctor = window.doctorsData?.find(d => d.id === doctorId);
        return doctor?.availability || [];
    }
}

// Utility function to get auth token
function getAuthToken() {
    return localStorage.getItem('authToken') || 'demo-token';
}

// Show loading state
function showLoadingState() {
    const loadingElement = document.getElementById('loading-state');
    if (loadingElement) {
        loadingElement.style.display = 'block';
    }
}

// Hide loading state
function hideLoadingState() {
    const loadingElement = document.getElementById('loading-state');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}

// Show error message
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div class="error-content">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="btn-secondary">Close</button>
        </div>
    `;
    document.body.appendChild(errorDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentElement) {
            errorDiv.remove();
        }
    }, 5000);
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const cityFilter = document.getElementById('city-filter');
    const specializationFilter = document.getElementById('specialization-filter');
    const availabilityFilter = document.getElementById('availability-filter');
    
    // Set up event listeners
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        initializeAutocomplete(searchInput);
    }
    
    if (cityFilter) cityFilter.addEventListener('change', handleFilters);
    if (specializationFilter) specializationFilter.addEventListener('change', handleFilters);
    if (availabilityFilter) availabilityFilter.addEventListener('change', handleFilters);
    
    // Initial display
    displayDoctors();
    populateFilterOptions();
}

// Handle search input
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    filteredDoctors = doctorsData.filter(doctor => {
        return doctor.name.toLowerCase().includes(searchTerm) ||
               doctor.specialization.toLowerCase().includes(searchTerm) ||
               doctor.city.toLowerCase().includes(searchTerm);
    });
    
    applyFilters();
}

// Handle filter changes
function handleFilters() {
    applyFilters();
}

// Apply all filters
function applyFilters() {
    const cityFilter = document.getElementById('city-filter');
    const specializationFilter = document.getElementById('specialization-filter');
    const availabilityFilter = document.getElementById('availability-filter');
    
    let filtered = [...filteredDoctors];
    
    if (cityFilter && cityFilter.value) {
        filtered = filtered.filter(doctor => doctor.city === cityFilter.value);
    }
    
    if (specializationFilter && specializationFilter.value) {
        filtered = filtered.filter(doctor => doctor.specialization === specializationFilter.value);
    }
    
    if (availabilityFilter && availabilityFilter.value) {
        filtered = filtered.filter(doctor => doctor.availability.includes(availabilityFilter.value));
    }
    
    filteredDoctors = filtered;
    currentPage = 1;
    displayDoctors();
}

// Display doctors with pagination
function displayDoctors() {
    const doctorsContainer = document.getElementById('doctors-container');
    if (!doctorsContainer) return;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const doctorsToShow = filteredDoctors.slice(startIndex, endIndex);
    
    doctorsContainer.innerHTML = '';
    
    if (doctorsToShow.length === 0) {
        doctorsContainer.innerHTML = '<p class="no-results">No doctors found matching your criteria.</p>';
        return;
    }
    
    doctorsToShow.forEach(doctor => {
        const doctorCard = createDoctorCard(doctor);
        doctorsContainer.appendChild(doctorCard);
    });
    
    updatePagination();
}

// Create doctor card element
function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.className = 'doctor-card fade-in';
    card.innerHTML = `
        <div class="doctor-image">
            <img src="${doctor.image}" alt="${doctor.name}" onerror="this.src='assets/images/default-doctor.jpg'">
        </div>
        <div class="doctor-info">
            <h3>${doctor.name}</h3>
            <p class="specialization">${doctor.specialization}</p>
            <p class="city">${doctor.city}</p>
            <div class="rating">
                ${generateStars(doctor.rating)}
                <span>${doctor.rating}</span>
            </div>
            <p class="experience">${doctor.experience} years experience</p>
            <p class="price">$${doctor.price}/consultation</p>
            <div class="card-actions">
                <button class="btn-primary" onclick="viewProfile(${doctor.id})">View Profile</button>
                <button class="btn-secondary" onclick="bookAppointment(${doctor.id})">Book Now</button>
            </div>
        </div>
    `;
    return card;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    
    if (!paginationContainer || totalPages <= 1) return;
    
    let paginationHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    
    paginationContainer.innerHTML = paginationHTML;
}

// Change page
function changePage(page) {
    currentPage = page;
    displayDoctors();
}

// Populate filter options
function populateFilterOptions() {
    const cities = [...new Set(doctorsData.map(doctor => doctor.city))];
    const specializations = [...new Set(doctorsData.map(doctor => doctor.specialization))];
    const availabilities = [...new Set(doctorsData.flatMap(doctor => doctor.availability))];
    
    const cityFilter = document.getElementById('city-filter');
    const specializationFilter = document.getElementById('specialization-filter');
    const availabilityFilter = document.getElementById('availability-filter');
    
    if (cityFilter) {
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            cityFilter.appendChild(option);
        });
    }
    
    if (specializationFilter) {
        specializations.forEach(spec => {
            const option = document.createElement('option');
            option.value = spec;
            option.textContent = spec;
            specializationFilter.appendChild(option);
        });
    }
    
    if (availabilityFilter) {
        availabilities.sort().forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            availabilityFilter.appendChild(option);
        });
    }
}

// Initialize autocomplete
function initializeAutocomplete(input) {
    const suggestionsList = document.createElement('div');
    suggestionsList.className = 'suggestions-list';
    input.parentNode.appendChild(suggestionsList);
    
    input.addEventListener('input', function(e) {
        const value = e.target.value.toLowerCase();
        
        if (value.length < 2) {
            suggestionsList.innerHTML = '';
            return;
        }
        
        const suggestions = [];
        
        doctorsData.forEach(doctor => {
            if (doctor.name.toLowerCase().includes(value)) {
                suggestions.push(doctor.name);
            }
            if (doctor.specialization.toLowerCase().includes(value)) {
                suggestions.push(doctor.specialization);
            }
            if (doctor.city.toLowerCase().includes(value)) {
                suggestions.push(doctor.city);
            }
        });
        
        const uniqueSuggestions = [...new Set(suggestions)].slice(0, 5);
        
        suggestionsList.innerHTML = uniqueSuggestions.map(suggestion => 
            `<div class="suggestion-item" onclick="selectSuggestion('${suggestion}')">${suggestion}</div>`
        ).join('');
    });
    
    document.addEventListener('click', function(e) {
        if (!input.contains(e.target)) {
            suggestionsList.innerHTML = '';
        }
    });
}

// Select suggestion
function selectSuggestion(suggestion) {
    const searchInput = document.getElementById('search-input');
    searchInput.value = suggestion;
    document.querySelector('.suggestions-list').innerHTML = '';
    handleSearch({ target: { value: suggestion } });
}

// View doctor profile
function viewProfile(doctorId) {
    window.location.href = `profile.html?id=${doctorId}`;
}

// Book appointment
function bookAppointment(doctorId) {
    window.location.href = `booking.html?id=${doctorId}`;
}

// Initialize profile page
async function initializeProfile() {
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = parseInt(urlParams.get('id'));
    
    if (doctorId) {
        try {
            const doctor = await getDoctorById(doctorId);
            if (doctor) {
                displayDoctorProfile(doctor);
            }
        } catch (error) {
            console.error('Error loading doctor profile:', error);
            showErrorMessage('Failed to load doctor profile. Please try again later.');
        }
    }
}

// Display doctor profile
function displayDoctorProfile(doctor) {
    document.getElementById('doctor-name').textContent = doctor.name;
    document.getElementById('doctor-specialization').textContent = doctor.specialization;
    document.getElementById('doctor-city').textContent = doctor.city;
    document.getElementById('doctor-image').src = doctor.image;
    document.getElementById('doctor-rating').innerHTML = generateStars(doctor.rating) + ` ${doctor.rating}`;
    document.getElementById('doctor-experience').textContent = `${doctor.experience} years`;
    document.getElementById('doctor-price').textContent = `$${doctor.price}`;
    document.getElementById('doctor-about').textContent = doctor.about;
    document.getElementById('doctor-education').textContent = doctor.education;
    document.getElementById('doctor-languages').textContent = doctor.languages.join(', ');
    
    if (doctor.mapEmbed) {
        document.getElementById('doctor-map').innerHTML = doctor.mapEmbed;
    }
    
    // Set up book appointment button
    const bookButton = document.getElementById('book-appointment');
    if (bookButton) {
        bookButton.onclick = () => bookAppointment(doctor.id);
    }
}

// Initialize booking page
async function initializeBooking() {
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = parseInt(urlParams.get('id'));
    
    if (doctorId) {
        try {
            const doctor = await getDoctorById(doctorId);
            if (doctor) {
                displayBookingForm(doctor);
                // Load dynamic availability
                const availability = await getDoctorAvailability(doctorId);
                displayTimeSlots(availability);
            }
        } catch (error) {
            console.error('Error loading booking data:', error);
            showErrorMessage('Failed to load booking information. Please try again later.');
        }
    }
    
    initializeBookingForm();
}

// Display booking form
function displayBookingForm(doctor) {
    document.getElementById('booking-doctor-name').textContent = doctor.name;
    document.getElementById('booking-doctor-specialization').textContent = doctor.specialization;
    document.getElementById('booking-doctor-price').textContent = `$${doctor.price}`;
}

// Display available time slots
function displayTimeSlots(availability) {
    const timeSlotsContainer = document.getElementById('time-slots');
    timeSlotsContainer.innerHTML = '';
    
    availability.forEach(time => {
        const slot = document.createElement('div');
        slot.className = 'time-slot';
        slot.textContent = time;
        slot.onclick = () => selectTimeSlot(slot, time);
        timeSlotsContainer.appendChild(slot);
    });
}

// Select time slot
function selectTimeSlot(element, time) {
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    element.classList.add('selected');
    
    const hiddenInput = document.getElementById('selected-time');
    if (hiddenInput) {
        hiddenInput.value = time;
    }
}

// Initialize booking form validation
function initializeBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateBookingForm()) {
            confirmAppointment();
        }
    });
}

// Validate booking form
function validateBookingForm() {
    const requiredFields = ['patient-name', 'patient-email', 'patient-phone', 'appointment-date'];
    const selectedTime = document.getElementById('selected-time').value;
    
    let isValid = true;
    
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorElement = document.getElementById(fieldId + '-error');
        
        if (!field.value.trim()) {
            showError(errorElement, 'This field is required');
            isValid = false;
        } else {
            hideError(errorElement);
        }
    });
    
    // Validate email
    const emailField = document.getElementById('patient-email');
    const emailError = document.getElementById('patient-email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailField.value && !emailPattern.test(emailField.value)) {
        showError(emailError, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone
    const phoneField = document.getElementById('patient-phone');
    const phoneError = document.getElementById('patient-phone-error');
    const phonePattern = /^[\d\s\-\+\(\)]{10,}$/;
    
    if (phoneField.value && !phonePattern.test(phoneField.value)) {
        showError(phoneError, 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate date
    const dateField = document.getElementById('appointment-date');
    const dateError = document.getElementById('appointment-date-error');
    const selectedDate = new Date(dateField.value);
    const today = new Date();
    
    if (selectedDate < today) {
        showError(dateError, 'Please select a future date');
        isValid = false;
    }
    
    // Validate time slot
    const timeError = document.getElementById('time-slot-error');
    if (!selectedTime) {
        showError(timeError, 'Please select a time slot');
        isValid = false;
    } else {
        hideError(timeError);
    }
    
    return isValid;
}

// Show error message for form validation
function showError(errorElement, message) {
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Hide error message for form validation
function hideError(errorElement) {
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Modified confirmAppointment function with API integration
async function confirmAppointment() {
    const form = document.getElementById('booking-form');
    const formData = new FormData(form);
    const selectedTime = document.getElementById('selected-time').value;
    const urlParams = new URLSearchParams(window.location.search);
    const doctorId = parseInt(urlParams.get('id'));
    
    // Create appointment object
    const appointment = {
        doctorId: doctorId,
        patientName: formData.get('patient-name'),
        patientEmail: formData.get('patient-email'),
        patientPhone: formData.get('patient-phone'),
        patientAge: formData.get('patient-age') || null,
        appointmentDate: formData.get('appointment-date'),
        appointmentTime: selectedTime,
        consultationType: formData.get('consultation-type') || 'video',
        symptoms: formData.get('symptoms') || '',
        timestamp: new Date().toISOString()
    };
    
    try {
        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitButton.disabled = true;
        
        if (USE_MOCK_DATA) {
            // Simulate API processing time
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Mock successful response
            const mockResult = {
                appointmentId: 'APPT-' + Date.now(),
                status: 'confirmed',
                message: 'Appointment booked successfully'
            };
            
            // Store appointment locally (you could save to localStorage if needed)
            const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
            appointments.push({
                ...appointment,
                id: mockResult.appointmentId
            });
            localStorage.setItem('appointments', JSON.stringify(appointments));
            
            // Store appointment ID for confirmation page
            sessionStorage.setItem('appointmentId', mockResult.appointmentId);
            
            // Show success message and redirect
            showSuccessMessage();
            setTimeout(() => {
                window.location.href = 'thankyou.html';
            }, 2000);
            
        } else {
            // Original API call
            const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.appointments}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getAuthToken()}`
                },
                body: JSON.stringify(appointment)
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            
            // Store appointment ID for confirmation page
            sessionStorage.setItem('appointmentId', result.appointmentId || result.id);
            
            // Show success message and redirect
            showSuccessMessage();
            setTimeout(() => {
                window.location.href = 'thankyou.html';
            }, 2000);
        }
        
    } catch (error) {
        console.error('Error confirming appointment:', error);
        showErrorMessage(error.message || 'Failed to book appointment. Please try again.');
        
        // Restore button state
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}

// Show success message
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Appointment Confirmed!</h3>
            <p>Redirecting to confirmation page...</p>
        </div>
    `;
    document.body.appendChild(successDiv);
}

// Optional: Function to get booked appointments (for testing)
function getBookedAppointments() {
    if (USE_MOCK_DATA) {
        return JSON.parse(localStorage.getItem('appointments') || '[]');
    }
    // Would make API call to get appointments
    return [];
}

// Optional: Function to simulate different availability based on date
function getAvailabilityForDate(doctorId, date) {
    const doctor = window.doctorsData?.find(d => d.id === doctorId);
    if (!doctor) return [];
    
    const dayOfWeek = new Date(date).getDay();
    let availability = [...doctor.availability];
    
    // Simulate different availability patterns
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        // Weekend - reduced hours
        availability = availability.filter(time => {
            const hour = parseInt(time.split(':')[0]);
            return hour >= 10 && hour <= 16;
        });
    }
    
    // Simulate some slots being booked
    const bookedSlots = Math.floor(Math.random() * 3);
    for (let i = 0; i < bookedSlots; i++) {
        const randomIndex = Math.floor(Math.random() * availability.length);
        availability.splice(randomIndex, 1);
    }
    
    return availability;
}

// Initialize navbar
function initializeNavbar() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Initialize back to top button
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize fade-in animations
function initializeFadeAnimations() {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    });
    
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for global use
window.viewProfile = viewProfile;
window.bookAppointment = bookAppointment;
window.selectSuggestion = selectSuggestion;
window.changePage = changePage;
window.selectTimeSlot = selectTimeSlot;
window.getDoctorById = getDoctorById;
window.getDoctorAvailability = getDoctorAvailability;
window.getBookedAppointments = getBookedAppointments;
window.getAvailabilityForDate = getAvailabilityForDate;