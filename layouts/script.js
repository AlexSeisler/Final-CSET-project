
if (!localStorage.getItem('loggedIn')){
localStorage.setItem('loggedIn', false)
  }
// Default menu items
var defaultItems = [
 // WOOD FIRED PIZZAS
 {
    name: "#1 Pizza - Plain Cheese",
    categories: ["Wood Fired Pizzas"],
    description: "Red sauce, mozzarella.",
    price: "15.00",
    image: "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1-500x375.jpg"
},
{
    name: "#2 Pizza",
    categories: ["Wood Fired Pizzas"],
    description: "Red sauce, fresh mozzarella, sliced tomato, balsamic, basil.",
    price: "16.00",
    image: "https://example.com/pizza-2.jpg"
},
{
    name: "#3 Pizza",
    categories: ["Wood Fired Pizzas"],
    description: "Red sauce, mozzarella, bacon, pepperoni, hot honey drizzle, grated parmesan.",
    price: "17.00",
    image: "https://example.com/pizza-3.jpg"
},
{
    name: "#4 Pizza",
    categories: ["Wood Fired Pizzas", "Vegetarian"],
    description: "Ricotta, mozzarella, mushroom, spinach, fire-roasted tomatoes, grated parmesan, pesto drizzle.",
    price: "17.00",
    image: "https://example.com/pizza-4.jpg"
},
{
    name: "#5 Pizza",
    categories: ["Wood Fired Pizzas"],
    description: "Garlic oil, fresh mozzarella, prosciutto, caramelized onion, arugula, balsamic drizzle, grated parmesan.",
    price: "18.00",
    image: "https://example.com/pizza-5.jpg"
},
{
    name: "#6 Pizza",
    categories: ["Wood Fired Pizzas"],
    description: "Red sauce, mozzarella, sausage, green pepper, red onion.",
    price: "17.00",
    image: "https://example.com/pizza-6.jpg"
},
{
    name: "#7 Pizza",
    categories: ["Wood Fired Pizzas"],
    description: "Dill ranch, mozzarella, dill pickle, bacon.",
    price: "16.00",
    image: "https://example.com/pizza-7.jpg"
},
{
    name: "Calzone",
    categories: ["Wood Fired Pizzas"],
    description: "Ricotta, mozzarella, ham, garlic butter crust, side red sauce.",
    price: "18.00",
    image: "https://example.com/calzone.jpg"
},
// FOR THE TABLE
{
    name: "Bavarian Pretzel",
    categories: ["Appetizer", "For the Table"],
    description: "White cheddar sauce, grain mustard, honey mustard.",
    price: "11.00",
    image: "https://example.com/bavarian-pretzel.jpg"
},
{
    name: "Loaded Fries",
    categories: ["Appetizer", "For the Table"],
    description: "French fries, brisket, colby jack, white cheddar cheese sauce, traditional BBQ, scallions.",
    price: "17.00",
    image: "https://example.com/loaded-fries.jpg"
},
{
    name: "Crispy Pork Belly",
    categories: ["Appetizer", "For the Table"],
    description: "Teriyaki glaze, fresh jalapeño, pineapple, pickled red onion, sesame seed, cilantro.",
    price: "17.00",
    image: "https://example.com/crispy-pork-belly.jpg"
},
{
    name: "Sprouts",
    categories: ["Appetizer", "For the Table"],
    description: "Crispy fried brussels sprouts, Thai chili sauce, bacon, onion frizzles.",
    price: "17.00",
    image: "https://example.com/brussels-sprouts.jpg"
},
{
    name: "Fried Bao Buns",
    categories: ["Appetizer", "For the Table"],
    description: "Crispy fried bao buns with unique fillings.",
    price: "15.00",
    image: "https://example.com/bao-buns.jpg"
},
{
    name: "Pickle Cheese Curds",
    categories: ["Appetizer", "For the Table"],
    description: "Fried pickle cheddar cheese curds, dill ranch.",
    price: "13.00",
    image: "https://example.com/pickle-cheese-curds.jpg"
},
{
    name: "Nachos",
    categories: ["Appetizer", "For the Table"],
    description: "Tri-color tortilla chips, colby jack, white cheddar sauce, jalapeno, pico, sour cream, scallions.",
    price: "14.00",
    image: "https://example.com/nachos.jpg"
},
{
    name: "Sweet Potato Fries",
    categories: ["Appetizer", "Dessert", "For the Table"],
    description: "Cinnamon sugar coated, served with maple bacon aioli.",
    price: "9.00",
    image: "https://example.com/sweet-potato-fries.jpg"
},

// SALADS
{
    name: "House Salad",
    categories: ["Salad", "Entree", "Vegetarian"],
    description: "Mixed greens, cherry tomatoes, cucumber, onion, mozzarella, crouton.",
    price: "13.00",
    image: "https://example.com/house-salad.jpg"
},
{
    name: "Caesar Salad",
    categories: ["Salad", "Entree", "Vegetarian"],
    description: "Romaine, parmesan, crouton, Caesar dressing.",
    price: "14.00",
    image: "https://example.com/caesar-salad.jpg"
},
{
    name: "Winter Salad",
    categories: ["Salad", "Entree", "Vegetarian"],
    description: "Mixed greens, granny smith apples, candied pecans, bleu cheese, dried cranberries.",
    price: "15.00",
    image: "https://example.com/winter-salad.jpg"
},

// SOUP
{
    name: "Soup of the Day",
    categories: ["Soup", "Appetizer"],
    description: "Chef's choice daily soup selection. *<em>Estimated Price Shown</em>",
    price: "10.00",
    image: "https://example.com/soup-of-the-day.jpg"
},
{
    name: "Tomato Bisque",
    categories: ["Soup", "Appetizer", "Vegetarian"],
    description: "Herbed tomato cream, parmesan crisp, basil.",
    price: "6.00 (cup) / 11.00 (bowl)",
    image: "https://example.com/tomato-bisque.jpg"
},
// MAINS
{
    name: "Tortellini",
    categories: ["Entree", "Mains", "Vegetarian"],
    description: "Three-cheese tortellini, asiago sage cream sauce, crispy kale.",
    price: "21.00",
    image: "https://example.com/tortellini.jpg"
},
{
    name: "Fish & Chips",
    categories: ["Entree", "Mains"],
    description: "Beer-battered haddock, fries, slaw, tartar, lemon wheels.",
    price: "23.00",
    image: "https://example.com/fish-and-chips.jpg"
},
{
    name: "Steak Frites",
    categories: ["Entree", "Mains"],
    description: "10oz stockyard sirloin, compound butter, demi-glace, garlic parmesan fries.",
    price: "25.00",
    image: "https://example.com/steak-frites.jpg"
},
{
    name: "Butchery Platter",
    categories: ["Entree", "Mains"],
    description: "Beer-braised pulled pork, smoked brisket, mac & cheese, southern green beans, chow chow, slider rolls, choice of BBQ sauce: traditional, Korean, or blackberry stout.",
    price: "24.00",
    image: "https://example.com/butchery-platter.jpg"
},

// HANDHELDS
{
    name: "Smashburger",
    categories: ["Handhelds", "Entree"],
    description: "Blend of ribeye, chuck & brisket 4oz smashed patty, American cheese, butter lettuce, tomato, onion, smash sauce, brioche bun. Add-ons: extra patty +4, fried egg +2, bacon +2, jalapeño +1, pickle +1, onion frizzles +2, veg patty +3.",
    price: "13.00",
    image: "https://example.com/smashburger.jpg"
},
{
    name: "Cheesesteak",
    categories: ["Handhelds", "Entree"],
    description: "Shaved ribeye, caramelized onion, hoagie roll, choice of cheese: cheese sauce, American, cheddar, Swiss, provolone, pepperjack.",
    price: "17.00",
    image: "https://example.com/cheesesteak.jpg"
},
{
    name: "Monte Cristo",
    categories: ["Handhelds", "Entree"],
    description: "Ham, turkey, Swiss, blackberry dijon, maple bacon aioli, brioche French toast, powdered sugar dust, maple syrup.",
    price: "18.00",
    image: "https://example.com/monte-cristo.jpg"
},
{
    name: "Jerk Chicken Sandwich",
    categories: ["Handhelds", "Entree"],
    description: "Hand-breaded fried chicken breast, Jamaican jerk sauce, fried plantain, scallions.",
    price: "18.00",
    image: "https://example.com/jerk-chicken-sandwich.jpg"
},
{
    name: "Pulled Pork Sandwich",
    categories: ["Handhelds", "Entree"],
    description: "BBQ-tossed beer-braised pork, pickles, onion frizzles, brioche bun.",
    price: "17.00",
    image: "https://example.com/pulled-pork.jpg"
},
{
    name: "French Dip",
    categories: ["Handhelds", "Entree"],
    description: "Smoked brisket, provolone, caramelized onion, horseradish aioli, pressed roll, stout au jus.",
    price: "18.00",
    image: "https://example.com/french-dip.jpg"
},
{
    name: "Fig & Brie Sandwich",
    categories: ["Handhelds", "Entree", "Vegetarian"],
    description: "Fig jam, creamy brie cheese, sliced granny smith apples, caramelized red onions, arugula, rustic sourdough.",
    price: "16.00",
    image: "https://example.com/fig-and-brie.jpg"
},

// WINGS
{
    name: "6 Bone-In Wings",
    categories: ["Appetizer", "Wings"],
    description: "Choice of sauce: Old Bay Dry Rub, Garlic Parmesan, BBQ, Blackberry Stout BBQ, Korean BBQ, Mild, Hot, Thai Chili, Spicy Garlic Parmesan, Hot Honey, Jamaican Jerk, Mango Habanero, Five Finger Death.",
    price: "10.00",
    image: "https://example.com/6-bone-in-wings.jpg"
},
{
    name: "12 Bone-In Wings",
    categories: ["Appetizer", "Wings"],
    description: "Choice of sauce: Old Bay Dry Rub, Garlic Parmesan, BBQ, Blackberry Stout BBQ, Korean BBQ, Mild, Hot, Thai Chili, Spicy Garlic Parmesan, Hot Honey, Jamaican Jerk, Mango Habanero, Five Finger Death.",
    price: "18.00",
    image: "https://example.com/12-bone-in-wings.jpg"
},
{
    name: "Boneless Wings",
    categories: ["Appetizer", "Wings"],
    description: "Choice of sauce: Old Bay Dry Rub, Garlic Parmesan, BBQ, Blackberry Stout BBQ, Korean BBQ, Mild, Hot, Thai Chili, Spicy Garlic Parmesan, Hot Honey, Jamaican Jerk, Mango Habanero, Five Finger Death.",
    price: "10.00",
    image: "https://example.com/boneless-wings.jpg"
},
{
    name: "Veggie Wings",
    categories: ["Appetizer", "Wings", "Vegetarian"],
    description: "Cauliflower bites tossed in your choice of sauce.",
    price: "9.00",
    image: "https://example.com/veggie-wings.jpg"
},
// FRESH SHUCKED OYSTERS
{
    name: "Fresh Shucked Oyster (1 Piece)",
    categories: ["Oysters", "Appetizer", "Seafood"],
    description: "Freshly shucked oyster served with your choice of condiments.",
    price: "3.00",
    image: "https://example.com/fresh-oysters.jpg"
},
{
    name: "Half Dozen Fresh Shucked Oysters",
    categories: ["Oysters", "Appetizer", "Seafood"],
    description: "Half a dozen freshly shucked oysters served with your choice of condiments.",
    price: "16.00",
    image: "https://example.com/half-dozen-oysters.jpg"
},
{
    name: "Dozen Fresh Shucked Oysters",
    categories: ["Oysters", "Appetizer", "Seafood"],
    description: "A dozen freshly shucked oysters served with your choice of condiments.",
    price: "32.00",
    image: "https://example.com/dozen-oysters.jpg"
},

// KIDS
{
    name: "Kids' Burger",
    categories: ["Kids", "Entree"],
    description: "Simple burger served with applesauce. Substitute fries for +2.",
    price: "9.00",
    image: "https://example.com/kids-burger.jpg"
},
{
    name: "Chicken Nuggets",
    categories: ["Kids", "Entree"],
    description: "Crispy chicken nuggets served with applesauce. Substitute fries for +2.",
    price: "9.00",
    image: "https://example.com/chicken-nuggets.jpg"
},
{
    name: "Mac & Cheese",
    categories: ["Kids", "Entree", "Vegetarian"],
    description: "Classic creamy mac and cheese served with applesauce. Substitute fries for +2.",
    price: "7.00",
    image: "https://example.com/mac-and-cheese.jpg"
},

// DESSERT
{
    name: "Rotating Dessert Selection",
    categories: ["Dessert"],
    description: "Chef's choice rotating dessert selection. Ask your server for today's special. *<em>Estimated Price Shown</em>",
    price: "15.00",
    image: "https://example.com/rotating-dessert.jpg"
},
{
    name: "Adult Slushie",
    categories: ["Drinks"],
    description: "Rotating flavor slushie for adults.",
    price: "11.00",
    image: "https://example.com/adult-slushie.jpg"
},
{
    name: "Citywide",
    categories: ["Drinks"],
    description: "Sprenger’s famous Red Rose Ale with a shot of Burley Bourbon.",
    price: "7.00",
    image: "https://example.com/citywide.jpg"
},
{
    name: "Crush - Orange",
    categories: ["Drinks"],
    description: "Orange vodka, triple sec, fresh orange juice, simple syrup, lemon-lime soda, club soda.",
    price: "12.00",
    image: "https://example.com/orange-crush.jpg"
},
{
    name: "Crush - Blood Orange",
    categories: ["Drinks"],
    description: "Orange vodka, triple sec, blood orange juice, simple syrup, lemon-lime soda, club soda.",
    price: "13.00",
    image: "https://example.com/blood-orange-crush.jpg"
},
{
    name: "Crush - Grapefruit",
    categories: ["Drinks"],
    description: "Grapefruit vodka, triple sec, grapefruit juice, simple syrup, lemon-lime soda, club soda.",
    price: "12.00",
    image: "https://example.com/grapefruit-crush.jpg"
},
{
    name: "Crush - Creamsicle",
    categories: ["Drinks"],
    description: "Orange vodka, vanilla vodka, cream, fresh orange juice, simple syrup, lemon-lime soda, club soda.",
    price: "13.00",
    image: "https://example.com/creamsicle-crush.jpg"
},
{
    name: "Joel's Mule",
    categories: ["Drinks"],
    description: "Barrel-aged Bluecoat gin, lime, ginger beer, Peychaud’s bitters.",
    price: "14.00",
    image: "https://example.com/joels-mule.jpg"
},
{
    name: "Captain Prick",
    categories: ["Drinks"],
    description: "Jalapeno-infused tequila, triple sec, prickly pear, lime, lemon, chili threads.",
    price: "13.00",
    image: "https://example.com/captain-prick.jpg"
},
{
    name: "Churnt",
    categories: ["Drinks"],
    description: "Hidden Still bourbon, apple brandy, apple butter, demerara syrup, apple cider, orange bitters, smoked rosemary.",
    price: "13.00",
    image: "https://example.com/churnt.jpg"
},
{
    name: "Punkin",
    categories: ["Drinks"],
    description: "Maggie’s Farm pumpkin spice coffee liqueur, Holla vanilla vodka, cream, pumpkin syrup, pumpkin spice vodka boba.",
    price: "14.00",
    image: "https://example.com/punkin.jpg"
},
{
    name: "Smashberry",
    categories: ["Drinks"],
    description: "Stoll & Wolfe blended whiskey, blackberry, honey, lemon, muddled mint, club soda.",
    price: "14.00",
    image: "https://example.com/smashberry.jpg"
},
{
    name: "Bluetini",
    categories: ["Drinks"],
    description: "Blueberry vodka, triple sec, blueberry syrup, yuzu.",
    price: "14.00",
    image: "https://example.com/bluetini.jpg"
},
{
    name: "Espresso Martini",
    categories: ["Drinks"],
    description: "A rich and indulgent espresso martini.",
    price: "14.00",
    image: "https://example.com/espresso-martini.jpg"
},
{
    name: "Spiced Rum Hot Apple Cider",
    categories: ["Drinks"],
    description: "Warm spiced rum with hot apple cider.",
    price: "11.00",
    image: "https://example.com/spiced-rum-cider.jpg"
},
{
    name: "Bourbon Irish Cream Hot Cocoa",
    categories: ["Drinks"],
    description: "Rich bourbon and Irish cream blended with hot cocoa.",
    price: "12.00",
    image: "https://example.com/bourbon-irish-cocoa.jpg"
}
];

// Initialize default menu items in localStorage if not already set
if (!localStorage.getItem('menuItems')) {
    localStorage.setItem('menuItems', JSON.stringify(defaultItems));
}

// Function to display menu items for customers(Menu)
function displayMenuItems() {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = '';

    const items = JSON.parse(localStorage.getItem('menuItems')) || [];

    for(let item of items){
        itemDisplay(item, menuItemsContainer);
    }
    

    if (items.length === 0) {
        menuItemsContainer.innerHTML = `<p>No menu items available.</p>`;
    }
    
}
function itemDisplay(item, menuItemsContainer) {
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
}
//Manager Menu display
function displayMenuItems1() {
    const menuItemsContainer = document.getElementById('menu-items-box'); // Use the correct div
    menuItemsContainer.innerHTML = ''; // Clear the current content

    const items = JSON.parse(localStorage.getItem('menuItems')) || []; // Get items from localStorage
    console.log();
    // Iterate through the items and create their cards
    for (let item of items){
        itemDisplay1(item, menuItemsContainer)
    }

    // Show a placeholder message if no items are found
    if (items.length === 0) {
        menuItemsContainer.innerHTML = `<p>No menu items available.</p>`;
    }
}
function itemDisplay1(item, menuItemsContainer){
    const itemCard = document.createElement('div');
    itemCard.classList.add('menu-item-card'); // Add styling class

    itemCard.innerHTML = `
        <div class="menu-item-info">
            <h3 id="item-name">${item.name}</h3>
        </div>
        <div class="menu-item-image">
            
            <div class="text-price">
                <h3><strong>Price:</strong> $${item.price}</h3>
                <hr>
                <p id="item-description">${item.description}</p>
            </div>
            
            <img src="${item.image}" height="300px" alt="${item.name}" />
        </div>
        
    `;

    menuItemsContainer.appendChild(itemCard); // Append each card to the container
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
    const allItemsString = localStorage.getItem('menuItems'); // Get the items as a string
    const allItems = allItemsString ? JSON.parse(allItemsString) : []; // Parse or initialize an empty array

    const filteredItems = allItems.filter(item => item.categories.includes(category));

    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = ''; // Clear the container

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
    const items = JSON.parse(localStorage.getItem('menuItems')) || [];
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load cart from local storage
    const item = items.find(i => i.name === itemName);

    if (item) {
        if (cart[item.name]) {
            cart[item.name].quantity += 1;
        } else {
            cart[item.name] = { ...item, quantity: 1 };
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to local storage
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load cart from local storage
    const cartContainer = document.querySelector('.items');
    cartContainer.innerHTML = '';
    
    Object.values(cart).forEach(cartItem => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <img src="${cartItem.image}" alt="${cartItem.name}">
            <h2 class="cart-item-title">${cartItem.name}</h2>
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
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load cart from local storage
    let cartContainer = document.getElementById('cartContainer')
    // Iterate through cart items and create elements
    Object.values(cart).forEach(cartItem => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item'); // Add a styling class

        itemDiv.innerHTML = `
            <div class="cart-item-image">
                <img src="${cartItem.image}" alt="${cartItem.name}">
            </div>
            <div class="cart-item-info">
                <h4 >${cartItem.name}</h4>
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

var USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
function updateCartDisplay2() { 
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load cart from local storage
    let cartContainer = document.getElementById('receipt-table')
    // Iterate through cart items and create elements
    Object.values(cart).forEach(cartItem => {
        const itemDiv = document.createElement('tr');
        itemDiv.classList.add('cart-item'); // Add a styling class

        itemDiv.innerHTML = `
                <td>${cartItem.name}</td>
                <td>${cartItem.quantity}</td>
                <td>${USDollar.format((cartItem.price * cartItem.quantity))}</td>
        `;

        cartContainer.appendChild(itemDiv); // Append each cart item to the container
    });
    let subtotalCon = document.getElementById('subtotal-price');
    subtotalCon.innerHTML = `<h3>${USDollar.format(localStorage.getItem('subtotal'))}</h3>`
    let taxesCon = document.getElementById('taxes-price');
    taxesCon.innerHTML = `${USDollar.format(localStorage.getItem('taxes'))}`
    if (localStorage.getItem('tip') != null){
        let tipsCon = document.getElementById('tips-price');
        tipsCon.innerHTML = `${USDollar.format(localStorage.getItem('tip'))}`
    }
    let totalCon = document.getElementById('total-price');
    totalCon.innerHTML = `<h2>${USDollar.format(localStorage.getItem('currentTotal'))}</h2>`
    // Handle empty cart scenario
    if (Object.keys(cart).length === 0) {
        cartContainer.innerHTML += `<p>Your cart is empty.</p>`;
    }
}

function updateCartQuantity(itemName, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load cart from local storage

    if (cart[itemName]) {
        if (quantity <= 0) {
            delete cart[itemName]; // Remove item if quantity is zero or less
        } else {
            cart[itemName].quantity = parseInt(quantity, 10);
        }
        localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to local storage
        updateCartDisplay();
    }
}

function removeFromCart(itemName) {
    const cart = JSON.parse(localStorage.getItem('cart')) || {}; // Load cart from local storage
    delete cart[itemName]; // Remove item from cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to local storage
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
        console.log(items)
        items.push(newItem);
        localStorage.setItem('menuItems', JSON.stringify(items));

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
    displayMenuItems1();
}

function checkSelection() {
    const Card = document.getElementById('card');
    const Cash = document.getElementById('cash');

    if (Card.checked) {
        // Redirect to card payment page
        window.location.href = '../Payment page/index.html';
    } else if (Cash.checked) {
        // Redirect to cash payment page
        window.location.href = '../receipt page/index.html';
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
    let items = JSON.parse(localStorage.getItem("menuItems")) || [];

    // Check if there's a valid item to remove
    if (selectedIndex >= 0 && selectedIndex < items.length) {
        // Remove the selected item
        items.splice(selectedIndex, 1);

        // Save updated list back to localStorage
        localStorage.setItem("menuItems", JSON.stringify(items));

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
    let items = JSON.parse(localStorage.getItem("menuItems")) || [];

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
        localStorage.setItem("menuItems", JSON.stringify(items));

        displayMenuItems1();
    } else {
        alert("Please select a valid item to edit.");
    }
}

function calculateTotals() {
    // Get cart data from localStorage and parse it as an object
    const cart = JSON.parse(localStorage.getItem("cart")) || {};


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
    localStorage.setItem('subtotal', subtotal);
    localStorage.setItem('taxes', taxes);
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
    localStorage.setItem('tip', tip);

    localStorage.setItem("currentTotal", newTotal);

    alert(`Thank you! Your new total with tip included is $${newTotal.toFixed(2)}`);
}


function setCart(){
    if(!localStorage.getItem('loggedIn')){
        localStorage.setItem('loggedin', false)
        return
    }
    let loggedIn = localStorage.getItem('loggedIn');
    let users = JSON.parse(localStorage.getItem('users'));
    console.log(users[loggedIn])
    if(users[loggedIn].cart != undefined){
        localStorage.setItem('cart', users[loggedIn].cart);
    }
    if (localStorage.getItem('tempCart') != null){
        let tempCart = localStorage.getItem('tempCart');
        localStorage.setItem('cart', tempCart);
    }
}