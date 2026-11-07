const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');

if (menuToggle && navigation) {
  menuToggle.hidden = false;

  function setMenu(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  }

  menuToggle.addEventListener('click', () => {
    setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  const desktop = window.matchMedia('(min-width: 801px)');
  desktop.addEventListener('change', () => setMenu(false));
}

const booking = document.querySelector('[data-booking]');

if (booking) {
  const kind = booking.elements.namedItem('anlass');
  const requestedKind = new URLSearchParams(location.search).get('anlass');

  if (requestedKind && Array.from(kind.options).some((option) => option.value === requestedKind)) {
    kind.value = requestedKind;
  }

  if (booking.hasAttribute('data-netlify')) {
    const previewNote = document.getElementById('form-preview');
    previewNote.hidden = false;
    booking.querySelector('button[type="submit"]').disabled = true;
    booking.addEventListener('submit', (event) => event.preventDefault());
  }
}
