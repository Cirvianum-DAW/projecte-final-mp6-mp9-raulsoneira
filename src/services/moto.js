// js/services/moto.js

import fetchFromApi from './fetchAPI.js';

export async function getMotos() {
  return fetchFromApi('motos');
}
