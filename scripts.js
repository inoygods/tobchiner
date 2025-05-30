function filterProfiles(city) {
  const cards = document.querySelectorAll('.profile-card');
  cards.forEach(card => {
    const match = card.dataset.city === city || city === 'all';
    card.style.display = match ? 'block' : 'none';
  });
}
