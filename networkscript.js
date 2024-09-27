document.addEventListener('DOMContentLoaded', function() {
    // Alumni search functionality
    const searchForm = document.querySelector('.search-form');
    const alumniCards = document.querySelectorAll('.alumni-card');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.toLowerCase();
        const industry = document.getElementById('industry').value.toLowerCase();
        const graduationYear = document.getElementById('graduation-year').value;

        alumniCards.forEach(card => {
            const cardName = card.querySelector('h3').textContent.toLowerCase();
            const cardIndustry = card.querySelector('.alumni-info:nth-child(3)').textContent.toLowerCase();
            const cardYear = card.querySelector('.alumni-info:nth-child(2)').textContent.split(' ')[2];

            const nameMatch = cardName.includes(name);
            const industryMatch = cardIndustry.includes(industry);
            const yearMatch = graduationYear === '' || cardYear === graduationYear;

            if (nameMatch && industryMatch && yearMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Connect button functionality
    const connectButtons = document.querySelectorAll('.connect-button');

    connectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const alumniName = this.closest('.alumni-card').querySelector('h3').textContent;
            alert(`Connection request sent to ${alumniName}. They will be notified of your interest to connect.`);
        });
    });
});