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
    localStorage.setItem('menuItems', JSON.stringify(defaultItems));
}

// Function to display menu items for customers
function displayMenuItems() {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = '';

    const items = JSON.parse(localStorage.getItem('menuItems')) || [];

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

// Function to filter menu items by category
function filterItemsByCategory(category) {
    const allItems = JSON.parse(localStorage.getItem('menuItems')) || [];
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

// Cart functionality
let cart = {};

function addToCart(itemName) {
    const items = JSON.parse(localStorage.getItem('menuItems')) || [];
    const item = items.find(i => i.name === itemName);

    if (item) {
        if (cart[item.name]) {
            cart[item.name].quantity += 1;
        } else {
            cart[item.name] = { ...item, quantity: 1 };
        }
        updateCartDisplay();
    }
}

function updateCartDisplay() {
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
}

function updateCartQuantity(itemName, quantity) {
    if (cart[itemName]) {
        if (quantity <= 0) {
            delete cart[itemName];
        } else {
            cart[itemName].quantity = parseInt(quantity, 10);
        }
        updateCartDisplay();
    }
}

function removeFromCart(itemName) {
    delete cart[itemName];
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

        const items = JSON.parse(localStorage.getItem('menuItems')) || [];
        items.push(newItem);
        localStorage.setItem('menuItems', JSON.stringify(items));

        document.getElementById('item-name').value = '';
        document.getElementById('item-cat').value = '';
        document.getElementById('item-description').value = '';
        document.getElementById('item-price').value = '';
        document.getElementById('item-image').value = '';

        displayMenuItems();
    });
}

// Clear menu items
function clearMenuLocal() {
    localStorage.removeItem('menuItems');
    alert('All menu items have been cleared!');
    displayMenuItems();
}

// Load menu items on page load
window.onload = function () {
    displayMenuItems();
    managerAdd();
};
