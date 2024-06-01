import { getUser, updateUser, createUser } from '../services/user.js';

// Función para cargar los datos del usuario en el formulario
async function loadUserData(userId) {
  try {
    const user = await getUser(userId);
    document.getElementById('user-id').value = user.id;
    document.getElementById('username').value = user.username;
    document.getElementById('password').value = user.password;
    document.getElementById('is-admin').value = user.admin.toString();
  } catch (error) {
    console.error('Error loading user data:', error);
    document.getElementById('error-message').textContent =
      'Failed to load user data.';
    document.getElementById('error-message').style.display = 'block';
  }
}

// Función para guardar los cambios del usuario
async function saveUser(event) {
  event.preventDefault();

  const userId = document.getElementById('user-id').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const isAdmin = document.getElementById('is-admin').value === 'true';

  try {
    const user = {
      username,
      password,
      admin: isAdmin,
    };

    if (userId) {
      // Editar usuario existente
      await updateUser(userId, user);
    } else {
      // Crear nuevo usuario
      await createUser(user);
    }

    window.location.href = '/users/users.html';
  } catch (error) {
    console.error('Error saving user:', error);
    document.getElementById('error-message').textContent =
      'Failed to save user data.';
    document.getElementById('error-message').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');

  if (userId) {
    document.getElementById('form-title').textContent = 'Edit User';
    loadUserData(userId);
  } else {
    document.getElementById('form-title').textContent = 'Add New User';
  }

  document
    .getElementById('edit-user-form')
    .addEventListener('submit', saveUser);
});
