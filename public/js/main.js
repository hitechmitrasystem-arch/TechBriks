/**
 * TechBriks Consulting - Main Application
 * Enterprise-Grade Frontend JavaScript
 * @version 1.2.0
 */

'use strict';

// ═══════════════════════════════════════════════════════════
// MOBILE NAVIGATION MODULE
// ═══════════════════════════════════════════════════════════

const MobileMenu = (() => {
  let isOpen = false;
  let scrollPosition = 0;
  
  // DOM Elements
  let menuBtn = null;
  let menu = null;
  let backdrop = null;

  /**
   * Initialize mobile menu functionality
   */
  const init = () => {
    // Cache DOM elements
    menuBtn = document.getElementById('mobile-menu-btn');
    menu = document.getElementById('mobile-menu');
    backdrop = document.getElementById('mobile-menu-backdrop');

    if (!menuBtn || !menu) {
      console.warn('Mobile menu elements not found');
      return;
    }

    // Toggle menu on button click
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggle();
    });

    // Close menu when clicking backdrop
    backdrop?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      close();
    });

    // Close menu when clicking a link - close without restoring scroll so navigation can perform scrolling
    const mobileLinks = menu.querySelectorAll('[data-mobile-link]');
    mobileLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if (isOpen) {
          // Close but do NOT restore the previous scroll position so the intended anchor scroll can work
          close(false);
        }
      });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        close();
        menuBtn?.focus();
      }
    });

    // Close menu on window resize (if switching to desktop)
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1024 && isOpen) {
          close();
        }
      }, 100);
    });
  };

  /**
   * Toggle menu open/close
   */
  const toggle = () => {
    isOpen ? close() : open();
  };

  /**
   * Open the mobile menu
   */
  const open = () => {
    if (isOpen) return;
    isOpen = true;
    scrollPosition = window.scrollY;
    
    // Update ARIA attributes
    menuBtn?.setAttribute('aria-expanded', 'true');
    menuBtn?.setAttribute('aria-label', 'Close navigation menu');
    menu?.setAttribute('aria-hidden', 'false');

    // Add menu-open class for CSS animations
    menuBtn?.classList.add('menu-open');
    menu?.classList.add('menu-open');

    // Show menu - remove blocking classes
    menu?.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');

    // Show backdrop
    backdrop?.classList.remove('opacity-0', 'pointer-events-none');
    backdrop?.classList.add('opacity-100', 'pointer-events-auto');

    // Lock body scroll
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  };

  /**
   * Close the mobile menu
   */
  const close = (restoreScroll = true) => {
    if (!isOpen) return;
    isOpen = false;
    
    // Update ARIA attributes
    menuBtn?.setAttribute('aria-expanded', 'false');
    menuBtn?.setAttribute('aria-label', 'Open navigation menu');
    menu?.setAttribute('aria-hidden', 'true');

    // Remove menu-open class
    menuBtn?.classList.remove('menu-open');
    menu?.classList.remove('menu-open');

    // Hide menu - add blocking classes
    menu?.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');

    // Hide backdrop
    backdrop?.classList.add('opacity-0', 'pointer-events-none');
    backdrop?.classList.remove('opacity-100', 'pointer-events-auto');

    // Restore body scroll styles
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';

    // Optionally restore scroll position (default true). When closing before a smooth anchor scroll
    // we do NOT want to restore the previous scroll position, so callers can pass false.
    if (restoreScroll) {
      window.scrollTo(0, scrollPosition);
    }
  };

  return { init, open, close, toggle };
})();

// ═══════════════════════════════════════════════════════════
// NAVIGATION MODULE
// ═══════════════════════════════════════════════════════════

const Navigation = (() => {
  const init = () => {
    const navbar = document.querySelector('.navbar');

    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    }, { passive: true });

    // Smooth scroll for anchor links (72px offset for fixed navbar)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            // Close mobile menu if open before scrolling and do not restore previous scroll
            if (anchor.getAttribute('data-mobile-link')) {
              MobileMenu.close(false);
            }
            
            const offsetTop = target.offsetTop - 72;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('[data-nav-link]');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 100)) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  };

  return { init };
})();

// ═══════════════════════════════════════════════════════════
// SCROLL ANIMATIONS MODULE
// ═══════════════════════════════════════════════════════════

const ScrollAnimations = (() => {
  const init = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: unobserve after animation
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right'
    );
    
    animatedElements.forEach(el => observer.observe(el));
  };

  return { init };
})();

// ═══════════════════════════════════════════════════════════
// CONTACT FORM MODULE (FIREBASE READY)
// ═══════════════════════════════════════════════════════════

const ContactForm = (() => {
  const init = () => {
    const form = document.getElementById('contact-form');
    
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      
      // Disable button and show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      `;

      // Collect form data
      const formData = {
        firstName: form.querySelector('#first-name').value,
        lastName: form.querySelector('#last-name').value,
        email: form.querySelector('#email').value,
        phone: form.querySelector('#phone').value,
        company: form.querySelector('#company').value,
        message: form.querySelector('#message').value,
        timestamp: new Date().toISOString()
      };

      try {
        // ╔══════════════════════════════════════════════════════╗
        // ║  FIREBASE INTEGRATION PLACEHOLDER                     ║
        // ║  Replace this URL with your Firebase Function URL    ║
        // ╚══════════════════════════════════════════════════════╝
        
        const FIREBASE_FUNCTION_URL = 'YOUR_FIREBASE_FUNCTION_URL_HERE';
        
        // Uncomment when Firebase is configured:
        /*
        const response = await fetch(FIREBASE_FUNCTION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        */

        // Simulate successful submission for demo
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        showNotification('success', 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        
        // Reset form
        form.reset();
        
      } catch (error) {
        console.error('Error submitting form:', error);
        showNotification('error', 'Oops! Something went wrong. Please try again or contact us directly.');
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });

    // Form validation feedback
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value && !input.checkValidity()) {
          input.classList.add('border-red-500');
        } else {
          input.classList.remove('border-red-500');
        }
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('border-red-500') && input.checkValidity()) {
          input.classList.remove('border-red-500');
        }
      });
    });
  };

  /**
   * Show notification message
   */
  const showNotification = (type, message) => {
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl transform transition-all duration-500 ${
      type === 'success' 
        ? 'bg-green-600 text-white' 
        : 'bg-red-600 text-white'
    }`;
    notification.style.transform = 'translateX(400px)';
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        ${type === 'success' 
          ? '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>'
          : '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>'
        }
        <p class="font-medium">${message}</p>
      </div>
    `;

    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  };

  return { init };
})();

// ═══════════════════════════════════════════════════════════
// COUNTER ANIMATION MODULE
// ═══════════════════════════════════════════════════════════

const CounterAnimation = (() => {
  const animateCounter = (element, target) => {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = progress * (2 - progress);
      const current = Math.floor(start + (target - start) * easeOutQuad);
      
      element.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const init = () => {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          const target = parseInt(entry.target.getAttribute('data-counter'));
          animateCounter(entry.target, target);
          entry.target.classList.add('counted');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
  };

  return { init };
})();

// ═══════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════

const Utils = (() => {
  /**
   * Debounce function to limit function calls
   */
  const debounce = (func, wait = 100) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  /**
   * Throttle function to limit function calls
   */
  const throttle = (func, limit = 100) => {
    let inThrottle;
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  return { debounce, throttle };
})();

// ═══════════════════════════════════════════════════════════
// PERFORMANCE OPTIMIZATION
// ═══════════════════════════════════════════════════════════

const Performance = (() => {
  const init = () => {
    // Lazy load images
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }

    // Mark body as loaded for CSS animations
    document.body.classList.add('loaded');
  };

  return { init };
})();

// ═══════════════════════════════════════════════════════════
// Logo Carousel Controls - Pause/Resume on hover/touch/focus
const LogoCarousel = (() => {
  let container, track;
  const init = () => {
    container = document.querySelector('.carousel-container');
    track = document.querySelector('.carousel-track');
    if (!container || !track) return;

    // Ensure animation is running by default
    track.style.animationPlayState = 'running';

    // Pause on hover / touch / focus
    container.addEventListener('mouseenter', () => { track.style.animationPlayState = 'paused'; });
    container.addEventListener('mouseleave', () => { track.style.animationPlayState = 'running'; });
    container.addEventListener('touchstart', () => { track.style.animationPlayState = 'paused'; }, {passive: true});
    container.addEventListener('touchend', () => { track.style.animationPlayState = 'running'; });
    container.addEventListener('focusin', () => { track.style.animationPlayState = 'paused'; });
    container.addEventListener('focusout', () => { track.style.animationPlayState = 'running'; });
  };
  const pause = () => { if (track) track.style.animationPlayState = 'paused'; };
  const resume = () => { if (track) track.style.animationPlayState = 'running'; };
  return { init, pause, resume };
})();

// SWIPER CAROUSEL - AUTOMATICALLY INITIALIZED IN HTML
// (Initialized via inline script in index.html)
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// APPLICATION INITIALIZATION
// ═══════════════════════════════════════════════════════════

const App = (() => {
  const init = () => {
    // Initialize all modules when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeModules);
    } else {
      initializeModules();
    }
  };

  const initializeModules = () => {
    console.log('🚀 TechBriks Application Initializing...');
    
    try {
      // Initialize mobile menu first (critical for mobile UX)
      MobileMenu.init();
      Navigation.init();
      ScrollAnimations.init();
      ContactForm.init();
      CounterAnimation.init();
      Performance.init();
      LogoCarousel.init();
      // Swiper carousel initialized via inline script in index.html
      
      console.log('✅ TechBriks Application Ready');
    } catch (error) {
      console.error('❌ Application initialization error:', error);
    }
  };

  return { init };
})();

// Start the application
App.init();

// ═══════════════════════════════════════════════════════════
// EXPORT FOR FIREBASE FUNCTIONS (if needed)
// ═══════════════════════════════════════════════════════════

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { App, Navigation, ContactForm };
}
