import fetchFromApi from './fetchAPI.js';

export async function getUsers() {
  return fetchFromApi('users');
}

export async function deleteUser(id) {
  return fetchFromApi(`users/${id}`, { method: 'DELETE' });
}

export async function updateUser(id, data) {
  return fetchFromApi(`users/${id}`, {
    method: 'PUT',
    body: data,
  });
}

export async function createUser(data) {
  return fetchFromApi('users', {
    method: 'POST',
    body: data,
  });
}

export async function getUser(id) {
  return fetchFromApi(`users/${id}`);
}
