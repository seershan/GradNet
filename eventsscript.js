document.addEventListener('DOMContentLoaded', function() {
    // Event filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    const eventCards = document.querySelectorAll('.event-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter events
            eventCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Event registration modal
    const registerButtons = document.querySelectorAll('.event-button');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Event Registration</h2>
            <p>Thank you for your interest in this event. Registration details will be sent to your email.</p>
        </div>
    `;
    document.body.appendChild(modal);

    registerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
        });
    });

    modal.querySelector('.close-button').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});