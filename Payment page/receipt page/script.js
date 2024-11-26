document.addEventListener("DOMContentLoaded", () => {
  const loginOverlay = document.getElementById("login-overlay");
  const loginButton = document.getElementById("login-button");
  const usernameInput = document.getElementById("username-input");
  const container = document.querySelector(".container");
  const userNameElement = document.getElementById("user-name");

  const currentOrderBtn = document.getElementById("current-order-btn");
  const pastOrdersBtn = document.getElementById("past-orders-btn");
  const signOutBtn = document.getElementById("sign-out-btn");

  const currentOrderSection = document.getElementById("current-order-section");
  const pastOrdersSection = document.getElementById("past-orders-section");

  const refreshStatusBtn = document.getElementById("refresh-status-btn");
  const orderStatus = document.getElementById("order-status");
  const progressBar = document.getElementById("progress-bar");

  const printReceiptBtn = document.getElementById("print-receipt-btn");
  const waitTimeElement = document.getElementById("wait-time");

  let currentWaitTime = 25;

  const statuses = [
    { status: "Preparing", progress: 25 },
    { status: "On the way", progress: 75 },
    { status: "Delivered", progress: 100 },
  ];
  let currentStatusIndex = 0;

  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    userNameElement.textContent = savedUsername;
    loginOverlay.style.display = "none";
    container.style.display = "block";
  }

  loginButton.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    if (username) {
      localStorage.setItem("username", username);
      userNameElement.textContent = username;
      loginOverlay.style.display = "none";
      container.style.display = "block";
    } else {
      alert("Please enter your name to continue.");
    }
  });

  refreshStatusBtn.addEventListener("click", () => {
    waitTimeElement.textContent = `Wait time: ${currentWaitTime} minutes`;

    const interval = setInterval(() => {
      if (currentWaitTime === 25) {
        currentWaitTime = 10;
      } else if (currentWaitTime === 10) {
        currentWaitTime = 0;
      }

      waitTimeElement.textContent = `Wait time: ${currentWaitTime} minutes`;

      if (currentWaitTime === 0) {
        clearInterval(interval);
      }
    }, 1000);

    if (currentStatusIndex < statuses.length) {
      const currentStatus = statuses[currentStatusIndex];
      orderStatus.textContent = currentStatus.status;
      progressBar.style.width = `${currentStatus.progress}%`;
      progressBar.style.backgroundColor = currentStatus.progress === 100 ? "#007bff" : "#28a745";
      currentStatusIndex++;
    } else {
      currentStatusIndex = 0;
    }
  });

  printReceiptBtn.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const receiptContent = `
      Order Receipt
      --------------------------
      Customer: ${localStorage.getItem('username') || 'Guest'}
      Date: ${new Date().toLocaleString()}
      Order Status: ${orderStatus.textContent}
      ${waitTimeElement.textContent}
      --------------------------
      Thank you for your order
    `;

    doc.text(receiptContent, 10, 10);

    doc.save('receipt.pdf');
  });

  currentOrderBtn.addEventListener("click", () => {
    currentOrderSection.style.display = "block";
    pastOrdersSection.style.display = "none";
  });

  pastOrdersBtn.addEventListener("click", () => {
    currentOrderSection.style.display = "none";
    pastOrdersSection.style.display = "block";
  });

  signOutBtn.addEventListener("click", () => {
    localStorage.removeItem("username");
    window.location.reload();
  });
});
