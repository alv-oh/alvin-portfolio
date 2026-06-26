// gallery.js — Filterable projects gallery

// Get all the filter buttons (All, Mobile, Backend, Academic)
const filterButtons = document.querySelectorAll('.filter-btn');

// Get all the project cards in the gallery
const projectItems = document.querySelectorAll('.project-item');

// Run this function whenever a filter button is clicked
function handleFilterClick(event) {
  const clickedButton = event.target;
  const selectedCategory = clickedButton.getAttribute('data-filter');

  // Update which button looks "active" (highlighted)
  filterButtons.forEach(btn => btn.classList.remove('active'));
  clickedButton.classList.add('active');

  // Loop through every project card and decide whether to show or hide it
  projectItems.forEach(item => {
    const itemCategories = item.getAttribute('data-category');

    // "all" always shows everything.
    // Otherwise, only show the card if its category list contains the selected filter.
    if (selectedCategory === 'all' || itemCategories.includes(selectedCategory)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Attach the click handler to every filter button
filterButtons.forEach(button => {
  button.addEventListener('click', handleFilterClick);
});