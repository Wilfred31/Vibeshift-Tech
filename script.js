// Slideshow
const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    let totalPrice = 0;

    // Add to Cart Functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));

            cartItems.push({ product, price });
            totalPrice += price;

            updateCart();
        });
    });

    // Update Cart Display
    function updateCart() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const totalPriceElement = document.getElementById('total-price');

        // Clear existing items
        cartItemsContainer.innerHTML = '';

        // Add new items
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.product}</p>
                <p>$${item.price.toFixed(2)}</p>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Update total price
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Checkout Button
    document.querySelector('.checkout-button').addEventListener('click', () => {
        alert(`Thank you for your purchase! Total: $${totalPrice.toFixed(2)}`);
        cartItems.length = 0;
        totalPrice = 0;
        updateCart();
    });
});