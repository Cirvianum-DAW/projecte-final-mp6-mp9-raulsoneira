// js/pages/models.js

import { getMotos, deleteMoto } from '../services/moto.js';

document.addEventListener('DOMContentLoaded', async function () {
  const motoContainer = document.getElementById('moto-container');
  const searchInput = document.getElementById('search');
  const filterSelect = document.getElementById('filter');
  const notification = document.getElementById('notification');

  let motos = [];

  // Function to render motos
  async function renderMotos(filter = '', search = '') {
    motoContainer.innerHTML = '';
    const filteredMotos = motos.filter((moto) => {
      const matchesFilter = filter === '' || moto.model === filter;
      const matchesSearch =
        search === '' || moto.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });

    filteredMotos.forEach((moto) => {
      const motoElement = document.createElement('div');
      motoElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md');

      motoElement.innerHTML = `
        <img src="/img/${moto.img}.webp" alt="${moto.name}" class="w-full h-48 object-cover rounded mb-4">
        <h3 class="text-xl font-bold mb-2">${moto.name}</h3>
        <p class="text-gray-700 mb-2">${moto.model}</p>
        <p class="text-gray-600 mb-2">${moto.descripcio}</p>
        <a href="editMoto.html?id=${moto.id}" class="edit-moto bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</a>
        <button class="delete-moto bg-red-500 text-white px-4 py-2 rounded" data-id="${moto.id}">Delete</button>
      `;

      motoContainer.appendChild(motoElement);
    });

    // Add event listeners for delete buttons
    document.querySelectorAll('.delete-moto').forEach((button) => {
      button.addEventListener('click', async function () {
        const id = this.getAttribute('data-id');
        await deleteMoto(id);
        showNotification('Moto eliminada correctament');
        await loadMotos();
        renderMotos(filterSelect.value, searchInput.value);
      });
    });
  }

  async function loadMotos() {
    motos = await getMotos();
  }

  // Show notification
  function showNotification(message) {
    notification.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
      notification.classList.add('hidden');
    }, 3000);
  }

  // Initial load and render
  await loadMotos();
  renderMotos();

  // Event listeners for search and filter
  searchInput.addEventListener('input', () => {
    renderMotos(filterSelect.value, searchInput.value);
  });

  filterSelect.addEventListener('change', () => {
    renderMotos(filterSelect.value, searchInput.value);
  });
});
