// js/components/Navbar.js

import { isAdmin, logout } from '../services/auth.js';

document.addEventListener('DOMContentLoaded', function() {
  const manageUsersLink = document.getElementById('manage-users-link');
  const logoutButton = document.getElementById('logout-button');

  // Show the "Manage Users" link if the user is an admin
  if (isAdmin()) {
    manageUsersLink.classList.remove('hidden');
  }

  // Handle logout
  if (logoutButton) {
    logoutButton.addEventListener('click', function() {
      logout();
      window.location.href = '/login.html';
    });
  }
});
