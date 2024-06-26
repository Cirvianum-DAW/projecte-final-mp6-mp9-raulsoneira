import fetchFromApi from './fetchAPI.js';
import { createUser } from './user.js';

async function login(username, password) {
  console.log('login');
  // Fetch all users
  const users = await fetchFromApi('users');

  // Find the user with the matching username
  const user = users.find((user) => user.username === username);

  // If the user exists and the password is correct
  if (user && user.password === password) {
    // Store user data in localStorage
    user.isLoggedIn = true;

    localStorage.setItem('user', JSON.stringify(user));

    return user;
  }

  throw new Error('Login failed');
}

async function register(username, password) {
  console.log('register');
  const newUser = {
    username,
    password,
    admin: false, // Assign 'user' role by default
  };

  return createUser(newUser);
}

function logout() {
  localStorage.removeItem('isAuthenticated');
}

// Check if the user is authenticated
function isAuthenticated() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user && user.isLoggedIn === true;
}

function isAdmin() {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.admin : false;
}

export { login, logout, isAuthenticated, register, isAdmin };
