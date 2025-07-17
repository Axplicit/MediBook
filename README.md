# DocConnect - Doctor Appointment Booking System

A modern, responsive web application for finding and booking doctor appointments online, similar to Oladoc website.

## Features

- 🔍 **Advanced Search & Filtering**: Search doctors by name, specialization, or location
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 🔧 **Filter Options**: Filter by city, specialization, and availability
- ⭐ **Doctor Ratings**: Star-based rating system with reviews
- 📋 **Doctor Profiles**: Detailed information about each doctor
- 📅 **Appointment Booking**: Easy booking system with time slot selection
- 💳 **Multiple Consultation Types**: Video calls, in-person visits
- 🌐 **API Ready**: Configurable to work with real APIs or mock data

## Project Structure

```
DocConnect/
├── index.html              # Main homepage
├── app.js                  # Main application logic
├── doctorsData.js          # Sample doctor data
├── assets/
│   └── css/
│       └── style.css       # Main stylesheet
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Basic HTTP server (optional, for local development)

### Installation

1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

## Configuration

The application supports both mock data and real API integration:

### Mock Data Mode (Default)
```javascript
const USE_MOCK_DATA = true; // in app.js
```

### API Integration
```javascript
const USE_MOCK_DATA = false;
const API_BASE_URL = 'https://your-api-endpoint.com/api';
```

## Features Overview

### Homepage (index.html)
- Hero section with search functionality
- Filter options (city, specialization, availability)
- Doctor listings with pagination
- Popular specializations section
- Features overview
- About section
- Contact information
- Footer with links

### Doctor Search & Filtering
- Real-time search with autocomplete
- Multiple filter options
- Pagination for large result sets
- Responsive doctor cards

### Doctor Cards Include:
- Doctor photo
- Name and specialization
- Location
- Star ratings
- Experience years
- Consultation price
- Action buttons (View Profile, Book Now)

## Customization

### Adding New Doctors
Edit `doctorsData.js` and add new doctor objects:

```javascript
{
    id: 16,
    name: "Dr. New Doctor",
    specialization: "Cardiology",
    city: "New York",
    rating: 4.8,
    experience: 10,
    price: 150,
    image: "doctor-image-url.jpg",
    about: "Doctor description...",
    education: "Medical education details...",
    languages: ["English", "Spanish"],
    availability: ["9:00 AM", "10:00 AM", "11:00 AM"],
    mapEmbed: '<iframe>...</iframe>'
}
```

### Styling Customization
Modify `assets/css/style.css` to change:
- Color scheme
- Typography
- Layout spacing
- Button styles
- Card designs

### Key CSS Variables
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #333;
    --background-color: #f8fafc;
}
```

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Dependencies

### External Libraries Used:
- **Font Awesome 6.0.0**: Icons
- **Google Fonts (Inter)**: Typography

No additional JavaScript libraries required - built with vanilla JavaScript.

## API Integration

For production use, implement the following endpoints:

### GET /api/doctors
Returns list of doctors

### GET /api/doctors/{id}
Returns specific doctor details

### GET /api/doctors/{id}/availability
Returns doctor's available time slots

### POST /api/appointments
Creates new appointment booking

## Mobile Responsiveness

The application is fully responsive with:
- Mobile-first design approach
- Touch-friendly interface
- Optimized for various screen sizes
- Mobile navigation menu

## Performance Features

- Lazy loading for images
- Debounced search functionality
- Pagination for large datasets
- Optimized CSS and JavaScript
- Minimal external dependencies

## Future Enhancements

Potential improvements:
- User authentication system
- Payment integration
- Advanced calendar booking
- Email/SMS notifications
- Review and rating system
- Appointment history
- Doctor dashboard
- Multi-language support

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact the development team or create an issue in the project repository.

---

**Note**: This is a demonstration project. For production use, ensure proper security measures, data validation, and API integration are implemented.