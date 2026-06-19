window.onload = function() {
    alert("Welcome to Sweet Rise Bakery! Enjoy our freshly baked treats.");
};

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    let products = document.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {

        let text = products[i].textContent.toLowerCase();

        if (text.includes(input)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}