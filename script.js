function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function openProfile(name, desc, img) {
  document.getElementById('profileName').innerText = name;
  document.getElementById('profileDesc').innerText = desc;
  document.getElementById('profileImage').src = img;
  document.getElementById('profileDetail').classList.add('active');
}

function closeProfile() {
  document.getElementById('profileDetail').classList.remove('active');
}

function filterProfiles(city) {
  const tabs = document.querySelectorAll('.city-tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  const cards = document.querySelectorAll('.profile-card');
  cards.forEach(card => {
    if (city === 'all' || card.dataset.city === city) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
