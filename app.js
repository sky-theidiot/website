// Particle Animation
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    const startPositionX = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${startPositionX}%`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    particlesContainer.appendChild(particle);
  }
}

// Navbar Scroll Effect
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile Navigation Toggle
function handleMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Smooth Scroll for Navigation Links
function handleSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Intersection Observer for Scroll Animations
function handleScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Timeline Item Animations with Stagger Effect
function animateTimelineItems() {
  const timelineItems = document.querySelectorAll('.vertical-timeline-item');
  
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // Stagger animation
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  timelineItems.forEach(item => {
    observer.observe(item);
  });
}

// Skill Bar Animations
function animateSkillBars() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillItem = entry.target;
        const progressBar = skillItem.querySelector('.skill-progress');
        const progress = progressBar.getAttribute('data-progress');
        
        skillItem.classList.add('visible');
        progressBar.style.setProperty('--progress-width', `${progress}%`);
        progressBar.style.width = `${progress}%`;
        
        observer.unobserve(skillItem);
      }
    });
  }, observerOptions);
  
  skillItems.forEach(item => {
    observer.observe(item);
  });
}

// Card Tilt Effect
function handleCardTilt() {
  const cards = document.querySelectorAll('[data-tilt]');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// Button Click Animation
function handleButtonAnimations() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Active Navigation Link on Scroll
function handleActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= (sectionTop - navbarHeight - 100)) {
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
}

// Parallax Effect for Hero Section
function handleParallax() {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
}

// Gallery Data
const galleryData = [
  {
    title: 'Tweaker: Energized',
    description: 'Scene from Tweaker Energized showing character in indoor setting',
    year: '2023',
    scene: 'Scene from indoor setting',
    image: './Screenshot-2025-10-29-123920.jpg',
    alt: 'Scene from Tweaker Energized showing character in indoor setting'
  },
  {
    title: 'Tweaker: Energized',
    description: 'Scene from Tweaker Energized showing outdoor park setting',
    year: '2023',
    scene: 'Scene from outdoor park setting',
    image: './Screenshot-2025-10-29-123847.jpg',
    alt: 'Scene from Tweaker Energized showing outdoor park setting'
  },
  {
    title: 'Eternal',
    description: 'Eternal (2024) - Short Horror Film',
    year: '2024',
    scene: 'Horror film - skull prop scene',
    image: './Screenshot-2025-10-29-124042.jpg',
    alt: 'Scene from Eternal showing skull prop'
  },
  {
    title: 'Eternal',
    description: 'Eternal (2024) - Short Horror Film',
    year: '2024',
    scene: 'Horror film - character scene',
    image: './Screenshot-2025-10-29-124001.jpg',
    alt: 'Scene from Eternal showing character in purple hoodie'
  },
  {
    title: 'Silence Your Phone AD',
    description: 'Silence Your Phone AD (2025) - Short Horror',
    year: '2025',
    scene: 'Latest horror short - dramatic moment',
    image: './Screenshot-2025-10-29-123804.jpg',
    alt: 'Scene from Silence Your Phone AD showing dramatic character moment'
  },
  {
    title: 'Silence Your Phone AD',
    description: 'Silence Your Phone AD (2025) - Short Horror',
    year: '2025',
    scene: 'Atmospheric night cinematography',
    image: './Screenshot-2025-10-29-123733.jpg',
    alt: 'Scene from Silence Your Phone AD showing atmospheric night cinematography'
  }
];

let currentLightboxIndex = 0;

// Open Lightbox
function openLightbox(index) {
  currentLightboxIndex = index;
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
  updateLightboxContent();
}

// Close Lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// Navigate Lightbox
function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = galleryData.length - 1;
  } else if (currentLightboxIndex >= galleryData.length) {
    currentLightboxIndex = 0;
  }
  
  updateLightboxContent();
}

// Update Lightbox Content
function updateLightboxContent() {
  const data = galleryData[currentLightboxIndex];
  
  const lightboxImage = document.getElementById('lightboxImage');
  if (lightboxImage) {
    lightboxImage.src = data.image;
    lightboxImage.alt = data.alt;
  }
  
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDescription = document.getElementById('lightboxDescription');
  
  if (lightboxTitle) {
    lightboxTitle.textContent = data.title;
  }
  if (lightboxDescription) {
    lightboxDescription.textContent = data.description;
  }
}

// Close lightbox on escape key
function handleLightboxKeys() {
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      }
    }
  });
}

// Close lightbox when clicking outside the content
function handleLightboxClick() {
  const lightbox = document.getElementById('lightbox');
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Make functions globally available
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.navigateLightbox = navigateLightbox;

// Add CSS for ripple effect dynamically
function addRippleStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s ease-out;
      pointer-events: none;
    }
    
    @keyframes ripple-animation {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize all functionality
function init() {
  createParticles();
  handleNavbarScroll();
  handleMobileNav();
  handleSmoothScroll();
  handleScrollAnimations();
  animateTimelineItems();
  animateSkillBars();
  handleCardTilt();
  handleButtonAnimations();
  handleActiveNavLink();
  handleParallax();
  addRippleStyles();
  handleLightboxKeys();
  handleLightboxClick();
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}