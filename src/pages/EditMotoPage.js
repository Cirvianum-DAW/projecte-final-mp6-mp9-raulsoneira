// js/pages/EditMotoPage.js

import { createMoto, updateMoto, getMotos } from '../services/moto.js';

document.addEventListener('DOMContentLoaded', async function () {
  const motoForm = document.getElementById('moto-form');
  const motoIdField = document.getElementById('moto-id');
  const nameField = document.getElementById('name');
  const modelField = document.getElementById('model');
  const descripcioField = document.getElementById('descripcio');
  const imgField = document.getElementById('img');
  const notification = document.getElementById('notification');

  // Check if we're editing an existing moto
  const urlParams = new URLSearchParams(window.location.search);
  const motoId = urlParams.get('id');
  if (motoId) {
    const motos = await getMotos();
    const moto = motos.find((m) => m.id === motoId);
    if (moto) {
      motoIdField.value = moto.id;
      nameField.value = moto.name;
      modelField.value = moto.model;
      descripcioField.value = moto.descripcio;
      imgField.value = moto.img;
    }
  }

  // Show notification
  function showNotification(message) {
    notification.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
      notification.classList.add('hidden');
      // Redirect back to models page
      window.location.href = 'models.html';
    }, 1000);
  }

  // Show error message
  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
      errorMessage.classList.add('hidden');
    }, 5000);
  }

  // Handle form submission
  motoForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = nameField.value.trim();
    const model = modelField.value.trim();
    const descripcio = descripcioField.value.trim();
    const img = imgField.value.trim();

    if (!name || !model || !descripcio || !img) {
      showError('All fields are required');
      return;
    }

    const moto = { name, model, descripcio, img };

    try {
      if (motoIdField.value) {
        // Update existing moto
        await updateMoto(motoIdField.value, moto);
        showNotification('Moto actualitzada correctament');
      } else {
        // Create new moto
        await createMoto(moto);
        showNotification('Moto creada correctament');
      }
    } catch (error) {
      console.error('Failed to save the moto:', error);
      alert('Failed to save the moto. Please try again.');
    }
  });
});
