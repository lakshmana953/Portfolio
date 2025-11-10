/* ===========================
   SMOOTH SCROLL, FADE-IN, BACK TO TOP & PROGRESS BAR
=========================== */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // Fade-in effect for elements with .fade-in class
  const fadeElems = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeElems.forEach(elem => observer.observe(elem));

  // Back to Top Button functionality
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Create and append scroll progress bar
  const progressContainer = document.createElement('div');
  progressContainer.id = 'progressBarContainer';

  const progressBar = document.createElement('div');
  progressBar.id = 'progressBar';

  progressContainer.appendChild(progressBar);
  document.body.prepend(progressContainer);

  // Scroll progress logic
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  });
});

// Fade-in animation styles injected dynamically
const style = document.createElement('style');
style.innerHTML = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;


document.addEventListener("DOMContentLoaded", () => {
  const roles = [
    "Software Developer",
    "Full-Stack Developer",
    "Automation Engineer"
  ];

  const roleElement = document.getElementById("dynamic-role");
  let index = 0;

  setInterval(() => {
    roleElement.classList.add("fade-out");
    setTimeout(() => {
      index = (index + 1) % roles.length;
      roleElement.textContent = roles[index];
      roleElement.classList.remove("fade-out");
      roleElement.classList.add("fade-in");
    }, 250); // fade out duration (0.25s)
  }, 1000); // switch every 1 second
});
