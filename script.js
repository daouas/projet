document.getElementById('mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    // Optional: Save the current mode in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Optional: Load the saved theme from local storage
window.onload = function () {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
};