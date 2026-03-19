// ============================================
// CONTACT FORM ENHANCEMENTS
// ============================================

// Form Success/Failure Animation with Checkmark
function showFormSuccess() {
  const formSuccess = document.getElementById('form-success');
  formSuccess.classList.add('show');

  setTimeout(() => {
    formSuccess.classList.remove('show');
  }, 3000);
}

function showFormError(message) {
  const formSuccess = document.getElementById('form-success');
  const formWrapper = document.querySelector('.content__contact-page--contact__wrapper');

  // Remove success animation
  formSuccess.classList.remove('show');

  // Add error animation
  formWrapper.classList.add('form-error');

  // Change button text
  const submitBtn = document.querySelector('.content__contact-page--contact__submit-btn');
  submitBtn.textContent = 'Try Again';
  submitBtn.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, rgba(244, 67, 54, 0.4) 100%)';

  // Show error message
  if (message) {
    const errorMsg = document.createElement('div');
    errorMsg.className = 'form-error-message';
    errorMsg.innerHTML = `<i class="fa-solid fa-exclamation-circle"></i> ${message}`;
    formWrapper.insertBefore(errorMsg, formWrapper.firstChild);
  }

  setTimeout(() => {
    formWrapper.classList.remove('form-error');
  }, 5000);
}

// ============================================
// CONTACT FORM SUBMISSION
// ============================================

// Initialize Contact Page on Load
document.addEventListener('DOMContentLoaded', function() {
  initContactAnimations();
  initSocialHoverEffects();
});

function initContactAnimations() {
  // Animate contact cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.contact-info-card').forEach(card => {
    observer.observe(card);
  });
}

function initSocialHoverEffects() {
  // Add smooth hover effects to social links
  const socialLinks = document.querySelectorAll('.contact-link');

  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function(e) {
      const icon = this.querySelector('i');
      const rect = this.getBoundingClientRect();

      // Create tooltip
      const tooltip = document.createElement('div');
      tooltip.className = 'social-tooltip';
      tooltip.textContent = this.getAttribute('aria-label');
      tooltip.style.cssText = 'white';
      tooltip.style.padding = '8px 12px';
      tooltip.style.background = 'rgba(0, 0, 0, 0.8)';
      tooltip.style.borderRadius = '8px';
      tooltip.style.position = 'absolute';
      tooltip.style.bottom = '100%';
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translateX(-50%) translateY(10px)';
      tooltip.style.opacity = '0';
      tooltip.style.transition = 'all 0.3s ease';
      tooltip.style.pointerEvents = 'none';

      document.body.appendChild(tooltip);

      setTimeout(() => {
        tooltip.style.opacity = '1';
        tooltip.style.transform = 'translateX(-50%) translateY(0)';
      }, 50);

      icon.addEventListener('mouseleave', function() {
        setTimeout(() => {
          tooltip.style.opacity = '0';
          setTimeout(() => {
            tooltip.remove();
          }, 300);
        }, 100);
      });
    });
  });
}

// Make social links accessible
document.querySelectorAll('.contact-link').forEach(link => {
  link.addEventListener('focus', function() {
    this.style.outline = '2px solid #38bdf8';
  });
});

// ============================================
// EXPORT INITIALIZATION
// ============================================

// Initialize functions when module loads
window.initContactFormAnimations = initContactAnimations;
window.initSocialHoverEffects = initSocialHoverEffects;
window.showFormSuccess = showFormSuccess;
window.showFormError = showFormError;