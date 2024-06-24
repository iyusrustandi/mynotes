document.addEventListener('DOMContentLoaded', () => {
  const readMoreLinks = document.querySelectorAll('.read-more');
  const showLessLinks = document.querySelectorAll('.show-less');

  function truncateText(element, wordLimit) {
    const originalText = element.innerHTML;
    const words = originalText.split(/\s+/);
    if (words.length > wordLimit) {
      const truncatedText = words.slice(0, wordLimit).join(' ') + '...';
      element.dataset.fullText = originalText; // Store the full text
      element.innerHTML = truncatedText;
    }
  }

  // Find all <p> elements within the cards and truncate their text
  const paragraphs = document.querySelectorAll('div.flex.flex-col.gap-2.py-2 > p');
  paragraphs.forEach((paragraph) => truncateText(paragraph, 20));

  readMoreLinks.forEach((link) => {
    const targetId = link.getAttribute('data-target');
    const targetP = document.getElementById(targetId);

    link.addEventListener('click', (event) => {
      event.preventDefault();
      targetP.innerHTML = targetP.dataset.fullText; // Restore the full text
      link.style.display = 'none';
      document.querySelector(`.show-less[data-target="${targetId}"]`).style.display = 'inline-flex';
    });
  });

  showLessLinks.forEach((link) => {
    const targetId = link.getAttribute('data-target');
    const targetP = document.getElementById(targetId);

    link.addEventListener('click', (event) => {
      event.preventDefault();
      truncateText(targetP, 20);
      link.style.display = 'none';
      document.querySelector(`.read-more[data-target="${targetId}"]`).style.display = 'inline-flex';
    });
  });

  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach((card) => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
