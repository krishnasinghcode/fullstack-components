export const showToast = (message, type = 'info') => {
  const toastContainer = document.getElementById('toast-container');

  const toast = document.createElement('div');
  toast.className = `alert alert-${type}`;
  toast.innerHTML = `<span>${message}</span>`;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};
