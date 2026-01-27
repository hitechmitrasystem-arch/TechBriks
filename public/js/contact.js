/**
 * TechBriks Consulting - Contact Form Module
 * Handles form validation, submission to Firebase Cloud Functions, and feedback
 * @version 2.0.0
 * 
 * PRODUCTION CONFIGURATION:
 * Connected to Firebase project: mnext-2d5ad
 */

const ContactForm = (() => {
  // ═══════════════════════════════════════════════════════════════════════════
  // CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════
  
  /**
   * API Configuration
   * Connected to Firebase project: mnext-2d5ad
   * Cloud Function: submitContact (us-central1)
   */
  const CONFIG = {
    // Firebase Cloud Function URL
    API_ENDPOINT: "https://us-central1-mnext-2d5ad.cloudfunctions.net/submitContact",
    
    // Request timeout in milliseconds
    REQUEST_TIMEOUT: 30000,
    
    // Enable/disable console logging (set false in production)
    DEBUG: false,
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STATE
  // ═══════════════════════════════════════════════════════════════════════════
  
  let form = null;
  let submitBtn = null;
  let successModal = null;
  let isSubmitting = false; // Prevent double submissions
  
  // Validation rules
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 100,
      pattern: /^[a-zA-Z\s'-]+$/,
      messages: {
        required: 'Please enter your full name',
        minLength: 'Name must be at least 2 characters',
        maxLength: 'Name must be less than 100 characters',
        pattern: 'Please enter a valid name'
      }
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      messages: {
        required: 'Please enter your email address',
        pattern: 'Please enter a valid email address'
      }
    },
    phone: {
      required: false,
      pattern: /^[\d\s\-+()]{10,20}$/,
      messages: {
        pattern: 'Please enter a valid phone number'
      }
    },
    company: {
      required: false,
      maxLength: 200,
      messages: {
        maxLength: 'Company name must be less than 200 characters'
      }
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 2000,
      messages: {
        required: 'Please enter your message',
        minLength: 'Message must be at least 10 characters',
        maxLength: 'Message must be less than 2000 characters'
      }
    }
  };

  /**
   * Initialize the contact form
   */
  const init = () => {
    form = document.querySelector('[data-contact-form]');
    successModal = document.querySelector('[data-success-modal]');
    
    if (!form) return;

    submitBtn = form.querySelector('[type="submit"]');
    
    // Add event listeners
    form.addEventListener('submit', handleSubmit);
    
    // Real-time validation on blur
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => clearError(input));
    });

    // Modal close handlers
    if (successModal) {
      const closeBtn = successModal.querySelector('[data-close-modal]');
      if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
      }
      successModal.addEventListener('click', (e) => {
        if (e.target === successModal) closeModal();
      });
    }
  };

  /**
   * Handle form submission
   * @param {Event} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent double submissions
    if (isSubmitting) {
      log("Submission already in progress");
      return;
    }
    
    // Validate all fields
    const isValid = validateForm();
    
    if (!isValid) {
      // Focus first error field
      const firstError = form.querySelector('.error');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    // Set submitting state
    isSubmitting = true;
    setLoadingState(true);
    
    try {
      // Collect form data
      const formData = {
        name: form.querySelector('[name="name"]').value.trim(),
        email: form.querySelector('[name="email"]').value.trim(),
        phone: form.querySelector('[name="phone"]').value.trim() || null,
        company: form.querySelector('[name="company"]').value.trim() || null,
        message: form.querySelector('[name="message"]').value.trim(),
      };

      log("Submitting form data:", formData);

      // Send to Cloud Function with timeout
      const response = await fetchWithTimeout(CONFIG.API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      }, CONFIG.REQUEST_TIMEOUT);

      const result = await response.json();
      
      log("Server response:", result);

      if (!response.ok || !result.success) {
        // Handle validation errors from server
        if (result.code === "VALIDATION_ERROR" && result.details) {
          Object.entries(result.details).forEach(([field, message]) => {
            const input = form.querySelector(`[name="${field}"]`);
            if (input) {
              showError(input, message);
            }
          });
          throw new Error("Please correct the errors above.");
        }
        throw new Error(result.error || "Failed to submit form");
      }

      // Success! Show modal with reference ID
      showSuccessModal(result.referenceId);
      
      // Reset form
      form.reset();
      clearAllErrors();

    } catch (error) {
      log("Submission error:", error);
      
      // Show user-friendly error message
      showFormError(getErrorMessage(error));
      
    } finally {
      // Reset states
      isSubmitting = false;
      setLoadingState(false);
    }
  };

  /**
   * Fetch with timeout support
   * @param {string} url
   * @param {Object} options
   * @param {number} timeout
   * @returns {Promise<Response>}
   */
  const fetchWithTimeout = (url, options, timeout) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Request timed out")), timeout)
      ),
    ]);
  };

  /**
   * Get user-friendly error message
   * @param {Error} error
   * @returns {string}
   */
  const getErrorMessage = (error) => {
    if (!navigator.onLine) {
      return "You appear to be offline. Please check your internet connection and try again.";
    }
    if (error.message === "Request timed out") {
      return "The request took too long. Please try again.";
    }
    if (error.message.includes("Failed to fetch")) {
      return "Unable to connect to our servers. Please try again later.";
    }
    return error.message || "An unexpected error occurred. Please try again.";
  };

  /**
   * Show form-level error message
   * @param {string} message
   */
  const showFormError = (message) => {
    // Remove existing error banner if any
    const existingBanner = form.querySelector('.form-error-banner');
    if (existingBanner) {
      existingBanner.remove();
    }

    // Create error banner
    const errorBanner = document.createElement('div');
    errorBanner.className = 'form-error-banner bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 flex items-start gap-3';
    errorBanner.setAttribute('role', 'alert');
    errorBanner.innerHTML = `
      <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p class="font-medium">Submission Failed</p>
        <p class="text-sm mt-1">${escapeHtml(message)}</p>
      </div>
    `;

    // Insert at top of form
    form.insertBefore(errorBanner, form.firstChild);

    // Auto-remove after 10 seconds
    setTimeout(() => errorBanner.remove(), 10000);
  };

  /**
   * Escape HTML to prevent XSS
   * @param {string} text
   * @returns {string}
   */
  const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  };

  /**
   * Debug logger
   * @param  {...any} args
   */
  const log = (...args) => {
    if (CONFIG.DEBUG) {
      console.log('[ContactForm]', ...args);
    }
  };

  /**
   * Validate entire form
   * @returns {boolean}
   */
  const validateForm = () => {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  };

  /**
   * Validate a single field
   * @param {HTMLInputElement|HTMLTextAreaElement} input
   * @returns {boolean}
   */
  const validateField = (input) => {
    const fieldName = input.name;
    const value = input.value.trim();
    const rules = validationRules[fieldName];
    
    if (!rules) return true;

    // Clear previous errors
    clearError(input);

    // Required validation
    if (rules.required && !value) {
      showError(input, rules.messages.required);
      return false;
    }

    // Skip other validations if field is empty and not required
    if (!value && !rules.required) return true;

    // Min length validation
    if (rules.minLength && value.length < rules.minLength) {
      showError(input, rules.messages.minLength);
      return false;
    }

    // Max length validation
    if (rules.maxLength && value.length > rules.maxLength) {
      showError(input, rules.messages.maxLength);
      return false;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
      showError(input, rules.messages.pattern);
      return false;
    }

    // Mark as valid
    input.classList.add('success');
    return true;
  };

  /**
   * Show error message for a field
   * @param {HTMLElement} input
   * @param {string} message
   */
  const showError = (input, message) => {
    input.classList.add('error');
    input.classList.remove('success');
    input.setAttribute('aria-invalid', 'true');
    
    const errorEl = input.parentElement.querySelector('.error-message');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('show');
      input.setAttribute('aria-describedby', errorEl.id);
    }
  };

  /**
   * Clear error for a field
   * @param {HTMLElement} input
   */
  const clearError = (input) => {
    input.classList.remove('error');
    input.removeAttribute('aria-invalid');
    
    const errorEl = input.parentElement.querySelector('.error-message');
    if (errorEl) {
      errorEl.classList.remove('show');
      errorEl.textContent = '';
    }
  };

  /**
   * Clear all form errors
   */
  const clearAllErrors = () => {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.classList.remove('error', 'success');
      clearError(input);
    });
  };

  /**
   * Set loading state on submit button
   * @param {boolean} isLoading
   */
  const setLoadingState = (isLoading) => {
    if (!submitBtn) return;
    
    submitBtn.disabled = isLoading;
    
    if (isLoading) {
      submitBtn.dataset.originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Sending...</span>
      `;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
    } else {
      submitBtn.innerHTML = submitBtn.dataset.originalText || 'Send Message';
      submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
    }
  };

  /**
   * Show success modal with reference ID
   * @param {string} referenceId - Optional reference ID from server
   */
  const showSuccessModal = (referenceId = null) => {
    if (!successModal) return;
    
    // Update reference ID in modal if provided
    if (referenceId) {
      const refElement = successModal.querySelector('[data-reference-id]');
      if (refElement) {
        refElement.textContent = referenceId;
        refElement.parentElement.style.display = 'block';
      }
    }
    
    successModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Focus close button for accessibility
    const closeBtn = successModal.querySelector('[data-close-modal]');
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  };

  /**
   * Close success modal
   */
  const closeModal = () => {
    if (!successModal) return;
    
    successModal.classList.remove('show');
    document.body.style.overflow = '';
  };

  return { init };
})();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  ContactForm.init();
});
