// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Video background setup
    const bgVideo = document.getElementById('bg-video');
    if (bgVideo) {
        bgVideo.addEventListener('loadeddata', function() {
            this.play().catch(function(error) {
                // Auto-play was prevented, handle gracefully
                console.log('Video autoplay prevented:', error);
            });
        });
        
        // Pause video on mobile to save bandwidth (optional)
        if (window.innerWidth < 768) {
            bgVideo.pause();
        }
    }
    
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Handle image placeholders
    function handleImagePlaceholders() {
        const images = document.querySelectorAll('img[src]');
        
        images.forEach(img => {
            // Check if image fails to load
            img.addEventListener('error', function() {
                this.style.display = 'none';
                const placeholder = this.nextElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'flex';
                }
            });

            // If image loads successfully, hide placeholder
            img.addEventListener('load', function() {
                this.style.display = 'block';
                const placeholder = this.nextElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'none';
                }
            });

            // Check if src is empty or invalid
            if (!img.src || img.src.endsWith('/') || img.src.includes('undefined')) {
                img.style.display = 'none';
                const placeholder = img.nextElementSibling;
                if (placeholder && placeholder.classList.contains('image-placeholder')) {
                    placeholder.style.display = 'flex';
                }
            } else {
                // Try to load the image
                const tempImg = new Image();
                tempImg.onload = function() {
                    img.style.display = 'block';
                    const placeholder = img.nextElementSibling;
                    if (placeholder && placeholder.classList.contains('image-placeholder')) {
                        placeholder.style.display = 'none';
                    }
                };
                tempImg.onerror = function() {
                    img.style.display = 'none';
                    const placeholder = img.nextElementSibling;
                    if (placeholder && placeholder.classList.contains('image-placeholder')) {
                        placeholder.style.display = 'flex';
                    }
                };
                tempImg.src = img.src;
            }
        });
    }

    // Initialize image placeholder handling
    handleImagePlaceholders();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

