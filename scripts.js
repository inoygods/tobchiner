
const profilesData = [
  {
    name: "Алина",
    city: "donetsk",
    age: 22,
    telegram: "@alina",
    image: "assets/alina.jpg",
    page: "alina.html"
  },
  {
    name: "Марина",
    city: "lugansk",
    age: 25,
    telegram: "@marina",
    image: "assets/marina.jpg",
    page: "marina.html"
  },
  {
    name: "Олег",
    city: "mariupol",
    age: 55,
    telegram: "@oleg",
    image: "assets/oleg.jpg",
    page: "oleg.html"
  },
  {
    name: "Полина",
    city: "gorlovka",
    age: 15,
    telegram: "@polina",
    image: "assets/polina.jpg",
    page: "polina.html"
  }
];

function renderProfiles(filterCity = 'all') {
  const container = document.getElementById('profiles');
  container.innerHTML = '';
  profilesData.forEach(profile => {
    if (filterCity === 'all' || profile.city === filterCity) {
      const card = document.createElement('div');
      card.className = 'profile-card';
      card.innerHTML = `
        <a href="profiles/${profile.page}">
          <img src="${profile.image}" alt="${profile.name}">
          <h2>${profile.name}, ${profile.age}</h2>
          <p>${profile.city.charAt(0).toUpperCase() + profile.city.slice(1)}</p>
          <p>Telegram: ${profile.telegram}</p>
        </a>
      `;
      container.appendChild(card);
    }
  });
}

function filterProfiles(city) {
  renderProfiles(city);
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfiles();
});
