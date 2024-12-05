
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
        if (currentStatusIndex < statuses.length) {
          currentStatus = statuses[currentStatusIndex];
          orderStatus.textContent = currentStatus.status;
        }
        percent = 100*(currentWaitTime/30);
        percent = Math.round(percent);
        console.log(percent-100);
        progressBar.style.backgroundColor = currentStatus.progress === 100 ? "#007bff" : "#28a745";
        progressBar.style.width = `${Math.abs(percent-100)}%`
      
      if (currentWaitTime === 0 && updated == true) {
        return
      }
    // Update wait time logic
    waitTimeElement.textContent = `Wait time: ${currentWaitTime} minutes`;
    let interval = setInterval(() => {
      if (currentWaitTime > 0) {
        currentWaitTime--;
      }
      if (currentWaitTime/30 < 0.5){
        currentStatusIndex++
      }
      if (currentWaitTime <= 0) {
        currentWaitTime = 0; // Change to 0 minutes
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

    }, 30000);//waits for literally 5 minutes
    interval = 0;
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

  backToMain.addEventListener("click", () => {
    window.location.assign('../../layouts/mainpage.html')
    localStorage.setItem('cart', JSON.stringify({}));
  });
});
