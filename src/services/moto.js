// js/services/moto.js

import fetchFromApi from './fetchAPI.js';

export async function getMotos() {
  return fetchFromApi('motos');
}

export async function createMoto(moto) {
  return fetchFromApi('motos', {
    method: 'POST',
    body: moto,
  });
}

export async function updateMoto(id, updatedMoto) {
  return fetchFromApi(`motos/${id}`, {
    method: 'PUT',
    body: updatedMoto,
  });
}

export async function deleteMoto(id) {
  return fetchFromApi(`motos/${id}`, {
    method: 'DELETE',
  });
}
