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
