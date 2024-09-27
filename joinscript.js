document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission
    const membershipForm = document.querySelector('.membership-form');

    membershipForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic form validation
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const graduationYear = document.getElementById('graduation-year').value.trim();
        const degree = document.getElementById('degree').value.trim();
        const occupation = document.getElementById('current-occupation').value.trim();

        if (!fullName || !email || !graduationYear || !degree || !occupation) {
            alert('Please fill in all required fields.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isValidYear(graduationYear)) {
            alert('Please enter a valid graduation year.');
            return;
        }

        // If all validations pass, submit the form
        console.log('Form submitted:', { fullName, email, graduationYear, degree, occupation });
        // Here you would typically send this data to your server
        // For demonstration, we're just logging to console

        // Show success message
        showSuccessMessage();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidYear(year) {
        const currentYear = new Date().getFullYear();
        const yearNumber = parseInt(year, 10);
        return yearNumber >= 1900 && yearNumber <= currentYear;
    }

    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for joining GradNet! We will review your application and get back to you soon.';
        membershipForm.innerHTML = '';
        membershipForm.appendChild(successMessage);
    }

    // Benefits list animation
    const benefitsList = document.querySelector('.benefits-list');
    const benefits = benefitsList.querySelectorAll('li');

    function animateBenefits() {
        benefits.forEach((benefit, index) => {
            setTimeout(() => {
                benefit.style.opacity = '1';
                benefit.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Trigger animation when the benefits list comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateBenefits();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(benefitsList);
});