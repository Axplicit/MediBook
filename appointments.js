import { doctors } from './doctorsData.js'; // Import doctors data

document.addEventListener('DOMContentLoaded', () => {
    const doctorSearchInput = document.getElementById('doctorSearchInput');
    const doctorList = document.getElementById('doctorList');
    const selectedDoctorInfo = document.getElementById('selectedDoctorInfo');
    const appointmentDateInput = document.getElementById('appointmentDate');
    const timeSlotsGrid = document.getElementById('timeSlotsGrid');
    const appointmentForm = document.getElementById('appointmentForm');

    let selectedDoctor = null;
    let selectedTimeSlot = null;

    // --- Doctor Selection ---
    function renderDoctorList(searchQuery = '') {
        if (!doctorList) return; // Exit if element not found

        doctorList.innerHTML = ''; // Clear previous list
        const filteredDoctors = doctors.filter(doctor =>
            doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (doctor.subspecialty && doctor.subspecialty.toLowerCase().includes(searchQuery.toLowerCase())) // Include subspecialty in search
        );

        if (filteredDoctors.length === 0) {
            doctorList.innerHTML = '<p class="placeholder-text">No doctors found matching your search.</p>';
            return;
        }

        filteredDoctors.forEach(doctor => {
            const doctorItem = document.createElement('div');
            doctorItem.classList.add('doctor-list-item');
            if (selectedDoctor && selectedDoctor.id === doctor.id) {
                doctorItem.classList.add('selected');
            }
            doctorItem.dataset.doctorId = doctor.id;

            doctorItem.innerHTML = `
                <div class="avatar">
                    <img src="${doctor.image}" alt="${doctor.name}">
                </div>
                <div class="doctor-info">
                    <h4>${doctor.name}</h4>
                    <p>${doctor.specialty}${doctor.subspecialty ? ` (${doctor.subspecialty})` : ''} - ${doctor.location}</p>
                </div>
            `;
            doctorList.appendChild(doctorItem);

            doctorItem.addEventListener('click', () => {
                // Remove 'selected' class from previously selected doctor
                const previouslySelected = doctorList.querySelector('.doctor-list-item.selected');
                if (previouslySelected) {
                    previouslySelected.classList.remove('selected');
                }
                doctorItem.classList.add('selected');
                selectedDoctor = doctor;
                displaySelectedDoctor();
                renderTimeSlots(); // Update time slots when doctor changes
            });
        });
    }

    function displaySelectedDoctor() {
        if (!selectedDoctorInfo) return; // Exit if element not found

        if (selectedDoctor) {
            selectedDoctorInfo.innerHTML = `
                <div class="avatar">
                    <img src="${selectedDoctor.image}" alt="${selectedDoctor.name}">
                </div>
                <div class="info-text">
                    <h4>${selectedDoctor.name}</h4>
                    <p>${selectedDoctor.specialty}${selectedDoctor.subspecialty ? ` (${selectedDoctor.subspecialty})` : ''} - ${selectedDoctor.location}</p>
                    <div class="rating">
                        <i class="fas fa-star"></i> ${selectedDoctor.rating}
                    </div>
                </div>
            `;
        } else {
            selectedDoctorInfo.innerHTML = '<p class="placeholder-text">Please select a doctor to proceed.</p>';
        }
    }

    if (doctorSearchInput) {
        doctorSearchInput.addEventListener('input', (e) => {
            renderDoctorList(e.target.value);
        });
    }


    // Handle doctor selection from URL parameter (e.g., from doctors.html)
    function selectDoctorFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const doctorId = urlParams.get('doctorId');
        if (doctorId) {
            const doctor = doctors.find(d => d.id === doctorId);
            if (doctor) {
                selectedDoctor = doctor;
                displaySelectedDoctor();
                if (doctorSearchInput) doctorSearchInput.value = doctor.name; // Pre-fill search input
                renderDoctorList(doctor.name); // Filter list to show selected doctor highlighted
            }
        }
    }

    // --- Date and Time Slot Selection ---
    function getDayName(dateString) {
        const date = new Date(dateString + 'T00:00:00'); // Add T00:00:00 to avoid timezone issues
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    function renderTimeSlots() {
        if (!timeSlotsGrid) return; // Exit if element not found

        timeSlotsGrid.innerHTML = ''; // Clear previous slots
        selectedTimeSlot = null; // Reset selected time slot

        if (!selectedDoctor || !appointmentDateInput.value) {
            timeSlotsGrid.innerHTML = '<p class="placeholder-text">Select a date to see available times.</p>';
            return;
        }

        const selectedDate = appointmentDateInput.value;
        const dayName = getDayName(selectedDate);
        // Availability object structure: { "Monday": ["09:00 AM", ...], ... }
        const availableTimes = selectedDoctor.availability[dayName] || [];

        if (availableTimes.length === 0) {
            timeSlotsGrid.innerHTML = '<p class="placeholder-text">No appointments available on this day.</p>';
            return;
        }

        availableTimes.forEach(time => {
            const timeSlot = document.createElement('div');
            timeSlot.classList.add('time-slot');
            timeSlot.textContent = time;
            timeSlot.dataset.time = time;
            timeSlotsGrid.appendChild(timeSlot);

            timeSlot.addEventListener('click', () => {
                // Remove 'selected' from previously selected time slot
                const previouslySelected = timeSlotsGrid.querySelector('.time-slot.selected');
                if (previouslySelected) {
                    previouslySelected.classList.remove('selected');
                }
                timeSlot.classList.add('selected');
                selectedTimeSlot = time;
            });
        });
    }

    if (appointmentDateInput) {
        appointmentDateInput.addEventListener('change', renderTimeSlots);

        // Set min date for appointment to today (Karachi time)
        const today = new Date();
        // Adjust for PKT (UTC+5) to get local date correctly, then format
        today.setUTCHours(today.getUTCHours() + 5); 
        const minDate = today.toISOString().split('T')[0];
        appointmentDateInput.setAttribute('min', minDate);
    }


    // --- Form Submission ---
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!selectedDoctor) {
                alert('Please select a doctor to book an appointment.');
                return;
            }
            if (!appointmentDateInput.value) {
                alert('Please select an appointment date.');
                return;
            }
            if (!selectedTimeSlot) {
                alert('Please select an available time slot.');
                return;
            }

            const patientName = document.getElementById('patientName').value;
            const patientEmail = document.getElementById('patientEmail').value;
            const patientPhone = document.getElementById('patientPhone').value;
            const reason = document.getElementById('reason').value;

            const bookingDetails = {
                doctorName: selectedDoctor.name,
                doctorSpecialty: selectedDoctor.specialty,
                date: appointmentDateInput.value,
                time: selectedTimeSlot,
                patient: {
                    name: patientName,
                    email: patientEmail,
                    phone: patientPhone
                },
                reason: reason
            };

            console.log('Appointment Booking Details:', bookingDetails);
            alert(`Appointment with ${selectedDoctor.name} on ${appointmentDateInput.value} at ${selectedTimeSlot} has been booked successfully!`);
            
            // In a real application, you would send this data to a backend server
            // e.g., fetch('/api/book-appointment', { method: 'POST', body: JSON.stringify(bookingDetails) })

            appointmentForm.reset();
            selectedDoctor = null;
            selectedTimeSlot = null;
            displaySelectedDoctor(); // Reset selected doctor display
            if (timeSlotsGrid) timeSlotsGrid.innerHTML = '<p class="placeholder-text">Select a date to see available times.</p>'; // Clear time slots
            renderDoctorList(); // Re-render doctor list
        });
    }


    // Initial render of doctor list and check for URL parameters
    renderDoctorList();
    selectDoctorFromUrl();
});