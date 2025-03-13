document.addEventListener("DOMContentLoaded", function () {
    const priceSlider = document.getElementById("priceSlider");
    const maxPrice = document.getElementById("maxPrice");

    priceSlider.addEventListener("input", function () {
        maxPrice.textContent = priceSlider.value;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0; 
    const cartCountElement = document.getElementById("cart-count"); 
    const addToCartButtons = document.querySelectorAll(".product button"); 

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++; 
            cartCountElement.textContent = cartCount; 
        });
    });
});

