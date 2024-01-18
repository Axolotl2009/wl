var quantity = 0;

function addToCart() {
    quantity += 1; // Increment by 1
    document.getElementById("quantity").innerHTML = quantity;
}

function removeFromCart() {
    if (quantity > 0) {
        quantity -= 1; // Decrement by 1
        document.getElementById("quantity").innerHTML = quantity;
    }
}
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 20,
        image: "product1.jpg"
    },
    {
        id: 2,
        name: "Product 2",
        price: 30,
        image: "product2.jpg"
    },
    // Add more products as needed
];

// Function to render product cards
function renderProducts() {
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        const buyButton = document.createElement('button');
        buyButton.classList.add('button');
        buyButton.textContent = 'Add to Cart';

        // Add event listener to the button if you want to handle the purchase logic
        // buyButton.addEventListener('click', () => { /* Your logic here */ });

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(buyButton);

        productsContainer.appendChild(card);
    });
}

function searchProduct() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var products = document.getElementsByClassName("product");

    for (var i = 0; i < products.length; i++) {
        var productName = products[i].getElementsByTagName("h2")[0].innerText.toLowerCase();

        if (productName.includes(searchInput)) {
            products[i].style.display = "block";
        } else {
            products[i].style.display = "none";
        }
    }
}

function toggleButton(button) {
    // Toggle the "active" class on the button
    button.classList.toggle('active');

    // Toggle the text content based on the "active" class
    if (button.classList.contains('active')) {
        button.textContent = 'Remove';
    } else {
        button.textContent = 'Add';
    }
}
function filterByCategory() {
    // Add logic to filter products based on the selected category
    var selectedCategory = document.getElementById("categorySelect").value;
    // Implement your filtering logic or call a function to handle it
    // For now, let's log the selected category to the console
    console.log("Selected Category:", selectedCategory);
}
function addToCart(button) {
    // Add logic to handle adding to cart
    console.log("Product added to cart");
    // You can modify the quantity or update the UI as needed
}

function removeFromCart(button) {
    // Add logic to handle removing from cart
    console.log("Product removed from cart");
    // You can modify the quantity or update the UI as needed
}
function toggleButton(button) {
    // Toggle the button text between "Add to Cart" and "Remove from Cart"
    if (button.textContent === "Add to Cart") {
        button.textContent = "Remove from Cart";
        // Add logic for adding to cart here
        console.log("Product added to cart");
    } else {
        button.textContent = "Add to Cart";
        // Add logic for removing from cart here
        console.log("Product removed from cart");
    }
    // You can modify the quantity or update the UI as needed
    
}


