// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        { text: "GradNet has been instrumental in advancing my career. The connections I've made are invaluable!", author: "Sarah Johnson, Class of 2015" },
        { text: "The events and workshops organized by GradNet have helped me stay updated with industry trends.", author: "Michael Lee, Class of 2010" },
        { text: "I found my current job through GradNet's job board. It's an amazing resource for alumni!", author: "Emily Chen, Class of 2018" }
    ];

    let currentTestimonialIndex = 0;
    const testimonialElement = document.querySelector('.testimonial');

    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonialIndex];
        testimonialElement.innerHTML = `
            <p>"${testimonial.text}"</p>
            <cite>- ${testimonial.author}</cite>
        `;
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    }

    // Initial update
    updateTestimonial();

    // Update testimonial every 5 seconds
    setInterval(updateTestimonial, 5000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});