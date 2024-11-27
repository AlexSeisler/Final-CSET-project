document.addEventListener("DOMContentLoaded", () => {
  const loginOverlay = document.getElementById("login-overlay");
  const loginButton = document.getElementById("login-button");
  const usernameInput = document.getElementById("username-input");
  const container = document.querySelector(".container");
  const userNameElement = document.getElementById("user-name");

  const currentOrderBtn = document.getElementById("current-order-btn");
  const pastOrdersBtn = document.getElementById("past-orders-btn");
  const backToMain = document.getElementById("back-to-main");

  const currentOrderSection = document.getElementById("current-order-section");
  const pastOrdersSection = document.getElementById("past-orders-section");

  const refreshStatusBtn = document.getElementById("refresh-status-btn");
  const orderStatus = document.getElementById("order-status");
  const progressBar = document.getElementById("progress-bar");

  const printReceiptBtn = document.getElementById("print-receipt-btn");
  const waitTimeElement = document.getElementById("wait-time");

  let currentWaitTime = 25;

  container.style.display = "block";
  const statuses = [
    { status: "Preparing", progress: 25 },
    { status: "On the way", progress: 75 },
    { status: "Delivered", progress: 100 },
  ];
  let currentStatusIndex = 0;

  const savedUsername = localStorage.getItem("loggedIn");

  userNameElement.textContent = savedUsername;

  refreshStatusBtn.addEventListener("click", () => {
    // Update wait time logic
    waitTimeElement.textContent = `Wait time: ${currentWaitTime} minutes`;

    const interval = setInterval(() => {
      if (currentWaitTime === 25) {
        currentWaitTime = 10; // Change to 10 minutes
      } else if (currentWaitTime === 10) {
        currentWaitTime = 0; // Change to 0 minutes
      }

      waitTimeElement.textContent = `Wait time: ${currentWaitTime} minutes`;

      if (currentWaitTime === 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Update order status logic
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
    const cart = JSON.parse(localStorage.getItem('cart'));
    stringOfItems ='';
    i = 1;
    Object.values(cart).forEach( item =>{

      stringOfItems += `\n-  ${i++}.  -\nName: ${item.name}\nPrice: ${item.price}\nQuantity: ${item.quantity}`;
      
    });
    const receiptContent = `
      Order Receipt
      --------------------------
      Customer: ${localStorage.getItem('loggedIn') || 'Guest'}
      Date: ${new Date().toLocaleString()}
      Order Status: ${orderStatus.textContent}
      ${waitTimeElement.textContent}  
      --------------------------
      Items: ${stringOfItems}
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

  backToMain.addEventListener("click", () => {
    window.location.href = "../layouts/mainpage.html";
  });
});
