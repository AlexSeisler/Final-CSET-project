
function addCard(itemName, imgSrc, price) {
    // Find the menu container using getElementsByClassName
    const menu = document.getElementsByClassName('menu')[0];  // Get the first element with class 'menu'

    // Create a new card div
    const card = document.createElement('div');
    card.className = 'card';

    // Add inner HTML structure
    card.innerHTML = `
        <h1>${itemName}</h1>
        <img src="${imgSrc}" alt="${itemName}" class="item">
        <div class="actions">
            <button class="add">Add to Cart</button>
            <p class="price">$${price}</p>
        </div>
    `;

    // Append the new card to the menu
    menu.appendChild(card);
}

// Example of adding a card
addCard('Item7', '../images/new_item.jpg', '19.99');