// script-lift.js
document.addEventListener('DOMContentLoaded', function() {

    // --- FUNGSI SLIDER GAMBAR ---
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        const slider = sliderContainer.querySelector('.slider');
        const slides = sliderContainer.querySelectorAll('.slide');
        const prevBtn = sliderContainer.querySelector('.prev-btn');
        const nextBtn = sliderContainer.querySelector('.next-btn');

        if (slides.length > 0) {
            let currentIndex = 0;
            const slideCount = slides.length;
            let autoSlideInterval;

            function updateSlidePosition() {
                const sliderClientWidth = sliderContainer.clientWidth; 
                slider.style.transform = 'translateX(' + (-sliderClientWidth * currentIndex) + 'px)';
            }

            function goToNextSlide() {
                currentIndex = (currentIndex + 1) % slideCount;
                updateSlidePosition();
            }

            function goToPrevSlide() {
                currentIndex = (currentIndex - 1 + slideCount) % slideCount;
                updateSlidePosition();
            }

            function startAutoSlide() {
                autoSlideInterval = setInterval(goToNextSlide, 5000);
            }

            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }

            nextBtn.addEventListener('click', () => {
                goToNextSlide();
                resetAutoSlide();
            });

            prevBtn.addEventListener('click', () => {
                goToPrevSlide();
                resetAutoSlide();
            });

            window.addEventListener('resize', () => {
                slider.style.transition = 'none';
                updateSlidePosition();
                setTimeout(() => {
                    slider.style.transition = 'transform 0.5s ease-in-out';
                }, 10);
            });

            updateSlidePosition();
            startAutoSlide();
        }
    }

    // --- FUNGSI SLIDER TESTIMONI ---
    const testimonialContainer = document.querySelector('.testimonial-slider-container');
    if (testimonialContainer) {
        const testimonialSlider = testimonialContainer.querySelector('.testimonial-slider');
        const testimonials = testimonialContainer.querySelectorAll('.testimonial-card');
        const testimonialPrevBtn = testimonialContainer.querySelector('.testimonial-prev-btn');
        const testimonialNextBtn = testimonialContainer.querySelector('.testimonial-next-btn');
        const dotsContainer = testimonialContainer.querySelector('.testimonial-dots');

        if (testimonials.length > 0) {
            let testimonialCurrentIndex = 0;
            const testimonialCount = testimonials.length;
            let testimonialAutoSlide;

            for (let i = 0; i < testimonialCount; i++) {
                const dot = document.createElement('span');
                dot.classList.add('testimonial-dot');
                dot.addEventListener('click', () => {
                    goToTestimonial(i);
                    resetTestimonialAutoSlide();
                });
                dotsContainer.appendChild(dot);
            }
            const dots = dotsContainer.querySelectorAll('.testimonial-dot');

            function updateTestimonialPosition() {
                const sliderClientWidth = testimonialContainer.clientWidth - 100; // Adjusted for padding
                testimonialSlider.style.transform = 'translateX(' + (-sliderClientWidth * testimonialCurrentIndex) + 'px)';
                
                dots.forEach(dot => dot.classList.remove('active'));
                if (dots[testimonialCurrentIndex]) {
                    dots[testimonialCurrentIndex].classList.add('active');
                }
            }
            
            function goToTestimonial(index) {
                testimonialCurrentIndex = index;
                updateTestimonialPosition();
            }

            function goToNextTestimonial() {
                testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonialCount;
                updateTestimonialPosition();
            }

            function goToPrevTestimonial() {
                testimonialCurrentIndex = (testimonialCurrentIndex - 1 + testimonialCount) % testimonialCount;
                updateTestimonialPosition();
            }

            function startTestimonialAutoSlide() {
                testimonialAutoSlide = setInterval(goToNextTestimonial, 5000);
            }

            function resetTestimonialAutoSlide() {
                clearInterval(testimonialAutoSlide);
                startTestimonialAutoSlide();
            }

            testimonialNextBtn.addEventListener('click', () => {
                goToNextTestimonial();
                resetTestimonialAutoSlide();
            });

            testimonialPrevBtn.addEventListener('click', () => {
                goToPrevTestimonial();
                resetTestimonialAutoSlide();
            });

            window.addEventListener('resize', () => {
                testimonialSlider.style.transition = 'none';
                updateTestimonialPosition();
                setTimeout(() => {
                    testimonialSlider.style.transition = 'transform 0.5s ease-in-out';
                }, 10);
            });

            updateTestimonialPosition();
            startTestimonialAutoSlide();
        }
    }
});