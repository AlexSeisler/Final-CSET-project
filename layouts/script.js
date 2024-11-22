var defaultItems = [
    {
        name: "Grilled Chicken",
        categories: ["Entree", "Appetizer","Vegan"],
        description: "Juicy grilled chicken served with vegetables.",
        price: "12.99",
        image: "grilled_chicken.jpg"
    },
    {
        name: "Spaghetti Bolognese",
        categories: ["Entree","Vegan"],
        description: "Classic spaghetti with a rich meat sauce.",
        price: "10.99",
        image: "spaghetti.jpg"
    },
    {
        name: "Caesar Salad",
        categories: ["Appetizer", "Entree","Vegan"],
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
        categories: ["Dessert","Vegan"],
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





// Function to display the menu items (for updating the Manager Page view)
function displayMenuItems() {
    const menuItemsBox = document.getElementById('menu-items-box');
    menuItemsBox.innerHTML = ''; // Clear existing items

    // Get items from localStorage
    const items = JSON.parse(localStorage.getItem('menuItems')) || [];

    // Iterate through the items and add them to the UI
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card');
        itemCard.innerHTML = `
            <h3 class='grid-item'>${item.name}</h3>
            <p class='grid-item description'>${item.category}</p>
            <p class='grid-item description'>${item.description}</p>
            <p class='grid-item'>Price: $${item.price}</p>
            <img src="${item.image}" alt="${item.name}" class="item-image grid-item">
        `;
        menuItemsBox.appendChild(itemCard);
    });
}
function displayMenuItems1() {
    
    // Add default items to localStorage if not already set
    if (!localStorage.getItem('menuItems')) {
        localStorage.setItem('menuItems', JSON.stringify(defaultItems));}


    const menuItemsContainer = document.getElementById('menu-items');
    const itemsContainer = document.querySelector('.items'); // Select the div with class 'items'
    menuItemsContainer.innerHTML = ''; // Clear existing items

    // Retrieve menu items from localStorage
    const items = JSON.parse(localStorage.getItem('menuItems')) || [];

    // Object to track cart items and their quantities
    const cart = {};

    // Function to update the cart display
    function updateCartDisplay() {
        itemsContainer.innerHTML = ''; // Clear cart display

        for (const [id, item] of Object.entries(cart)) {
            // Create the cart item element
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>Price: $<span class="item-price">${(item.price * item.quantity).toFixed(2)}</span></p>
                <label>
                    Amount:
                    <input type="number" class="item-quantity" value="${item.quantity}" min="1" step="1">
                </label>
                <button class="remove-item-button">Remove</button>
            `;

            // Add functionality to the quantity input
            const quantityInput = cartItem.querySelector('.item-quantity');
            quantityInput.onchange = (event) => {
                const newQuantity = parseInt(event.target.value, 10);

                if (newQuantity <= 0) {
                    delete cart[id]; // Remove item if quantity is set to zero or less
                } else {
                    item.quantity = newQuantity; // Update the quantity
                }

                updateCartDisplay(); // Refresh cart display
            };

            // Add functionality to the "Remove" button
            const removeButton = cartItem.querySelector('.remove-item-button');
            removeButton.onclick = () => {
                delete cart[id]; // Remove the item completely
                updateCartDisplay(); // Refresh cart display
            };

            itemsContainer.appendChild(cartItem);
        }
    }

    // Iterate through items and create HTML elements for each
    items.forEach(item => {
        // Generate a unique ID for the item (or use an existing identifier)
        const itemId = item.id || item.name;

        // Create the item card container
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card');

        // Populate the item card with data
        const itemHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" />
            </div>
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p class='description'>${item.description}</p>
                <p><strong>Price: </strong> $${item.price}</p>
            </div>
            <div class="add-to-cart">
                <button class="add-to-cart-button" onclick="addToCart('${itemId}', '${item.name}', '${item.description}', '${item.price}', '${item.image}')">Add to Cart</button>
            </div>
        `;
        itemCard.innerHTML = itemHTML;

        // Add onclick event to the "Add to Cart" button
        var addToCartButton = itemCard.querySelector('.add-to-cart-button');
        addToCartButton.onclick = () => {
            if (cart[itemId]) {
                cart[itemId].quantity += 1; // Increase quantity if item exists in cart
            } else {
                // Add new item to the cart
                cart[itemId] = { ...item, quantity: 1 };
            }
            updateCartDisplay(); // Update the cart display
        };

        // Append the item card to the menu items container
        menuItemsContainer.appendChild(itemCard);
    });

    // If no items are available, show a placeholder message
    if (items.length === 0) {
        menuItemsContainer.innerHTML = `<p>No menu items available. Please check back later!</p>`;
    }
}


function filterItemsByCategory(category) {   
    const menuItemsContainer = document.getElementById('menu-items'); // Select the div with ID 'menu-items'

    // Retrieve all menu items from localStorage
    const allItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    
    // Filter items where the category exists in the categories array
    const filteredItems = allItems.filter(item => item.categories.includes(category));

    // Clear and populate the menu-items container
    menuItemsContainer.innerHTML = '';
    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.classList.add('menu-item-card');

            // Use item.name or item.id (if defined) to identify the item
            const itemId = item.id || item.name; // Fallback to name if id is not available

            itemCard.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}" />
                </div>
                <div class="menu-item-info">
                    <h3>${item.name}</h3>
                    <p class='description'>${item.description}</p>
                    <p><strong>Price: </strong> $${item.price}</p>
                </div>
                <div class="add-to-cart">
                    <button class="add-to-cart-button" onclick="addToCart('${itemId}', '${item.name}', '${item.description}', '${item.price}', '${item.image}')">Add to Cart</button>
                </div>
            `;

            menuItemsContainer.appendChild(itemCard);
        });
    } else {
        menuItemsContainer.innerHTML = `<p>No items found for the category "${category}".</p>`;
    }
}

window.onload = function() {
    localStorage.removeItem('cart'); // Clear the 'cart' from localStorage
};

function addToCart(itemId, itemName, itemDescription, itemPrice, itemImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Retrieve the current cart from localStorage

    // Check if the item is already in the cart
    if (cart[itemId]) {
        cart[itemId].quantity += 1; // Increase quantity if item exists in cart
    } else {
        // Add new item to the cart
        cart[itemId] = {
            name: itemName,
            description: itemDescription,
            price: itemPrice,
            image: itemImage,
            quantity: 1
        };
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the items div with the added item
    updateCartDisplay();
}

// Function to update the items div with cart contents
function updateCartDisplay() {
    const itemsDiv = document.querySelector('.items'); // Select the div with class 'items'
    itemsDiv.innerHTML = ''; // Clear the current contents

    // Loop through the cart and add each item to the items div
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Retrieve cart from localStorage

    for (const itemId in cart) {
        const cartItem = cart[itemId];
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <h4>${cartItem.name}</h4>
            <p>Price: $<span class="item-price">${(cartItem.price * cartItem.quantity).toFixed(2)}</span></p>
            <label>
                Amount:
                <input type="number" class="item-quantity" value="${cartItem.quantity}" min="1" step="1">
            </label>
            <button class="remove-item-button">Remove</button>
        `;
        itemsDiv.appendChild(itemDiv); // Append the item div to the 'items' div
    }
}

function displayMenuItems2() {
    const menuItemsBox = document.querySelector('.menu-items-box');
    menuItemsBox.innerHTML = ''; // Clear existing items

    // Retrieve menu items from localStorage
    const items = JSON.parse(localStorage.getItem('menuItems')) || [];

    // Iterate through items and create HTML elements for each
    items.forEach(item => {
        // Create the item card container
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card');

        // Populate the item card with data
        const itemHTML = `
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p><strong>Price:</strong> $${item.price}</p>
                <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            </div>
        `;
        itemCard.innerHTML = itemHTML;

        // Append the item card to the menu items box
        menuItemsBox.appendChild(itemCard);
    });

    // If no items are available, show a placeholder message
    if (items.length === 0) {
        menuItemsBox.innerHTML = `<p>No menu items available. Please add some items!</p>`;
    }
}

function managerAdd()
{
    // Function to add a new menu item to localStorage
    document.getElementById('add-item-button').addEventListener('click', function() {
        // Get the item details from the form
        const itemName = document.getElementById('item-name').value;
        const itemCat = document.getElementById('item-cat').value;
        const itemDescription = document.getElementById('item-description').value;
        const itemPrice = document.getElementById('item-price').value;
        const itemImage = document.getElementById('item-image').value;

        // Create a new item object
        const newItem = {
            name: itemName,
            category: itemCat,
            description: itemDescription,
            price: itemPrice,
            image: itemImage
        };

        // Get current items from localStorage
        const items = JSON.parse(localStorage.getItem('menuItems')) || [];

        // Add the new item to the items array
        items.push(newItem);

        // Save the updated array back to localStorage
        localStorage.setItem('menuItems', JSON.stringify(items));

        // Clear the form fields after adding the item
        document.getElementById('item-name').value = '';
        document.getElementById('item-cat').value = '';
        document.getElementById('item-description').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-image').value = '';

        // Optionally update the menu view immediately
        displayMenuItems();
    });
}

function clearMenuLocal()
{
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('menuItems')) {
            localStorage.removeItem(key);
            i--; // Adjust index after removal
        }
    }
    alert('All menu items have been cleared!');
}