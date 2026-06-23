/**
 * main.js — Dark/Light Mode Toggle
 * 
 * This module manages the theme switching functionality for the portfolio website.
 * It allows users to toggle between dark and light modes, persisting their preference
 * to browser storage for future visits.
 */

// Get the root HTML element to apply theme attributes
const html = document.documentElement;

// Retrieve the saved theme preference from localStorage, default to 'light' if not set
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply the saved (or default) theme to the document on page load
html.setAttribute('data-theme', savedTheme);

// Get a reference to the theme toggle button element
const themeBtn = document.getElementById('theme-btn');

/**
 * Updates the theme toggle button's text to reflect the current theme
 * Shows "Light mode" when currently in dark mode, and "Dark mode" when in light mode
 * This helps users understand what clicking the button will do
 */
function updateButtonText() {
  // Exit early if theme button doesn't exist in the DOM
  if (!themeBtn) return;
  
  // Get the current theme setting from the data-theme attribute
  const current = html.getAttribute('data-theme');
  
  // Update button text based on current theme (opposite of what's selected)
  themeBtn.textContent = current === 'dark' ? 'Light mode' : 'Dark mode';
}

// Initialize button text on page load
updateButtonText();

/**
 * Theme Toggle Event Listener
 * When user clicks the theme button, this handler:
 * 1. Toggles between 'dark' and 'light' themes
 * 2. Applies the new theme to the document
 * 3. Saves the preference to localStorage
 * 4. Updates the button text to reflect the new theme
 */
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    // Get the current theme
    const current = html.getAttribute('data-theme');
    
    // Toggle to opposite theme (dark → light, light → dark)
    const next = current === 'dark' ? 'light' : 'dark';
    
    // Apply the new theme to the document
    html.setAttribute('data-theme', next);
    
    // Save the new theme preference to browser storage
    localStorage.setItem('theme', next);
    
    // Update the button text to reflect the new theme
    updateButtonText();
  });
}