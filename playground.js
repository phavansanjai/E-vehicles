document.addEventListener('DOMContentLoaded', () => {
    // Function to handle login
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        // Example credentials
        const validUsername = 'user';
        const validPassword = 'password123';

        if (username === validUsername && password === validPassword) {
            // Redirect to the dashboard page
            window.location.href = 'dashboard.html';
        } else {
            // Show an error message
            alert('Invalid username or password. Please try again.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Highlight the current page in the navigation bar
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        // Example credentials
        const validUsername = 'user';
        const validPassword = 'password123';

        if (username === validUsername && password === validPassword) {
            // Save the session in local storage
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('username', username);

            // Redirect to the dashboard page
            window.location.href = 'dashboard.html';
        } else {
            // Show an error message
            alert('Invalid username or password. Please try again.');
        }
    });

    // Check if the user is already logged in
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn) {
        // Automatically redirect to the dashboard
        window.location.href = 'dashboard.html';
    }

    // Navigation bar highlighting
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
