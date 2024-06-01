import { login } from '../services/auth.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#login-form');
  const errorMessage = document.querySelector('#error-message');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    if (!username || !password) {
      showError('Both username and password are required.');
      return;
    }

    try {
      console.log('Form submitted');
      const user = await login(username, password);

      if (user.admin === true) {
        // Establir la sessió
        localStorage.setItem('isAuthenticated', 'true');
        // Redirigeix a la pàgina d'administrador
        window.location.href = '/index.html';
      } else {
        // Establir la sessió
        localStorage.setItem('isAuthenticated', 'true');
        // Redirigeix a la pàgina d'usuari normal
        window.location.href = '/models/models.html';
      }
    } catch (error) {
      console.error(error);
      errorMessage.textContent = 'Login failed. Please try again.';
      errorMessage.style.display = 'block';
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
