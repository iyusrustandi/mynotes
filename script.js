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
