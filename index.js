// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function prod(){
    alert("Thank You For Shopping");
}
// Get the button
let scrollToTopBtn = document.getElementById('scrollToTopBtn');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// script.js

let cart = [];
let totalPrice = 0;

document.getElementById("addToCart1").addEventListener("click", function() {
    addToCart("Product 1", 20);
});

document.getElementById("addToCart2").addEventListener("click", function() {
    addToCart("Product 2", 35);
});

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");

    // Clear the current list
    cartItemsList.innerHTML = "";

    // Add each product in the cart
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    // Update the total price
    totalPriceElement.textContent = totalPrice;
}
