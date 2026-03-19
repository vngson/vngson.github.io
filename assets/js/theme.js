/**
 * Theme Switcher
 * Handles light/dark mode toggle with localStorage persistence
 */

(function() {
    const THEME_KEY = 'theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';

    const themeToggle = document.getElementById('theme-toggle');

    /**
     * Get saved theme or prefer system theme
     */
    function getInitialTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) {
            return savedTheme;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return DARK_THEME;
        }

        return LIGHT_THEME;
    }

    /**
     * Set theme on document
     */
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);

        // Update icon - read icon each time to ensure it's updated correctly
        const icon = themeToggle ? themeToggle.querySelector('i') : null;
        if (icon) {
            // Remove all existing icon classes and add the correct ones
            icon.className = '';
            icon.classList.add('fa-solid');
            if (theme === DARK_THEME) {
                icon.classList.add('fa-sun');
            } else {
                icon.classList.add('fa-moon');
            }
        }
    }

    /**
     * Toggle between light and dark themes
     */
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        setTheme(newTheme);
    }

    // Initialize theme on page load - wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', () => {
        const initialTheme = getInitialTheme();
        setTheme(initialTheme);

        // Add click handler
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    });

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only switch if user hasn't set a preference
            if (!localStorage.getItem(THEME_KEY)) {
                setTheme(e.matches ? DARK_THEME : LIGHT_THEME);
            }
        });
    }
})();
