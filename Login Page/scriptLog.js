const popup = document.getElementById('popup');
  popup.classList.add('popup-show'); // Show the popup

  // Hide popup after 3 seconds and redirect to login page
  setTimeout(() => {
    popup.classList.remove('popup-show'); // Hide the popup
  }, 3000);