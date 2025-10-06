let cart = []
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

document.querySelectorAll(".addCart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = parseInt(button.getAttribute("data-price"));

        cart.push({name, price});
        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = '${item.name} - R${item.price}';
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}