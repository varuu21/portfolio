  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav ul.nav-list li a');

  function setActiveLink() {
    let index = sections.length;
    while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
  }
  setActiveLink();
  window.addEventListener('scroll', setActiveLink);
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you shortly.');
    form.reset();
  });