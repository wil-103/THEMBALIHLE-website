
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarLinks = document.getElementById('navbar-links');

  navbarToggle.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
    navbarToggle.classList.toggle('active');
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      navbarLinks.classList.remove('active');
      navbarToggle.classList.remove('active');
    }
  });

  // Active tab highlight based on URL
  const navItems = document.querySelectorAll('.navbar-links a');
  const currentPath = window.location.pathname;
  navItems.forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
      navItems.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });


  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

