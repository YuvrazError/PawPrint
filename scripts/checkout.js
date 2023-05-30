function addToCart(prodName, price, button) {
    let productCount = button.previousElementSibling.value;

    localStorage.setItem('product'+Date.now(), JSON.stringify({prodName, price, quantity: productCount}))
    alert(`Item added successfully!`)
}
