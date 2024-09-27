document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all validations pass, submit the form
        console.log('Form submitted:', { name, email, subject, message });
        // Here you would typically send this data to your server
        // For demonstration, we're just logging to console

        // Show success message
        showSuccessMessage();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message. We will get back to you soon!';
        contactForm.innerHTML = '';
        contactForm.appendChild(successMessage);
    }

    // Interactive map functionality
    const mapContainer = document.querySelector('.map-container');
    const iframe = mapContainer.querySelector('iframe');

    mapContainer.addEventListener('mouseenter', function() {
        iframe.style.filter = 'grayscale(0)';
    });

    mapContainer.addEventListener('mouseleave', function() {
        iframe.style.filter = 'grayscale(100%)';
    });

    // Smooth scroll for info list items
    const infoListItems = document.querySelectorAll('.info-list li');

    infoListItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});