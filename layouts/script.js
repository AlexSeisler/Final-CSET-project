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
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
            <img src="${item.image}" alt="${item.name}" class="item-image">
        `;
        menuItemsBox.appendChild(itemCard);
    });
}
function displayMenuItems1() {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = ''; // Clear existing items

    // Retrieve menu items from localStorage
    const items = JSON.parse(localStorage.getItem('menuItems')) || [];

    // Iterate through items and create HTML elements for each
    items.forEach(item => {
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
                <p>${item.description}</p>
                <p><strong>Price:</strong> $${item.price}</p>
            </div>
            <button class="add-to-cart-button">Add to Cart</button>
        `;
        itemCard.innerHTML = itemHTML;

        // Append the item card to the menu items container
        menuItemsContainer.appendChild(itemCard);
    });

    // If no items are available, show a placeholder message
    if (items.length === 0) {
        menuItemsContainer.innerHTML = `<p>No menu items available. Please check back later!</p>`;
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
        const itemDescription = document.getElementById('item-description').value;
        const itemPrice = document.getElementById('item-price').value;
        const itemImage = document.getElementById('item-image').value;

        // Create a new item object
        const newItem = {
            name: itemName,
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