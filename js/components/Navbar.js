// js/components/Navbar.js

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', function() {
        localStorage.removeItem('isAuthenticated');
        window.location.href = '/src/login.html';
      });
    }
  });
  