      // Verificar si l'usuari està autenticat
      document.addEventListener('DOMContentLoaded', function () {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (!isAuthenticated) window.location.href = '/login.html';
      });