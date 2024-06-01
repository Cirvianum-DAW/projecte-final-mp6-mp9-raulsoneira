import { getUsers, deleteUser } from '../services/user.js';

async function loadUsers() {
  const userContainer = document.getElementById('user-container');
  userContainer.innerHTML = ''; // Clear the container

  try {
    const users = await getUsers();

    users.forEach((user) => {
      const userElement = document.createElement('div');
      userElement.classList.add(
        'bg-white',
        'p-4',
        'rounded',
        'shadow-md',
        'mb-4'
      );

      userElement.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${user.username}</h3>
        <p class="text-gray-700 mb-2">Admin: ${user.admin}</p>
        <a href="editUser.html?id=${user.id}" class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</a>
        <button class="delete-user-button inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700" data-id="${user.id}">Delete</button>
      `;

      userContainer.appendChild(userElement);
    });
  } catch (error) {
    console.error('Error loading users:', error);
  }
}

async function handleDeleteUser(userId) {
  try {
    await deleteUser(userId);
    document.getElementById('notification').textContent =
      'User deleted successfully.';
    document.getElementById('notification').style.display = 'block';
    loadUsers();
  } catch (error) {
    console.error('Error deleting user:', error);
    document.getElementById('notification').textContent =
      'Failed to delete user.';
    document.getElementById('notification').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadUsers();

  document
    .getElementById('user-container')
    .addEventListener('click', async (event) => {
      if (event.target.classList.contains('delete-user-button')) {
        const userId = event.target.getAttribute('data-id');
        if (confirm('Are you sure you want to delete this user?')) {
          await handleDeleteUser(userId);
        }
      }
    });
});
