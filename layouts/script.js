if (!localStorage.getItem('loggedIn')){
localStorage.setItem('loggedIn', false)
  }
// Default menu items
var defaultItems = [
    {
        name: "Grilled Chicken",
        categories: ["Entree", "Appetizer", "Vegan"],
        description: "Juicy grilled chicken served with vegetables.",
        price: "12.99",
        image: "grilled_chicken.jpg"
    },
    {
        name: "Spaghetti Bolognese",
        categories: ["Entree", "Vegan"],
        description: "Classic spaghetti with a rich meat sauce.",
        price: "10.99",
        image: "spaghetti.jpg"
    },
    {
        name: "Caesar Salad",
        categories: ["Appetizer", "Entree", "Vegan"],
        description: "Crispy romaine lettuce with Caesar dressing.",
        price: "6.99",
        image: "caesar_salad.jpg"
    },
    {
        name: "Mozzarella Sticks",
        categories: ["Appetizer"],
        description: "Golden-fried mozzarella sticks with marinara sauce.",
        price: "7.99",
        image: "mozzarella_sticks.jpg"
    },
    {
        name: "Cheesecake",
        categories: ["Dessert"],
        description: "Creamy cheesecake with a graham cracker crust.",
        price: "5.99",
        image: "cheesecake.jpg"
    },
    {
        name: "Chocolate Lava Cake",
        categories: ["Dessert", "Vegan"],
        description: "Warm chocolate cake with a gooey center.",
        price: "6.99",
        image: "lava_cake.jpg"
    },
    {
        name: "Coffee",
        categories: ["Drinks", "Dessert"],
        description: "Freshly brewed coffee.",
        price: "2.99",
        image: "coffee.jpg"
    },
    {
        name: "Iced Tea",
        categories: ["Drinks"],
        description: "Refreshing iced tea with lemon.",
        price: "2.49",
        image: "iced_tea.jpg"
    },
    {
        name: "Steak Dinner",
        categories: ["Entree"],
        description: "Tender steak with mashed potatoes and gravy.",
        price: "15.99",
        image: "steak.jpg"
    },
    {
        name: "Fruit Tart",
        categories: ["Dessert", "Appetizer"],
        description: "Sweet tart topped with fresh fruits.",
        price: "4.99",
        image: "fruit_tart.jpg"
    }
];

// Initialize default menu items in localStorage if not already set
if (!localStorage.getItem('menuItems')) {
    localStorage.setItem('menuItems', defaultItems);
}

// Function to display menu items for customers(Menu)
function displayMenuItems() {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = '';

    const items = localStorage.getItem('menuItems') || [];

    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card');
        itemCard.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Price:</strong> $${item.price}</p>
            </div>
            <div class="add-to-cart">
                <button onclick="addToCart('${item.name}')">Add to Cart</button>
            </div>
        `;
        menuItemsContainer.appendChild(itemCard);
    });

    if (items.length === 0) {
        menuItemsContainer.innerHTML = `<p>No menu items available.</p>`;
    }
    
}
//Manager Menu display
function displayMenuItems1() {
    const menuItemsContainer = document.getElementById('menu-items-box'); // Use the correct div
    menuItemsContainer.innerHTML = ''; // Clear the current content

    const items = localStorage.getItem('menuItems') || []; // Get items from localStorage

    // Iterate through the items and create their cards
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card'); // Add styling class

        itemCard.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Price:</strong> $${item.price}</p>
            </div>
        `;

        menuItemsContainer.appendChild(itemCard); // Append each card to the container
    });

    // Show a placeholder message if no items are found
    if (items.length === 0) {
        menuItemsContainer.innerHTML = `<p>No menu items available.</p>`;
    }
}
//For Payment Page
function displayMenuItems2() {
    const cartItemsContainer = document.querySelector('.cart-items'); // Select the cart-items div
    cartItemsContainer.innerHTML = ''; // Clear existing content

    const cart = localStorage.getItem('cart') || {}; // Retrieve the cart items from localStorage

    // Iterate through the cart items
    for (const [itemId, item] of Object.entries(cart)) {
        const itemCard = document.createElement('div');
        itemCard.classList.add('cart-item-card');
        itemCard.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Price:</strong> $${item.price}</p>
                <p><strong>Quantity:</strong> ${item.quantity}</p>
                <p><strong>Total:</strong> $${(item.price * item.quantity).toFixed(2)}</p>
            </div>

        `;
        cartItemsContainer.appendChild(itemCard); // Append the item to the cart container
    }

    // Display a message if the cart is empty
    if (Object.keys(cart).length === 0) {
        cartItemsContainer.innerHTML = `<p>Your cart is empty.</p>`;
    }
}


// Helper functions
function removeFromCart(itemId) {
    const cart = localStorage.getItem('cart') || {};
    delete cart[itemId]; // Remove the item from the cart
    localStorage.setItem('cart', cart); // Update localStorage
    updateCartDisplay(); // Refresh the cart display
}

function updateCartQuantity(itemId, newQuantity) {
    const cart = localStorage.getItem('cart') || {};
    newQuantity = parseInt(newQuantity, 10);

    if (newQuantity <= 0) {
        removeFromCart(itemId); // Remove the item if quantity is zero or less
    } else {
        cart[itemId].quantity = newQuantity; // Update the quantity
        localStorage.setItem('cart', cart); // Update localStorage
        displayMenuItems2(); // Refresh the cart display
    }
}

// Function to filter menu items by category
function filterItemsByCategory(category) {
    const allItems = localStorage.getItem('menuItems') || [];
    const filteredItems = allItems.filter(item => item.categories.includes(category));

    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = '';

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('menu-item-card');
            itemCard.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" />
                </div>
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p><strong>Price:</strong> $${item.price}</p>
                </div>
                <div class="add-to-cart">
                    <button onclick="addToCart('${item.name}')">Add to Cart</button>
                </div>
            `;
            menuItemsContainer.appendChild(itemCard);
        });
    } else {
        menuItemsContainer.innerHTML = `<p>No items found for the category "${category}".</p>`;
    }
}


function addToCart(itemName) {
    const items = localStorage.getItem('menuItems') || [];
    const cart = localStorage.getItem('cart') || {}; // Load cart from local storage
    const item = items.find(i => i.name === itemName);

    if (item) {
        if (cart[item.name]) {
            cart[item.name].quantity += 1;
        } else {
            cart[item.name] = { ...item, quantity: 1 };
        }
        localStorage.setItem('cart', cart); // Save updated cart to local storage
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cart = localStorage.getItem('cart') || {}; // Load cart from local storage
    const cartContainer = document.querySelector('.items');
    cartContainer.innerHTML = '';

    Object.values(cart).forEach(cartItem => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <h4>${cartItem.name}</h4>
            <p>Price: $<span>${(cartItem.price * cartItem.quantity).toFixed(2)}</span></p>
            <label>
                Quantity:
                <input type="number" value="${cartItem.quantity}" min="1" onchange="updateCartQuantity('${cartItem.name}', this.value)">
            </label>
            <button onclick="removeFromCart('${cartItem.name}')">Remove</button>
        `;
        cartContainer.appendChild(itemDiv);
    });

    // Optionally handle empty cart message
    if (Object.keys(cart).length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty.</p>`;
    }
}
function updateCartDisplay1() { 
    const cart = localStorage.getItem('cart') || {}; // Load cart from local storage
    const cartContainer = document.querySelector('.col-25.cart'); // Correctly target the div
    cartContainer.innerHTML = '<h3>Your Cart</h3>'; // Reset and include the heading

    // Iterate through cart items and create elements
    Object.values(cart).forEach(cartItem => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item'); // Add a styling class

        itemDiv.innerHTML = `
            <div class="cart-item-image">
                <img src="${cartItem.image}" alt="${cartItem.name}">
            </div>
            <div class="cart-item-info">
                <h4>${cartItem.name}</h4>
                <p>Price: $${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
                <p>Quantity: ${cartItem.quantity}</p>
            </div>
        `;

        cartContainer.appendChild(itemDiv); // Append each cart item to the container
    });

    // Handle empty cart scenario
    if (Object.keys(cart).length === 0) {
        cartContainer.innerHTML += `<p>Your cart is empty.</p>`;
    }
}

function updateCartQuantity(itemName, quantity) {
    const cart = localStorage.getItem('cart') || {}; // Load cart from local storage

    if (cart[itemName]) {
        if (quantity <= 0) {
            delete cart[itemName]; // Remove item if quantity is zero or less
        } else {
            cart[itemName].quantity = parseInt(quantity, 10);
        }
        localStorage.setItem('cart', cart); // Save updated cart to local storage
        updateCartDisplay();
    }
}

function removeFromCart(itemName) {
    const cart = localStorage.getItem('cart') || {}; // Load cart from local storage
    delete cart[itemName]; // Remove item from cart
    localStorage.setItem('cart', cart); // Save updated cart to local storage
    updateCartDisplay();
}


// Manager functionality to add menu items
function managerAdd() {
    document.getElementById('add-item-button').addEventListener('click', function () {
        const itemName = document.getElementById('item-name').value;
        const itemCat = document.getElementById('item-cat').value.split(',').map(cat => cat.trim());
        const itemDescription = document.getElementById('item-description').value;
        const itemPrice = document.getElementById('item-price').value;
        const itemImage = document.getElementById('item-image').value;

        const newItem = {
            name: itemName,
            categories: itemCat,
            description: itemDescription,
            price: itemPrice,
            image: itemImage
        };

        const items = localStorage.getItem('menuItems') || [];
        items.push(newItem);
        localStorage.setItem('menuItems', items);

        document.getElementById('item-name').value = '';
        document.getElementById('item-cat').value = '';
        document.getElementById('item-description').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-image').value = '';

        displayMenuItems1();
    });
}

// Clear menu items
function clearMenuLocal() {
    localStorage.removeItem('menuItems');
    alert('All menu items have been cleared!');
    displayMenuItems();
}

function checkSelection() {
    const Card = document.getElementById('card');
    const Cash = document.getElementById('cash');

    if (Card.checked) {
        // Redirect to card payment page
        window.location.href = '../Payment page/index.html';
    } else if (Cash.checked) {
        // Redirect to cash payment page
        window.location.href = '../Payment page/reciept page/index.html';
    } else {
        // Redirect to an error or notification page
        alert('Please select a payment method.');
    }
}
//manger remove menu item
function removeItem() {
    const removeItemSelect = document.getElementById("remove-item-name");
    const selectedIndex = removeItemSelect.value;

    // Fetch items from localStorage
    let items = localStorage.getItem("menuItems") || [];

    // Check if there's a valid item to remove
    if (selectedIndex >= 0 && selectedIndex < items.length) {
        // Remove the selected item
        items.splice(selectedIndex, 1);

        // Save updated list back to localStorage
        localStorage.setItem("menuItems", items);

        // Update the dropdown
        removeItemSelect.innerHTML = ""; // Clear existing options
        items.forEach((item, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = item.name;
            removeItemSelect.appendChild(option);
        });

        displayMenuItems1();
    } else {
        alert("Please select a valid item to remove.");
    }
}

// Edit item function
function editItem() {
    const editItemSelect = document.getElementById("edit-item-name");
    const editDescription = document.getElementById("edit-item-description").value;
    const editPrice = document.getElementById("edit-item-price").value;
    const editCategory = document.getElementById("edit-item-category").value;
    const editImage = document.getElementById("edit-item-image").value;

    // Fetch items from localStorage
    let items = localStorage.getItem("menuItems") || [];

    const selectedIndex = editItemSelect.value;

    // Validate selected item
    if (selectedIndex >= 0 && selectedIndex < items.length) {
        // Update the selected item's fields
        items[selectedIndex] = {
            ...items[selectedIndex], // Keep existing fields
            description: editDescription || items[selectedIndex].description,
            price: parseFloat(editPrice) || items[selectedIndex].price,
            category: editCategory || items[selectedIndex].category,
            image: editImage || items[selectedIndex].image,
        };

        // Save updated list back to localStorage
        localStorage.setItem("menuItems", items);

        displayMenuItems1();
    } else {
        alert("Please select a valid item to edit.");
    }
}

function calculateTotals() {
    // Get cart data from localStorage and parse it as an object
    const cart = localStorage.getItem("cart") || {};

    // Ensure cart is an object before proceeding
    if (typeof cart !== 'object' || Array.isArray(cart)) {
        console.error("Cart data is not an object:", cart);
        return; // Exit if the cart is not an object
    }

    // Array to hold item prices
    const itemPrices = [];

    // Loop through each item in the cart and add the price to the itemPrices array
    for (let itemName in cart) {
        if (cart.hasOwnProperty(itemName)) {
            // Ensure the item has a valid price (fallback to 0 if not)
            var price = Number(cart[itemName].price) || 0;
            price = price * cart[itemName].quantity;
            itemPrices.push(price);
        }
    }

    // Optionally, log the itemPrices array to verify
    console.log("Item Prices:", itemPrices);

    // Constants for calculating totals
    const taxRate = 0.06; // 6% tax

    // Calculate subtotal from item prices
    let subtotal = 0;
    itemPrices.forEach(price => {
        subtotal += price;
    });

    // Calculate taxes and total
    const taxes = subtotal * taxRate;
    const total = subtotal + taxes;

    // Helper function to format numbers as currency
    function formatCurrency(value) {
        return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
    }

    // Display the formatted values in the HTML
    document.querySelector(".result.medium").textContent = formatCurrency(subtotal);
    document.querySelector(".result.small").textContent = formatCurrency(taxes);
    document.querySelector(".result.large").textContent = formatCurrency(total);

    // Store the current total for later tip calculation
    localStorage.setItem("currentTotal", total);
}



// Function to add a tip
function tipPopup() {
    const currentTotal = parseFloat(localStorage.getItem("currentTotal")) || 0;

    // Prompt the user for a tip amount
    const tip = parseFloat(prompt("Enter a tip amount (e.g., 5 for $5):")) || 0;

    if (tip < 0) {
        alert("Tip cannot be negative.");
        return;
    }

    const newTotal = currentTotal + tip;

    // Display the updated total
    document.querySelector(".result.large").textContent = `$${newTotal.toFixed(2)}`;

    // Store the new total
    localStorage.setItem("currentTotal", newTotal);

    alert(`Thank you! Your new total with tip included is $${newTotal.toFixed(2)}`);
}

