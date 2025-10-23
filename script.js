// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
let menuOpen = false;

navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menuOpen = !menuOpen;
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (menuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (menuOpen && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        menuOpen = false;
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        menuOpen = false;
        document.body.style.overflow = '';
    });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 968) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            menuOpen = false;
            document.body.style.overflow = '';
        }
    }, 250);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Close announcement banner
function closeBanner() {
    const banner = document.getElementById('announcementBanner');
    banner.style.transform = 'translateY(-100%)';
    banner.style.opacity = '0';
    setTimeout(() => {
        banner.style.display = 'none';
    }, 300);
}

// Pricing toggle
function switchPricing(type) {
    const earlyBirdPricing = document.getElementById('earlyBirdPricing');
    const regularPricing = document.getElementById('regularPricing');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    if (type === 'early') {
        earlyBirdPricing.classList.remove('hidden');
        regularPricing.classList.add('hidden');
        toggleBtns[0].classList.add('active');
        toggleBtns[1].classList.remove('active');
    } else {
        earlyBirdPricing.classList.add('hidden');
        regularPricing.classList.remove('hidden');
        toggleBtns[0].classList.remove('active');
        toggleBtns[1].classList.add('active');
    }
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Word counter for abstract textarea
const abstractTextarea = document.getElementById('abstract');
if (abstractTextarea) {
    const charCount = abstractTextarea.nextElementSibling;
    
    abstractTextarea.addEventListener('input', function() {
        const text = this.value.trim();
        const words = text ? text.split(/\s+/).filter(word => word.length > 0).length : 0;
        charCount.textContent = `${words} / 300 words`;
        
        if (words > 300) {
            charCount.style.color = 'red';
        } else {
            charCount.style.color = 'var(--text-light)';
        }
    });
}

// Form submission handler
const abstractForm = document.getElementById('abstractForm');
if (abstractForm) {
    abstractForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Check word count
        const text = data.abstract.trim();
        const words = text ? text.split(/\s+/).filter(word => word.length > 0).length : 0;
        
        if (words > 300) {
            alert('Abstract must not exceed 300 words. Current word count: ' + words);
            return;
        }
        
        // Create mailto link with form data
        const subject = encodeURIComponent(`Abstract Submission: ${data.title}`);
        const body = encodeURIComponent(
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Affiliation: ${data.affiliation}\n` +
            `Category: ${data.category}\n\n` +
            `Title: ${data.title}\n\n` +
            `Abstract:\n${data.abstract}`
        );
        
        window.location.href = `mailto:iccca@gmail.com?subject=${subject}&body=${body}`;
        
        // Show success message
        alert('Thank you for your submission! Your email client will open with the abstract form filled in. Please send the email to complete your submission.');
        
        // Reset form
        this.reset();
        document.querySelector('.char-count').textContent = '0 / 300 words';
    });
}

// Simple AOS (Animate On Scroll) implementation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => observer.observe(el));
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroContent.style.opacity = 1 - (scrolled / 700);
        }
    }
});

// Add hover effect to pricing cards
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Observe stat cards for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const h3 = entry.target.querySelector('h3');
            if (h3) {
                const text = h3.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    h3.textContent = '0';
                    setTimeout(() => {
                        animateCounter(h3, number);
                        // Add back the + sign if it was there
                        if (text.includes('+')) {
                            setTimeout(() => {
                                h3.textContent = number + '+';
                            }, 2000);
                        }
                    }, 200);
                }
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Add stagger animation to scope cards
const scopeCards = document.querySelectorAll('.scope-card');
scopeCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Easter egg: Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Add confetti or special effect
    document.body.style.animation = 'rainbow 2s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 3000);
}

// Print registration details function
function printRegistrationDetails() {
    window.print();
}

// Download conference brochure (placeholder)
function downloadBrochure() {
    alert('Conference brochure will be available soon!');
}

// Newsletter subscription (placeholder)
function subscribeNewsletter(email) {
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing to our newsletter!');
}

// Add dynamic year to footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// Mobile-specific optimizations
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Optimize animations for mobile
if (isMobile()) {
    // Disable parallax on mobile for better performance
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = 'none';
        heroContent.style.opacity = '1';
    }
    
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--transition', 'all 0.2s ease');
}

// Add touch-friendly swipe to close menu
let touchStartX = 0;
let touchEndX = 0;

navMenu.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

navMenu.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        // Swipe left - close menu
        if (menuOpen) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            menuOpen = false;
            document.body.style.overflow = '';
        }
    }
}

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add loading attribute to images for native lazy loading
document.querySelectorAll('img').forEach(img => {
    if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
    }
});

// Improve form experience on mobile
const formInputs = document.querySelectorAll('input, select, textarea');
formInputs.forEach(input => {
    // Add touch-friendly focus
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
        
        // Scroll input into view on mobile
        if (isMobile()) {
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// Prevent double-tap zoom on buttons
const buttons = document.querySelectorAll('button, .btn');
buttons.forEach(button => {
    button.addEventListener('touchend', (e) => {
        e.preventDefault();
        button.click();
    }, { passive: false });
});

// Add haptic feedback for touch interactions (if supported)
function addHapticFeedback() {
    if ('vibrate' in navigator) {
        const interactiveElements = document.querySelectorAll('button, .btn, .nav-link, .pricing-card');
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                navigator.vibrate(10);
            }, { passive: true });
        });
    }
}

if (isMobile()) {
    addHapticFeedback();
}

// Optimize scroll performance
let ticking = false;
let lastScrollY = window.pageYOffset;

function optimizedScroll() {
    lastScrollY = window.pageYOffset;
    
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Your scroll-based animations here
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', optimizedScroll, { passive: true });

// Add smooth scroll behavior for iOS
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.documentElement.style.setProperty('-webkit-overflow-scrolling', 'touch');
}

// Performance monitoring
if (isMobile()) {
    // Reduce unnecessary repaints on mobile
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) {
        document.documentElement.style.setProperty('--transition', 'none');
    }
}

// Add orientation change handler
window.addEventListener('orientationchange', () => {
    // Close menu on orientation change
    if (menuOpen) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        menuOpen = false;
        document.body.style.overflow = '';
    }
    
    // Refresh layout after orientation change
    setTimeout(() => {
        window.scrollTo(0, window.pageYOffset);
    }, 200);
});

// Network-aware loading
if ('connection' in navigator) {
    const connection = navigator.connection;
    if (connection.effectiveType === '2g' || connection.saveData) {
        // Disable heavy animations on slow connections
        document.documentElement.style.setProperty('--transition', 'all 0.1s ease');
    }
}

console.log('ICCCA 2026 Website Loaded Successfully!');
console.log('For any queries, please contact: iccca@gmail.com');
console.log('Mobile Optimizations:', isMobile() ? 'Enabled' : 'Disabled');

