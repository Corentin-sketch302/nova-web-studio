const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Ouvrir le menu');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.getElementById('form-status');
  // Remplacer cette adresse par votre adresse professionnelle AVANT d'activer le contact.
  const destination = 'corentingalletdesaintaurin@gmail.com';
  if (destination === 'VOTRE-EMAIL@EXEMPLE.COM') {
    status.textContent = 'Formulaire en démonstration : configurez votre adresse e-mail dans script.js avant de recevoir des demandes.';
    return;
  }
  const data = new FormData(form);
  const subject = 'Demande de site web - ' + String(data.get('company') || 'Nouveau contact');
  const body = `Nom : ${data.get('name')}\nE-mail : ${data.get('email')}\nActivité : ${data.get('company')}\n\nProjet :\n${data.get('message')}`;
  const mailto = `mailto:${destination}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  status.textContent = 'Votre application de messagerie devrait s’ouvrir. Vérifiez puis envoyez votre e-mail.';
});
