if (sessionStorage.getItem('showPopup') === 'true') {
  showPopup();  // Show the popup if the flag is true

  // Reset the flag to ensure the popup only shows once
  sessionStorage.setItem('showPopup', 'false');
}

// Show the popup
function showPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('popup-show'); // Show the popup

  // After 3 seconds, hide the popup
  setTimeout(() => {
    popup.classList.remove('popup-show'); // Hide the popup
  }, 4000);
}