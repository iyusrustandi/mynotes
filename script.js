document.addEventListener('DOMContentLoaded', function () {
  const descriptions = document.querySelectorAll('.note-description');
  const charLimit = 50; // Set your character limit here

  descriptions.forEach((description) => {
    const fullText = description.getAttribute('data-full-text');
    if (fullText.length > charLimit) {
      description.innerText = fullText.slice(0, charLimit) + '...';
    }

    const readMoreButton = description.nextElementSibling;
    readMoreButton.addEventListener('click', function () {
      if (readMoreButton.innerText === 'Read More') {
        description.innerText = fullText;
        readMoreButton.innerText = 'Read Less';
      } else {
        description.innerText = fullText.slice(0, charLimit) + '...';
        readMoreButton.innerText = 'Read More';
      }
    });
  });

  document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const query = document.getElementById('search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.note-card');

    cards.forEach((card) => {
      const title = card.querySelector('#notes-title').innerText.toLowerCase();
      if (title.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

document.getElementById('search-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah pengiriman form

  const query = document.getElementById('search-input').value.toLowerCase();
  const cards = document.querySelectorAll('.note-card');

  cards.forEach((card) => {
    const title = card.querySelector('#notes-title').innerText.toLowerCase();
    if (title.includes(query)) {
      card.style.display = 'block'; // Menampilkan card yang sesuai
    } else {
      card.style.display = 'none'; // Menyembunyikan card yang tidak sesuai
    }
  });
});
