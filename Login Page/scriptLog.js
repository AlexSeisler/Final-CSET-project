const popup = document.getElementById('popup');
  popup.classList.remove('hidden'); // Show the popup

  // Hide popup after 3 seconds and redirect to login page
  setTimeout(() => {
    popup.classList.add('hidden'); // Hide the popup
  }, 3000);