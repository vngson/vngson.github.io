// Get buttonSeeMore and tags introduction, moreInformation
var buttonSeeMore = document.querySelector(".introduction__see-more");
var introduction = document.querySelector(".introduction");
var moreInformation = document.querySelector(".more-information");

var handleClickSeeMore = function () {
    // Hide tag A by setting display to none
    introduction.style.display = "none";
    // Show tag B by setting display to block
    moreInformation.style.display = "flex";
}

// Email sending function
// function sendEmail() {
//   // Get data from input fields
//   var nameInput = document.getElementsByName("name")[0].value;
//   var emailInput = document.getElementsByName("email")[0].value;
//   var messageInput = document.getElementsByName("message")[0].value;

//   // Set up SMTP information
//   const smtpConfig = {
//     host: "smtp.gmail.com",
//     port: 587,
//     username: "sonvo1611@gmail.com",
//     password: "Sonkb12102002",
//   };

//   // Create Email object
//   const emailObj = new Email({
//     from: "sonvo1611@gmail.com",
//     to: "sonvo1611@gmail.com",
//     subject: "Notification from website",
//     message: `
//       Name: ${nameInput}
//       Email: ${emailInput}
//       Content: ${messageInput}
//     `,
//   });

//   // Send email
//   emailObj.send(smtpConfig);

//   // Create confirmation Email object
//   const emailObjConfirm = new Email({
//     from: "sonvo1611@gmail.com",
//     to: emailInput,
//     subject: "Message received confirmation",
//     message: `
//       Hello,

//       We have received your message. We will respond as soon as possible.

//       Thank you!
//     `,
//   });

//   // Send confirmation email
//   emailObjConfirm.send(smtpConfig);
// }

// var sendEmail = function() {
//     var nameInput = document.getElementsByName("name")[0].value;
//     var emailInput = document.getElementsByName("email")[0].value;
//     var messageInput = document.getElementsByName("message")[0].value;

//     var to = "sonvo1611@gmail.com";

//     var subject = "Contact from submission";
//     var body = "You have received a message from " + nameInput + " message "+ messageInput ;

//     Email.send({
//         SecureToken: "token",
//         To: to,
//         From: email,
//         Subject: subject,
//         Body: body,
//     }).then(function (message) {
//         alert("Thank you for contacting us. We will get back to you soon.");
//     });
// }

// Get elements to process
const sections = document.querySelectorAll(".content__page");
const navItems = document.querySelectorAll(".side-bar__menu--item");

// Function to check if an element is within the visible viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // Change condition to return true when top or bottom is within window height
  return (
    (rect.top >= 0 && rect.top <= windowHeight) ||
    (rect.bottom >= 0 && rect.bottom <= windowHeight)
  );
}

// Function to handle scroll
function handleScroll() {
  // Declare a variable to store the index of the first visible section
  let visibleIndex = -1;
  // Iterate through section elements
  sections.forEach((section, index) => {
    // Check if section is within visible viewport
    if (isInViewport(section)) {
      // If yes, assign section index to visibleIndex
      visibleIndex = index;
      // Stop loop
      return;
    }
  });
  // If there is a visible section
  if (visibleIndex !== -1) {
    // Iterate through nav items
    navItems.forEach((navItem, index) => {
      // If nav item index equals visible section index
      if (index === visibleIndex) {
        // Add active class to nav item
        navItem.classList.add("active");
      } else {
        // Otherwise, remove active class from nav item
        navItem.classList.remove("active");
      }
    });
  }
}

// Add scroll event to window and call handleScroll
// window.addEventListener("scroll", handleScroll);

// ============================================
// PARTICLE EFFECTS
// ============================================

class ParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.particleCount = 50;
    this.init();
  }

  init() {
    // Create particles container
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    this.container.insertBefore(particlesContainer, this.container.firstChild);

    // Create particles
    for (let i = 0; i < this.particleCount; i++) {
      this.createParticle(particlesContainer);
    }

    // Animate particles
    this.animateParticles();

    // Mouse interaction
    this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e));
  }

  createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    // Random size
    const size = Math.random() * 4 + 2;

    // Random animation duration
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    particle.style.opacity = Math.random() * 0.5 + 0.2;

    container.appendChild(particle);

    this.particles.push({
      element: particle,
      baseX: x,
      baseY: y,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5
    });
  }

  animateParticles() {
    this.particles.forEach(particle => {
      particle.baseX += particle.speedX;
      particle.baseY += particle.speedY;

      // Boundary check
      if (particle.baseX < 0 || particle.baseX > 100) particle.speedX *= -1;
      if (particle.baseY < 0 || particle.baseY > 100) particle.speedY *= -1;

      particle.element.style.left = `${particle.baseX}%`;
      particle.element.style.top = `${particle.baseY}%`;
    });

    requestAnimationFrame(() => this.animateParticles());
  }

  handleMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    this.particles.forEach(particle => {
      const particleX = (particle.baseX / 100) * rect.width;
      const particleY = (particle.baseY / 100) * rect.height;

      const dx = mouseX - particleX;
      const dy = mouseY - particleY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        const force = (150 - distance) / 150;
        const angle = Math.atan2(dy, dx);

        particle.baseX -= Math.cos(angle) * force * 0.5;
        particle.baseY -= Math.sin(angle) * force * 0.5;
      }
    });
  }
}

// Initialize particle system on hero section
const heroSection = document.querySelector('.introduction');
if (heroSection) {
  new ParticleSystem(heroSection);
}

// Initialize particles on home page if particles container exists
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  createFloatingParticles(particlesContainer);
}

function createFloatingParticles(container) {
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 6 + 3;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 10;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    particle.style.opacity = Math.random() * 0.6 + 0.2;

    container.appendChild(particle);
  }
}

// ============================================
// TYPING EFFECT FOR ROLES
// ============================================

class RoleTypingEffect {
  constructor(element, roles, speed = 100) {
    this.element = element;
    this.roles = roles;
    this.speed = speed;
    this.currentRoleIndex = 0;
    this.currentText = '';
    this.isDeleting = false;
    this.init();
  }

  init() {
    this.type();
  }

  type() {
    const currentRole = this.roles[this.currentRoleIndex];
    const fullText = currentRole;

    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    this.element.textContent = this.currentText;

    let typeSpeed = this.speed;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.currentText === fullText) {
      typeSpeed = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize role typing effect
const typingRoleElement = document.getElementById('typing-role');
if (typingRoleElement) {
  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Code Creator'
  ];
  new RoleTypingEffect(typingRoleElement, roles, 80);
}

// ============================================
// NEURAL MESH BACKGROUND
// ============================================

class NeuralMesh {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.points = [];
    this.pointCount = 60;
    this.connectionDistance = 150;
    this.mouseDistance = 200;

    this.resize();
    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.initPoints();
  }

  initPoints() {
    this.points = [];
    for (let i = 0; i < this.pointCount; i++) {
      this.points.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
  }

  init() {
    this.initPoints();
  }

  handleMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  update() {
    this.points.forEach(point => {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < 0 || point.x > this.canvas.width) point.vx *= -1;
      if (point.y < 0 || point.y > this.canvas.height) point.vy *= -1;

      // Mouse interaction
      if (this.mouseX && this.mouseY) {
        const dx = this.mouseX - point.x;
        const dy = this.mouseY - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouseDistance) {
          const force = (this.mouseDistance - dist) / this.mouseDistance;
          point.vx += (dx / dist) * force * 0.02;
          point.vy += (dy / dist) * force * 0.02;
        }
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw connections
    for (let i = 0; i < this.points.length; i++) {
      for (let j = i + 1; j < this.points.length; j++) {
        const p1 = this.points[i];
        const p2 = this.points[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.connectionDistance) {
          const opacity = 1 - dist / this.connectionDistance;
          this.ctx.strokeStyle = `rgba(14, 165, 233, ${opacity * 0.3})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    // Draw points
    this.points.forEach(point => {
      this.ctx.fillStyle = 'rgba(99, 102, 241, 0.6)';
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize neural mesh on home page
const neuralMeshCanvas = document.getElementById('neural-mesh');
if (neuralMeshCanvas) {
  new NeuralMesh(neuralMeshCanvas);
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

class ScrollReveal {
  constructor() {
    this.elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    this.init();
  }

  init() {
    this.checkElements();

    window.addEventListener('scroll', () => {
      this.checkElements();
    });

    // Initial check
    setTimeout(() => this.checkElements(), 100);
  }

  checkElements() {
    this.elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add('active');
      }
    });
  }
}

// Initialize scroll reveal
const scrollReveal = new ScrollReveal();

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================

class MagneticButton {
  constructor(button) {
    this.button = button;
    this.init();
  }

  init() {
    this.button.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.button.addEventListener('mouseleave', () => this.handleMouseLeave());
  }

  handleMouseMove(e) {
    const rect = this.button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const strength = 0.3;
    this.button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  handleMouseLeave() {
    this.button.style.transform = 'translate(0, 0)';
  }
}

// Initialize magnetic buttons
document.querySelectorAll('.introduction__see-more').forEach(button => {
  new MagneticButton(button);
});

// ============================================
// TYPING EFFECT FOR GREETING
// ============================================

class TypingEffect {
  constructor(element, text, speed = 100) {
    this.element = element;
    this.text = text;
    this.speed = speed;
    this.index = 0;
    this.init();
  }

  init() {
    this.element.textContent = '';
    this.type();
  }

  type() {
    if (this.index < this.text.length) {
      this.element.textContent += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    }
  }
}

// Initialize typing effect on greeting
const greetingElement = document.querySelector('.introduction__greeting');
if (greetingElement && window.getComputedStyle(greetingElement).display !== 'none') {
  const originalText = greetingElement.textContent;
  new TypingEffect(greetingElement, originalText, 80);
}

// ============================================
// PARALLAX EFFECT ON SCROLL
// ============================================

class ParallaxEffect {
  constructor() {
    this.elements = document.querySelectorAll('[data-parallax]');
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const scrollY = window.scrollY;

    this.elements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax'));
      element.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }
}

// Initialize parallax
new ParallaxEffect();
