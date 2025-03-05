document.addEventListener("DOMContentLoaded", function () {
    const priceSlider = document.getElementById("priceSlider");
    const maxPrice = document.getElementById("maxPrice");

    priceSlider.addEventListener("input", function () {
        maxPrice.textContent = priceSlider.value;
    });
});
