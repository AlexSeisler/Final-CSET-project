
var USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
// USDollar.format([put number here]);
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

  let currentWaitTime = 30;

  container.style.display = "block";
  const statuses = [
    { status: "Preparing", progress: 25 },
    { status: "On the way", progress: 75 },
    { status: "Delivered", progress: 100 },
  ];
  let currentStatusIndex = 0;
  let currentStatus = statuses[currentStatusIndex];
  const savedUsername = localStorage.getItem("loggedIn");

  userNameElement.textContent = savedUsername;
  updated = false;
  refreshStatusBtn.addEventListener("click", () => {
      if (currentWaitTime === 0 && updated == true) {
        return
      }
    // Update wait time logic
    waitTimeElement.textContent = `Wait time: ${currentWaitTime} minutes`;
    const interval = setInterval(() => {
      if (currentWaitTime === 30) {
        currentWaitTime = 25; // Change to 25 minutes
      }
      else if (currentWaitTime === 25) {
        currentWaitTime = 20; 
        progressBar.style.width = '20%'
      }
      else if (currentWaitTime === 20) {
        currentWaitTime = 15; 
        progressBar.style.width = '40%'
      }
      else if (currentWaitTime === 15) {
        currentWaitTime = 10; 
        progressBar.style.width = '60%'
        currentStatusIndex++
      }
      else if (currentWaitTime === 10) {
        currentWaitTime = 5; 
        progressBar.style.width = '80%'
      }
       else if (currentWaitTime === 5) {
        currentWaitTime = 0; // Change to 0 minutes
        progressBar.style.width = '100%'
        currentStatusIndex++
        updated = true;
      }
      // Update order status logic
      if (currentStatusIndex < statuses.length) {
        currentStatus = statuses[currentStatusIndex];
        orderStatus.textContent = currentStatus.status;
      }
      
      progressBar.style.backgroundColor = currentStatus.progress === 100 ? "#007bff" : "#28a745";

      waitTimeElement.textContent = `Wait time: ${currentWaitTime} minutes`;

    }, 300000);//waits for literally 5 minutes
    console.log(interval)

    
  });
  
  printReceiptBtn.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const cart = JSON.parse(localStorage.getItem('cart'));
    stringOfItems ='';
    i = 1;
    Object.values(cart).forEach( item =>{

      stringOfItems += `\n      -  ${i++}.  -\n      Name: ${item.name}\n      Price: ${item.price}\n      Quantity: ${item.quantity}`;
      
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
      Subtotal: ${USDollar.format(localStorage.getItem('subtotal'))}
      Taxes: ${USDollar.format(localStorage.getItem('taxes'))}
      Tips: ${USDollar.format(localStorage.getItem('tip'))}
      _______
      
      Total: ${USDollar.format(localStorage.getItem('currentTotal'))}
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
