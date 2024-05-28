// js/pages/index.js

import { getMotos } from '../services/moto.js';

document.addEventListener('DOMContentLoaded', async function() {
  const motoContainer = document.getElementById('moto-container');

  try {
    const motos = await getMotos();

    motos.forEach(moto => {
      const motoElement = document.createElement('div');
      motoElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md');

      motoElement.innerHTML = `
        <img src="/img/${moto.img}.webp" alt="${moto.name}" class="w-full h-48 object-cover rounded mb-4">
        <h3 class="text-xl font-bold mb-2">${moto.name}</h3>
        <p class="text-gray-700 mb-2">${moto.model}</p>
        <p class="text-gray-600">${moto.descripcio}</p>
      `;

      motoContainer.appendChild(motoElement);
    });
  } catch (error) {
    console.error('Error loading motos:', error);
  }
});
