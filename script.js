// Highlight the active link based on the current page
document.addEventListener('DOMContentLoaded', () => {
    const pageIdMap = {
        'index.html': 'home-link',
        'about.html': 'about-link',
        'services.html': 'services-link',
        'contact.html': 'contact-link'
    };

    // Get the current page filename
    const currentPage = window.location.pathname.split('/').pop();
    const activeLinkId = pageIdMap[currentPage];

    // Highlight the active link
    if (activeLinkId) {
        document.getElementById(activeLinkId).classList.add('active');
    }
});
// Initialize Google Map
let map;

function initMap() {
    // Default location (fallback)
    const defaultLocation = { lat: 0, lng: 0 };

    // Create a map centered at the default location
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: defaultLocation,
    });

    // Fetch live location using an IP-to-Location API
    fetch('https://maps.app.goo.gl/g7VQRFufzNQiBAbJ7') // Replace with a reliable IP geolocation API
        .then(response => response.json())
        .then(data => {
            const userLocation = {
                lat: parseFloat(data.latitude),
                lng: parseFloat(data.longitude),
            };

            // Center the map at the user's location
            map.setCenter(userLocation);

            // Add a marker at the user's location
            new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'You are here!',
            });
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            alert('Unable to fetch live location.');
        });
}
