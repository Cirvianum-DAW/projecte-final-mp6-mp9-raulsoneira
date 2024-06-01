// js/pages/RegisterPage.js

import { register } from '../services/auth.js';
import { getUsers } from '../services/user.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#register-form');
  const errorMessage = document.querySelector('#error-message');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;

    if (!username || !password || !confirmPassword) {
      showError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      // Comprova si el nom d'usuari ja existeix
      const users = await getUsers();
      const userExists = users.some((user) => user.username === username);

      if (userExists) {
        alert('Username already exists');
        return;
      }

      await register(username, password);
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html';
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
      errorMessage.classList.add('hidden');
    }, 5000);
  }
});
