document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');

  if (header) {
    const isHomePage = ["/", "/index.html"].includes(window.location.pathname.replace(/\/+$/, "")) || window.location.pathname === "";

    const toggleHeader = () => {
      const shouldShow = isHomePage ? window.scrollY > 12 : true;
      header.classList.toggle('is-visible', shouldShow);
    };

    toggleHeader();
    if (isHomePage) {
      window.addEventListener('scroll', toggleHeader, { passive: true });
    }
  }

  const form = document.getElementById('registerForm');

  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || formData.get('author') || '').toString().trim();
    const title = (formData.get('title') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();

    if ((!name && !title) || !email) {
      alert('Please complete the required fields before submitting.');
      return;
    }

    const button = form.querySelector('button');
    const previousText = button.textContent;
    button.textContent = 'Submitted';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = previousText;
      button.disabled = false;
      form.reset();
    }, 1800);
  });
});
