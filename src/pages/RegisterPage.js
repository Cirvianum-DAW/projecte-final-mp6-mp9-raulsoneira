// js/pages/RegisterPage.js

import { register } from '../services/auth.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#register-form');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      await register(username, password);
      alert('Registration successful! Please log in.');
      window.location.href = 'login.html';
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  });
});
