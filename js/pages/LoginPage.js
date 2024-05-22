import { login } from '../services/auth.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#login-form');
  const errorMessage = document.querySelector('#error-message');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    try {
      console.log('Form submitted');
      const user = await login(username, password);

      if (user.admin === true) {
        // Redirigeix a la pàgina d'administrador
        window.location.href = '../../src/index.html';
      } else {
        // Redirigeix a la pàgina d'usuari normal
        window.location.href = '../../src/models/models.html';
      }
    } catch (error) {
      console.error(error);
      errorMessage.textContent = 'Login failed. Please try again.';
      errorMessage.style.display = 'block';
    }
  });
});