document.addEventListener('DOMContentLoaded', function() {
    // Category card hover effect
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Resource link click tracking
    const resourceLinks = document.querySelectorAll('.resource-link');

    resourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceTitle = this.closest('.resource-item').querySelector('h3').textContent;
            console.log(`Resource accessed: ${resourceTitle}`);
            // Here you would typically send this data to your analytics service
            // For demonstration, we're just logging to console
            window.location.href = this.href;
        });
    });

    // Load more resources functionality
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Load More Resources';
    loadMoreButton.className = 'load-more-button';
    document.querySelector('#featured-resources .container').appendChild(loadMoreButton);

    let resourcesLoaded = 3; // Initial number of resources shown

    loadMoreButton.addEventListener('click', function() {
        const newResources = [
            { title: "Networking Strategies Webinar", description: "Learn effective networking techniques from industry experts.", link: "#" },
            { title: "Career Transition Guide", description: "A comprehensive guide for alumni considering a career change.", link: "#" },
            { title: "Alumni Spotlight Series", description: "Inspiring stories and career insights from successful alumni.", link: "#" }
        ];

        const resourceList = document.querySelector('.resource-list');

        newResources.forEach(resource => {
            const resourceItem = document.createElement('div');
            resourceItem.className = 'resource-item';
            resourceItem.innerHTML = `
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <a href="${resource.link}" class="resource-link">Access Resource</a>
            `;
            resourceList.appendChild(resourceItem);
        });

        resourcesLoaded += newResources.length;
        if (resourcesLoaded >= 9) { // Assuming a total of 9 resources
            loadMoreButton.style.display = 'none';
        }
    });
});