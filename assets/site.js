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

  // Netlify inserts this field when it registers the static HTML form.
  const registeredName = booking.querySelector('input[type="hidden"][name="form-name"]');
  if (registeredName?.value !== booking.getAttribute('name')) {
    const status = document.getElementById('form-status');
    const previewHost = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)
      || location.hostname.endsWith('.chatgpt.site');
    if (location.protocol === 'file:' || previewHost) {
      status.textContent = 'Vorschau. Der Versand wird nach der Formularerkennung auf Netlify aktiv.';
    }
    status.hidden = false;
    booking.querySelector('button[type="submit"]').disabled = true;
    booking.addEventListener('submit', (event) => event.preventDefault());
  }
}

const gallery = document.querySelector('[data-gallery]');
const viewer = document.querySelector('.gallery-dialog');

if (gallery && viewer && typeof viewer.showModal === 'function') {
  const enlarged = viewer.querySelector('img');
  const caption = viewer.querySelector('#gallery-dialog-title');

  gallery.addEventListener('click', (event) => {
    const link = event.target.closest('a.gallery-image');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    enlarged.src = link.href;
    enlarged.alt = link.querySelector('img').alt;
    caption.textContent = link.closest('.gallery-item').querySelector('.gallery-name').textContent;
    viewer.showModal();
  });

  viewer.querySelector('.gallery-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
}
